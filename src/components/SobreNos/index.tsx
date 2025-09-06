import { SobreNos } from './styles'

const Sobre = () => (
  <SobreNos className="container mt-5" id="sobre">
    <div className="row align-items-center g-4">
      <div className="col-12 col-md-6 order-2 order-md-1 text-start text-md-start">
        <h2 className="text-uppercase mb-3">
          Química Aliada a <span>Natureza.</span>
        </h2>
        <p className="mb-2">
          A Braschlor foi fundada em 2006, porém consolidada em 2010 quando
          incrementou domissanitários e matérias primas a seu portfólio de
          produtos, dando inicio a um projeto de indústria e distribuição de
          matérias-primas.
        </p>
        <p className="collapse mt-3" id="textoSaibaMais">
          Experiência e dedicação para promover a satisfação de nossos clientes
          com o compromisso de aliar química a natureza, sempre em busca de
          inovação com desenvolvimento sustentável. Atuamos em todo o território
          Nacional com garantia de entrega, qualidade e preços competitivos.
        </p>
        <div className="d-flex justify-content-center justify-content-md-center">
          <a
            className="btn btn-success mt-2"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="textoSaibaMais"
            href="#textoSaibaMais"
          >
            Saiba mais
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 order-1 order-md-2 text-center">
        <picture>
          <source type="image/avif" srcSet="/imgs/foto1.avif" />
          <source type="image/webp" srcSet="/imgs/foto1.webp" />
          <img
            src="/imgs/foto1.webp"
            alt="fabrica"
            className="img-fluid rounded-3"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </SobreNos>
)

export default Sobre
