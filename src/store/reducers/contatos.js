import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itens: [
    { id: 1, nome: 'Ana Souza', email: 'ana.souza@email.com', telefone: '(11) 91234-5678' },
    { id: 2, nome: 'Bruno Lima', email: 'bruno.lima@email.com', telefone: '(21) 99876-5432' }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      const ultimoId = state.itens.length > 0 ? state.itens[state.itens.length - 1].id : 0
      state.itens.push({ ...action.payload, id: ultimoId + 1 })
    },
    remover: (state, action) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action) => {
      const indice = state.itens.findIndex((contato) => contato.id === action.payload.id)
      if (indice >= 0) {
        state.itens[indice] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
