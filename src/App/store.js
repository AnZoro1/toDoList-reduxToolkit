import { configureStore } from '@reduxjs/toolkit'
import textReducer from '../features/textReducer'

const store = configureStore({
  reducer: textReducer,
})

export default store
