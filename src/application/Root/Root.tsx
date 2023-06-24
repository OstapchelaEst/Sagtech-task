import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Loader } from '../../containers/Loader'
import { Converter } from '../../pages/Converter'

import { Home } from '../../pages/Home'
import { getCurrenciesNamesThunk } from '../../store/actions/getCurrenciesThunk'
import { setupStore } from '../../store/store'
import { converter, home } from '../../utils/NavigationMap'
import '../GlobalStyles/GlobalStyles.scss'

const store = setupStore()
store.dispatch(getCurrenciesNamesThunk())

export const Root = () => {
  return (
    <Provider store={store}>
      <Loader />
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
              path={converter()}
              element={<Converter />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
