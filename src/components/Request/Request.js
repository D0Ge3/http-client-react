import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import * as cs from 'classnames'
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
  const [tab, setTab] = useState(0)
  const changeMethod = (e) => {
    if (e.target.value === 'GET' && tab === 1) {
      setTab(0)
    }
    dispatch(setMethod(e.target.value))
  }

  const [error, setError] = useState(false)

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
  const onSubmit = () => {
    // eslint-disable-next-line
    const regexp = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
    if (!regexp.test(url)) {
      setError(true)
    } else {
      dispatch(sendRequest())
    }
  }

  const onChangeUrl = (e) => {
    error && setError(false)
    dispatch(setUrl(e.target.value))
  }

  return (
    <>
      <div className={s.mainParams}>
        <div className={cs(s.urlWrap, { [s.urlWrap_error]: error })}>
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
            onChange={onChangeUrl}
          />
        </div>
        <Button disabled={isLoading} onClick={onSubmit}>
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
