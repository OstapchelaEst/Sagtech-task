import { NavLink } from 'react-router-dom'
import './NavigationItem.styles.scss'

interface INavigationItem {
  route: string
  title: string
}

export const NavigationItem = ({ route, title }: INavigationItem) => (
  <li className="navigation-item">
    <NavLink to={route}>{title}</NavLink>
  </li>
)
