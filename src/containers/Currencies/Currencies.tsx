import { useCallback, useEffect, useState } from 'react'
import { CurrenciesList } from '../../components/CurrenciesList'
import { Error } from '../../components/Error'
import { LastTimeUpdate } from '../../components/LastTimeUpdate'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getCurrenciesCosts } from '../../services/fetch/getCurrenciesCosts'
import { getReadableDate } from '../../utils/getReadableDate'
import { getValidCurrencyList } from '../../utils/getValidCurrencyList'
import { ValidCurrenciesList } from '../../types/types'
import { CurrenciesFilter } from '../CurrenciesFilter'
import { loaderSlice } from '../../store/slices/loaderSlice'
import { getFilteredCurrencies } from '../../utils/getFilteredCurrencies'
import './Currencies.styles.scss'

const RESOURCE_CURRENCIES_ERROR_MESSAGE =
  'Sorry, exchange rates are not available at the moment'

const RESOURCE_CURRENCIES_LAST_TIME_UPDATE_PREFIX = 'Last update: '

export const Currencies = () => {
  const dispatch = useAppDispatch()
  const basicCurrency = useAppSelector(
    (state) => state.currencySlice.basicCurrency
  )

  const { startLoading, endLoading } = loaderSlice.actions
  const [costs, setCosts] = useState<ValidCurrenciesList | []>([])

  const [filterValue, setFilterValue] = useState('')
  const [filteredCosts, setFilteredCosts] = useState<ValidCurrenciesList | []>(
    []
  )
  const [date, setDate] = useState<string | number>(Date.now())
  const [errorMessage, setErrorMessage] = useState<string>('')

  const getCurrencies = useCallback(
    async (currency: string) => {
      try {
        dispatch(startLoading())
        const response = await getCurrenciesCosts(currency)
        const validCosts = getValidCurrencyList(response.rates)
        setDate(response.updated_date)
        setCosts(validCosts)
        setFilteredCosts(getFilteredCurrencies(validCosts, filterValue))
        dispatch(endLoading())
      } catch (error) {
        dispatch(endLoading())
        setErrorMessage(RESOURCE_CURRENCIES_ERROR_MESSAGE)
      }
    },
    [
      dispatch,
      endLoading,
      filterValue,
      setFilteredCosts,
      setCosts,
      setDate,
      startLoading,
    ]
  )

  useEffect(() => {
    getCurrencies(basicCurrency)
  }, [basicCurrency, getCurrencies])
  return (
    <>
      <CurrenciesFilter
        setCosts={setFilteredCosts}
        costs={costs}
        value={filterValue}
        setValue={setFilterValue}
      />
      <LastTimeUpdate
        data={getReadableDate(date)}
        prefix={RESOURCE_CURRENCIES_LAST_TIME_UPDATE_PREFIX}
      />
      <CurrenciesList
        costs={filteredCosts}
        basicCurrency={basicCurrency}
      />
      {errorMessage && <Error errorMessage={errorMessage} />}
    </>
  )
}
