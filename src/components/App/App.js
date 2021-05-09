import s from './App.module.css'
import { History } from '../History/History'
import { Request } from '../Request/Request'

export const App = () => {
  return (
    <div className={s.layout}>
      <History />
      <Request />
    </div>
  )
}
