import { useState } from 'react'

import { MainLayout } from 'shared'

import s from './Support.module.scss'
import { validateEmail } from './Support.utils'
import { Input } from './components'

const Support = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isNameInvalid, setIsNameInvalid] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()

    const formData = {
      email,
      name,
      comment,
    }

    let isValid = true

    if (!validateEmail(formData.email)) {
      setIsEmailInvalid(true)
      isValid = false
    }
    if (formData.name === '') {
      setIsNameInvalid(true)
      isValid = false
    }

    if (isValid) {
      console.log(formData)
    }
  }

  return (
    <MainLayout>
      <form className={s.root} onSubmit={onSubmit}>
        <Input
          value={email}
          onChange={(event) => {
            setIsEmailInvalid(false)
            setEmail(event.target.value)
          }}
          isInvalid={isEmailInvalid}
          errorMessage={'Емайл некорректный'}
        />
        <Input
          value={name}
          onChange={(event) => {
            setIsNameInvalid(false)
            setName(event.target.value)
          }}
          isInvalid={isNameInvalid}
          errorMessage={'Введите имя'}
        />
        <textarea
          type='text'
          rows={5}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type={'submit'}>Отправить</button>
      </form>
    </MainLayout>
  )
}

export default Support
