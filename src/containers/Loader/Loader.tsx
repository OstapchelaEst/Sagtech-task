import { LoaderItem } from '../../components/LoaderItem'
import { useAppSelector } from '../../store/hooks'

export const Loader = () => {
  const isLoading = useAppSelector((state) => state.loaderSlice.isLoading)
  return isLoading ? <LoaderItem /> : null
}
