import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useToast } from '../../contexts/ToastContext'
import { CloseBtn, ToastCard, ToastWrap } from './styles'

export default function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastWrap aria-live="polite" aria-atomic="true">
      {toasts.map((t) => (
        <ToastCard key={t.id} $type={t.type} role="status">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={'text-success'}
            size="lg"
          />
          <div>{t.message}</div>
          <CloseBtn onClick={() => dismiss(t.id)} aria-label="Fechar aviso">
            ×
          </CloseBtn>
        </ToastCard>
      ))}
    </ToastWrap>
  )
}
