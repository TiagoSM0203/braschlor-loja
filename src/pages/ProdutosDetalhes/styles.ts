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

  /* Evita que imagens estourem dos cards (ratio 1x1) */
  .card .ratio {
    overflow: hidden;
  }
  .card .ratio > picture,
  .card .ratio > img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .card .ratio img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
