import styled from 'styled-components'
import { cores } from '../../styles'

export const Products = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  width: 100%;
  h1 {
    color: ${cores.verde};
    font-family: 'Anton', sans-serif;
    text-transform: uppercase;
    font-size: clamp(60px, 6vw, 56px);
  }

  .title {
    color: ${cores.verdeClaro};
  }

  /* Permite que os controles "saíam" do box do carousel */
  .carousel {
    overflow: visible;
  }

  /* Cor e posição dos botões de navegação */
  .carousel-control-prev,
  .carousel-control-next {
    width: auto; /* não ocupar 50% */
    opacity: 1; /* visíveis */
    color: ${cores.verdeEscuro}; /* cor dos SVGs (via currentColor) */
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  /* Ícone SVG (span que passamos via prevIcon/nextIcon) */
  .rb-chevron {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: #ffffffcc; /* bolha clara para destacar do fundo */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }

  .carousel-control-prev {
    left: -72px;
  }
  .carousel-control-next {
    right: -72px;
  }

  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    transform: scale(1.05);
  }
`

export const ImagensP = styled.img`
  width: 250px;
  border-radius: 16px;
`

export const Produto = styled.div`
  background-color: ${cores.branco};
  border-radius: 16px;
  display: flex; /* garante layout consistente */
  flex-direction: column; /* título/descrição/preço em coluna */
  /* ...seus estilos... */

  .product-title {
    /* Fonte fluida e estável */
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    line-height: 1.25;
    margin-bottom: 0.5rem;

    /* Truncar em 2 linhas com reticências */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* número de linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Reserva altura fixa p/ evitar “pulo” entre slides */
    min-height: calc(1.25em * 2); /* line-height * nº de linhas */

    /* Para quebra inteligente em pt-BR (opcional) */
    hyphens: auto;
    word-break: normal;
    overflow-wrap: anywhere;
  }

  @media (min-width: 992px) {
    .product-title {
      /* No desktop, pode liberar 3 linhas se quiser */
      -webkit-line-clamp: 2; /* troque para 3 se preferir */
      min-height: calc(1.25em * 2);
    }
  }

  strong {
    color: ${cores.verdeEscuro};
  }

  .action-btn {
    font-size: 0.8rem;
    padding: 6px 12px;
    transition: all 0.2s ease;
  }

  /* Aumenta somente no desktop (≥992px) */
  @media (min-width: 992px) {
    .action-btn {
      font-size: 1rem; /* texto maior */
      padding: 10px 20px; /* mais espaçamento interno */
    }
  }
`
