import { useEffect, useState } from 'react'
import { CurrenciesList } from '../../components/CurrenciesList'
import { Error } from '../../components/Error'
import { LastTimeUpdate } from '../../components/LastTimeUpdate'
import { useAppSelector } from '../../store/hooks'
import { getCurrenciesCosts } from '../../services/fetch/getCurrenciesCosts'
import { getReadableDate } from '../../utils/getReadableDate'
import { getValidCurrencyList } from '../../utils/getValidCurrencyList'
import { ValidCurrenciesList } from '../../types/types'
import './Currencies.styles.scss'

const RESOURCE_CURRENCIES_ERROR_MESSAGE =
  'Sorry, exchange rates are not available at the moment'

const RESOURCE_CURRENCIES_LAST_TIME_UPDATE_PREFIX = 'Last update: '

export const Currencies = () => {
  const basicCurrency = useAppSelector(
    (state) => state.currencySlide.basicCurrency
  )
  const [costs, setCosts] = useState<ValidCurrenciesList | []>([])
  const [date, setDate] = useState<string | number>(Date.now())
  const [errorMessage, setErrorMessage] = useState<string>('')

  const getCurrencies = async (currency: string) => {
    try {
      const response = await getCurrenciesCosts(currency)
      const validCosts = getValidCurrencyList(response.rates)
      setDate(response.updated_date)
      setCosts(validCosts)
    } catch (error) {
      setErrorMessage(RESOURCE_CURRENCIES_ERROR_MESSAGE)
    }
  }

  useEffect(() => {
    getCurrencies(basicCurrency)
  }, [basicCurrency])
  return (
    <>
      <LastTimeUpdate
        data={getReadableDate(date)}
        prefix={RESOURCE_CURRENCIES_LAST_TIME_UPDATE_PREFIX}
      />
      <CurrenciesList
        costs={costs}
        basicCurrency={basicCurrency}
      />
      {errorMessage && <Error errorMessage={errorMessage} />}
    </>
  )
}