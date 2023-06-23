import { BasicCurrency } from '../../containers/BasicCurrency'
import { Currencies } from '../../containers/Currencies'

export const Home = () => {
  return (
    <main className="main__container">
      <BasicCurrency />
      <Currencies />
    </main>
  )
}
