import { useState } from 'react'
import s from './QueryCreator.module.css'

export const QueryCreator = () => {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('')
  return (
    <div>
      <select name="method" value={method}>
        <option value="GET" selected>
          GET
        </option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
      </select>
      <input
        type="text"
        placeholder="url..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  )
}
