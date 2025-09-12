// src/pages/LoginPage/styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'

export const LoginWrapper = styled.div`
  /* Ocupa a viewport útil e compensa o header fixo */
  min-height: calc(100svh - var(--header-h, 80px) - var(--header-gap, 20px));
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${cores.verdeClaro} 20%,
    ${cores.branco} 50%,
    ${cores.cinzaClaro} 100%
  );
  padding: 20px;
  /* Evita que o conteúdo fique sob o header fixo */
  padding-top: calc(var(--header-h, 80px) + var(--header-gap, 20px) + 16px);
`

export const LoginCard = styled.div`
  display: flex;
  align-items: center;
  background: ${cores.branco};
  overflow: hidden;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LoginSide = styled.div`
  flex: 1;
  padding: 40px;
  background: ${cores.branco};

  h2 {
    color: ${cores.verde};
    font-weight: bold;
  }

  form {
    margin-top: 10px;
  }
`

export const RegisterSide = styled.div`
  flex: 1;
  padding: 40px;
  background: ${cores.cinzaClaro};

  h2 {
    color: ${cores.verdeEscuro};
    font-weight: bold;
  }

  form {
    margin-top: 10px;
  }
`

export const Divider = styled.div`
  width: 2px;
  background: ${cores.cinzaMedio};

  @media (max-width: 768px) {
    width: 100%;
    height: 2px;
  }
`
