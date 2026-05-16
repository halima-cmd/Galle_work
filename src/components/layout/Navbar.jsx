import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logoG.svg'

const navLinks = [
  { label: 'Accueil',     path: '/' },
  { label: 'À propos',    path: '/a-propos' },
  { label: 'Formations',  path: '/formations' },
  { label: 'Webinaires',  path: '/webinaires' },
  { label: 'Actualités',  path: '/actualites' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="mx-auto w-[90vw] px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Galle Work Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium transition-all duration-200 relative py-1
                ${isActive(path)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              {label}
              {/* Trait souligné actif */}
              {isActive(path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
            FR
          </button>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors"
          >
            Connexion
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            S'inscrire
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`font-medium py-3 px-3 rounded-xl transition-colors
                ${isActive(path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 mt-1 border-t border-gray-100">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full text-center text-sm font-medium">
              Connexion
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-full text-center text-sm font-medium">
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}