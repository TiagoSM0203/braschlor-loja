// styles.ts
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

  /* mantém o Carousel saudável */
  .carousel {
    overflow: visible;
  }

  /* setas (se usar no desktop) — opcional */
  .carousel-control-prev,
  .carousel-control-next {
    width: auto;
    opacity: 1;
    color: ${cores.verdeEscuro};
    transition: transform 0.2s ease;
  }
  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    transform: scale(1.05);
  }
`

/* imagem dentro de um “ratio 1:1” como nos cards da página Produtos */
export const ImagensP = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`

export const Produto = styled.div`
  /* “box” do card */
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  padding: 1.25rem; /* o padding real vai vir do JSX p-5, mas deixo um mínimo */
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  /* igualamos alturas sem “brigar” com o Carousel */
  min-height: 100%;

  /* “efeito hover” como card */
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.1);
  }

  /* wrapper para a imagem: simula a .ratio ratio-1x1 */
  .img-wrap {
    width: 100%;
    aspect-ratio: 1 / 1; /* 1:1 */
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;
    overflow: hidden; /* protege o raio */

    /* Garanta que picture/IMG ocupem o container e não estourem */
    > picture,
    > img {
      width: 100%;
      height: 100%;
      display: block;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    color: ${cores.cinzaMedio};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  /* preço */
  strong {
    color: ${cores.verdeEscuro};
    font-size: 1.25rem;
  }

  /* botões, iguais aos da página */
  .action-btn {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }

  /* no desktop, um pouquinho maior */
  @media (min-width: 992px) {
    .action-btn {
      font-size: 1rem;
      padding: 0.6rem 1rem;
    }
  }
`
