import styled, { css, keyframes } from 'styled-components'
import { cores } from '../../styles'

const slideUp = keyframes`
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

export const ToastWrap = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2000;

  @media (max-width: 576px) {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: calc(100% - 24px);
    max-width: 480px;
  }
`

export const ToastCard = styled.div<{ $type: 'success' | 'info' | 'error' }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  background: ${cores.branco};
  color: ${cores.pretoSuave};
  border-radius: 10px;
  padding: 10px 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-left: 4px solid transparent;
  animation: ${slideUp} 160ms ease-out;

  ${({ $type }) =>
    $type === 'success' &&
    css`
      border-left-color: ${cores.verde};
    `}

  ${({ $type }) =>
    $type === 'info' &&
    css`
      border-left-color: #0d6efd;
    `}

  ${({ $type }) =>
    $type === 'error' &&
    css`
      border-left-color: #dc3545;
    `}
`

export const CloseBtn = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 6px;
  margin: -6px -6px -6px 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`
