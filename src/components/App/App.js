import { useState } from 'react'
import s from './App.module.scss'
import { History } from '../History/History'
import { Request } from '../Request/Request'
import { Response } from '../Response/Response'

export const App = () => {
  const [response, setResponse] = useState()
  return (
    <div className={s.layout}>
      <History />
      <div className={s.main}>
        <Request setResponse={(res) => setResponse(res)} />
        <Response response={response} />
      </div>
    </div>
  )
}
