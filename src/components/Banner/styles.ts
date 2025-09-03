import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  padding: 64px;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 60vh;
  padding-right: 60vw;
  border-bottom-left-radius: 50% 10%;
  border-bottom-right-radius: 50% 10%;
  box-shadow: 1px 9px 45px -24px rgba(0, 0, 0, 0.48);

  @media (max-width: 992px) {
    padding: 40px;
    background-position: right;
    border-bottom-left-radius: 100% 10%;
    border-bottom-right-radius: 100% 10%;
  }

  @media (max-width: 576px) {
    align-items: flex-end;
    padding: 24px;
    background-position: center;
  }
`

export const Titulo = styled.h2`
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: ${cores.branco};
  line-height: 1.05;
  margin: 0 0 16px 0;

  /* tamanho fluido: min 28px, cresce com viewport, máx 56px */
  font-size: clamp(28px, 6vw, 56px);

  /* Mobile: quebra mais curta para não estourar */
  @media (max-width: 576px) {
    max-width: 22ch;
  }
`

export const Fundo = styled.div`
  backdrop-filter: blur(2px);
  padding: 24px 24px 20px 24px;
  width: min(100%, 720px);

  .btn-success {
    background-color: transparent;
    border-color: ${cores.verdeEscuro};
    border-width: 2px;
    color: ${cores.verdeEscuro};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    padding: 12px 20px;
    width: 100%; /* desktop: largura do conteúdo */
    transition: all 0.25s ease;
  }

  .btn-success:hover {
    background-color: ${cores.verdeEscuro};
    color: ${cores.branco};
  }

  /* Tablet */
  @media (max-width: 992px) {
    width: min(100%, 640px);
  }

  /* Mobile: conteúdo em coluna e botão 100% */
  @media (max-width: 576px) {
    padding: 16px;
    border-radius: 12px;

    .btn-success {
      width: 100%;
      font-size: 15px;
      padding: 12px 16px;
    }
  }
`
