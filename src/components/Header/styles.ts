// styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.branco};
  padding: 24px;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 10;

  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 150px;
    height: auto;
    flex-shrink: 0;
  }

  nav {
    flex: 1;
    min-width: 0; /* permite o overflow horizontal do menu */
  }

  /* Menu principal */
  .nav {
    gap: 8px;
  }

  .nav-link {
    padding: 8px 12px;
    font-weight: 500;
    white-space: nowrap; /* evita quebra esquisita nas labels */
  }

  a {
    color: ${cores.pretoSuave};
    transition: transform 0.2s ease, color 0.2s ease;
  }

  a:hover {
    color: ${cores.verde};
    transform: scale(1.05);
  }

  a:active {
    color: ${cores.verdeEscuro};
  }
  a:focus {
    color: ${cores.verde};
  }

  /* Carrinho + badge */
  .card-carrinho {
    position: relative;
    font-size: 20px;
    color: ${cores.pretoSuave};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }

  .card-carrinho:hover {
    background: ${cores.verde};
    color: ${cores.branco};
    transform: scale(1.08);
  }

  .carrinho-number {
    position: absolute;
    top: -6px;
    right: -6px;
    background: ${cores.amareloSuave};
    color: ${cores.pretoSuave};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    display: grid;
    place-items: center;
    line-height: 1;
  }

  /* -------- Breakpoints -------- */

  /* ≤ 992px (tablet) */
  @media (max-width: 992px) {
    padding: 16px 20px;
    width: 94%;
    img {
      width: 130px;
    }

    /* menu com scroll horizontal */
    nav .nav {
      overflow-x: auto;
      flex-wrap: nowrap;
      gap: 12px;
      padding-bottom: 4px;
      scrollbar-width: none; /* Firefox */
    }
    nav .nav::-webkit-scrollbar {
      display: none;
    } /* Chrome/Safari */
  }

  /* ≤ 768px (tablet pequeno) */
  @media (max-width: 768px) {
    border-radius: 12px;
    gap: 12px;

    .nav-link {
      font-size: 0.95rem;
      padding: 6px 10px;
    }
  }

  /* ≤ 576px (mobile) */
  @media (max-width: 576px) {
    padding: 12px 14px;
    width: calc(100% - 16px); /* respira das bordas */
    border-radius: 10px;

    img {
      width: 120px;
    }

    /* empacota: logo / menu scroll / ações à direita */
    .nav.align-items-center {
      gap: 8px;
    }

    /* reduz efeitos de escala p/ evitar "pulos" no layout */
    a:hover {
      transform: none;
    }
    .card-carrinho:hover {
      transform: none;
    }

    /* se quiser esconder itens menos críticos no mobile:
      .nav .nav-item:nth-child(3),
      .nav .nav-item:nth-child(5) { display: none; }
    */
  }
`
