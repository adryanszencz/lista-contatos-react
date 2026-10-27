import { Provider } from 'react-redux'
import store from './store'
import Formulario from './components/Formulario'
import ListaContatos from './components/ListaContatos'
import { EstiloGlobal, Container, Titulo } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Titulo>Lista de Contatos</Titulo>
        <Formulario />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
