import { converter, home } from '../../utils/NavigationMap'
import { NavigationItem } from '../NavigationItem'
import './Navigation.styles.scss'

const NAVIGATION_RESOURCE_ROUTE_HOME_TITLE = 'Home'
const NAVIGATION_RESOURCE_ROUTE_EXCHANGE_TITLE = 'Converter'

export const Navigation = () => (
  <header className="header">
    <nav className="navigation">
      <ul className="navigation__list">
        <NavigationItem
          route={home()}
          title={NAVIGATION_RESOURCE_ROUTE_HOME_TITLE}
        />
        <NavigationItem
          route={converter()}
          title={NAVIGATION_RESOURCE_ROUTE_EXCHANGE_TITLE}
        />
      </ul>
    </nav>
  </header>
)
