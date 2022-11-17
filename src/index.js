import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { Login, Registration } from './modules/account/pages'
import { Drinks, Home } from './modules/main/pages'
import { Page404 } from './shared'

import './index.css'
import 'assets/styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/drinks'} element={<Drinks />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'*'} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
