// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './ComumStyles/geralStyles.scss'
import Header from './components/header/Header.jsx';
import Vitrine from './components/vitrine/Vitrine.jsx';
import PaginaBackend from './paginaBackend/PaginaBackend.jsx';
import Menu from './components/munu/Menu.jsx';
import Produto from './components/produto/Produto.jsx';

function App() {
  const [menuState, setMenuState] = useState(false)

  const mudarStateMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <div>
      < Header mudarStateMenu = {mudarStateMenu} />
      < Menu
        menuState = {menuState}
      />


      <main>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    < Vitrine />
                } />
                <Route path="/backend" element={
                    < PaginaBackend />
                } />
                <Route path="/produto/:id" element={
                    <Produto/>
                } />
            </Routes>
        </BrowserRouter>
      </main>
      



      {/* {!pgBackend ? (
          <>
            < Header mudarStateMenu = {mudarStateMenu} />
            < Menu
              mudarParaBackend = {mudarParaBackend}
              menuState = {menuState}
            />
            < Vitrine />
          </>
          ) : (
            <>
              < Header mudarStateMenu = {mudarStateMenu} />
              < Menu
                mudarParaBackend = {mudarParaBackend}
                menuState = {menuState}
              />
              < PaginaBackend />
            </>
          )} */}
    </div>
  )
}

export default App
