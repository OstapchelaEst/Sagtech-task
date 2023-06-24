import { memo } from 'react'
import './LastTimeUpdate.styles.scss'

interface ILastTimeUpdate {
  prefix: string
  data: string
}

export const LastTimeUpdate = memo(({ prefix, data }: ILastTimeUpdate) => (
  <div className="last-time-update">
    <span>{prefix}</span>
    {data}
  </div>
))
