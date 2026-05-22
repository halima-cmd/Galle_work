// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import logo from '../../assets/images/logoG.svg'

// const navLinks = [
//   { label: 'Accueil',     path: '/' },
//   { label: 'À propos',    path: '/a-propos' },
//   { label: 'Formations',  path: '/formations' },
//   { label: 'Webinaires',  path: '/webinaires' },
//   { label: 'Actualités',  path: '/actualites' },
// ]

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const { pathname } = useLocation()

//   const isActive = (path) =>
//     path === '/' ? pathname === '/' : pathname.startsWith(path)

//   return (
//     <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
//       <div className="mx-auto w-[90vw] px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Galle Work Logo" className="h-10 w-auto object-contain" />
//         </Link>

//         {/* Nav desktop */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map(({ label, path }) => (
//             <Link
//               key={path}
//               to={path}
//               className={`font-medium transition-all duration-200 relative py-1
//                 ${isActive(path)
//                   ? 'text-blue-600'
//                   : 'text-gray-700 hover:text-blue-600'
//                 }`}
//             >
//               {label}
//               {/* Trait souligné actif */}
//               {isActive(path) && (
//                 <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Actions desktop */}
//         <div className="hidden md:flex items-center gap-3">
//           <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
//             FR
//           </button>
//           <Link
//             to="/login"
//             className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors"
//           >
//             Connexion
//           </Link>
//           <Link
//             to="/login"
//             className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
//           >
//             S'inscrire
//           </Link>
//         </div>

//         {/* Burger mobile */}
//         <button
//           className="md:hidden text-gray-700 text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Menu mobile */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
//           {navLinks.map(({ label, path }) => (
//             <Link
//               key={path}
//               to={path}
//               onClick={() => setMenuOpen(false)}
//               className={`font-medium py-3 px-3 rounded-xl transition-colors
//                 ${isActive(path)
//                   ? 'text-blue-600 bg-blue-50'
//                   : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//             >
//               {label}
//             </Link>
//           ))}
//           <div className="flex gap-3 pt-3 mt-1 border-t border-gray-100">
//             <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full text-center text-sm font-medium">
//               Connexion
//             </Link>
//             <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-full text-center text-sm font-medium">
//               S'inscrire
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import logo from '../../assets/images/logoG.svg'

const navLinks = [
  { label: 'Accueil',    path: '/'           },
  { label: 'À propos',   path: '/a-propos'   },
  { label: 'Formations', path: '/formations' },
  { label: 'Webinaires', path: '/webinaires' },
  { label: 'Actualités', path: '/actualites' },
]

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [dropOpen,    setDropOpen]    = useState(false)
  const { pathname }                  = useLocation()
  const navigate                      = useNavigate()
  const { user, token, role, logout } = useAuthStore()

  const isActive = path =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const handleLogout = () => {
    logout()
    setDropOpen(false)
    setMenuOpen(false)
    navigate('/')
  }

  const dashboardPath = role === 'ROLE_ADMIN' ? '/admin' : '/apprenant'
  const initiale      = user?.nom?.charAt(0)?.toUpperCase() || '?'

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="mx-auto w-[90vw] px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="Galle Work Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* ── Nav desktop ── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium transition-all duration-200 relative py-1 text-sm
                ${isActive(path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {label}
              {isActive(path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          ))}

          {/* Dashboard link si connecté */}
          {token && (
            <Link
              to={dashboardPath}
              className={`font-medium transition-all duration-200 relative py-1 text-sm
                ${isActive(dashboardPath) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {role === 'ROLE_ADMIN' ? '⚙️ Back-office' : ' Mon espace'}
              {isActive(dashboardPath) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          )}
        </nav>

        {/* ── Actions desktop ── */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 text-sm transition-colors">
            FR
          </button>

          {token ? (
            /* ── Utilisateur connecté — avatar + dropdown ── */
            <div className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {initiale}
                </div>
                <span className="text-sm font-medium text-gray-800 max-w-[100px] truncate">
                  {user?.nom?.split(' ')[0]}
                </span>
                <span className={`text-gray-400 text-xs transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Dropdown */}
              {dropOpen && (
                <>
                  {/* Overlay pour fermer */}
                  <div className="fixed inset-0 z-10" onClick={() => setDropOpen(false)} />

                  <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-20 overflow-hidden">
                    {/* Header dropdown */}
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                      <p className="font-semibold text-gray-900 text-sm truncate">{user?.nom}</p>
                      <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                      <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${
                        role === 'ROLE_ADMIN'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {role === 'ROLE_ADMIN' ? '🔑 Administrateur' : '👤 Apprenant'}
                      </span>
                    </div>

                    {/* Liens dropdown */}
                    <div className="py-2">
                      <Link
                        to={dashboardPath}
                        onClick={() => setDropOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <span>🏠</span>
                        {role === 'ROLE_ADMIN' ? 'Back-office' : 'Mon tableau de bord'}
                      </Link>

                      {role === 'ROLE_USER' && (
                        <>
                          <Link
                            to="/apprenant/profil"
                            onClick={() => setDropOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <span>👤</span> Mon profil
                          </Link>
                          <Link
                            to="/apprenant/certificats"
                            onClick={() => setDropOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <span>🏆</span> Mes certificats
                          </Link>
                        </>
                      )}

                      <Link
                        to="/formations"
                        onClick={() => setDropOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <span>📚</span> Catalogue formations
                      </Link>
                    </div>

                    {/* Déconnexion */}
                    <div className="border-t border-gray-100 py-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <span>🚪</span> Déconnexion
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* ── Non connecté ── */
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 text-sm transition-colors"
              >
                Connexion
              </Link>
              <Link
                to="/inscription"
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                S'inscrire
              </Link>
            </>
          )}
        </div>

        {/* ── Burger mobile ── */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Menu mobile ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">

          {/* User connecté mobile */}
          {token && (
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl mb-2">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {initiale}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{user?.nom}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </div>
            </div>
          )}

          {/* Liens nav */}
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`font-medium py-3 px-3 rounded-xl transition-colors text-sm
                ${isActive(path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {label}
            </Link>
          ))}

          {token && (
            <Link
              to={dashboardPath}
              onClick={() => setMenuOpen(false)}
              className={`font-medium py-3 px-3 rounded-xl transition-colors text-sm
                ${isActive(dashboardPath) ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {role === 'ROLE_ADMIN' ? '⚙️ Back-office' : '📚 Mon espace'}
            </Link>
          )}

          {/* Actions mobile */}
          <div className="pt-3 mt-1 border-t border-gray-100">
            {token ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-50 text-red-500 font-medium py-3 rounded-full text-sm border border-red-100"
              >
                🚪 Déconnexion
              </button>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full text-center text-sm font-medium hover:bg-gray-50"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-full text-center text-sm font-medium hover:bg-blue-700"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}