import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Analyse from './pages/Analyse'
import Presentation from './pages/Presentation'

function App() {
  return (
    <div className="App">
      <header>
        <nav aria-label="Navigation principale">
          <ul className="menu">
            <li>
              <NavLink to="/" end>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/analyse">Analyse</NavLink>
            </li>
            <li>
              <NavLink to="/presentation">Présentation</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/analyse" element={<Analyse />} />
          <Route path="/presentation" element={<Presentation />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
