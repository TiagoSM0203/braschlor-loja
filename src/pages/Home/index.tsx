import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import Sobre from '../../components/SobreNos'
import Marcas from '../../components/Marcas'
import Produtos from '../../components/Produtos'
import Contato from '../../components/Contato'

const Home = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [hash])
  return (
    <>
      <Banner />
      <Sobre />
      <Marcas />
      <Produtos />
      <Contato />
    </>
  )
}

export default Home
