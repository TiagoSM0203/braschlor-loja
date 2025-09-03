import styled from 'styled-components'
import { cores } from '../../styles'

export const Marca = styled.div`
  background-color: ${cores.azul};
  position: relative;
  overflow: hidden;
  border-top-left-radius: 50% 10%;
  border-top-right-radius: 50% 10%;
  box-shadow: 1px -9px 45px -24px rgba(0, 0, 0, 0.48);

  @media (max-width: 992px) {
    border-top-left-radius: 100% 10%;
    border-top-right-radius: 100% 10%;
  }
  .container {
    max-width: 1300px;
  }

  .bolinhas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    pointer-events: none; /* não atrapalha cliques no conteúdo */
  }

  .bolinha {
    position: absolute;
    bottom: -50px; /* começa fora da tela */
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: subir 10s infinite ease-in;
  }

  /* Tamanhos diferentes para dar variedade */
  .bolinha:nth-child(1) {
    width: 20px;
    height: 20px;
    left: 10%;
    animation-duration: 12s;
    animation-delay: 0s;
  }

  .bolinha:nth-child(2) {
    width: 15px;
    height: 15px;
    left: 25%;
    animation-duration: 9s;
    animation-delay: 2s;
  }

  .bolinha:nth-child(3) {
    width: 25px;
    height: 25px;
    left: 50%;
    animation-duration: 14s;
    animation-delay: 4s;
  }

  .bolinha:nth-child(4) {
    width: 18px;
    height: 18px;
    left: 75%;
    animation-duration: 10s;
    animation-delay: 1s;
  }

  .bolinha:nth-child(5) {
    width: 12px;
    height: 12px;
    left: 90%;
    animation-duration: 11s;
    animation-delay: 3s;
  }

  /* Keyframes para as bolinhas subirem */
  @keyframes subir {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-110vh) scale(1.2);
      opacity: 0;
    }
  }
  img {
    width: 180px;

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 200px;
    }
  }

  h1 {
    font-family: 'Anton', sans-serif;
    color: ${cores.azulClaro};
    font-size: 48px;

    @media (min-width: 768px) {
      font-size: clamp(60px, 6vw, 56px);
    }
  }

  p {
    color: ${cores.azulClaro};
    font-size: 24px;

    @media (max-width: 430px) {
      font-size: 18px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 32px;
    }
  }

  .branquinho {
    width: 250px;

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 400px;
    }
  }
`

export const Brand = styled.div`
  border: 4px solid ${cores.azulClaro};
  border-radius: 16px;
  color: ${cores.azulClaro};
  padding: clamp(16px, 4vw, 40px); /* padding fluido no mobile */
  /* MOBILE: deixa crescer conforme o conteúdo */
  height: auto;
  min-height: 0; /* garante que o flex não limite */
  overflow-wrap: anywhere;
  transition: transform 0.2s ease, 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* DESKTOP (md+): equaliza altura */
  @media (min-width: 768px) {
    height: 75vh;
  }
`
