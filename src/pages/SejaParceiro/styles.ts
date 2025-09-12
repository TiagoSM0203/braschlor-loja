import styled from 'styled-components'
import { cores } from '../../styles'

export const Wrapper = styled.section`
  /* Evita sobreposição com o header fixo e garante altura mínima confortável */
  min-height: calc(100svh - var(--header-h, 100px) - var(--header-gap, 20px));
  padding-top: calc(var(--header-h, 100px) + var(--header-gap, 20px) + 24px);
  padding-bottom: 40px;

  /* Em telas grandes, iguala a altura das colunas ao maior conteúdo (imagem) */
  @media (min-width: 992px) {
    .row.align-items-center {
      align-items: stretch !important;
    }

    /* Permite que os filhos preencham 100% da altura da coluna */
    .col-12.col-lg-6 {
      display: flex;
    }
    .col-12.col-lg-6 > * {
      flex: 1 1 auto;
    }
  }
`

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const TextBlock = styled.div`
  background: ${cores.branco};
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;

  /* Centraliza o conteúdo verticalmente dentro do card */
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  h1 {
    font-size: clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem);
    line-height: 1.25;
    color: ${cores.pretoSuave};
    margin-bottom: 14px;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: ${cores.cinzaMedio};
    margin-bottom: 20px;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  flex-wrap: nowrap;
`

export const ContactIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  color: ${cores.verde};

  .contact {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: inherit;
    text-decoration: none;
    width: 100%;
  }

  .icon {
    display: inline-flex;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background: ${cores.verdeClaro};
    color: ${cores.pretoSuave};
    flex-shrink: 0;
  }

  .label {
    color: ${cores.pretoSuave};
    font-weight: 600;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr;
  }
`

export const ImageSide = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  height: auto;

  picture,
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Em telas grandes, faz a imagem preencher a coluna, mantendo corte agradável */
  @media (min-width: 992px) {
    height: 100%;
    picture,
    img {
      height: 100%;
    }
    img {
      object-fit: cover;
    }
  }
`
