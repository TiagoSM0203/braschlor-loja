import { useMemo, useState } from 'react'
import { useCart } from '../../contexts/CardContext'
import { Link } from 'react-router-dom'
import { CarrinhoP } from './styles'
import { useToast } from '../../contexts/ToastContext'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Carrinho() {
  const { items, total, updateQty, removeItem, clear } = useCart()
  const { notify } = useToast()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const frete = 0 // adapte se precisar
  const subtotal = total
  const totalGeral = useMemo(() => subtotal + frete, [subtotal, frete])

  if (items.length === 0) {
    return (
      <CarrinhoP className="container">
        <h1 className="mb-4">Seu carrinho</h1>
        <div className="alert alert-info">Seu carrinho está vazio.</div>
        <Link className="btn btn-success" to="/produtos">
          Voltar aos produtos
        </Link>
      </CarrinhoP>
    )
  }

  return (
    <CarrinhoP className="container py-4">
      <h1 className="mb-4">Seu carrinho</h1>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center gap-3 py-3 border-bottom cart-item"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="flex-grow-1 cart-title">
                    <div className="fw-semibold">{item.title}</div>
                    <div className="text-success">{formatBRL(item.price)}</div>
                  </div>

                  <div className="d-flex align-items-center gap-2 cart-qty">
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      aria-label="Diminuir"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      className="form-control form-control-sm text-center"
                      style={{ width: 64 }}
                      min={1}
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, Number(e.target.value) || 1)
                      }
                    />
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      aria-label="Aumentar"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-end cart-total" style={{ width: 120 }}>
                    <div className="fw-semibold">
                      {formatBRL(item.price * item.qty)}
                    </div>
                    <button
                      className="btn btn-link text-danger p-0 small"
                      onClick={() => removeItem(item.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-between mt-3">
                <Link to="/produtos" className="btn btn-outline-success">
                  Continuar comprando
                </Link>
                <button className="btn btn-outline-danger" onClick={clear}>
                  Esvaziar carrinho
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Resumo</h5>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>{formatBRL(subtotal)}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Frete</span>
                <strong>{formatBRL(frete)}</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between fs-5">
                <span>Total</span>
                <strong className="text-success">
                  {formatBRL(totalGeral)}
                </strong>
              </div>
              <button
                className="btn btn-success w-100 mt-3"
                onClick={async () => {
                  if (!items.length) return
                  if (!isAuthenticated) {
                    notify('Faça login para finalizar a compra', {
                      type: 'info',
                    })
                    navigate('/login')
                    return
                  }

                  try {
                    setIsSubmitting(true)
                    // Frontend-only: gera pedido local e persiste em localStorage
                    const orderId = `ord-${Date.now().toString(36)}${Math.floor(
                      Math.random() * 1e6
                    ).toString(36)}`
                    const order = {
                      id: orderId,
                      total_cents: Math.round(totalGeral * 100),
                      status: 'CRIADO',
                      items: items.map((i) => ({
                        product_id: i.id,
                        quantity: i.qty,
                        unit_price_cents: Math.round(i.price * 100),
                        product_title: i.title,
                      })),
                    }
                    try {
                      const raw = localStorage.getItem('orders:v1')
                      const store = raw ? (JSON.parse(raw) as any[]) : []
                      store.unshift(order)
                      localStorage.setItem('orders:v1', JSON.stringify(store))
                    } catch (e) {
                      // Se falhar parsing/salvamento, cria storage do zero
                      localStorage.setItem('orders:v1', JSON.stringify([order]))
                    }
                    const code = orderId.slice(0, 8)
                    notify(`Pedido ${code} criado com sucesso!`, {
                      type: 'success',
                    })
                    clear()
                    navigate(`/pedido/${orderId}`)
                  } catch (err) {
                    const msg =
                      err instanceof Error ? err.message : 'Falha ao finalizar'
                    notify(msg, { type: 'error' })
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processando…' : 'Finalizar compra'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </CarrinhoP>
  )
}
