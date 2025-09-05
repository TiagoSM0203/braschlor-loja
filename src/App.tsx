import Banner from './components/Banner'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Header from './components/Header'
import Marcas from './components/Marcas'
import Produtos from './components/Produtos'
import Sobre from './components/SobreNos'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
      <Sobre />
      <Marcas />
      <Produtos />
      <Contato />
      <Footer />
    </>
  )
}

export default App
