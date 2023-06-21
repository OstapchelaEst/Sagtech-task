import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Exchanger } from '../../pages/Exchanger'
import { Home } from '../../pages/Home'
import { exchange, home } from '../../utils/NavigationMap'
import '../GlobalStyles/GlobalStyles.scss'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={home()}
          element={<Home />}
        />
        <Route
          path={exchange()}
          element={<Exchanger />}
        />
      </Routes>
    </BrowserRouter>
  )
}
