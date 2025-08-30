import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  verde: '#00A859',
  verdeEscuro: '#006837',
  verdeClaro: '#A7E3C0',
  branco: '#FFFFFF',
  azul: '#0072CE',
  azulClaro: '#E6F4FB',
  cinzaClaro: '#F5F5F5',
  cinzaMedio: '#6E6E6E',
  pretoSuave: '#1C1C1C',
  amareloSuave: '#FFD700',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.pretoSuave};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
