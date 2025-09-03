import { Fundo, Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/hero.png'

const Banner = () => (
  <Imagem id="inicio" style={{ backgroundImage: `url(${bannerImg})` }}>
    <Fundo className="container">
      <Titulo>Produtos de Limpeza com Qualidade e Preço de Fábrica.</Titulo>
      <a className="btn btn-success btn-lg" href="#">
        Comprar agora
      </a>
    </Fundo>
  </Imagem>
)

export default Banner
