import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import { Campo, Botao, cores } from '../../styles'
import * as S from './styles'

function Contato({ id, nome, email, telefone }) {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [dados, setDados] = useState({ nome, email, telefone })

  const alterarCampo = (campo) => (evento) => {
    setDados({ ...dados, [campo]: evento.target.value })
  }

  const salvar = () => {
    dispatch(editar({ id, ...dados }))
    setEstaEditando(false)
  }

  const cancelar = () => {
    setDados({ nome, email, telefone })
    setEstaEditando(false)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <S.Campos>
          <Campo value={dados.nome} onChange={alterarCampo('nome')} aria-label="Nome" />
          <Campo type="email" value={dados.email} onChange={alterarCampo('email')} aria-label="E-mail" />
          <Campo type="tel" value={dados.telefone} onChange={alterarCampo('telefone')} aria-label="Telefone" />
        </S.Campos>
      ) : (
        <S.Info>
          <S.Nome>{nome}</S.Nome>
          <span>{email}</span>
          <span>{telefone}</span>
        </S.Info>
      )}

      <S.Acoes>
        {estaEditando ? (
          <>
            <Botao $cor={cores.sucesso} onClick={salvar}>Salvar</Botao>
            <Botao $cor="#868e96" onClick={cancelar}>Cancelar</Botao>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <Botao $cor={cores.perigo} onClick={() => dispatch(remover(id))}>Remover</Botao>
          </>
        )}
      </S.Acoes>
    </S.Card>
  )
}

export default Contato
