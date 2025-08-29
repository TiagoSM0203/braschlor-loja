import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.branco};
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  margin-bottom: 80px;

  img {
    width: 150px;
  }

  a {
    color: ${cores.pretoSuave};
    transition: transform 0.2s ease, 0.2s ease;
  }

  a:hover {
    color: ${cores.verde};
    transform: scale(1.1);
  }

  a:active {
    color: ${cores.verdeEscuro};
  }

  a:focus {
    color: ${cores.verde};
  }

  .card-carrinho {
    font-size: 20px;
    color: #1c1c1c;
  }

  .card-carrinho:hover {
    color: ${cores.verde};
  }

  .carrinho-number {
    position: relative;
    bottom: 12px;
  }
`
