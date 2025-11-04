import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Analyse from './pages/Analyse'
import MentionsLegales from './pages/MentionsLegales'

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
            
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/analyse" element={<Analyse />} />
          
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>

      <footer className="site-footer" aria-label="Pied de page">
        <div className="footer-grid">
          <section className="footer-col">
            <h4>À propos du projet</h4>
            <p className="footer-muted">
              Projet réalisé pour donner un exemple pédagogique auprès d'une promotion Ada Tech School.
            </p>
          </section>

          <section className="footer-col">
            <h4>Ressources utiles</h4>
            <ul>
              <li>
                <a href="https://checklist-rncp-6-concepteur-develop.vercel.app/" rel="noreferrer">Checklist RNCP 6 - CDA</a>
              </li>
              <li>
                <a href="https://checklist-rncp5-dwwm.vercel.app/" rel="noreferrer">Checklist RNCP 5 - DWWM</a>
              </li>
              <li>
                <NavLink to="/mentions-legales" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                  Informations légales
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="footer-col">
            <h4>Crédits</h4>
            <p className="footer-muted">
              Créé par Anaïs –{' '}
              <a href="https://anais-formation-tech.fr" target="_blank" rel="noreferrer">
                anais-formation-tech.fr
              </a>
            </p>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default App
