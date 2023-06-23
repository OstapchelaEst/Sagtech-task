import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Exchanger } from '../../pages/Exchanger'
import { Home } from '../../pages/Home'
import { getCurrenciesNamesThunk } from '../../store/actions/getCurrenciesThunk'
import { setupStore } from '../../store/store'
import { exchange, home } from '../../utils/NavigationMap'
import '../GlobalStyles/GlobalStyles.scss'

const store = setupStore()
store.dispatch(getCurrenciesNamesThunk())

export const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={home()}
            element={<Layout />}
          >
            <Route
              index
              path={home()}
              element={<Home />}
            />
            <Route
              path={exchange()}
              element={<Exchanger />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
