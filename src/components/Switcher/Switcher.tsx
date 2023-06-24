import { ComponentPropsWithoutRef } from 'react'
import SwitcherSVG from '../../assets/switcherIcon.svg'
import './Switcher.styles.scss'

export const Switcher = ({ ...props }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className="switcher"
      {...props}
    >
      <img
        src={SwitcherSVG}
        alt="switcher icon"
      />
    </button>
  )
}
