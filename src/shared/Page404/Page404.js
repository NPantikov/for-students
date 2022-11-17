import React from 'react'
import s from './Page404.module.scss'

const MyComponent = () => {
  return (
    <div className={s.root}>
      <div className={s.title}>Page 404</div>
      <div className={s.subtitle}>Этой страницы не существует</div>
    </div>
  )
}

export default MyComponent
