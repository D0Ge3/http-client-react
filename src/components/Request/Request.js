import { useState } from 'react'
import axios from 'axios'
import s from './Request.module.scss'
import { Select } from '../../common/Select/Select'
import { Button } from '../../common/Button/Button'
import { UrlInput } from '../../common/UrlInput/UrlInput'
import { Response } from '../Response/Response'
import { TabsPanel } from '../../common/TabsPanel/TabsPanel'

export const Request = ({ setResponse }) => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')
  const [headers, setHeaders] = useState()

  const [tab, setTab] = useState(0)
  const sendRequest = async () => {
    setResponse(null)
    // axios.header
    console.log(axios.defaults.headers)

    const res = await axios[method.toLowerCase()](url)
    console.log(res)
    setResponse(res)
  }

  const renderTab = () => {
    switch (tab) {
      case 0:
        return <p>0</p>
      case 1:
        return <p>1</p>
      default:
        return <p>def</p>
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
          tabs={['Headers', 'Body']}
          activeTab={tab}
          changeTab={(ind) => setTab(ind)}
        />
        {renderTab(tab)}
      </div>

      {/* <Response response={response} /> */}
    </>
  )
}
