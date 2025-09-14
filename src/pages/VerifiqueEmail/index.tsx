import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'
import { useToast } from '../../contexts/ToastContext'

export default function VerifiqueEmailPage() {
  const { isAuthenticated } = useAuth()
  const { notify } = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getUser()
      const user = data.user
      if (user?.email_confirmed_at) {
        navigate('/perfil')
        return
      }
      setEmail(user?.email || '')
      setLoading(false)
    }
    init()
  }, [navigate])

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
              <h1 className="h4">Verifique seu e-mail</h1>
              {loading ? (
                <p>Carregando...</p>
              ) : (
                <>
                  <p>
                    Enviamos um link de confirmação para:
                    <br />
                    <strong>{email || 'seu e-mail'}</strong>
                  </p>
                  <p className="text-muted small">
                    Após confirmar, você será redirecionado para o seu perfil.
                  </p>
                  <button
                    className="btn btn-success"
                    disabled={sending}
                    onClick={async () => {
                      if (!email) return
                      try {
                        setSending(true)
                        const redirectTo = `${window.location.origin}/perfil`
                        const { error } = await supabase.auth.resend({
                          type: 'signup',
                          email,
                          options: { emailRedirectTo: redirectTo },
                        })
                        if (error) throw error
                        notify(
                          'E-mail reenviado! Verifique sua caixa de entrada.',
                          {
                            type: 'success',
                          }
                        )
                      } catch (e) {
                        const msg =
                          e instanceof Error
                            ? e.message
                            : 'Falha ao reenviar e-mail'
                        notify(msg, { type: 'error' })
                      } finally {
                        setSending(false)
                      }
                    }}
                  >
                    {sending ? 'Reenviando…' : 'Reenviar e-mail de confirmação'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
