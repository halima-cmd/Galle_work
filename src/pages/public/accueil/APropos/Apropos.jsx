import { Link } from 'react-router-dom'

const stats = [
  { value: '5 000+', label: 'Apprenants formés' },
  { value: '50+',    label: 'Formations disponibles' },
  { value: '30+',    label: 'Formateurs experts' },
  { value: '15+',    label: 'Pays africains' },
]

const valeurs = [
  {
    icon: '🎯',
    title: 'Excellence',
    desc: 'Nous sélectionnons rigoureusement nos formateurs pour garantir un contenu de qualité internationale adapté au contexte africain.',
  },
  {
    icon: '🌍',
    title: 'Accessibilité',
    desc: 'Nous croyons que chaque professionnel du sport en Afrique mérite un accès à une formation de qualité, quel que soit son niveau ou sa localisation.',
  },
  {
    icon: '🤝',
    title: 'Communauté',
    desc: 'Au-delà des formations, nous construisons un réseau de professionnels du sport africain soudé et solidaire.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Nous intégrons les dernières tendances du sport digital et de l\'eSport dans nos programmes pour préparer les talents de demain.',
  },
]

const equipe = [
  {
    name: 'Mouhammadou Karamoko Baldé',
    role: 'Fondateur & CEO',
    bio: 'Ancien directeur sportif avec 3 ans d\'expérience en management sportif africain.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Aminata Diallo',
    role: 'Directrice Pédagogique',
    bio: 'Docteure en sciences du sport, ancienne formatrice à l\'UCAD de Dakar.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Moussa Koné',
    role: 'Responsable eSport',
    bio: 'Pionnier de l\'eSport en Afrique de l\'Ouest, coach de plusieurs équipes nationales.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Fatou Sow',
    role: 'Responsable Partenariats',
    bio: 'Ex-consultante en développement sportif pour plusieurs fédérations africaines.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
]

// const partenaires = [
//   'CAF', 'COSAFA', 'Sport Africa', 'FIFA Foundation', 'Orange Afrique', 'MTN Sports'
// ]

const etapes = [
  { year: '2020', title: 'Création de GalléWork Sport', desc: 'Lancement de la plateforme avec 5 formations pilotes au Sénégal.' },
  { year: '2021', title: 'Expansion régionale', desc: 'Ouverture aux marchés ivoirien, malien et guinéen. 500 premiers apprenants.' },
  { year: '2022', title: 'Lancement eSport', desc: 'Création du département eSport et premiers partenariats avec des équipes professionnelles.' },
  { year: '2023', title: 'Certification internationale', desc: 'Obtention de la reconnaissance par la Confédération Africaine de Football.' },
  { year: '2024', title: '5 000 apprenants', desc: 'Franchissement du cap des 5 000 apprenants formés dans 15 pays africains.' },
  { year: '2026', title: 'Aujourd\'hui', desc: 'Leader de la formation sportive en ligne en Afrique francophone.' },
]

export default function APropos() {
  return (
    <div className="min-h-screen bg-white">

      <section className=" py-20 px-20"
       style={{ background: 'linear-gradient(145deg, #0a1628 0%, #0d2045 50%, #0a1e5e 100%)' }}>

<div className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1d4ed8, transparent)' }} />
        <div className="absolute bottom-40 left-[-40px] w-60 h-60 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="max-w-7xl w-[90vw] mx-auto  text-white">
          {/* <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Notre histoire
          </span> */}
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Former les champions du sport africain de demain
          </h1> */}
          <p className="text-xl text-blue-100 leading-relaxed max-w-7xl w-[90vw] mx-auto mb-8">
            GalléWork Sport est la première plateforme éducative dédiée aux métiers du sport et de l'eSport en Afrique. Nous croyons que le talent africain mérite les meilleures formations.
            GalléWork Sport est la première plateforme éducative dédiée aux métiers du sport et de l'eSport en Afrique. Nous croyons que le talent africain mérite les meilleures formations.
 
          </p>
          {/* <Link
            to="/formations"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Découvrir nos formations
          </Link> */}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl w-[90vw] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-blue-600 mb-1">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl w-[90vw] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Notre mission</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">
                Démocratiser l'accès à la formation sportive de qualité
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Créée en 2020 à Dakar, GalléWork Sport est née d'un constat simple : les professionnels du sport africain n'avaient pas accès aux mêmes ressources de formation que leurs homologues européens ou américains.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Notre plateforme propose des formations certifiantes conçues par des experts africains et internationaux, adaptées aux réalités et aux opportunités du marché sportif africain. Du management sportif à l'eSport en passant par la nutrition et le coaching, nous couvrons l'ensemble des métiers du sport moderne.
              </p>
              <Link
                to="/formations"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
              >
                Voir nos formations →
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="Mission GalléWork Sport"
                className="rounded-2xl w-full object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl w-[90vw] mx-auto">
          <div className=" mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Ce qui nous guide</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Nos valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                {/* <span className="text-3xl mb-4 block">{v.icon}</span> */}
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl w-[90vw] mx-auto">
          <div className=" mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Notre parcours</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Notre histoire</h2>
          </div>
          {/* <div className="relative">
        
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-8">
              {etapes.map((e, i) => (
                <div key={i} className="flex gap-6 items-start relative">
                
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600">{e.year}</span>
                  </div>
            
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 z-10 ${i === etapes.length - 1 ? 'bg-blue-600 border-blue-600' : 'bg-white border-blue-300'}`} />
         
                  <div className="flex-1 pb-2">
                    <p className="font-semibold text-gray-900 text-sm">{e.title}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
             <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Créée en 2020 à Dakar, GalléWork Sport est née d'un constat simple : les professionnels du sport africain n'avaient pas accès aux mêmes ressources de formation que leurs homologues européens ou américains.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Notre plateforme propose des formations certifiantes conçues par des experts africains et internationaux, adaptées aux réalités et aux opportunités du marché sportif africain. Du management sportif à l'eSport en passant par la nutrition et le coaching, nous couvrons l'ensemble des métiers du sport moderne.
              </p>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl w-[90vw] mx-auto">
          <div className="mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Les visages derrière la plateforme</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Notre équipe</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map(m => (
              <div key={m.name} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <p className="font-bold text-gray-900">{m.name}</p>
                <p className="text-blue-600 text-xs font-medium mb-3">{m.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      {/* <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Ils nous font confiance</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-10">Nos partenaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partenaires.map(p => (
              <div key={p} className="bg-gray-50 border border-gray-100 rounded-xl py-4 px-3 flex items-center justify-center hover:shadow-sm hover:border-blue-200 transition-all">
                <span className="text-sm font-bold text-gray-500">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA FINAL ── */}
      {/* <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez la communauté GalléWork Sport
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Plus de 5 000 professionnels du sport africain ont déjà fait confiance à nos formations. C'est votre tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/formations"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Voir les formations
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Créer un compte gratuit
            </Link>
          </div>
        </div>
      </section> */}

    </div>
  )
}