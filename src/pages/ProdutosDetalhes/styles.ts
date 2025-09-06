import styled from 'styled-components'
import { cores } from '../../styles'

export const ProdutosD = styled.div`
  margin-top: 17vh;
  .container {
    max-width: 1400px;
  }

  h1 {
    font-family: 'Anton', sans-serif;
    color: ${cores.verdeClaro};
    font-size: clamp(60px, 6vw, 56px);
    text-transform: uppercase;

    span {
      text-decoration: underline;
      font-family: 'Anton', sans-serif;
      color: ${cores.verde};
    }
  }
`
