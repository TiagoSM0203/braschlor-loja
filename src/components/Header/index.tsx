import { HeaderBar } from './styles'
import logo from '../../assets/images/novo_logo_braschlor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <HeaderBar className="d-flex align-items-center justify-content-between">
    <img src={logo} alt="Braschlor" />
    <nav className="mx-auto">
      <ul className="nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Início
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sobre Nós
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Marcas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Produtos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contato
          </a>
        </li>
      </ul>
    </nav>

    <ul className="nav align-items-center">
      <li className="nav-item">
        <a href="#" className="nav-link">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <div className="card-carrinho d-flex align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="carrinho-number">
              <span>0</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </HeaderBar>
)

export default Header
