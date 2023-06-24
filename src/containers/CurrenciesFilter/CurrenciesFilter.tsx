import { Dispatch, ChangeEvent, SetStateAction } from 'react'
import { ValidCurrenciesList } from '../../types/types'
import './CurrenciesFilter.styles.scss'

const RESOURCE_CURRENCIES_FILTER_TITLE = 'Find currency'
const RESOURCE_CURRENCIES_FILTER_PLACEHOLDER = 'search here...'

interface ICurrenciesFilter {
  setCosts: Dispatch<SetStateAction<[] | ValidCurrenciesList>>
  costs: ValidCurrenciesList
}

export const CurrenciesFilter = ({ setCosts, costs }: ICurrenciesFilter) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase()
    const filteredCosts = costs.filter((item) => {
      const name = item.currentCurrency.toLocaleLowerCase()
      const description = item.currentCurrencyDescription.toLocaleLowerCase()
      if (name.includes(value) || description.includes(value)) return true
    })
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
        placeholder={RESOURCE_CURRENCIES_FILTER_PLACEHOLDER}
        onChange={onChange}
      />
    </div>
  )
}
