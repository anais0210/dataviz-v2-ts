import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Analyse from './pages/Analyse'
import Presentation from './pages/Presentation'

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <nav aria-label="Navigation principale" className="main-nav">
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/analyse" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                Analyse
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/presentation"
                className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
              >
                Présentation
              </NavLink>
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
