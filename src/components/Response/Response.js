import s from './Response.module.scss'
import get from 'lodash/get'
import JSONInput from 'react-json-editor-ajrm'

export const Response = ({ response }) => {
  return (
    <div className={s.wrap}>
      <JSONInput
        theme="light_mitsuketa_tribute"
        placeholder={get(response, 'data')}
        width="100%"
        viewOnly
      />
    </div>
  )
}
