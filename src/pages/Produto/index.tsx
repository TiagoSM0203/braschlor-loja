import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { useCart } from '../../contexts/CardContext'
import { useToast } from '../../contexts/ToastContext'
import { Button, Accordion, Form } from 'react-bootstrap'
import { useState, useMemo } from 'react'
import { ProdutoWrapper } from './styles'

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProdutoPage() {
  const { id } = useParams<{ id: string }>()
  const productId = Number(id)
  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === productId),
    [productId]
  )
  const { addItem } = useCart()
  const { notify } = useToast()
  const [qty, setQty] = useState(1)

  const renderText = (text: string) => {
    const paragraphs = text.split(/\n\s*\n/)
    return (
      <>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ marginBottom: '0.75rem' }}>
            {p.split(/\n+/).map((line, j, arr) => (
              <span key={j}>
                {line.trim()}
                {j < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        ))}
      </>
    )
  }

  if (!product) {
    return (
      <ProdutoWrapper>
        <div className="container py-5">
          <h1 className="mb-3">Produto não encontrado</h1>
          <Link className="btn btn-success" to="/produtos">
            Voltar ao catálogo
          </Link>
        </div>
      </ProdutoWrapper>
    )
  }

  return (
    <ProdutoWrapper>
      <div className="container">
        <nav className="mb-3 small">
          <Link to="/produtos" className="text-decoration-none fs-6 voltar">
            ← Voltar
          </Link>
        </nav>
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div
              className="ratio ratio-1x1 shadow-sm"
              style={{ aspectRatio: '1 / 1' }}
            >
              {(() => {
                const base = product.img.replace(
                  /\.(png|jpe?g|webp|avif)$/i,
                  ''
                )
                return (
                  <div className="d-flex justify-content-center">
                    <picture>
                      <source type="image/avif" srcSet={`${base}.avif`} />
                      <source type="image/webp" srcSet={`${base}.webp`} />
                      <img
                        src={`${base}.webp`}
                        alt={product.alt ?? product.title}
                        className="p-2"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                )
              })()}
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h1 className="h3">{product.title}</h1>
            <div className="d-flex align-items-baseline gap-2 my-2">
              {product.priceFrom && product.priceFrom > product.price && (
                <span className="text-muted text-decoration-line-through">
                  {formatBRL(product.priceFrom)}
                </span>
              )}
              <strong className="fs-3 text-success">
                {formatBRL(product.price)}
              </strong>
            </div>
            <p className="text-muted">{product.shortDesc}</p>
            <div className="d-flex align-items-center gap-3 my-3">
              <Form.Label className="mb-0">Quantidade</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Number(e.target.value) || 1))
                }
                style={{ width: 100 }}
              />
            </div>
            <div className="d-flex gap-2 mb-4">
              <Button
                variant="success"
                onClick={() => {
                  addItem(
                    {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      img: product.img,
                    },
                    qty
                  )
                  notify('Item adicionado ao carrinho', { type: 'success' })
                }}
              >
                Adicionar ao carrinho
              </Button>
              <Link to="/carrinho" className="btn btn-outline-success">
                Ir para o carrinho
              </Link>
            </div>
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Descrição</Accordion.Header>
                <Accordion.Body>{renderText(product.longDesc)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Modo de uso</Accordion.Header>
                <Accordion.Body>{renderText(product.usage)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cuidados</Accordion.Header>
                <Accordion.Body>{renderText(product.care)}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </ProdutoWrapper>
  )
}
