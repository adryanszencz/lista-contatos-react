import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#5b3cc4',
  principalEscuro: '#432c94',
  fundo: '#f4f2fb',
  texto: '#2b2b2b',
  borda: '#ddd8f0',
  perigo: '#d63c3c',
  sucesso: '#2f9e44'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.texto};
  }
`

export const Container = styled.main`
  max-width: 720px;
  margin: 40px auto;
  padding: 0 16px;
`

export const Titulo = styled.h1`
  color: ${cores.principal};
  text-align: center;
  margin-bottom: 24px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid ${cores.borda};
  border-radius: 6px;

  &:focus {
    outline: 2px solid ${cores.principal};
    border-color: transparent;
  }
`

export const Botao = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.$cor || cores.principal};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
