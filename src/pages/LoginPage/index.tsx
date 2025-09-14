// src/pages/LoginPage/index.tsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { useToast } from '../../contexts/ToastContext'
import {
  LoginWrapper,
  LoginCard,
  LoginSide,
  RegisterSide,
  Divider,
} from './styles'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { login, register } = useAuth()
  const { notify } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const fd = new FormData(form)
    const email = String(fd.get('email') || '')
    const password = String(fd.get('password') || '')
    if (!email || !password) return
    try {
      setIsLoading(true)
      await login(email, password)
      // Checa confirmação de e-mail
      const { supabase } = await import('../../lib/supabase')
      const { data } = await supabase.auth.getUser()
      const confirmed = Boolean(data.user?.email_confirmed_at)
      if (!confirmed) {
        notify('Conta criada. Verifique seu e-mail para confirmar.', {
          type: 'info',
        })
        navigate('/verifique-email')
      } else {
        notify('Login realizado com sucesso', {
          type: 'success',
        })
        navigate('/perfil')
      }
    } catch (err: unknown) {
      notify(err instanceof Error ? err.message : 'Falha no login', {
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const fd = new FormData(form)
    const fullName = String(fd.get('reg_full_name') || '')
    const email = String(fd.get('reg_email') || '')
    const password = String(fd.get('reg_password') || '')
    if (!fullName || !email || !password) return
    try {
      setIsLoading(true)
      await register({ email, password, fullName })
      notify('Cadastro realizado! Verifique seu email se necessário.', {
        type: 'success',
      })
      // Se a sessão já estiver ativa, vai redirecionar corretamente
      navigate('/perfil')
    } catch (err: unknown) {
      notify(err instanceof Error ? err.message : 'Falha no cadastro', {
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // ---------- MÁSCARAS ----------
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')

  const formatCPF = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    const limitedValue = numericValue.slice(0, 11)
    return limitedValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }

  const formatCEP = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    return numericValue.slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2')
  }

  // ---------- ENDEREÇO (via CEP) ----------
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [numero, setNumero] = useState('')

  const [cepLoading, setCepLoading] = useState(false)
  const [cepError, setCepError] = useState<string | null>(null)

  const handleBlurCEP = async () => {
    const onlyDigits = cep.replace(/\D/g, '')
    if (onlyDigits.length !== 8) return
    try {
      setCepLoading(true)
      setCepError(null)
      const res = await fetch(`https://viacep.com.br/ws/${onlyDigits}/json/`)
      const data = await res.json()
      if (data?.erro) {
        setCepError('CEP não encontrado')
        return
      }
      setRua(data.logradouro || '')
      setBairro(data.bairro || '')
      setCidade(data.localidade || '')
      setUf(data.uf || '')
    } catch {
      setCepError('Falha ao consultar o CEP')
    } finally {
      setCepLoading(false)
    }
  }

  return (
    <LoginWrapper>
      <LoginCard className="shadow-lg rounded">
        {/* Lado do Login */}
        <LoginSide>
          <h2 className="mb-4 text-center">Entrar</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="seuemail@exemplo.com"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                name="password"
                required
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="w-100"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>

            <div className="text-center mt-3">
              <Link to="/recuperar-senha" className="small text-success">
                Esqueceu a senha?
              </Link>
            </div>
          </Form>
        </LoginSide>

        <Divider />

        {/* Lado do Cadastro */}
        <RegisterSide>
          <h2 className="mb-4 text-center">Cadastre-se</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                name="reg_full_name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(formatCPF(e.target.value))}
                maxLength={14}
                inputMode="numeric"
                required
              />
            </Form.Group>

            {/* CEP + autofill */}
            <Form.Group className="mb-2">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(formatCEP(e.target.value))}
                onBlur={handleBlurCEP}
                inputMode="numeric"
                maxLength={9}
                required
              />
              {cepLoading && (
                <small className="text-muted">Buscando endereço…</small>
              )}
              {cepError && (
                <small className="text-danger d-block">{cepError}</small>
              )}
            </Form.Group>

            {/* Endereço detalhado */}
            <Form.Group className="mb-2">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex.: Rua das Flores"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                required
              />
            </Form.Group>

            <div className="row g-3">
              <div className="col-6">
                <Form.Group className="mb-2">
                  <Form.Label>Número</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex.: 123"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-2">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seu bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-8">
                <Form.Group className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sua cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-4">
                <Form.Group className="mb-3">
                  <Form.Label>UF</Form.Label>
                  {/* Use select para “opções” de UF */}
                  <Form.Select
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    required
                  >
                    <option value="">UF</option>
                    {[
                      'AC',
                      'AL',
                      'AM',
                      'AP',
                      'BA',
                      'CE',
                      'DF',
                      'ES',
                      'GO',
                      'MA',
                      'MG',
                      'MS',
                      'MT',
                      'PA',
                      'PB',
                      'PE',
                      'PI',
                      'PR',
                      'RJ',
                      'RN',
                      'RO',
                      'RR',
                      'RS',
                      'SC',
                      'SE',
                      'SP',
                      'TO',
                    ].map((ufx) => (
                      <option key={ufx} value={ufx}>
                        {ufx}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="seuemail@exemplo.com"
                name="reg_email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Crie uma senha"
                name="reg_password"
                required
              />
            </Form.Group>

            <Button
              variant="outline-success"
              type="submit"
              className="w-100"
              disabled={isLoading}
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </Form>
        </RegisterSide>
      </LoginCard>
    </LoginWrapper>
  )
}
