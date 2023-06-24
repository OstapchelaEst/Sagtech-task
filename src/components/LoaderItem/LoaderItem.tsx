import loaderGif from '../../assets/loader-gif.gif'
import './LoaderItem.styles.scss'

const RESOURCE_LOADER_ITEM_TEXT = 'Loading....'

export const LoaderItem = () => {
  return (
    <div className="loader-item">
      <img
        src={loaderGif}
        alt="loader gif"
      />
      <p>{RESOURCE_LOADER_ITEM_TEXT}</p>
    </div>
  )
}
