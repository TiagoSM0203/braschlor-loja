import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CardContext'

import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalCss } from './styles'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'))
const ProdutosDetalhes = lazy(() => import('./pages/ProdutosDetalhes'))
const Carrinho = lazy(() => import('./pages/Carrinho'))
const ProdutoPage = lazy(() => import('./pages/Produto'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ContatoPage = lazy(() => import('./pages/Contato'))

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>

        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/produtos" element={<ProdutosDetalhes />} />
            <Route path="/produto/:id" element={<ProdutoPage />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </CartProvider>
    </BrowserRouter>
  )
}
