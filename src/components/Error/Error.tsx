import './Error.styles.scss'

export const Error = ({ errorMessage }: { errorMessage: string }) => (
  <div className="error-message">{errorMessage}</div>
)
