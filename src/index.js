import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/index'
import { Login, Registration } from './modules/account/pages'
import { Main, Product, Support, Cart } from './modules/main/pages'
import { ErrorBoundary, Page404 } from './shared'

import './index.css'
import 'assets/styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <HashRouter>
      <ErrorBoundary>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/products/:productId'} element={<Product />} />
          <Route path={'/support'} element={<Support />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/registration'} element={<Registration />} />
          <Route path={'*'} element={<Page404 />} />
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  </Provider>
)
