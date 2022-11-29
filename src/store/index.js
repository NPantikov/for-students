import { configureStore } from '@reduxjs/toolkit'
import mainReducer from 'modules/main/store/slice'

export const store = configureStore({
  reducer: { mainReducer },
})

window.store = store
