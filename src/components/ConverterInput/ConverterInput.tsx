import { ChangeEvent, ComponentPropsWithoutRef, forwardRef } from 'react'
import { ValidCurrenciesNames } from '../../types/types'
import { Select } from '../Select'
import './ConverterInput.styles.scss'

interface IConverterInput extends ComponentPropsWithoutRef<'input'> {
  selectOnChange: (event: ChangeEvent<HTMLSelectElement>) => void
  allCurrencies: ValidCurrenciesNames
  title: string
  selectValue: string
}

export const ConverterInput = forwardRef<HTMLInputElement, IConverterInput>(
  (
    { selectOnChange, allCurrencies, title, selectValue, ...otherProps },
    ref
  ) => (
    <>
      <div className="converter-input__title">{title}</div>
      <div className="converter-input__wrapper">
        <input
          className="converter-input__input"
          ref={ref}
          {...otherProps}
        />
        <Select
          onChange={selectOnChange}
          options={allCurrencies}
          value={selectValue}
        />
      </div>
    </>
  )
)
