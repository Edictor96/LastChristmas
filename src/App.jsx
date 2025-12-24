import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Theater from './pages/Theater'
import Puzzle from './pages/Puzzle'
import Confession from './pages/Confession'
import MusicPlayer from './components/MusicPlayer'

function Navigation() {
  const location = useLocation()
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/theater', label: 'Theater' },
    { path: '/puzzle', label: 'Puzzle' },
    { path: '/confession', label: 'Confession' }
  ]

  return (
    <nav className="nav">
      <div className="nav-container">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theater" element={<Theater />} />
            <Route path="/puzzle" element={<Puzzle />} />
            <Route path="/confession" element={<Confession />} />
          </Routes>
        </main>
        <MusicPlayer />
      </div>
    </Router>
  )
}

export default App