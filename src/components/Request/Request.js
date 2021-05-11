import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

import { Select } from '../../common/Select/Select'
import { Button } from '../../common/Button/Button'
import { UrlInput } from '../../common/UrlInput/UrlInput'
import { TabsPanel } from '../../common/TabsPanel/TabsPanel'
import { Headers } from '../Headers/Headers'

import {
  setUrl,
  setMethod,
  setReqHeaders,
  setBody,
} from '../../redux/actions/currentActions'
import { sendRequest } from '../../redux/actions/commonActions'

import s from './Request.module.scss'

export const Request = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.current.isLoading)
  const { url, method, headers, body } = useSelector(
    (state) => state.current.request
  )

  const changeMethod = (e) => {
    if (e.target.value === 'GET' && tab === 1) {
      setTab(0)
    }
    dispatch(setMethod(e.target.value))
  }

  const [tab, setTab] = useState(0)

  const renderTab = () => {
    switch (tab) {
      case 0:
        return (
          <div className={s.tabWrap}>
            <Headers
              headers={headers}
              setHeaders={(headers) => dispatch(setReqHeaders(headers))}
            />
          </div>
        )
      case 1:
        return (
          <div className={s.tabWrap}>
            <Editor
              mode="code"
              value={body}
              onChange={(data) => dispatch(setBody(data))}
            />
          </div>
        )
      default:
        break
    }
  }
  return (
    <>
      <div className={s.mainParams}>
        <div className={s.urlWrap}>
          <Select
            name="method"
            options={['GET', 'POST', 'DELETE', 'PUT', 'PATCH']}
            value={method}
            onChange={changeMethod}
          />
          <UrlInput
            name="url"
            placeholder="Type a url..."
            value={url}
            onChange={(e) => dispatch(setUrl(e.target.value))}
          />
        </div>
        <Button disabled={isLoading} onClick={() => dispatch(sendRequest())}>
          Send
        </Button>
      </div>
      <div className={s.tabs}>
        <TabsPanel
          tabs={method === 'GET' ? ['Headers'] : ['Headers', 'Body']}
          activeTab={tab}
          changeTab={(ind) => setTab(ind)}
        />
        {renderTab(tab)}
      </div>
    </>
  )
}
