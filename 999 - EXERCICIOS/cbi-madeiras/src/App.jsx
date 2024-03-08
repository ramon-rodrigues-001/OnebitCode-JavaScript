import './App.module.scss'
import Header from './components/header/Header'
import QuemSomos from './components/quemSomos/QuemSomos'
import Inicio from './components/inicio/Inicio'
import Prodrutos from './components/produtos/Produtos'

function App() {
  return (
    <>
      < Header />
      <main>
        < Inicio />
        < QuemSomos />
        < Prodrutos />
      </main>
    </>
  )
}

export default App
