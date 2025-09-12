import { Link } from 'react-router-dom'
import { Fundo, Imagem, Titulo, Marquee, MarqueeTrack } from './styles'

// Use optimized background via public/imgs with image-set for avif/webp/png

const Banner = () => (
  <Imagem
    id="inicio"
    style={{
      backgroundImage:
        "image-set(url('/imgs/hero.avif') type('image/avif'), url('/imgs/hero.webp') type('image/webp'))",
    }}
  >
    <Fundo className="container">
      <Marquee>
        <MarqueeTrack>
          <span>Varejo</span>
          <span>|</span>
          <span>Atacado</span>
          <span>|</span>
          <span>Revenda</span>
          <span>|</span>
          <span>Comercial</span>
          <span>|</span>
          <span>Distribuidora</span>
          <span>|</span>

          {/* DUPLICADO para loop infinito */}
          <span>Varejo</span>
          <span>|</span>
          <span>Atacado</span>
          <span>|</span>
          <span>Revenda</span>
          <span>|</span>
          <span>Comercial</span>
          <span>|</span>
          <span>Distribuidora</span>
        </MarqueeTrack>
      </Marquee>
      <Titulo>Produtos de Limpeza com Qualidade e Preço de Fábrica.</Titulo>
      <div className="d-flex justify-content-between">
        <Link to="/produtos" className="btn btn-success btn-lg">
          Comprar agora
        </Link>
      </div>
    </Fundo>
  </Imagem>
)

export default Banner
