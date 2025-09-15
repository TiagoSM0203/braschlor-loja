import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

type Order = {
  id: string
  total_cents?: number
  status?: string
  items?: OrderItem[]
}

type OrderItem = {
  product_id: number | string
  quantity: number
  unit_price_cents: number
  product_title?: string | null
}

export default function PedidoPage() {
  const { id } = useParams<{ id: string }>()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [items, setItems] = useState<OrderItem[]>([])

  useEffect(() => {
    if (!isAuthenticated) navigate('/login')
  }, [isAuthenticated, navigate])

  useEffect(() => {
    function fetchOrderLocal() {
      if (!id) return
      try {
        setLoading(true)
        const raw = localStorage.getItem('orders:v1')
        const store = raw ? (JSON.parse(raw) as Order[]) : []
        const found = store.find((o) => o.id === id) || null
        setOrder(found)
        setItems(found?.items || [])
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
    fetchOrderLocal()
  }, [id])

  const code = id ? id.slice(0, 8) : ''
  const formatBRL = (cents?: number) =>
    typeof cents === 'number'
      ? (cents / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      : ''
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
                  {items.length > 0 && (
                    <div className="mt-3">
                      <h6 className="mb-2">Itens do pedido</h6>
                      <div className="list-group">
                        {items.map((it, idx) => (
                          <div
                            key={idx}
                            className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <div className="fw-semibold">
                                {it.product_title ||
                                  `Produto ${String(it.product_id)}`}
                              </div>
                              <div className="small text-muted">
                                {it.quantity} x {formatBRL(it.unit_price_cents)}
                              </div>
                            </div>
                            <div className="fw-semibold">
                              {formatBRL(it.quantity * it.unit_price_cents)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
