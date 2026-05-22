import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

const mesFormations = [
  {
    id: 1, title: "Management Sportif Professionnel",
    progress: 65, total: 32, done: 21, category: "Sport",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=180&fit=crop",
    nextLesson: "Gestion des budgets sportifs", paid: false,
  },
  {
    id: 2, title: "Coaching eSport Avancé",
    progress: 20, total: 48, done: 10, category: "eSport",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=180&fit=crop",
    nextLesson: "Analyse tactique avancée", paid: true, price: "150 000 XOF",
  },
  {
    id: 3, title: "Nutrition Sportive",
    progress: 100, total: 24, done: 24, category: "Sport",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=180&fit=crop",
    nextLesson: null, paid: true, price: "50 000 XOF",
  },
]

const sidebarLinks = [
  { icon: '🏠', label: 'Tableau de bord', path: '/apprenant',          active: true  },
  { icon: '📚', label: 'Mes formations',  path: '/apprenant/formations', active: false },
  { icon: '👤', label: 'Mon profil',      path: '/apprenant/profil',     active: false },
  { icon: '🏆', label: 'Certificats',     path: '/apprenant/certificats', active: false },
  { icon: '⚙️', label: 'Paramètres',     path: '/apprenant/parametres', active: false },
]

export default function ApprenantDashboard() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showPayModal, setShowPayModal] = useState(null)
  const [payStep, setPayStep] = useState(1)
  const [payMethod, setPayMethod] = useState('')

  const handleLogout = () => { logout(); navigate('/') }
  const completedCount = mesFormations.filter(f => f.progress === 100).length
  const avgProgress = Math.round(mesFormations.reduce((a, f) => a + f.progress, 0) / mesFormations.length)

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ── SIDEBAR ── */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 flex flex-col
        transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Galle</span>
            <span className="text-xl font-bold text-blue-600">Work</span>
          </Link>
          <p className="text-xs text-gray-400 mt-0.5">Espace apprenant</p>
        </div>

        {/* User */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              {user?.nom?.charAt(0) || 'U'}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">{user?.nom || 'Apprenant'}</p>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(l => (
            <Link key={l.path} to={l.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                l.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span>{l.icon}</span> {l.label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
            🚪 Déconnexion
          </button>
        </div>
      </aside>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── CONTENU PRINCIPAL ── */}
      <main className="flex-1 min-w-0">

        {/* Topbar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-700 text-xl" onClick={() => setSidebarOpen(true)}>☰</button>
            <div>
              <h1 className="font-bold text-gray-900">Tableau de bord</h1>
              <p className="text-xs text-gray-400">Bienvenue, {user?.nom?.split(' ')[0]} 👋</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative text-gray-500 hover:text-gray-700">
              🔔
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">2</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              {user?.nom?.charAt(0) || 'U'}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6 max-w-5xl">

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '📚', label: 'Formations inscrites', value: mesFormations.length, color: 'bg-blue-50 text-blue-600' },
              { icon: '✅', label: 'Formations terminées', value: completedCount,        color: 'bg-green-50 text-green-600' },
              { icon: '📈', label: 'Progression moyenne',  value: `${avgProgress}%`,    color: 'bg-purple-50 text-purple-600' },
              { icon: '🏆', label: 'Certificats obtenus',  value: completedCount,        color: 'bg-amber-50 text-amber-600' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 ${s.color}`}>
                  {s.icon}
                </div>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Mes formations */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-lg">Mes formations</h2>
              <Link to="/formations" className="text-blue-600 text-sm hover:underline">
                + Découvrir plus
              </Link>
            </div>

            <div className="space-y-4">
              {mesFormations.map(f => (
                <div key={f.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <img src={f.image} alt={f.title} className="w-full sm:w-40 h-32 sm:h-auto object-cover flex-shrink-0" />
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${f.category === 'Sport' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                            {f.category}
                          </span>
                          <h3 className="font-semibold text-gray-900 mt-1">{f.title}</h3>
                        </div>
                        {f.progress === 100 && (
                          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                            ✓ Terminé
                          </span>
                        )}
                      </div>

                      {/* Progression */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{f.done}/{f.total} leçons</span>
                          <span className="font-semibold text-gray-700">{f.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${f.progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                            style={{ width: `${f.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        {f.nextLesson && (
                          <p className="text-xs text-gray-500">
                            ▶ Prochaine : <span className="text-gray-700">{f.nextLesson}</span>
                          </p>
                        )}
                        <div className="flex gap-2 ml-auto">
                          {f.paid && (
                            <button
                              onClick={() => { setShowPayModal(f); setPayStep(1) }}
                              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-white text-xs font-semibold rounded-full hover:bg-amber-600 transition-colors"
                            >
                              💳 Payer {f.price}
                            </button>
                          )}
                          {f.progress === 100 ? (
                            <button className="flex items-center gap-1.5 px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded-full hover:bg-green-600 transition-colors">
                              📄 Télécharger certificat
                            </button>
                          ) : (
                            <Link to={`/formations/${f.id}`}
                              className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors">
                              Continuer →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* ── MODAL PAIEMENT ── */}
      {showPayModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">

            {/* Header modal */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">Paiement de la formation</p>
                <p className="text-blue-200 text-sm mt-0.5 line-clamp-1">{showPayModal.title}</p>
              </div>
              <button onClick={() => setShowPayModal(null)} className="text-white/70 hover:text-white text-xl">✕</button>
            </div>

            <div className="p-6">
              {/* Steps */}
              <div className="flex items-center gap-2 mb-6">
                {['Méthode', 'Détails', 'Confirmation'].map((s, i) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${payStep > i + 1 ? 'bg-green-500 text-white' : payStep === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {payStep > i + 1 ? '✓' : i + 1}
                    </div>
                    <span className={`text-xs ${payStep >= i + 1 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>{s}</span>
                    {i < 2 && <div className={`flex-1 h-0.5 ${payStep > i + 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              {/* Montant */}
              <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center mb-5">
                <span className="text-sm text-gray-600">Montant total</span>
                <span className="font-bold text-blue-700 text-lg">{showPayModal.price}</span>
              </div>

              {payStep === 1 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Choisissez votre méthode de paiement</p>
                  {[
                    { id: 'wave',        label: 'Wave',          icon: '🌊', desc: 'Paiement mobile rapide' },
                    { id: 'orangemoney', label: 'Orange Money',  icon: '🟠', desc: 'Mobile money Orange' },
                    { id: 'freemoney',   label: 'Free Money',    icon: '🔵', desc: 'Mobile money Free' },
                    { id: 'carte',       label: 'Carte bancaire', icon: '💳', desc: 'Visa / Mastercard' },
                  ].map(m => (
                    <button key={m.id} onClick={() => setPayMethod(m.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${payMethod === m.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <span className="text-2xl">{m.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{m.label}</p>
                        <p className="text-xs text-gray-500">{m.desc}</p>
                      </div>
                      {payMethod === m.id && <span className="ml-auto text-blue-600">✓</span>}
                    </button>
                  ))}
                  <button onClick={() => payMethod && setPayStep(2)} disabled={!payMethod}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-40 mt-2">
                    Continuer →
                  </button>
                </div>
              )}

              {payStep === 2 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    {payMethod === 'carte' ? 'Informations de carte' : 'Numéro de téléphone'}
                  </p>
                  {payMethod === 'carte' ? (
                    <>
                      <input placeholder="Numéro de carte" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" />
                      <div className="grid grid-cols-2 gap-3">
                        <input placeholder="MM/AA" className="px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" />
                        <input placeholder="CVV" className="px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" />
                      </div>
                      <input placeholder="Nom sur la carte" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" />
                    </>
                  ) : (
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📱</span>
                      <input placeholder="Ex: 77 123 45 67" className="w-full pl-11 pr-4 py-4 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500" />
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button onClick={() => setPayStep(1)} className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl text-sm font-medium hover:bg-gray-50">← Retour</button>
                    <button onClick={() => setPayStep(3)} className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700">Payer {showPayModal.price}</button>
                  </div>
                </div>
              )}

              {payStep === 3 && (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paiement réussi !</h3>
                  <p className="text-gray-500 text-sm mb-2">Votre accès à la formation a été activé.</p>
                  <p className="text-gray-400 text-xs mb-6">Un reçu a été envoyé à {user?.email}</p>
                  <button onClick={() => setShowPayModal(null)}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700">
                    Accéder à la formation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}