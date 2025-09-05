import styled from 'styled-components'
import { cores } from '../../styles'

export const Contatos = styled.div`
  background: linear-gradient(to right, ${cores.verde}, ${cores.verdeEscuro});

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
    }
  }

  p {
    color: ${cores.verdeClaro};
  }

  h5 {
    color: ${cores.verdeEscuro};
  }

  img {
    width: 450px;
  }

  .btn-outline-success {
    border: 2px solid ${cores.verdeEscuro};
    color: ${cores.verdeEscuro};
    font-weight: bold;
    font-size: 18px;
  }

  .btn-outline-success:hover {
    color: ${cores.branco};
    border-color: ${cores.verdeEscuro};
    background-color: ${cores.verdeEscuro};
  }

  a {
    font-size: 1.7em;
    color: ${cores.verdeEscuro};

    &:hover {
      color: ${cores.verde};
    }
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 3em;
    }

    h5 {
      font-size: 2em;
    }

    p {
      font-size: 1.5em;
    }

    a {
      font-size: 1.5em;
    }

    button {
      width: 300px;
      font-size: 20px;
    }
  }

  @media (max-width: 450px) {
    p {
      font-size: 18px;
    }

    h5 {
      font-size: 1.5em;
    }
  }
`
