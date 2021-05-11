import { Scrollbars } from 'react-custom-scrollbars'
import { History } from '../History/History'
import { Request } from '../Request/Request'
import { Response } from '../Response/Response'

import s from './App.module.scss'

export const App = () => {
  return (
    <div className={s.layout}>
      <History className={s.history} />
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
