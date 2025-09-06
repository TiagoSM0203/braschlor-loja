import { useMemo } from 'react'
import { useCart } from '../../contexts/CardContext'
import { Link } from 'react-router-dom'
import { CarrinhoP } from './styles'

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Carrinho() {
  const { items, total, updateQty, removeItem, clear } = useCart()

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
                  className="d-flex align-items-center gap-3 py-3 border-bottom"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{item.title}</div>
                    <div className="text-success">{formatBRL(item.price)}</div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
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

                  <div className="text-end" style={{ width: 120 }}>
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
                onClick={() => alert('Finalizar compra')}
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </CarrinhoP>
  )
}
