import { exchange, home } from '../../utils/NavigationMap'
import { NavigationItem } from '../NavigationItem'
import './Navigation.styles.scss'

const NAVIGATION_RESOURCE_ROUTE_HOME_TITLE = 'Home'
const NAVIGATION_RESOURCE_ROUTE_EXCHANGE_TITLE = 'Exchange'

export const Navigation = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <NavigationItem
            route={home()}
            title={NAVIGATION_RESOURCE_ROUTE_HOME_TITLE}
          />
          <NavigationItem
            route={exchange()}
            title={NAVIGATION_RESOURCE_ROUTE_EXCHANGE_TITLE}
          />
        </ul>
      </nav>
    </header>
  )
}
