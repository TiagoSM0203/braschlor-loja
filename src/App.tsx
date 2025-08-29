import Header from './components/Header'
import { GlobalCss, Contaiener } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Contaiener>
        <Header />
      </Contaiener>
    </>
  )
}

export default App
