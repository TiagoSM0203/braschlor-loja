import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CardContext'
import { useToast } from '../../contexts/ToastContext'

type Address = {
  id: string
  line1: string
  line2?: string | null
  city: string
  state: string
  zip: string
  created_at?: string
}

export default function PerfilPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const { items } = useCart()
  const { notify } = useToast()
  const navigate = useNavigate()

  const [tab, setTab] = useState<'resumo' | 'pedidos' | 'enderecos' | 'conta'>(
    'resumo'
  )

  useEffect(() => {
    if (!isAuthenticated) navigate('/login')
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) return null

  function Enderecos() {
    const [addresses, setAddresses] = useState<Address[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [editing, setEditing] = useState<Address | null>(null)
    const [form, setForm] = useState({
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
    })
    const [cepLoading, setCepLoading] = useState(false)
    const [cepError, setCepError] = useState<string | null>(null)

    function maskCEP(v: string) {
      const digits = v.replace(/\D/g, '').slice(0, 8)
      return digits.replace(/(\d{5})(\d)/, '$1-$2')
    }

    function normUF(v: string) {
      return v
        .replace(/[^a-zA-Z]/g, '')
        .slice(0, 2)
        .toUpperCase()
    }

    async function onBlurCEP() {
      const cepDigits = form.zip.replace(/\D/g, '')
      if (cepDigits.length !== 8) return
      try {
        setCepLoading(true)
        setCepError(null)
        const res = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`)
        const data = await res.json()
        if (data?.erro) {
          setCepError('CEP não encontrado')
          return
        }
        setForm((f) => ({
          ...f,
          city: data.localidade || f.city,
          state: (data.uf || f.state || '').toUpperCase(),
          line1:
            f.line1 ||
            [data.logradouro, data.bairro].filter(Boolean).join(' - '),
        }))
      } catch {
        setCepError('Falha ao consultar CEP')
      } finally {
        setCepLoading(false)
      }
    }

    async function load() {
      try {
        setLoading(true)
        const raw = localStorage.getItem('addresses:v1')
        const data = raw ? (JSON.parse(raw) as Address[]) : []
        setAddresses(data)
      } catch (e) {
        notify(e instanceof Error ? e.message : 'Falha ao carregar endereços', {
          type: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    useEffect(() => {
      load()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function startEdit(a: Address) {
      setEditing(a)
      setForm({
        line1: a.line1 || '',
        line2: a.line2 || '',
        city: a.city || '',
        state: a.state || '',
        zip: a.zip || '',
      })
    }

    function resetForm() {
      setEditing(null)
      setForm({ line1: '', line2: '', city: '', state: '', zip: '' })
    }

    async function submit(e: React.FormEvent) {
      e.preventDefault()
      if (!form.line1 || !form.city || !form.state || !form.zip) {
        notify('Preencha os campos obrigatórios', { type: 'error' })
        return
      }
      try {
        setSaving(true)
        const raw = localStorage.getItem('addresses:v1')
        const data = raw ? (JSON.parse(raw) as Address[]) : []
        if (editing) {
          const updated = data.map((a) =>
            a.id === editing.id ? { ...a, ...form } : a
          )
          localStorage.setItem('addresses:v1', JSON.stringify(updated))
          notify('Endereço atualizado', { type: 'success' })
        } else {
          const newAddress: Address = {
            id: `addr-${Date.now()}`,
            line1: form.line1,
            line2: form.line2 || null,
            city: form.city,
            state: form.state,
            zip: form.zip,
            created_at: new Date().toISOString(),
          }
          const next = [newAddress, ...data]
          localStorage.setItem('addresses:v1', JSON.stringify(next))
          notify('Endereço adicionado', { type: 'success' })
        }
        resetForm()
        await load()
      } catch (e) {
        notify(e instanceof Error ? e.message : 'Erro ao salvar', {
          type: 'error',
        })
      } finally {
        setSaving(false)
      }
    }

    async function remove(id: string) {
      if (!confirm('Remover este endereço?')) return
      try {
        const raw = localStorage.getItem('addresses:v1')
        const data = raw ? (JSON.parse(raw) as Address[]) : []
        const next = data.filter((a) => a.id !== id)
        localStorage.setItem('addresses:v1', JSON.stringify(next))
        notify('Endereço removido', { type: 'success' })
        await load()
      } catch (e) {
        notify(e instanceof Error ? e.message : 'Erro ao remover', {
          type: 'error',
        })
      }
    }

    return (
      <div>
        <h5 className="mb-3">Endereços</h5>

        <form onSubmit={submit} className="mb-4">
          <h6 className="mb-2">
            {editing ? 'Editar endereço' : 'Adicionar novo endereço'}
          </h6>
          <div className="row g-3">
            <div className="col-12">
              <input
                className="form-control"
                placeholder="Endereço (linha 1)"
                value={form.line1}
                onChange={(e) => setForm({ ...form, line1: e.target.value })}
                required
              />
            </div>
            <div className="col-12">
              <input
                className="form-control"
                placeholder="Complemento (linha 2)"
                value={form.line2}
                onChange={(e) => setForm({ ...form, line2: e.target.value })}
              />
            </div>
            <div className="col-6">
              <input
                className="form-control"
                placeholder="Cidade"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
              />
            </div>
            <div className="col-3">
              <input
                className="form-control"
                placeholder="UF"
                value={form.state}
                onChange={(e) =>
                  setForm({ ...form, state: normUF(e.target.value) })
                }
                maxLength={2}
                required
              />
            </div>
            <div className="col-3">
              <input
                className={`form-control ${cepError ? 'is-invalid' : ''}`}
                placeholder="CEP"
                value={form.zip}
                onChange={(e) =>
                  setForm({ ...form, zip: maskCEP(e.target.value) })
                }
                onBlur={onBlurCEP}
                inputMode="numeric"
                maxLength={9}
                required
              />
              {cepLoading && (
                <div className="form-text">Buscando endereço…</div>
              )}
              {cepError && <div className="invalid-feedback">{cepError}</div>}
            </div>
          </div>
          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-success" type="submit" disabled={saving}>
              {saving ? 'Salvando…' : editing ? 'Salvar' : 'Adicionar'}
            </button>
            {editing && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={resetForm}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {loading ? (
          <p>Carregando…</p>
        ) : addresses.length === 0 ? (
          <p className="text-muted">Nenhum endereço cadastrado.</p>
        ) : (
          <div className="list-group">
            {addresses.map((a) => (
              <div
                key={a.id}
                className="list-group-item d-flex justify-content-between align-items-start gap-3"
              >
                <div>
                  <div className="fw-semibold">
                    {a.line1}
                    {a.line2 ? `, ${a.line2}` : ''}
                  </div>
                  <div className="small text-muted">
                    {a.city} - {a.state} • {a.zip}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => startEdit(a)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => remove(a.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container py-4" style={{ marginTop: '13vh' }}>
      <h1 className="mb-4">Seu Perfil</h1>

      <div className="row g-4">
        <div className="col-12 col-lg-3">
          <div className="list-group">
            <button
              className={`list-group-item list-group-item-action ${
                tab === 'resumo' ? 'active' : ''
              }`}
              onClick={() => setTab('resumo')}
            >
              Resumo
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                tab === 'pedidos' ? 'active' : ''
              }`}
              onClick={() => setTab('pedidos')}
            >
              Seus pedidos
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                tab === 'enderecos' ? 'active' : ''
              }`}
              onClick={() => setTab('enderecos')}
            >
              Endereços
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                tab === 'conta' ? 'active' : ''
              }`}
              onClick={() => setTab('conta')}
            >
              Dados da conta
            </button>
            <button
              className="list-group-item list-group-item-action text-danger"
              onClick={() => {
                logout()
                navigate('/')
              }}
            >
              Sair
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body">
              {tab === 'resumo' && (
                <>
                  <h5 className="card-title mb-3">Olá, {user?.name}</h5>
                  <p className="mb-1">Email: {user?.email}</p>
                  <hr />
                  <h6>Resumo rápido</h6>
                  <ul className="mb-0">
                    <li>Pedidos recentes: 0</li>
                    <li>Itens no carrinho agora: {items.length}</li>
                  </ul>
                </>
              )}

              {tab === 'enderecos' && <Enderecos />}

              {tab === 'pedidos' && (
                <p className="text-muted mb-0">
                  Histórico de pedidos em breve.
                </p>
              )}

              {tab === 'conta' && (
                <p className="text-muted mb-0">
                  Edição de dados da conta em breve.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
