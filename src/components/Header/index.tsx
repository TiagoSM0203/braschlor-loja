import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HeaderBar } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../contexts/CardContext'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const { count } = useCart()
  const { isAuthenticated } = useAuth()

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
          <picture>
            <source type="image/avif" srcSet="/imgs/novo_logo_braschlor.avif" />
            <source type="image/webp" srcSet="/imgs/novo_logo_braschlor.webp" />
            <img
              src="/imgs/novo_logo_braschlor.webp"
              alt="Braschlor"
              loading="lazy"
            />
          </picture>
        </Link>

        <div className="d-flex justify-content-center align-items-center">
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
          {/* Carrinho sempre visível no mobile */}
          <div className="d-lg-none ms-2">
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
          </div>
        </div>

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
                <Link className="nav-link" to="/produtos">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/seja-parceiro">
                  Seja Parceiro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contato">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="navbar-nav ms-lg-auto align-items-center gap-2">
            <li className="nav-item">
              <Link
                to={isAuthenticated ? '/perfil' : '/login'}
                className="nav-link"
              >
                {isAuthenticated ? 'Seu Perfil' : 'Login'}
              </Link>
            </li>
            {/* Carrinho visível em telas grandes dentro do menu */}
            <li className="nav-item d-none d-lg-block">
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
