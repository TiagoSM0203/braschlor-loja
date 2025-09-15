import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useToast } from '../../contexts/ToastContext'

export default function VerifiqueEmailPage() {
  const { isAuthenticated } = useAuth()
  const { notify } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    // Página mantida apenas por compatibilidade; não há verificação no frontend-only
    notify('Verificação de e-mail não é necessária.', { type: 'info' })
    navigate('/perfil')
  }, [navigate, notify])

  if (!isAuthenticated) {
    navigate('/login')
    return null
  }

  return (
    <div className="container" style={{ marginTop: '13vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="h4">Verificação desnecessária</h1>
              <p className="mb-0">Redirecionando para seu perfil…</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
