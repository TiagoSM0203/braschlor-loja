import { useMemo, useState } from 'react'
import { ProdutosD } from './styles'
import { useCart } from '../../contexts/CardContext'

type Product = {
  id: number
  title: string
  desc: string
  img: string
  price: number
  category:
    | 'Lava Roupas'
    | 'Amaciante'
    | 'Alvejante'
    | 'Automotivo'
    | 'Limpeza intensa'
  brand?: 'Lune Blanche' | 'Branquinho'
  inStock?: boolean
}

const MOCK: Product[] = [
  {
    id: 1,
    title: 'Lava Roupas Líquido Azul 5L',
    desc: 'Alto rendimento',
    img: '/imgs/sabao-azul-5l.webp',
    price: 24.9,
    category: 'Lava Roupas',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 2,
    title: 'Lava Roupas Líquido Azul 2L',
    desc: 'Espuma controlada',
    img: '/imgs/sabao-azul-2l.webp',
    price: 12.5,
    category: 'Lava Roupas',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 3,
    title: 'Amaciante Azul 5L',
    desc: 'Maciez prolongada',
    img: '/imgs/amaciante-5l.webp',
    price: 22.9,
    category: 'Amaciante',
    brand: 'Lune Blanche',
  },
  {
    id: 4,
    title: 'Água Sanitária 5L',
    desc: 'Branqueia e desinfeta',
    img: '/imgs/agua-sanitaria-5l.webp',
    price: 9.99,
    category: 'Alvejante',
    brand: 'Lune Blanche',
  },
  {
    id: 6,
    title: 'Limpa Pneu Gel 4Kg',
    desc: 'Brilho intenso',
    img: '/imgs/pretinho-4kg.webp',
    price: 34.9,
    category: 'Automotivo',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 5,
    title: 'Branquinho 2L',
    desc: 'Brilho intenso',
    img: '/imgs/branquinho-2l.webp',
    price: 34.9,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 7,
    title: 'Percarbonato de Sodio',
    desc: 'Brilho intenso',
    img: '/imgs/percarbonato.webp',
    price: 34.9,
    category: 'Alvejante',
    brand: 'Branquinho',
    inStock: true,
  },
]

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProdutosDetalhes() {
  // filtros
  const [q, setQ] = useState('')
  const [category, setCategory] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<number>(100)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState<'relevance' | 'priceAsc' | 'priceDesc'>(
    'relevance'
  )

  const categories = Array.from(new Set(MOCK.map((p) => p.category)))
  const brands = Array.from(
    new Set(MOCK.map((p) => p.brand).filter(Boolean))
  ) as string[]

  const { addItem } = useCart()

  const filtered = useMemo(() => {
    let list = [...MOCK]

    const term = q.trim().toLowerCase()
    if (term) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.desc.toLowerCase().includes(term)
      )
    }

    if (category) list = list.filter((p) => p.category === category)
    if (brand) list = list.filter((p) => p.brand === brand)
    if (inStockOnly) list = list.filter((p) => p.inStock)
    list = list.filter((p) => p.price <= maxPrice)

    if (sort === 'priceAsc') list.sort((a, b) => a.price - b.price)
    if (sort === 'priceDesc') list.sort((a, b) => b.price - a.price)

    return list
  }, [q, category, brand, inStockOnly, maxPrice, sort])

  const clearFilters = () => {
    setQ('')
    setCategory('')
    setBrand('')
    setMaxPrice(100)
    setInStockOnly(false)
    setSort('relevance')
  }

  return (
    <ProdutosD className="py-3">
      {/* Título + botão de filtros no mobile */}
      <div className="container">
        <h1 className="text-center">
          Catálogo de <span>Produtos</span>
        </h1>
        <div className="mb-3 text-end botao">
          <button
            className="btn btn-outline-success d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#filtrosOffcanvas"
            aria-controls="filtrosOffcanvas"
          >
            Filtros
          </button>
        </div>
        <div className="row mt-md-5">
          {/* === Sidebar (desktop) === */}
          <aside className="col-lg-3 d-none d-lg-block">
            <div className="card border-0 shadow-sm sidebar-sticky">
              <div className="card-body">
                <h5 className="mb-3">Filtros</h5>
                <div className="mb-3">
                  <label className="form-label">Buscar</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex.: amaciante, lava roupas..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Categoria</label>
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Todas</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Marca</label>
                  <select
                    className="form-select"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="">Todas</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Até (R$)</label>
                  <input
                    type="number"
                    className="form-control"
                    min={0}
                    step={1}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value) || 0)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inStock"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="inStock">
                    Em estoque
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">Ordenar</label>
                  <select
                    className="form-select"
                    value={sort}
                    onChange={(e) =>
                      setSort(
                        e.target.value as 'relevance' | 'priceAsc' | 'priceDesc'
                      )
                    }
                  >
                    <option value="relevance">Relevância</option>
                    <option value="priceAsc">Preço: menor → maior</option>
                    <option value="priceDesc">Preço: maior → menor</option>
                  </select>
                </div>
                <button
                  className="btn btn-outline-success w-100"
                  onClick={clearFilters}
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          </aside>
          {/* === Offcanvas (mobile/tablet) === */}
          <div
            className="offcanvas offcanvas-end d-lg-none"
            tabIndex={-1}
            id="filtrosOffcanvas"
            aria-labelledby="filtrosOffcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 id="filtrosOffcanvasLabel">Filtros</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="mb-3">
                <label className="form-label">Buscar</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex.: amaciante, lava roupas..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Categoria</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Todas</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Marca</label>
                <select
                  className="form-select"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Todas</option>
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Até (R$)</label>
                <input
                  type="number"
                  className="form-control"
                  min={0}
                  step={1}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value) || 0)}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inStock2"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="inStock2">
                  Em estoque
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">Ordenar</label>
                <select
                  className="form-select"
                  value={sort}
                  onChange={(e) =>
                    setSort(
                      e.target.value as 'relevance' | 'priceAsc' | 'priceDesc'
                    )
                  }
                >
                  <option value="relevance">Relevância</option>
                  <option value="priceAsc">Preço: menor → maior</option>
                  <option value="priceDesc">Preço: maior → menor</option>
                </select>
              </div>
              <button
                className="btn btn-success w-100 mb-2"
                data-bs-dismiss="offcanvas"
              >
                Aplicar
              </button>
              <button
                className="btn btn-outline-secondary w-100"
                onClick={clearFilters}
              >
                Limpar filtros
              </button>
            </div>
          </div>
          {/* === Grid de Cards === */}
          <main className="col-lg-9">
            {filtered.length === 0 ? (
              <div className="text-center text-muted py-5">
                Nenhum produto encontrado.
              </div>
            ) : (
              <div className="row g-4">
                {filtered.map((p) => (
                  <div key={p.id} className="col-12 col-sm-6 col-xl-4">
                    <div className="card h-100 shadow-sm p-2">
                      <div
                        className="ratio ratio-1x1"
                        style={{ aspectRatio: '1 / 1' }}
                      >
                        {(() => {
                          const base = p.img.replace(
                            /\.(png|jpe?g|webp|avif)$/i,
                            ''
                          )
                          return (
                            <picture>
                              <source
                                type="image/avif"
                                srcSet={`${base}.avif`}
                              />
                              <source
                                type="image/webp"
                                srcSet={`${base}.webp`}
                              />
                              <img
                                src={`${base}.webp`}
                                alt={p.title}
                                className="card-img-top object-fit-contain p-2"
                                width={800}
                                height={800}
                                loading="lazy"
                              />
                            </picture>
                          )
                        })()}
                      </div>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title mb-1">{p.title}</h5>
                        <p className="card-text text-muted small mb-2">
                          {p.desc}
                        </p>
                        <div className="d-flex gap-2 mb-2">
                          <span className="badge bg-success-subtle text-success">
                            {p.category}
                          </span>
                          {p.brand && (
                            <span className="badge bg-primary-subtle text-primary">
                              {p.brand}
                            </span>
                          )}
                          {!p.inStock && (
                            <span className="badge bg-secondary">
                              Sob encomenda
                            </span>
                          )}
                        </div>
                        <div className="mt-auto d-flex align-items-center justify-content-between">
                          <strong className="fs-5 text-success">
                            {formatBRL(p.price)}
                          </strong>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() => {
                                addItem(
                                  {
                                    id: p.id,
                                    title: p.title,
                                    price: p.price,
                                    img: p.img,
                                  },
                                  1
                                )
                              }}
                            >
                              Adicionar
                            </button>
                            <a
                              className="btn btn-sm btn-outline-success"
                              href={`/produto/${p.id}`}
                            >
                              Comprar
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </ProdutosD>
  )
}
