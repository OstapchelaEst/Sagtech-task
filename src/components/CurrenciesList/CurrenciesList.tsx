import { ValidCurrenciesList } from '../../types/types'
import './CurrenciesList.styles.scss'

interface ICurrenciesList {
  costs: ValidCurrenciesList
  basicCurrency: string
}

export const CurrenciesList = ({ costs, basicCurrency }: ICurrenciesList) => (
  <ul className="currency-list">
    {costs.map((item) => (
      <li
        key={item.currentCurrency}
        className="currency-item"
      >
        {`1 ${item.currentCurrency} = ${item.cost} ${basicCurrency}`}
      </li>
    ))}
  </ul>
)
