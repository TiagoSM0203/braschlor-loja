import styled from 'styled-components'
import { cores } from '../../styles'

export const ProdutoWrapper = styled.div`
  /* Garante conteúdo ao menos do tamanho da viewport útil,
     descontando a altura do header fixo (exposta em --header-h e --header-gap) */
  min-height: calc(100svh - var(--header-h, 80px) - var(--header-gap, 20px));
  display: flex;
  flex-direction: column;
  margin-top: 1vh;

  /* Evita que o conteúdo fique sob o header fixo */
  padding-top: calc(var(--header-h, 80px) + var(--header-gap, 20px) + 16px);
  padding-bottom: 24px; /* respiro acima do footer */

  .voltar {
    color: ${cores.verde};
  }

  .voltar:hover {
    color: ${cores.verdeEscuro};
  }

  /* Contenção da imagem principal dentro do ratio */
  .ratio {
    overflow: hidden;
  }
  .ratio > picture,
  .ratio > img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .ratio img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  /* Foco do botão do accordion em verde */
  .accordion-button:focus {
    border-color: ${cores.verde};
    box-shadow: none;
  }

  /* Variáveis do Accordion: borda e fundo ativo em verde */
  .accordion {
    --bs-accordion-active-bg: ${cores.verdeClaro};
    --bs-accordion-active-color: ${cores.pretoSuave};
  }

  /* Conteúdo dos accordions: respeita \n e dá respiro entre parágrafos */
  .accordion-body {
    white-space: pre-line;
    line-height: 1.6;
  }
  .accordion-body p {
    margin-bottom: 0.75rem;
  }
`
