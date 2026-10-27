import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  border-left: 4px solid ${cores.principal};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`

export const Nome = styled.strong`
  font-size: 16px;
  color: ${cores.principalEscuro};
`

export const Campos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Acoes = styled.div`
  display: flex;
  gap: 8px;
`
