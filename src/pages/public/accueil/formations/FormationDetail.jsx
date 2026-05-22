import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const formations = [
  {
    id: 1,
    title: "Management Sportif Professionnel",
    category: "Sport",
    level: "Intermédiaire",
    price: "Gratuit",
    duration: "8 semaines",
    effortPerWeek: "3-5h/semaine",
    language: "Français",
    certified: "Inclus",
    prerequisites: "Aucun",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=400&fit=crop",
    nextSession: "29 Avril 2026",
    description: `Le management sportif professionnel est un secteur d'activité complexe et stratégique qui nécessite des compétences spécialisées. Cette formation vous prépare à exceller dans la gestion d'organisations sportives, qu'il s'agisse de clubs professionnels, de fédérations, d'entreprises du secteur sportif ou d'événements majeurs.

Vous développerez une vision globale du management sportif en abordant les aspects humains, financiers, marketing et juridiques. Notre approche pédagogique combine théorie et pratique avec des études de cas réels du marché africain et international.

À l'issue de cette formation, vous serez capable de diriger des équipes, élaborer des stratégies marketing, gérer des budgets complexes et naviguer dans l'environnement réglementaire du sport professionnel. Vous rejoindrez un réseau de professionnels qualifiés et reconnus dans l'industrie sportive.`,
    objectives: [
      "Maîtriser les fondamentaux du management dans l'industrie sportive moderne",
      "Développer des compétences de leadership et de gestion d'équipes performantes",
      "Élaborer et mettre en œuvre des stratégies marketing et communication efficaces",
      "Gérer les aspects financiers et budgétaires d'une organisation sportive",
      "Comprendre le cadre juridique et réglementaire du sport professionnel",
      "Intégrer les innovations technologiques dans la gestion sportive",
      "Analyser et résoudre des problématiques complexes du secteur sportif",
      "Construire et maintenir des partenariats stratégiques durables",
    ],
    program: [
      {
        id: 1,
        title: "Introduction au Management Sportif",
        duration: "1 semaine",
        lessons: 5,
        items: [
          "Histoire et évolution du management sportif",
          "Les acteurs clés de l'industrie sportive",
          "Enjeux économiques du sport moderne",
          "Éthique et déontologie professionnelle",
          "Cas d'étude : Grands clubs européens",
        ],
      },
      {
        id: 2,
        title: "Gestion d'Équipes et Leadership",
        duration: "2 semaines",
        lessons: 8,
        items: [],
      },
      {
        id: 3,
        title: "Marketing et Communication Sportive",
        duration: "1 semaine",
        lessons: 6,
        items: [],
      },
      {
        id: 4,
        title: "Gestion Financière et Budgétaire",
        duration: "1.5 semaines",
        lessons: 6,
        items: [],
      },
      {
        id: 5,
        title: "Droit du Sport et Réglementation",
        duration: "1 semaine",
        lessons: 4,
        items: [],
      },
      {
        id: 6,
        title: "Innovation et Technologies",
        duration: "1.5 semaines",
        lessons: 3,
        items: [],
      },
    ],
    trainer: {
      name: "Dr. Kwame Asante",
      role: "Expert en Management Sportif & Ancien Directeur Général CAF",
      bio: "Fort de plus de 15 ans d'expérience dans l'industrie sportive africaine, Dr. Asante a occupé des postes de direction dans plusieurs organisations sportives majeures. Ancien Directeur Général adjoint de la CAF, il a également conseillé de nombreux clubs professionnels et fédérations nationales.",
      tags: ["Management Sportif", "Leadership", "Stratégie", "Gouvernance"],
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    },
    testimonials: [
      {
        name: "Sarah Koné",
        role: "Directrice Marketing – FC Abidjan",
        stars: 5,
        text: "Cette formation m'a donné toutes les clés pour exceller dans le management sportif. Le contenu est riche et les cas pratiques très pertinents pour le marché africain.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=48&h=48&fit=crop&crop=face",
      },
      {
        name: "Ahmed Diallo",
        role: "Manager Général – Sports Academy",
        stars: 5,
        text: "Excellente approche pédagogique ! J'ai pu appliquer immédiatement les concepts appris dans ma structure. Les formateurs sont des experts reconnus du secteur.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
      },
      {
        name: "Marie Ouattara",
        role: "Consultante en Sport Business",
        stars: 4,
        text: "Formation complète qui couvre tous les aspects du management sportif moderne. Les outils fournis sont directement utilisables en entreprise.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
      },
    ],
    faq: [
      { q: "Quels sont les prérequis pour cette formation ?", a: "Aucun prérequis particulier n'est nécessaire. La formation est ouverte à tous les profils souhaitant évoluer dans le management sportif." },
      { q: "La formation est-elle vraiment gratuite ?", a: "Oui, cette formation est entièrement gratuite grâce au soutien de nos partenaires institutionnels." },
      { q: "Puis-je suivre la formation à mon rythme ?", a: "Absolument. Tous les contenus sont disponibles en accès libre 24h/24 et 7j/7." },
      { q: "Quel type de certificat vais-je obtenir ?", a: "Un certificat de completion signé par GalléWork Sport et reconnu par nos partenaires du secteur." },
      { q: "Y'a-t-il des sessions en direct ?", a: "Oui, des webinaires live sont organisés chaque semaine avec les formateurs." },
      { q: "Puis-je accéder à la formation depuis mon mobile ?", a: "Oui, la plateforme est entièrement responsive et accessible sur tous vos appareils." },
    ],
    advantages: [
      "32 leçons vidéo HD",
      "Ressources téléchargeables",
      "Accès à vie",
      "Certificat de complétion",
      "Support communautaire",
    ],
  },
  {
    id: 2,
    title: "Coaching eSport Avancé",
    category: "eSport",
    level: "Avancé",
    price: "150 000 XOF",
    duration: "12 semaines",
    effortPerWeek: "5-8h/semaine",
    language: "Français",
    certified: "Inclus",
    prerequisites: "Expérience gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop",
    nextSession: "5 Mai 2026",
    description: `Formation avancée pour devenir coach eSport professionnel. Maîtrisez les stratégies de jeu, la psychologie sportive appliquée au gaming et la gestion d'équipes compétitives.`,
    objectives: [
      "Maîtriser les techniques de coaching eSport de haut niveau",
      "Développer des stratégies de jeu adaptées à chaque équipe",
      "Gérer la performance mentale et physique des joueurs",
      "Analyser les données de match pour optimiser les performances",
    ],
    program: [
      { id: 1, title: "Fondamentaux du coaching eSport", duration: "2 semaines", lessons: 8, items: [] },
      { id: 2, title: "Psychologie et performance", duration: "3 semaines", lessons: 10, items: [] },
      { id: 3, title: "Analyse tactique et stratégie", duration: "4 semaines", lessons: 12, items: [] },
      { id: 4, title: "Gestion d'équipe professionnelle", duration: "3 semaines", lessons: 9, items: [] },
    ],
    trainer: {
      name: "Alex Martin",
      role: "Ex-Coach professionnel League of Legends",
      bio: "Ancien coach de l'équipe nationale française d'eSport, Alex Martin a accompagné plusieurs équipes jusqu'aux championnats mondiaux. Il partage son expertise unique en coaching de haut niveau.",
      tags: ["eSport", "Coaching", "Stratégie", "Performance"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    testimonials: [
      {
        name: "Lamine Traoré",
        role: "Coach – Team Dakar Gaming",
        stars: 5,
        text: "Formation exceptionnelle ! J'ai appris des méthodes que j'applique directement avec mon équipe. Résultats visibles dès la première semaine.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face",
      },
    ],
    faq: [
      { q: "Quel niveau de jeu faut-il avoir ?", a: "Un niveau intermédiaire à avancé est recommandé pour tirer le meilleur parti de cette formation." },
      { q: "La formation couvre quels jeux ?", a: "La formation est centrée sur les principes universels du coaching, applicables à tous les jeux compétitifs." },
    ],
    advantages: [
      "48 leçons vidéo HD",
      "Sessions live hebdomadaires",
      "Accès à vie",
      "Certificat professionnel",
      "Communauté privée Discord",
    ],
  },
  {
    id: 3,
    title: "Nutrition Sportive",
    category: "Sport",
    level: "Débutant",
    price: "50 000 XOF",
    duration: "6 semaines",
    effortPerWeek: "2-3h/semaine",
    language: "Français",
    certified: "Inclus",
    prerequisites: "Aucun",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=400&fit=crop",
    nextSession: "12 Mai 2026",
    description: `Comprendre l'alimentation adaptée aux sportifs. Cette formation vous enseigne les principes fondamentaux de la nutrition sportive pour optimiser vos performances et votre récupération.`,
    objectives: [
      "Comprendre les besoins nutritionnels des sportifs",
      "Élaborer des plans alimentaires personnalisés",
      "Optimiser la récupération par l'alimentation",
      "Éviter les carences et blessures liées à la nutrition",
    ],
    program: [
      { id: 1, title: "Bases de la nutrition sportive", duration: "1 semaine", lessons: 5, items: [] },
      { id: 2, title: "Macronutriments et micronutriments", duration: "2 semaines", lessons: 7, items: [] },
      { id: 3, title: "Planification alimentaire", duration: "2 semaines", lessons: 6, items: [] },
      { id: 4, title: "Supplémentation et récupération", duration: "1 semaine", lessons: 4, items: [] },
    ],
    trainer: {
      name: "Dr. Sophie Laurent",
      role: "Nutritionniste du sport – Fédération Sénégalaise de Football",
      bio: "Docteure en nutrition, Sophie Laurent accompagne depuis 10 ans les athlètes de haut niveau en Afrique de l'Ouest. Elle a travaillé avec plusieurs sélections nationales africaines.",
      tags: ["Nutrition", "Sport", "Santé", "Performance"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    },
    testimonials: [
      {
        name: "Fatou Sow",
        role: "Athlète – Équipe nationale d'athlétisme",
        stars: 5,
        text: "Grâce à cette formation, j'ai complètement revu mon alimentation. Mes performances se sont améliorées de façon significative.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=48&h=48&fit=crop&crop=face",
      },
    ],
    faq: [
      { q: "Faut-il être nutritionniste pour suivre cette formation ?", a: "Non, la formation est accessible à tous, sportifs amateurs ou professionnels." },
      { q: "Reçoit-on des plans alimentaires personnalisés ?", a: "Oui, des templates de plans alimentaires sont fournis et personnalisables selon votre sport." },
    ],
    advantages: [
      "24 leçons vidéo HD",
      "Plans alimentaires inclus",
      "Accès à vie",
      "Certificat de complétion",
      "Support nutritionniste",
    ],
  },
  {
    id: 4,
    title: "Streaming et Contenu eSport",
    category: "eSport",
    level: "Intermédiaire",
    price: "100 000 XOF",
    duration: "10 semaines",
    effortPerWeek: "4-6h/semaine",
    language: "Français",
    certified: "Inclus",
    prerequisites: "Bases informatiques",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200&h=400&fit=crop",
    nextSession: "20 Mai 2026",
    description: `Créer du contenu et développer son audience gaming. Apprenez à streamer professionnellement, à créer du contenu engageant et à monétiser votre présence en ligne dans l'univers eSport.`,
    objectives: [
      "Maîtriser les outils de streaming (OBS, Streamlabs)",
      "Créer du contenu engageant pour les réseaux sociaux",
      "Développer et fidéliser une communauté en ligne",
      "Monétiser son contenu et trouver des sponsors",
    ],
    program: [
      { id: 1, title: "Setup et outils de streaming", duration: "2 semaines", lessons: 8, items: [] },
      { id: 2, title: "Création de contenu et montage", duration: "3 semaines", lessons: 10, items: [] },
      { id: 3, title: "Réseaux sociaux et croissance", duration: "3 semaines", lessons: 9, items: [] },
      { id: 4, title: "Monétisation et partenariats", duration: "2 semaines", lessons: 7, items: [] },
    ],
    trainer: {
      name: "Kevin Dubois",
      role: "Streamer professionnel – 500k abonnés Twitch",
      bio: "Kevin Dubois est l'un des streamers francophones africains les plus suivis. En 3 ans, il a bâti une communauté de plus de 500 000 abonnés et partage ses secrets de croissance.",
      tags: ["Streaming", "Content Creator", "Twitch", "YouTube"],
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face",
    },
    testimonials: [
      {
        name: "Omar Ba",
        role: "Content Creator – 50k abonnés",
        stars: 5,
        text: "J'ai multiplié mon audience par 5 en 2 mois après cette formation. Les conseils sur la monétisation sont particulièrement précieux.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face",
      },
    ],
    faq: [
      { q: "Quel matériel faut-il avoir minimum ?", a: "Un ordinateur correct, un microphone et une connexion internet stable suffisent pour démarrer." },
      { q: "Peut-on gagner sa vie avec le streaming ?", a: "Oui, la formation vous montre les différentes sources de revenus possibles et comment les atteindre." },
    ],
    advantages: [
      "40 leçons vidéo HD",
      "Templates et ressources graphiques",
      "Accès à vie",
      "Certificat professionnel",
      "Groupe privé streamers",
    ],
  },
]

// ─── Sous-composants ───────────────────────────────────────────────

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
    </div>
  )
}

function ProgramItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div>
          <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
          <p className="text-xs text-gray-500 mt-0.5">{item.duration} · {item.lessons} leçons</p>
        </div>
        <span className="text-gray-400 text-lg">{open ? '▲' : '▼'}</span>
      </button>
      {open && item.items.length > 0 && (
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          {item.items.map((lesson, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
              <span className="text-green-500 text-sm">✓</span>
              <span className="text-sm text-gray-700">{lesson}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-medium text-gray-900 text-sm">{item.q}</span>
        <span className="text-gray-400 ml-4 flex-shrink-0">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

// ─── Page principale ───────────────────────────────────────────────

export default function FormationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const formation = formations.find((f) => f.id === parseInt(id))

  if (!formation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold text-gray-700">Formation introuvable</p>
        <button
          onClick={() => navigate('/formations')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Retour aux formations
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url('${formation.image}')` }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-7xl w-[90vw] mx-auto px-6 h-full flex flex-col justify-end pb-8">
          <button
            onClick={() => navigate('/formations')}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            ← Retour aux formations
          </button>
          <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold text-white mb-3 w-fit ${formation.category === 'Sport' ? 'bg-blue-600' : 'bg-purple-600'}`}>
            {formation.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
            {formation.title}
          </h1>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-7xl w-[90vw] mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── COLONNE GAUCHE ── */}
          <div className="flex-1 min-w-0 space-y-12">

            {/* Vue d'ensemble */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vue d'ensemble de la formation</h2>
              <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                {formation.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Objectifs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectifs pédagogiques</h2>
              <div className="space-y-2">
                {formation.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-gray-800">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Programme */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Programme détaillé</h2>
              <div className="space-y-3">
                {formation.program.map((item, i) => (
                  <ProgramItem key={item.id} item={item} defaultOpen={i === 0} />
                ))}
              </div>
            </section>

            {/* Formateur */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre formateur</h2>
              <div className="flex flex-col sm:flex-row gap-5">
                <img
                  src={formation.trainer.avatar}
                  alt={formation.trainer.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{formation.trainer.name}</p>
                  <p className="text-green-600 text-sm font-medium mb-3">{formation.trainer.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{formation.trainer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {formation.trainer.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Témoignages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Témoignages d'étudiants</h2>
              <div className="space-y-5">
                {formation.testimonials.map((t, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                        <Stars count={t.stars} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{t.text}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {/* <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
              <div className="space-y-3">
                {formation.faq.map((item, i) => (
                  <FaqItem key={i} item={item} />
                ))}
              </div>
            </section> */}

          </div>

          {/* ── COLONNE DROITE (sticky) ── */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-24 space-y-4">

              {/* Carte prix */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <p className={`text-3xl font-bold text-center mb-1 ${formation.price === 'Gratuit' ? 'text-green-500' : 'text-blue-600'}`}>
                  {formation.price}
                </p>
                <p className="text-center text-xs text-gray-500 mb-5">Accès complet à la formation</p>

                {/* Avantages */}
                <div className="space-y-2 mb-5">
                  {formation.advantages.map((adv, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-sm text-gray-700">{adv}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-3">
                  S'inscrire maintenant
                </button>
                <p className="text-center text-xs text-gray-400">
                  Prochaine session : {formation.nextSession}
                </p>
              </div>

              {/* Infos pratiques */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-4">Informations pratiques</p>
                <div className="space-y-3">
                  {[
                    { label: 'Durée', value: formation.duration },
                    { label: 'Effort estimé', value: formation.effortPerWeek },
                    { label: 'Langue', value: formation.language },
                    { label: 'Niveau', value: formation.level },
                    { label: 'Certificat', value: formation.certified },
                    { label: 'Prérequis', value: formation.prerequisites },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progression */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-4">Votre progression</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progression globale</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-0" />
                    </div>
                  </div>
                  {/* <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span></span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-0" />
                    </div>
                  </div> */}
                </div>
                <button className="mt-4 text-xs text-blue-600 hover:underline flex items-center gap-1">
                  ↓ Télécharger le programme
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}