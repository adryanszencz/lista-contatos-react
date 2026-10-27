import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 8px;
  padding: 16px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
