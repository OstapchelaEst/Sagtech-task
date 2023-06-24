import { Outlet } from 'react-router-dom'
import { Navigation } from '../Navigation'

export const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
)
