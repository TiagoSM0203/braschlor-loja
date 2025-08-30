import { HeaderBar } from './styles'
import logo from '../../assets/images/novo_logo_braschlor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <HeaderBar className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
        <img src={logo} alt="Braschlor" />
      </a>

      {/* Toggler (hamburger) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMain"
        aria-controls="navbarMain"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu colapsável */}
      <div className="collapse navbar-collapse" id="navbarMain">
        <nav className="mx-auto">
          <ul className="navbar-nav gap-lg-2 justify-content-center">
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

        <ul className="navbar-nav ms-lg-auto align-items-center gap-2">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link p-0">
              <div className="card-carrinho d-flex align-items-center">
                <FontAwesomeIcon icon={faShoppingCart} />
                <div className="carrinho-number">
                  <span>0</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </HeaderBar>
)

export default Header
