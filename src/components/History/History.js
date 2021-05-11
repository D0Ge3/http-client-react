import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as cs from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

import {
  loadHistoryFromStorage,
  selectRequest,
} from '../../redux/actions/historyActions'

import s from './History.module.scss'

export const History = ({ className }) => {
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
    <div className={cs(s.history, { [className]: className })}>
      <h3>History</h3>
      <Scrollbars style={{ height: 'calc(100vh - 65px)' }}>
        {history.map((item) => (
          <div
            key={item.id}
            className={s.historyItem}
            onClick={() => dispatch(selectRequest(item.id))}
          >
            <span className={methodStyle(item.request.method)}>
              {item.request.method}
            </span>
            <span className={s.url} title={item.request.url}>
              {item.request.url.length > 60
                ? `${item.request.url.slice(0, 60)}...`
                : item.request.url}
            </span>
          </div>
        ))}
      </Scrollbars>
    </div>
  )
}
