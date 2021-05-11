import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as cs from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

import { loadHistoryFromStorage } from '../../redux/actions/historyActions'

import s from './History.module.scss'

export const History = () => {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.history)
  useEffect(() => {
    dispatch(loadHistoryFromStorage())
    // eslint-disable-next-line
  }, [])
  const methodStyle = (method) =>
    cs(s.method, {
      [s.method_green]:
        method === 'GET' || method === 'PUT' || method === 'PATCH',
      [s.method_red]: method === 'DELETE',
      [s.method_yellow]: method === 'POST',
    })
  return (
    <div className={s.history}>
      <h3>History</h3>
      <Scrollbars style={{ height: 'calc(100vh - 65px)' }}>
        {history.map((req) => (
          <div key={req.id} className={s.historyItem}>
            <span className={methodStyle(req.method)}>{req.method}</span>
            <span className={s.url} title={req.url}>
              {req.url.length > 60 ? `${req.url.slice(0, 60)}...` : req.url}
            </span>
          </div>
        ))}
      </Scrollbars>
    </div>
  )
}
