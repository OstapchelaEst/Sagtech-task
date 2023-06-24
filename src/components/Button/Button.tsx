import { ComponentPropsWithoutRef, ReactNode } from 'react'
import './Button.styles.scss'

interface IButton extends ComponentPropsWithoutRef<'button'> {
  children: string | ReactNode
}

export const Button = ({ children, ...otherProps }: IButton) => {
  return (
    <button
      {...otherProps}
      className="button"
    >
      {children}
    </button>
  )
}
