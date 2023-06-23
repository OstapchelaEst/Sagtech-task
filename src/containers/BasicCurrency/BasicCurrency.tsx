import { ChangeEvent } from 'react'
import { Error } from '../../components/Error'
import { Select } from '../../components/Select/Select'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { currencySlide } from '../../store/slices/currencySlide'
import './BasicCurrency.styles.scss'

const RESOURCE_BASIC_CURRENCY = 'Basic currency'

export const BasicCurrency = () => {
  const dispatch = useAppDispatch()
  const { basicCurrency, allCurrencies, currenciesErrorMessage } =
    useAppSelector((state) => state.currencySlide)
  const { setBasicCurrency } = currencySlide.actions

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBasicCurrency(event.target.value))
  }
  return (
    <div className="basic-currency">
      <h1 className="basic-currency__title">{RESOURCE_BASIC_CURRENCY}</h1>
      <Select
        options={allCurrencies}
        value={basicCurrency}
        onChange={onChange}
      />
      {currenciesErrorMessage && (
        <Error errorMessage={currenciesErrorMessage} />
      )}
    </div>
  )
}
