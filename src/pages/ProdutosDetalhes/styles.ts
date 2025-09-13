import styled from 'styled-components'
import { cores } from '../../styles'

export const ProdutosD = styled.div`
  margin-top: 13vh;
  .container {
    max-width: 1400px;
  }

  /* Campo de busca com ícone embutido */
  .search-input {
    position: relative;
  }
  .search-input .form-control {
    padding-left: 2.25rem; /* espaço para a lupa */
  }
  .search-input .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${cores.cinzaMedio};
    pointer-events: none; /* evita capturar cliques, focando o input */
  }

  /* Quando há texto, esconda o ícone e recupere o padding */
  .search-input.has-value .search-icon {
    display: none;
  }
  .search-input.has-value .form-control {
    padding-left: 0.75rem;
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
    object-fit: contain; /* evita esticar a imagem em iOS/Safari */
    object-position: center;
    border-radius: 16px;
  }
`
