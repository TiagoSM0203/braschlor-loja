import styled from 'styled-components'

export const CarrinhoP = styled.div`
  margin-top: 15vh;

  /* Conteúdo do item do carrinho: evita overflow no mobile */
  .card .cart-item {
    flex-wrap: wrap;
  }
  .card .cart-item > * {
    min-width: 0; /* permite encolher e quebrar linha */
  }
  .card .cart-item img {
    flex: 0 0 auto;
  }
  .card .cart-title {
    min-width: 0;
  }
  .card .cart-title .fw-semibold {
    word-break: break-word;
  }
  .card .cart-qty {
    flex: 0 0 auto;
  }
  .card .cart-total {
    flex: 0 0 auto;
  }

  @media (max-width: 576px) {
    .card .cart-total {
      width: 100% !important;
      text-align: right;
      margin-top: 0.5rem;
    }
  }
`
