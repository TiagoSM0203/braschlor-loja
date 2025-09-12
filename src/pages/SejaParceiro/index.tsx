import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Wrapper, TextBlock, Actions, ContactIcons, ImageSide } from './styles'

const SejaParceiro = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <TextBlock className="card border-0">
              <div className="card-body p-4">
                <h1>Seja um Parceiro da Nossa Empresa</h1>
                <p>
                  Nossa empresa atua no mercado de produtos de limpeza,
                  atendendo tanto o consumidor final quanto revendedores,
                  distribuidores e atacadistas em todo o Brasil. Trabalhamos com
                  qualidade, preços competitivos e logística eficiente. Entre em
                  contato com nossa equipe de vendas e descubra como podemos
                  crescer juntos!
                </p>

                <Actions>
                  <ContactIcons aria-label="Formas de contato">
                    <span className="contact" title="Telefone">
                      <span className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span className="label">(11) 4442-2403</span>
                    </span>

                    <a
                      className="contact"
                      title="WhatsApp"
                      href="https://wa.me/5511993521508"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </span>
                      <span className="label">11 99352-1508</span>
                    </a>

                    <span className="contact" title="E-mail">
                      <span className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span className="label">vendas@braschlor.com.br</span>
                    </span>
                  </ContactIcons>
                </Actions>
              </div>
            </TextBlock>
          </div>

          <div className="col-12 col-lg-6">
            <ImageSide>
              <picture>
                <source type="image/avif" srcSet="/imgs/negocio.avif" />
                <source type="image/webp" srcSet="/imgs/negocio.webp" />
                <img src="/imgs/negocio.webp" alt="Negócio e parceria" />
              </picture>
            </ImageSide>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SejaParceiro
