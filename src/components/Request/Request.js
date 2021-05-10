import { useState } from 'react'
import axios from 'axios'
import s from './Request.module.scss'
import { Select } from '../../common/Select/Select'
import { Button } from '../../common/Button/Button'
import { UrlInput } from '../../common/UrlInput/UrlInput'
import { TabsPanel } from '../../common/TabsPanel/TabsPanel'
import { Headers } from '../Headers/Headers'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

export const Request = ({ setResponse }) => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')
  const [headers, setHeaders] = useState([])
  const [body, setBody] = useState('')

  const makeHeaders = (headersArr) => {
    let headersObj = {}
    headersArr.forEach((header) => (headersObj[header.name] = header.value))
    return headersObj
  }

  const [tab, setTab] = useState(0)
  const sendRequest = async () => {
    setResponse(null)
    if (method === 'GET') {
      const res = await axios.get(url, { headers: makeHeaders(headers) })
      setResponse(res)
    } else {
      const res = await axios[method.toLowerCase()](url, body, {
        headers: makeHeaders(headers),
      })
      setResponse(res)
    }
  }

  const renderTab = () => {
    switch (tab) {
      case 0:
        return (
          <div className={s.tabWrap}>
            <Headers
              headers={headers}
              setHeaders={(headers) => setHeaders(headers)}
            />
          </div>
        )
      case 1:
        return (
          <div className={s.tabWrap}>
            <Editor
              mode="code"
              value={body}
              onChange={(data) => setBody(data)}
            />
          </div>
        )
      default:
        return <></>
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
            onChange={(e) => setMethod(e.target.value)}
          />
          <UrlInput
            name="url"
            placeholder="Type a url..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <Button onClick={sendRequest}>Send</Button>
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
