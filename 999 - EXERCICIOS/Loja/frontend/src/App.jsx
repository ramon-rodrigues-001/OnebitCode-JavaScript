// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './ComumStyles/geralStyles.scss'
import Header from './components/header/Header.jsx';
import Vitrine from './components/vitrine/Vitrine.jsx';
import PaginaBackend from './paginaBackend/PaginaBackend.jsx';

function App() {
  const [pgBackend, setpgBackend] = useState(false)

  const mudarParaBackend = () => {
    setpgBackend(!pgBackend)
  }

  return (
    <dv>
      {!pgBackend ? (
          <>
            < Header mudarParaBackend = {mudarParaBackend}/>
            < Vitrine />
          </>
          ) : (
            <>
              < Header mudarParaBackend = {mudarParaBackend}/>
              < PaginaBackend />
            </>
          )}
    </dv>
  )
}

export default App
