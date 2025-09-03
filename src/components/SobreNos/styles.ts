import styled from 'styled-components'
import { cores } from '../../styles'

export const SobreNos = styled.div`
  img {
    width: 450px;
    border-radius: 16px;
  }

  h2 {
    font-family: 'Anton', sans-serif;
    color: ${cores.verde};
    font-size: clamp(60px, 6vw, 56px);

    span {
      color: ${cores.verdeClaro};
      font-family: 'Anton', sans-serif;
    }
  }

  p {
    color: ${cores.pretoSuave};
  }

  @media (min-width: 1024px) and (max-width: 1030px) {
    h2 {
      font-size: 5em;
    }

    p {
      font-size: 1.5em;
    }

    a {
      font-size: 1.5em;
      text-transform: uppercase;
      width: 200px;
      padding: 15px;
    }
  }
`
