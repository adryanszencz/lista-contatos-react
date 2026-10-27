import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'
import { Campo, Botao } from '../../styles'
import * as S from './styles'

function Formulario() {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrar = (evento) => {
    evento.preventDefault()
    dispatch(adicionar({ nome, email, telefone }))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <S.Form onSubmit={cadastrar}>
      <Campo
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <Campo
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Campo
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <Botao type="submit">Adicionar</Botao>
    </S.Form>
  )
}

export default Formulario
