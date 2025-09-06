import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CardContext'

import Home from './pages/Home'
import ProdutosDetalhes from './pages/ProdutosDetalhes'
import Carrinho from './pages/Carrinho'
import Header from './components/Header'
import Footer from './components/Footer'
import ProdutoPage from './pages/Produto'
import LoginPage from './pages/LoginPage'
import { GlobalCss } from './styles'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/produtos" element={<ProdutosDetalhes />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}
