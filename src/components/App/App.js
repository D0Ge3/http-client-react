import s from './App.module.css'
import { History } from '../History/History'
import { QueryCreator } from '../QueryCreator/QueryCreator'

export const App = () => {
  return (
    <div className={s.layout}>
      <History />
      <QueryCreator />
    </div>
  )
}
