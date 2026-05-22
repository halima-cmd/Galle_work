import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import logo from '../../assets/images/logoG.svg'

export default function Login() {
  const navigate  = useNavigate()
  const login     = useAuthStore(s => s.login)

  const [form, setForm]         = useState({ email: '', password: '', remember: false })
  const [showPwd, setShowPwd]   = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // ── Simulation connexion (remplacer par appel API Spring Boot) ──
    await new Promise(r => setTimeout(r, 1000))

    // Utilisateur de test
    if (form.email === 'admin@gw.com' && form.password === 'admin123') {
      login({ nom: 'Admin', email: form.email, }, 'fake-jwt-admin', 'ROLE_ADMIN')
      navigate('/admin')
    } else if (form.email === 'user@gw.com' && form.password === 'user123') {
      login({ nom: 'Kara', email: form.email,  }, 'fake-jwt-user', 'ROLE_USER')
      navigate('/apprenant')
    } else {
      setError('Email ou mot de passe incorrect.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">

      {/* ── CÔTÉ GAUCHE — fond bleu marine ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[45%] p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0a1628 0%, #0d2045 50%, #0a1e5e 100%)' }}
      >
        {/* Cercles décoratifs */}
        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1d4ed8, transparent)' }} />
        <div className="absolute bottom-40 left-[-40px] w-60 h-60 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        {/* Logo + nom */}
        <div className="relative z-10">
          
   
        </div>

        {/* Features bas */}
     
      </div>

      {/* ── CÔTÉ DROIT — formulaire ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">

          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <img src={logo} alt="GalleWork" className="h-12 w-auto" />
          </div>

          {/* <h2 className="text-4xl font-bold text-gray-900 text-center">Connexion</h2> */}
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            Connectez-vous à votre compte pour accéder<br />à vos cours et contenus exclusifs.
          </p>

          {/* Erreur */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}

          {/* Hint de test */}
          <div className="bg-blue-50  text-blue-700 text-xs px-4 py-3 rounded-sm mb-5">
            <p className="font-semibold mb-1">Comptes de test :</p>
            <p>user@gallework-sports.com / user123</p>
            <p>admin@gallework-sports.com / admin123</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="relative">

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Adresse e-mail"
                required
                className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-sm text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Mot de passe */}
            <div className="relative">

              <input
                type={showPwd ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
                className="w-full pl-4 pr-12 py-2 border border-gray-200 rounded-sm text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPwd ? '' : ''}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              {/* <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="w-4 h-4 accent-blue-600 rounded"
                />
                <span className="text-sm text-gray-600">Se souvenir de moi</span>
              </label> */}
              <button type="button" className="text-blue-600 text-sm hover:underline">
                Mot de passe oublié ?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Connexion...
                </>
              ) : 'Se connecter'}
            </button>
          </form>

          {/* Séparateur */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-4 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuer avec Google
          </button>

          {/* Inscription */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Vous n'avez pas de compte ?{' '}
            <Link to="/inscription" className="text-blue-600 font-semibold hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}