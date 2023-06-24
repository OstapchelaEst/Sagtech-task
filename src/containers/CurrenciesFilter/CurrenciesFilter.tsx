import { Dispatch, ChangeEvent, SetStateAction } from 'react'
import { ValidCurrenciesList } from '../../types/types'
import { getFilteredCurrencies } from '../../utils/getFilteredCurrencies'
import './CurrenciesFilter.styles.scss'

const RESOURCE_CURRENCIES_FILTER_TITLE = 'Find currency'
const RESOURCE_CURRENCIES_FILTER_PLACEHOLDER = 'search here...'

interface ICurrenciesFilter {
  setCosts: Dispatch<SetStateAction<[] | ValidCurrenciesList>>
  costs: ValidCurrenciesList
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export const CurrenciesFilter = ({
  setCosts,
  costs,
  value,
  setValue,
}: ICurrenciesFilter) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    const filteredCosts = getFilteredCurrencies(
      costs,
      value.toLocaleLowerCase()
    )
    setCosts(filteredCosts)
  }

  return (
    <div className="currencies-filter">
      <div className="currencies-filter__title">
        {RESOURCE_CURRENCIES_FILTER_TITLE}
      </div>
      <input
        className="currencies-filter__input"
        type="text"
        value={value}
        placeholder={RESOURCE_CURRENCIES_FILTER_PLACEHOLDER}
        onChange={onChange}
      />
    </div>
  )
}
