import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button'
import { ConverterInput } from '../../components/ConverterInput'
import { Error } from '../../components/Error'
import { Switcher } from '../../components/Switcher'
import { getCostFromTo } from '../../services/fetch/getCostFromTo'
import { useAppSelector } from '../../store/hooks'
import './ConverterInputs.styles.scss'

const RESOURCE_CONVERTER_TITLE_FROM = 'From currency'
const RESOURCE_CONVERTER_TITLE_TO = 'To currency'
const RESOURCE_CONVERTER_SUBMIT_BUTTON = 'submit'
const RESOURCE_CONVERTER_RESET_BUTTON = 'reset'

export const ConverterInputs = () => {
  const { allCurrencies, basicCurrency } = useAppSelector(
    (state) => state.currencySlide
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const [fromCurrency, setFromCurrency] = useState<string>(basicCurrency)
  const [toCurrency, setToCurrency] = useState<string>('USD')

  const [fromCurrencyAmount, setFromCurrencyAmount] = useState<string>('')
  const [toCurrencyAmount, setToCurrencyAmount] = useState<string>('0')

  const [errorMessage, setErrorMessage] = useState<string>('')

  const onChangeFromCurrentAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setFromCurrencyAmount(
      Number(event.target.value) >= 0 ? event.target.value : '0'
    )
  }

  const onBlurFromCurrentAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') setFromCurrencyAmount('0')
  }

  const onFocusFromCurrentAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '0') setFromCurrencyAmount('')
  }

  const onChangeFromCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value)
  }

  const onChangeToCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value)
  }

  const reversCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setToCurrencyAmount(fromCurrencyAmount)
    setFromCurrencyAmount(toCurrencyAmount)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await getCostFromTo(
        fromCurrency,
        toCurrency,
        fromCurrencyAmount
      )
      const result = Number(response.rates[toCurrency].rate_for_amount)
      setToCurrencyAmount(String(result))
      setErrorMessage('')
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  const onReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFromCurrencyAmount('0')
    setToCurrencyAmount('0')
    setErrorMessage('')
  }

  useEffect(() => {
    (inputRef.current as HTMLInputElement).focus()
  }, [])
  return (
    <form
      onSubmit={onSubmit}
      onReset={onReset}
    >
      <ConverterInput
        name="fromCurrency"
        allCurrencies={allCurrencies}
        onBlur={onBlurFromCurrentAmount}
        onChange={onChangeFromCurrentAmount}
        onFocus={onFocusFromCurrentAmount}
        ref={inputRef}
        selectOnChange={onChangeFromCurrency}
        selectValue={fromCurrency}
        title={RESOURCE_CONVERTER_TITLE_FROM}
        type="number"
        value={fromCurrencyAmount}
      />
      <div className="converter-inputs__switcher-wrapper">
        <Switcher onClick={reversCurrencies} />
      </div>
      <ConverterInput
        name="toCurrency"
        allCurrencies={allCurrencies}
        disabled
        title={RESOURCE_CONVERTER_TITLE_TO}
        type="number"
        selectOnChange={onChangeToCurrency}
        selectValue={toCurrency}
        value={toCurrencyAmount}
      />
      <div className="converter-inputs__error-wrapper">
        {errorMessage && <Error errorMessage={errorMessage} />}
      </div>
      <Button type="submit">{RESOURCE_CONVERTER_SUBMIT_BUTTON}</Button>
      <Button type="reset">{RESOURCE_CONVERTER_RESET_BUTTON}</Button>
    </form>
  )
}
