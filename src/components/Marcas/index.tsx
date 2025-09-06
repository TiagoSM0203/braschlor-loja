import { Brand, Marca } from './styles'
// Imagens servidas via public/imgs

const Marcas = () => (
  <Marca className="mt-5 pt-5" id="marcas">
    <div className="bolinhas-container">
      <span className="bolinha"></span>
      <span className="bolinha"></span>
      <span className="bolinha"></span>
      <span className="bolinha"></span>
      <span className="bolinha"></span>
    </div>
    <div className="container">
      <h1 className="text-uppercase mb-2 text-center">Nossas marcas</h1>
      <p className="text-center mb-md-5 p-lg-4 fs-4">
        Duas marcas próprias desenvolvidas com tecnologia avançada e compromisso
        com a qualidade e sustentabilidade.
      </p>
      <div className="row justify-content-center align-items-center">
        <Brand className="col-11 col-lg-5 mb-5 order-2 order-lg-1 text-center text-md-center me-lg-5">
          <div className="brand d-flex flex-column justify-content-center align-items-center h-100">
            <picture>
              <source
                type="image/avif"
                srcSet="/imgs/logo_lune_blanche_aprovado.avif"
              />
              <source
                type="image/webp"
                srcSet="/imgs/logo_lune_blanche_aprovado.webp"
              />
              <img
                src="/imgs/logo_lune_blanche_aprovado.webp"
                alt="LuneBlanche"
                loading="lazy"
              />
            </picture>
            <p className="mt-4">
              A linha Lune Blanche foi desenvolvida para quem busca excelência
              em limpeza com um toque de sofisticação. Seus produtos combinam
              fragrâncias marcantes, tecnologia de ponta e alta eficiência na
              higienização, deixando os ambientes sempre perfumados e
              acolhedores. É a escolha ideal para consumidores que valorizam
              bem-estar, qualidade e praticidade no dia a dia.
            </p>
          </div>
        </Brand>
        <Brand className="col-11 col-lg-5 mb-5 order-2 order-lg-1 text-center text-md-center">
          <div className="brand d-flex flex-column justify-content-center align-items-center h-100">
            <picture>
              <source
                type="image/avif"
                srcSet="/imgs/logotipo_branquinho_aprovado.avif"
              />
              <source
                type="image/webp"
                srcSet="/imgs/logotipo_branquinho_aprovado.webp"
              />
              <img
                className="branquinho"
                src="/imgs/logotipo_branquinho_aprovado.webp"
                alt="Branquinho"
                loading="lazy"
              />
            </picture>
            <p className="mt-4">
              A linha Branquinho é sinônimo de eficiência, tradição e economia.
              Com fórmulas potentes e de alto rendimento, garante limpeza
              profunda e brilho impecável, tornando-se indispensável em lares,
              comércios e empresas. É a marca que une confiança e praticidade,
              sempre com o melhor custo-benefício para o consumidor.
            </p>
          </div>
        </Brand>
      </div>
    </div>
  </Marca>
)

export default Marcas
