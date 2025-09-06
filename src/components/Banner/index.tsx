import { Link } from 'react-router-dom'
import { Fundo, Imagem, Titulo, Marquee, MarqueeTrack } from './styles'

import bannerImg from '../../assets/images/hero.png'

const Banner = () => (
  <Imagem id="inicio" style={{ backgroundImage: `url(${bannerImg})` }}>
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
      <Link to="/produtos" className="btn btn-success btn-lg">
        Comprar agora
      </Link>
    </Fundo>
  </Imagem>
)

export default Banner
