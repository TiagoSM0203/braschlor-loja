import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import Sobre from '../../components/SobreNos'
import Marcas from '../../components/Marcas'
import Produtos from '../../components/Produtos'
import Contato from '../../components/Contato'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // Usa scroll-margin-top do alvo para compensar o header
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return (
    <>
      <Banner />
      <Produtos />
      <Marcas />
      <Sobre />
      <Contato />
    </>
  )
}

export default Home
