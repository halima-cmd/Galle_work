import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import logo from '../../assets/images/logoG.svg'

export default function Inscription() {
  const navigate = useNavigate()
  const login    = useAuthStore(s => s.login)

  const [step, setStep]       = useState(1)
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm]       = useState({
    prenom: '', nom: '', email: '', telephone: '',
    password: '', confirm: '', accepte: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    setErrors(er => ({ ...er, [name]: '' }))
  }

  const validateStep1 = () => {
    const e = {}
    if (!form.prenom)    e.prenom    = 'Prénom requis'
    if (!form.nom)       e.nom       = 'Nom requis'
    if (!form.email)     e.email     = 'Email requis'
    if (!form.telephone) e.telephone = 'Téléphone requis'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.password || form.password.length < 6) e.password = 'Minimum 6 caractères'
    if (form.password !== form.confirm) e.confirm = 'Les mots de passe ne correspondent pas'
    if (!form.accepte) e.accepte = 'Vous devez accepter les conditions'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => { if (validateStep1()) setStep(2) }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validateStep2()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    login(
      { nom: `${form.prenom} ${form.nom}`, email: form.email, avatar: '' },
      'fake-jwt-new-user',
      'ROLE_USER'
    )
    navigate('/apprenant')
  }

  return (
    <div className="min-h-screen flex">

      {/* Gauche */}
      <div
        className="hidden lg:flex flex-col justify-between w-[45%] p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0a1628 0%, #0d2045 50%, #0a1e5e 100%)' }}
      >
        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1d4ed8, transparent)' }} />

        <div className="relative z-10">
        
          <p className="text-blue-200 text-sm mt-6 leading-relaxed">
            Rejoignez plus de 5 000 professionnels du sport africain qui font confiance à GalléWork Sports pour leur développement.
          </p>
        </div>

        <div className="relative z-10 space-y-4">
          {['Accès à toutes les formations', 'Certificats reconnus', 'Communauté de professionnels', 'Support personnalisé'].map(f => (
            <div key={f} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 text-xs">✓</span>
              <span className="text-blue-100 text-sm">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Droite */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">


          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Créer un compte</h1>
          <p className="text-gray-500 text-sm text-center mb-6">
            Rejoignez GalléWork Sports et accédez à vos formations.
          </p>

          {/* Steps */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2].map(s => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {step > s ? '✓' : s}
                </div>
                <div className={`text-xs font-medium ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}>
                  {s === 1 ? 'Informations' : 'Sécurité'}
                </div>
                {s < 2 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      name="prenom" value={form.prenom} onChange={handleChange}
                      placeholder="Prénom"
                      className={`w-full px-4 py-4 border rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all ${errors.prenom ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
                  </div>
                  <div>
                    <input
                      name="nom" value={form.nom} onChange={handleChange}
                      placeholder="Nom"
                      className={`w-full px-4 py-4 border rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all ${errors.nom ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">✉️</span>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="Adresse e-mail"
                      className={`w-full pl-11 pr-4 py-4 border rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📱</span>
                    <input
                      name="telephone" value={form.telephone} onChange={handleChange}
                      placeholder="Numéro de téléphone"
                      className={`w-full pl-11 pr-4 py-4 border rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all ${errors.telephone ? 'border-red-400' : 'border-gray-200'}`}
                    />
                  </div>
                  {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
                </div>
                <button
                  type="button" onClick={handleNext}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all"
                >
                  Continuer →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔒</span>
                  <input
                    type={showPwd ? 'text' : 'password'} name="password"
                    value={form.password} onChange={handleChange}
                    placeholder="Mot de passe (min. 6 caractères)"
                    className={`w-full pl-11 pr-12 py-4 border rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all ${errors.password ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  <button type="button" onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPwd ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔒</span>
                  <input
                    type="password" name="confirm"
                    value={form.confirm} onChange={handleChange}
                    placeholder="Confirmer le mot de passe"
                    className={`w-full pl-11 pr-4 py-4 border rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all ${errors.confirm ? 'border-red-400' : 'border-gray-200'}`}
                  />
                </div>
                {errors.confirm && <p className="text-red-500 text-xs">{errors.confirm}</p>}

                {/* Force du mot de passe */}
                {form.password && (
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${
                          form.password.length >= i * 3
                            ? i <= 1 ? 'bg-red-400' : i <= 2 ? 'bg-yellow-400' : i <= 3 ? 'bg-blue-400' : 'bg-green-500'
                            : 'bg-gray-200'
                        }`} />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">
                      {form.password.length < 4 ? 'Faible' : form.password.length < 7 ? 'Moyen' : form.password.length < 10 ? 'Fort' : 'Très fort'}
                    </p>
                  </div>
                )}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="accepte" checked={form.accepte} onChange={handleChange}
                    className="w-4 h-4 accent-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    J'accepte les{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">conditions d'utilisation</span>
                    {' '}et la{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">politique de confidentialité</span>
                  </span>
                </label>
                {errors.accepte && <p className="text-red-500 text-xs">{errors.accepte}</p>}

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex-1 border border-gray-200 text-gray-700 font-semibold py-4 rounded-xl hover:bg-gray-50 transition-all">
                    ← Retour
                  </button>
                  <button type="submit" disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Création...</>
                    ) : 'Créer mon compte'}
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Déjà un compte ?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  )
}