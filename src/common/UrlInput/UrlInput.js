import s from './UrlInput.module.css'

export const UrlInput = ({ value, onChange, name, placeholder, ...rest }) => (
  <input
    className={s.url}
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
)
