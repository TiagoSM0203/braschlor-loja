import styled from 'styled-components'
import { cores } from '../../styles'

export const Contatos = styled.div`
  /* Faz o alvo "#contato" encaixar abaixo do header fixo ao navegar por âncora */
  scroll-margin-top: calc(var(--header-h) + var(--header-gap) + 16px);
  /* Garante que a seção ocupe ao menos a altura visível menos o header */
  min-height: calc(100vh - var(--header-h) - var(--header-gap));
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

  .botao-close {
    border: none;
  }

  .botao-close:hover {
    text-decoration: 2px underline;
    background-color: transparent;
    color: ${cores.verdeEscuro};
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

  /* Modal styles */
  .modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 1050;
  }

  .modalContent {
    background: ${cores.branco};
    width: 100%;
    max-width: 640px;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  /* Prevent resizing the textarea */
  textarea.form-control {
    resize: none;
  }
`
