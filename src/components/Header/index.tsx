import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HeaderBar } from './styles'
import logo from '../../assets/images/novo_logo_braschlor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../contexts/CardContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const styles = window.getComputedStyle(el)
      const mt = parseFloat(styles.marginTop) || 0
      // altura visual do header (sem incluir o margin-top)
      const h = rect.height
      // expõe como variáveis CSS globais
      document.documentElement.style.setProperty('--header-h', `${h}px`)
      document.documentElement.style.setProperty('--header-gap', `${mt}px`)
    }

    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
    }
  }, [scrolled])

  return (
    <HeaderBar
      ref={ref}
      $scrolled={scrolled}
      className="navbar navbar-expand-lg shadow-sm"
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Braschlor" />
        </Link>

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
                <Link className="nav-link" to="/">
                  Início
                </Link>
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
                <Link className="nav-link" to="/produtos">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <ul className="navbar-nav ms-lg-auto align-items-center gap-2">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/carrinho" className="nav-link p-0">
                <div className="card-carrinho d-flex align-items-center">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {count > 0 && (
                    <div className="carrinho-number">
                      <span>{count}</span>
                    </div>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderBar>
  )
}

export default Header
