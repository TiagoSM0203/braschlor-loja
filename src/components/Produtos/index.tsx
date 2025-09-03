import { useMemo, useState, useEffect } from 'react'
import { Carousel, Row, Col, Button } from 'react-bootstrap'
import { ImagensP, Products, Produto } from './styles'

import SabaoAzul5l from '../../assets/images/sabao-azul-5l.png'
import SabaoAzul2l from '../../assets/images/sabao-azul-2l.png'
import Amaciante5l from '../../assets/images/amaciante-5l.png'
import AguaSanitaria5l from '../../assets/images/agua-sanitaria-5l.png'
import Branquinho2l from '../../assets/images/branquinho-2l.png'
import Pretinho4kg from '../../assets/images/pretinho-4kg.png'

type Product = {
  img: string
  title: string
  desc: string
  price: number
  priceFrom?: number
  alt?: string
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Ícones SVG reutilizáveis (usam currentColor)
const PrevIcon = (
  <span aria-hidden="true" className="rb-chevron">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </span>
)

const NextIcon = (
  <span aria-hidden="true" className="rb-chevron">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </span>
)

const Produtos = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(3)
  const [showControls, setShowControls] = useState<boolean>(true)
  // padrão desktop

  // Detecta o tamanho da tela para definir quantos itens por slide
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      if (width < 768) {
        setItemsPerSlide(1) // Celular
        setShowControls(false) // sem setas
      } else if (width < 1200) {
        setItemsPerSlide(2) // Tablet
        setShowControls(false) // sem setas
      } else {
        setItemsPerSlide(3) // Desktop
        setShowControls(true) // com setas
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items: Product[] = [
    {
      img: SabaoAzul5l,
      title: 'Lava Roupas Líquido Azul 5L',
      desc: 'Limpeza eficiente e alto rendimento.',
      priceFrom: 29.9,
      price: 24.9,
      alt: 'Lava Roupas Azul 5L',
    },
    {
      img: SabaoAzul2l,
      title: 'Lava Roupas Líquido Azul 2L',
      desc: 'Espuma controlada e perfume agradável.',
      priceFrom: 14.9,
      price: 12.5,
      alt: 'Lava Roupas Azul 2L',
    },
    {
      img: Amaciante5l,
      title: 'Amaciante Azul 5L',
      desc: 'Maciez e fragrância prolongada.',
      priceFrom: 26.9,
      price: 22.9,
      alt: 'Amaciante 5L',
    },
    {
      img: AguaSanitaria5l,
      title: 'Água Sanitária 5L',
      desc: 'Branqueia e desinfeta com segurança.',
      priceFrom: 26.9,
      price: 9.99,
      alt: 'Água Sanitária 5L',
    },
    {
      img: Branquinho2l,
      title: 'Branquinho 2L',
      desc: 'Limpador multiuso de alto desempenho.',
      priceFrom: 10.9,
      price: 8.9,
      alt: 'Branquinho 2L',
    },
    {
      img: Pretinho4kg,
      title: 'Limpa Pneu Gel 4Kg',
      desc: 'Brilho intenso e proteção duradoura.',
      priceFrom: 39.9,
      price: 34.9,
      alt: 'Limpa Pneu 4Kg',
    },
  ]

  const slides = useMemo(
    () => chunk(items, itemsPerSlide),
    [items, itemsPerSlide]
  )

  return (
    <Products className="mt-5">
      <div className="text-center mb-4">
        <h1 className="text-center">Produtos</h1>
        <p className="mb-0 fs-5 title">
          Qualidade de fábrica, desempenho no dia a dia.
        </p>
      </div>

      {/* Use ícones customizados e NÃO crie <button> manual dentro do Carousel */}
      <Carousel
        interval={3000}
        indicators={false}
        controls={showControls}
        touch={true}
        prevIcon={PrevIcon}
        nextIcon={NextIcon}
      >
        {slides.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center g-4 align-items-stretch">
              {group.map((prod, i) => (
                <Col key={i} xs={12} md={6} xl={4} className="d-flex">
                  <Produto className="w-100 d-flex flex-column text-center p-5 h-100">
                    <ImagensP
                      src={prod.img}
                      alt={prod.alt ?? prod.title}
                      className="img-fluid mx-auto"
                    />
                    <h3 className="mt-3 fs-5 product-title">{prod.title}</h3>
                    <p className="mb-2 fs-6 product-title">{prod.desc}</p>

                    <div className="mt-auto">
                      {typeof prod.priceFrom === 'number' &&
                        prod.priceFrom > prod.price && (
                          <div
                            className="text-muted"
                            style={{
                              textDecoration: 'line-through',
                              fontSize: '0.9rem',
                            }}
                          >
                            {formatBRL(prod.priceFrom)}
                          </div>
                        )}
                      <strong className="fs-4">{formatBRL(prod.price)}</strong>
                    </div>

                    <div className="mt-3 d-flex justify-content-center gap-2">
                      <Button
                        variant="success"
                        size="sm"
                        className="action-btn"
                        onClick={() =>
                          alert(`Adicionado ao carrinho: ${prod.title}`)
                        }
                      >
                        Adicionar ao Carrinho
                      </Button>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="action-btn"
                        onClick={() => alert(`Compra imediata: ${prod.title}`)}
                      >
                        Comprar
                      </Button>
                    </div>
                  </Produto>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="text-center mt-4">
        <Button variant="success" size="lg" href="/produtos">
          Ver Mais
        </Button>
      </div>
    </Products>
  )
}

export default Produtos
