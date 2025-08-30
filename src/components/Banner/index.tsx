import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/hero.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container position-absolute bottom-0 start-0 mb-3 ms-3">
      <Titulo>Produtos de Limpeza com Qualidade e Preço de Fábrica</Titulo>
      <a className="btn btn-success btn-lg" href="#">
        Comprar agora
      </a>
    </div>
  </Imagem>
)

export default Banner
