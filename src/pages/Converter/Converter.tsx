import { ConverterInputs } from '../../containers/ConverterInputs'
import './Converter.styles.scss'

export const Converter = () => {
  return (
    <main className="main__container">
      <div className="converter">
        <div className="converter__body">
          <ConverterInputs />
        </div>
      </div>
    </main>
  )
}
