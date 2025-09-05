import { Contatos } from './styles'
import imgContato from '../../assets/images/contato.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

const Contato = () => (
  <Contatos className="mt-5 pt-5 pb-5" id="contato">
    <div className="container row align-items-center justify-content-center g-4">
      <div className="w-lg-50 col-12 col-md-6 order-2 order-md-1 text-start text-md-start">
        <h1>
          <span>Dúvidas?</span> Estamos aqui para ajudar.
        </h1>
        <p>
          Entre em contato com a nossa equipe para tirar suas dúvidas, resolver
          problemas ou solicitar informações. Se você é revendedor, fale
          diretamente com um de nossos vendedores para conhecer nossos produtos
          e condições especiais. Caso tenha algum problema com uma compra, ou
          precise de suporte em relação aos nossos produtos, estamos prontos
          para ajudar. Escolha a forma de contato que preferir e teremos o
          prazer em atendê-lo!
        </p>
        <div className="d-flex justify-content-between">
          <div>
            <h5>
              <FontAwesomeIcon icon={faPhone} /> Telefone:
            </h5>
            <p>(11) 4442-2403</p>
            <h5>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
            </h5>
            <p>vendas@braschlor.com.br</p>
            <h5>
              <FontAwesomeIcon icon={faLocationDot} /> Endereço:
            </h5>
            <p>Rua Canário, 143 Laranjeiras - Caieiras/SP 07745-015</p>
          </div>
          <div>
            <p>
              <a
                href="https://www.instagram.com/luneblanchepro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/5511993521508"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/Braschlor.Aromaty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </p>
          </div>
        </div>
        <div className="text-center text-md-start">
          <button type="button" className="btn btn-outline-success p-3">
            Entre em contato
          </button>
        </div>
      </div>
      <div className="col-12 col-md-6 order-1 order-md-2 text-center">
        <img src={imgContato} alt="Contato" className="img-fluid rounded-3" />
      </div>
    </div>
  </Contatos>
)

export default Contato
