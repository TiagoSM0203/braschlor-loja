import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

type Order = {
  id: string
  total_cents?: number
  status?: string
}

export default function PedidoPage() {
  const { id } = useParams<{ id: string }>()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticated) navigate('/login')
  }, [isAuthenticated, navigate])

  useEffect(() => {
    async function fetchOrder() {
      if (!id) return
      try {
        setLoading(true)
        // Busca mínima do pedido (se a tabela existir e RLS permitir leitura do próprio pedido)
        const { data, error } = await supabase
          .from('orders')
          .select('id, total_cents, status')
          .eq('id', id)
          .maybeSingle()
        if (error) throw error
        setOrder(data as Order)
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError('Não foi possível carregar o pedido')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchOrder()
  }, [id])

  const code = id ? id.slice(0, 8) : ''
  return (
    <div className="container" style={{ marginTop: '13vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="h4 mb-2">Pedido recebido</h1>
              {loading ? (
                <p>Carregando...</p>
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <>
                  <p className="mb-1">
                    Código do pedido: <strong>{code}</strong>
                  </p>
                  {order?.total_cents != null && (
                    <p className="mb-1">
                      Total:{' '}
                      <strong>R$ {(order.total_cents / 100).toFixed(2)}</strong>
                    </p>
                  )}
                  {order?.status && (
                    <p className="text-muted small">Status: {order.status}</p>
                  )}
                </>
              )}

              <hr />
              <div className="d-flex gap-2">
                <Link className="btn btn-success" to="/">
                  Voltar à Home
                </Link>
                <Link className="btn btn-outline-success" to="/produtos">
                  Continuar comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
