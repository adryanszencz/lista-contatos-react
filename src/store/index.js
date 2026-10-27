import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export default store
