import { useEffect, useState } from 'react'
import { HeaderBar } from './styles'
import logo from '../../assets/images/novo_logo_braschlor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <HeaderBar
      $scrolled={scrolled}
      className="navbar navbar-expand-lg sticky-top shadow-sm"
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Braschlor" />
        </a>
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
                <a className="nav-link" href="#inicio">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre Nós
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marcas">
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
}

export default Header
