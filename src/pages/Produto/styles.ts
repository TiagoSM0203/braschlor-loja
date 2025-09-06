import styled from 'styled-components'
import { cores } from '../../styles'

export const ProdutoWrapper = styled.div`
  margin-top: 15vh;

  .voltar {
    color: ${cores.verde};
  }

  .voltar:hover {
    color: ${cores.verdeEscuro};
  }
`
