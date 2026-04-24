import { useState } from 'react'
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import './App.css'

const formations = [
  {
    id: 1,
    title: "Management Sportif Professionnel",
    category: "Sport",
    level: "Intermédiaire",
    price: "Gratuit",
    duration: "8 semaines",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Coaching eSport Avancé",
    category: "eSport",
    level: "Avancé",
    price: "150 000 XOF",
    duration: "12 semaines",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Nutrition Sportive",
    category: "Sport",
    level: "Débutant",
    price: "50 000 XOF",
    duration: "6 semaines",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Streaming et Contenu eSport",
    category: "eSport",
    level: "Intermédiaire",
    price: "100 000 XOF",
    duration: "10 semaines",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=250&fit=crop"
  }
]

const webinaires = [
  {
    id: 1,
    title: "L'avenir du Sport Digital",
    date: "25 Avril 2026",
    time: "14:00",
    speaker: "Dr. Marie"
  },
  {
    id: 2,
    title: "Carrières dans l'eSport",
    date: "28 Avril 2026",
    time: "16:30",
    speaker: "Alex"
  },
  {
    id: 3,
    title: "Entrepreneuriat Sportif",
    date: "2 Mai 2026",
    time: "10:00",
    speaker: "Sophie"
  }
]

const actualites = [
  {
    id: 1,
    title: "Les Métiers Émergents du Sport Digital",
    excerpt: "Découvrez les nouvelles opportunités professionnelles dans l'industrie du sport numérique.",
    date: "20 Avril 2026",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "eSport : Un Secteur en Pleine Expansion",
    excerpt: "Analyse du marché de l'eSport et des compétences recherchées par les recruteurs du secteur.",
    date: "18 Avril 2026",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Formation Continue : Clé du Succès Sportif",
    excerpt: "L'importance de la formation continue pour les professionnels du sport.",
    date: "15 Avril 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
  }
]

const partenaires = [
  "GameCorp", "SportTech", "StreamPro", "TeamBuilder", "Analytics+", "ChampionLeague"
]

// export default function App() {
  function App() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="d">
    <div className="min-h-screen bg-white font-sans">

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className=" mx-auto w-[90vw] px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">GalléWork Sport</span>
          </div>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Accueil','À propos','Formations','Webinaires','Actualités'].map(item => (
              <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
            FR
            </button>
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors">
              Connexion
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              S'inscrire
            </button>
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
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {['Accueil','À propos','Formations','Webinaires','Actualités'].map(item => (
              <a key={item} href="#" className="text-gray-700 font-medium py-1">
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full">Connexion</button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-full">S'inscrire</button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1440&h=500&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Développez vos compétences dans le sport et l'eSport
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Rejoignez la première plateforme éducative dédiée aux métiers
              du sport et de l'eSport. Formations certifiantes, webinaires
              exclusifs et opportunités de carrière.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                ▶ Commencer une formation
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
                Explorer les métiers
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ── PARTENAIRES ── */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl  mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partenaires.map(p => (
              <div key={p} className="flex items-center justify-center py-4 px-6 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                <span className="text-sm font-semibold text-gray-500">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÉSENTATION PLATEFORME ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl w-[90vw] mx-auto px-6">
          <div className=" mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Votre parcours vers l'excellence sportive
            </h2>
            <p className=" text-gray-600 max-w-3xl mx-auto">
              GalléWork Sport vous accompagne dans votre développement
              professionnel avec des formations de qualité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: '', color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Se former',
                desc: 'Accédez à des formations certifiantes conçues par des experts du sport et de leSport.' },
              { icon: '', color: 'bg-green-100', iconColor: 'text-green-600', title: 'Participer',
                desc: 'Rejoignez nos webinaires exclusifs et événements networking avec des professionnels.' },
              { icon: '', color: 'bg-purple-100', iconColor: 'text-purple-600', title: 'Découvrir',
                desc: 'Explorez les opportunités de carrière et les dernières tendances du secteur.' }
            ].map(card => (
              <div key={card.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mb-6`}>
                  <span className="">{card.icon}</span>
                </div>
                <h3 className=" font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATIONS POPULAIRES ── */}
      <section className="py-20">
        <div className="max-w-7xl w-[90vw] mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Formations populaires</h2>
              <p className=" text-gray-600">Découvrez nos cours les plus appréciés</p>
            </div>
            <button className="text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Voir toutes les formations
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map(f => (
              <div key={f.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img src={f.image} alt={f.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      f.category === 'Sport' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {f.category}
                    </span>
                    <span className="text-xs text-gray-500">{f.level}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{f.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">⏱ {f.duration}</span>
                    <span className={`font-bold ${f.price === 'Gratuit' ? 'text-green-600' : 'text-blue-600'}`}>
                      {f.price}
                    </span>
                  </div>
                  <button className=" text-blue-600 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                    Voir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBINAIRES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl w-[90vw] mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Webinaires à venir</h2>
            <p className=" text-gray-600">Ne manquez pas nos prochains événements exclusifs</p>
          </div>
          <button className="text-blue-600 font-medium hover:underline">
              Voir tous les webinaires →
            </button>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {webinaires.map(w => (
              <div key={w.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
    
                  <span className="text-sm font-medium">{w.date} • {w.time}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{w.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 mb-5">
               
                  <span className="text-sm">Par {w.speaker}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  S'inscrire gratuitement
                </button>
              </div>
            ))}
          </div>
        
        </div>
      </section>

      {/* ── ACTUALITÉS ── */}
      <section className="py-20">
        <div className="max-w-7xl w-[90vw] mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités récentes</h2>
            <p className=" text-gray-600">Restez informé des dernières tendances</p>
          </div>
          <button className="text-blue-600 font-medium hover:underline">
              Lire plus d'actualités →
            </button>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {actualites.map(a => (
              <div key={a.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{a.date}</p>
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Lire l'article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl w-[90vw] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Restez connecté avec GalléWork Sport
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Recevez nos dernières formations et actualités directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              S'abonner
            </button>
          </div>
          <div className="flex justify-center gap-6 text-2xl">
            {[].map((icon, i) => (
              <button key={i} className="text-blue-200 hover:text-white transition-colors">{icon}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl w-[90vw] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold">GalléWork Sport</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La première plateforme éducative dédiée aux métiers du sport et de l'eSport en Afrique.
              </p>
            </div>
            {[
              { title: 'À propos', links: ['Qui sommes-nous ?','Nos services','Partenaires','Carrières'] },
              { title: 'Formations', links: ['Catalogue','Formations gratuites','Certifications','Webinaires'] },
              { title: 'Support', links: ['FAQ','Contact','Aide','Confidentialité'] }
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-lg font-semibold mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 GalléWork Sport. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
    </div>
  )
};
export default App
