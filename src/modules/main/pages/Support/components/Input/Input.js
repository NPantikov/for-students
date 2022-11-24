import classNames from 'classnames'
import s from './Input.module.scss'

const Input = (props) => {
  const { value, onChange, isInvalid, errorMessage } = props
  return (
    <div className={s.root}>
      {isInvalid ? <div className={s.errorMsg}>{errorMessage}</div> : null}
      <input
        type='text'
        value={value}
        onChange={onChange}
        className={classNames(s.inputDefault, { [s.inputError]: isInvalid })}
      />
    </div>
  )
}

export default Input
