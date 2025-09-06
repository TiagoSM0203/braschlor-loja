import styled from 'styled-components'
import { cores } from '../../styles'

export const ProdutoWrapper = styled.div`
  margin-top: 15vh;

  .voltar {
    color: ${cores.verde};
  }

  .voltar:hover {
    color: ${cores.verdeEscuro};
  }

  /* Contenção da imagem principal dentro do ratio */
  .ratio {
    overflow: hidden;
  }
  .ratio > picture,
  .ratio > img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .ratio img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
