import { useMemo, useState } from 'react'
import { ProdutosD } from './styles'
import { useCart } from '../../contexts/CardContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
    | 'Desinfetante'
    | 'Limpador Perfumado'
    | 'Multiuso'
    | 'Lustra Móveis'
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
    price: 16.6,
    category: 'Lava Roupas',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 35,
    title: 'Cloro Gel 2L',
    desc: 'Aderência e ação eficaz',
    img: '/imgs/cloro-gel-2l.webp',
    price: 9.9,
    category: 'Alvejante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 36,
    title: 'Cloro Gel 5L',
    desc: 'Ideal para grandes áreas',
    img: '/imgs/cloro-gel-5l.webp',
    price: 16.9,
    category: 'Alvejante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 37,
    title: 'Limpador Perfumado Base de Álcool 5L',
    desc: 'Limpeza com fragrância suave',
    img: '/imgs/alcool-perfumado.webp',
    price: 14.9,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 2,
    title: 'Lava Roupas Líquido Azul 2L',
    desc: 'Espuma controlada',
    img: '/imgs/sabao-azul-2l.webp',
    price: 7.8,
    category: 'Lava Roupas',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 3,
    title: 'Amaciante Azul 5L',
    desc: 'Maciez prolongada',
    img: '/imgs/amaciante-5l.webp',
    price: 12.15,
    category: 'Amaciante',
    brand: 'Lune Blanche',
  },
  {
    id: 4,
    title: 'Água Sanitária 5L',
    desc: 'Branqueia e desinfeta',
    img: '/imgs/agua-sanitaria-5l.webp',
    price: 9.2,
    category: 'Alvejante',
    brand: 'Lune Blanche',
  },
  {
    id: 6,
    title: 'Limpa Pneu Gel 4Kg',
    desc: 'Brilho intenso',
    img: '/imgs/pretinho-4kg.webp',
    price: 40,
    category: 'Automotivo',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 5,
    title: 'Branquinho 2L',
    desc: 'Brilho intenso',
    img: '/imgs/branquinho-2l.webp',
    price: 8.5,
    category: 'Multiuso',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 7,
    title: 'Percarbonato de Sódio 1Kg',
    desc: 'Brilho intenso',
    img: '/imgs/percarbonato.webp',
    price: 25,
    category: 'Lava Roupas',
    brand: 'Branquinho',
    inStock: true,
  },
  {
    id: 8,
    title: 'Água Sanitária 2L',
    desc: 'Brilho intenso',
    img: '/imgs/agua-sanitaria-2l.webp',
    price: 5.1,
    category: 'Alvejante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 9,
    title: 'Alvejante Azul 2L',
    desc: 'Remove manchas com eficiência',
    img: '/imgs/alvejante-2l.webp',
    price: 7.4,
    category: 'Alvejante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 10,
    title: 'Alvejante Azul 5L',
    desc: 'Ideal para grandes limpezas',
    img: '/imgs/alvejante-5l.webp',
    price: 12,
    category: 'Alvejante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 11,
    title: 'Amaciante Azul 2L',
    desc: 'Maciez e perfume agradável',
    img: '/imgs/amaciante-2l.webp',
    price: 7.15,
    category: 'Amaciante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 12,
    title: 'Branquinho 5L',
    desc: 'Limpador multiuso',
    img: '/imgs/branquinho-5l.webp',
    price: 16.8,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 13,
    title: 'Desinfetante Casa Limpa 5L',
    desc: 'Limpeza prática do dia a dia',
    img: '/imgs/casa-limpa.webp',
    price: 9.1,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 14,
    title: 'Cloro Líquido 6% 5L',
    desc: 'Desinfecção e alvejamento',
    img: '/imgs/cloro-liquido.webp',
    price: 18,
    category: 'Alvejante',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 15,
    title: 'Detergente Neutro 2L',
    desc: 'Remove gorduras e sujeiras',
    img: '/imgs/detergente-2l.webp',
    price: 8,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 16,
    title: 'Detergente Neutro 5L',
    desc: 'Rendimento superior',
    img: '/imgs/detergente-5l.webp',
    price: 15,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 17,
    title: 'Lava Autos 5L',
    desc: 'Limpeza automotiva com brilho',
    img: '/imgs/lava-autos.webp',
    price: 19.1,
    category: 'Automotivo',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 18,
    title: 'Desinfetante Lavanda 5L',
    desc: 'Aroma agradável',
    img: '/imgs/lavanda.webp',
    price: 9.1,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 19,
    title: 'Limpador Perfumado Concentrado Campos Verde 1L',
    desc: 'Perfuma e ajuda a limpar',
    img: '/imgs/lp-campos-verde.webp',
    price: 25,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 20,
    title: 'Limpador Perfumado Concentrado Casa Perfumada 1L',
    desc: 'Ambiente sempre cheiroso',
    img: '/imgs/lp-casa-perfumada.webp',
    price: 14,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 21,
    title: 'Limpador Perfumado Concentrado Dama da Noite 1L',
    desc: 'Fragrância marcante',
    img: '/imgs/lp-dama-da-noite.webp',
    price: 14,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 22,
    title: 'Limpador Perfumado Concentrado Eucalipto 1L',
    desc: 'Toque refrescante',
    img: '/imgs/lp-eucalipto.webp',
    price: 25,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 23,
    title: 'Limpador Perfumado Concentrado Lavanda 1L',
    desc: 'Perfume suave',
    img: '/imgs/lp-lavanda.webp',
    price: 25,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 24,
    title: 'Desinfetante Marine 5L',
    desc: 'Frescor do mar',
    img: '/imgs/marine.webp',
    price: 9.1,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 25,
    title: 'Limpa Pneu Gel 500g',
    desc: 'Brilho para pneus',
    img: '/imgs/pretinho-p.webp',
    price: 9.8,
    category: 'Automotivo',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 26,
    title: 'Silicone Gel 3,6Kg',
    desc: 'Proteção e brilho',
    img: '/imgs/silicone-grande.webp',
    price: 40,
    category: 'Automotivo',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 27,
    title: 'Silicone Gel 500ml',
    desc: 'Cuidado compacto',
    img: '/imgs/silicone-pequeno.webp',
    price: 9.8,
    category: 'Automotivo',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 28,
    title: 'Desinfetante Talco 5L',
    desc: 'Perfuma suavemente',
    img: '/imgs/talco.webp',
    price: 9.1,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 29,
    title: 'Lustra Móveis 500ml',
    desc: 'Realca o brilho e protege',
    img: '/imgs/lustra-moveis.webp',
    price: 6.05,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 30,
    title: 'Multi-uso Incolor 5L',
    desc: 'Limpa diversas superficies',
    img: '/imgs/multi-uso.webp',
    price: 15.2,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 31,
    title: 'Lava Roupas Líquido Coco 5L',
    desc: 'Delicado e eficiente',
    img: '/imgs/sabao-coco-5l.webp',
    price: 16.6,
    category: 'Lava Roupas',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 32,
    title: 'Lava Roupas Líquido Coco 2L',
    desc: 'Ideal para roupas delicadas',
    img: '/imgs/sabao-coco-2l.webp',
    price: 7.8,
    category: 'Lava Roupas',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 33,
    title: 'Limpador Perfumado Concentrado Talco 1L',
    desc: 'Fragrancia de talco',
    img: '/imgs/lp-talco.webp',
    price: 25,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 34,
    title: 'Limpador Perfumado Concentrado Violeta 1L',
    desc: 'Aroma de violeta',
    img: '/imgs/lp-violeta.webp',
    price: 25,
    category: 'Limpeza intensa',
    brand: 'Lune Blanche',
    inStock: true,
  },
  {
    id: 38,
    title: 'Desinfetante Flores do Campo 5L',
    desc: 'Perfuma com notas florais',
    img: '/imgs/flores-do-campo.webp',
    price: 9.1,
    category: 'Desinfetante',
    brand: 'Lune Blanche',
    inStock: true,
  },
]

// Normaliza as categorias com base no título para agrupar corretamente
const categorize = (p: Product): Product['category'] => {
  const t = p.title.toLowerCase()
  if (t.includes('lava roupas')) return 'Lava Roupas'
  if (t.includes('amaciante')) return 'Amaciante'
  if (
    t.includes('água sanit') ||
    t.includes('agua sanit') ||
    t.includes('alvejante')
  )
    return 'Alvejante'
  if (t.includes('desinfetante')) return 'Desinfetante'
  if (t.includes('limpador perfumado')) return 'Limpador Perfumado'
  if (t.includes('lustra')) return 'Lustra Móveis'
  if (
    t.includes('multi-uso') ||
    t.includes('multiuso') ||
    t.includes('branquinho')
  )
    return 'Multiuso'
  if (t.includes('detergente')) return 'Multiuso'
  if (
    t.includes('lava autos') ||
    t.includes('limpa pneu') ||
    t.includes('silicone')
  )
    return 'Automotivo'
  return p.category
}

const PRODUCTS: Product[] = MOCK.map((p) => ({ ...p, category: categorize(p) }))

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

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)))
  const brands = Array.from(
    new Set(PRODUCTS.map((p) => p.brand).filter(Boolean))
  ) as string[]

  const { addItem } = useCart()

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

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
    if (sort === 'relevance')
      list.sort((a, b) =>
        a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' })
      )

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
        <div className="mb-3 d-flex justify-content-center align-items-center gap-2">
          <button
            className="btn btn-outline-success d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#filtrosOffcanvas"
            aria-controls="filtrosOffcanvas"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <div
            className={`search-input ${q ? 'has-value' : ''} flex-grow-1`}
            style={{ maxWidth: 520 }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              className="form-control p-2 w-100"
              placeholder="        Buscar"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-md-4">
          {/* === Sidebar (desktop) === */}
          <aside className="col-lg-3 d-none d-lg-block">
            <div className="card border-0 shadow-sm sidebar-sticky">
              <div className="card-body">
                <h5 className="mb-3">Filtros</h5>
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
                            <div className="d-flex justify-content-center">
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
                                  className="card-img-top p-2"
                                  width={800}
                                  height={800}
                                  loading="lazy"
                                />
                              </picture>
                            </div>
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
