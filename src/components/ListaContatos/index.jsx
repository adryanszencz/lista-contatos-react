import { useSelector } from 'react-redux'
import Contato from '../Contato'
import * as S from './styles'

function ListaContatos() {
  const contatos = useSelector((state) => state.contatos.itens)

  if (contatos.length === 0) {
    return <S.Vazio>Nenhum contato cadastrado.</S.Vazio>
  }

  return (
    <>
      <S.Contador>{contatos.length} contato(s)</S.Contador>
      <S.Lista>
        {contatos.map((contato) => (
          <Contato key={contato.id} {...contato} />
        ))}
      </S.Lista>
    </>
  )
}

export default ListaContatos
