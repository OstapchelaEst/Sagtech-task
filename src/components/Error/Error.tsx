import './Error.styles.scss'

export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return <div className="error-message">{errorMessage}</div>
}
