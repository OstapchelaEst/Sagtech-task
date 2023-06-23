import { ChangeEvent } from 'react'
import { ValidCurrenciesNames } from '../../types/types'
import './Select.styles.scss'

interface ISelect {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: ValidCurrenciesNames
  value: string
}

export const Select = ({ onChange, options, value }: ISelect) => (
  <div className="custom-select">
    <select
      className="custom-select__select"
      value={value}
      onChange={onChange}
    >
      {options.map((item) => (
        <option
          className="custom-select__option"
          key={item.value}
          value={item.value}
        >
          {item.title}
        </option>
      ))}
    </select>
  </div>
)
