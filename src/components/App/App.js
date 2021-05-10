import { useState } from 'react'
import s from './App.module.scss'
import { History } from '../History/History'
import { Request } from '../Request/Request'
import { Response } from '../Response/Response'
import { Scrollbars } from 'react-custom-scrollbars'

export const App = () => {
  const [response, setResponse] = useState()
  return (
    <div className={s.layout}>
      <History />
      <div className={s.mainWrap}>
        <Scrollbars>
          <div className={s.main}>
            <Request setResponse={(res) => setResponse(res)} />
            <Response response={response} />
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}
