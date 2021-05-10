import { useState } from 'react'
import s from './App.module.scss'
import { History } from '../History/History'
import { Request } from '../Request/Request'
import { Response } from '../Response/Response'
import { Scrollbars } from 'react-custom-scrollbars'

export const App = () => {
  return (
    <div className={s.layout}>
      <History />
      <div className={s.mainWrap}>
        <Scrollbars>
          <div className={s.main}>
            <Request />
            <Response />
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}
