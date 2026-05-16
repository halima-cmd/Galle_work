import { Link } from 'react-router-dom'

export const actualitesData = [
  {
    id: 1,
    title: "Les Métiers Émergents du Sport Digital",
    excerpt: "Découvrez les nouvelles opportunités professionnelles dans l'industrie du sport numérique et comment s'y préparer.",
    date: "20 Avril 2026",
    category: "Carrières",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=450&fit=crop",
    author: {
      name: "Dr. Kwame Asante",
      role: "Expert en Management Sportif",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop&crop=face",
    },
    content: `L'industrie du sport numérique connaît une croissance exponentielle, créant de nouvelles opportunités professionnelles que beaucoup ne soupçonnent pas encore. En Afrique, ce secteur est particulièrement prometteur avec l'essor des smartphones et de la connectivité internet.

Parmi les métiers les plus recherchés, on trouve le **Data Analyst Sportif**, chargé d'analyser les performances des athlètes via des outils technologiques avancés. Le salaire moyen de ces professionnels a augmenté de 35% en deux ans.

Le **Social Media Manager Sportif** est également très demandé. Les clubs et fédérations sportives africains comprennent désormais l'importance d'une présence numérique forte pour attirer sponsors et supporters.

L'**eSport Manager** représente quant à lui une opportunité unique en Afrique de l'Ouest, où le gaming compétitif attire chaque année davantage de jeunes talents et d'investisseurs.

Pour vous préparer à ces métiers d'avenir, GalléWork Sport propose des formations certifiantes adaptées au marché africain, avec des formateurs issus du terrain.`,
    tags: ["Sport Digital", "Carrières", "Afrique", "Technologie"],
    relatedIds: [2, 3],
  },
  {
    id: 2,
    title: "eSport : Un Secteur en Pleine Expansion",
    excerpt: "Analyse du marché de l'eSport et des compétences recherchées par les recruteurs du secteur.",
    date: "18 Avril 2026",
    category: "eSport",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=450&fit=crop",
    author: {
      name: "Alex Martin",
      role: "Coach eSport Professionnel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
    },
    content: `Le marché mondial de l'eSport dépasse désormais les 2 milliards de dollars de revenus annuels, et l'Afrique commence sérieusement à y prendre sa place. Des tournois régionaux se multiplient au Sénégal, en Côte d'Ivoire et au Nigeria, attirant des milliers de participants et spectateurs.

Les recruteurs du secteur cherchent avant tout des profils polyvalents capables de combiner compétences techniques et managériales. La maîtrise des outils d'analyse de jeu, la psychologie sportive et la gestion d'équipe sont les trois compétences les plus citées dans les offres d'emploi.

Les organisations eSport africaines qui se structurent cherchent notamment des **Coaches tactiques**, des **Analystes de performance gaming** et des **Event Managers** capables d'organiser des compétitions locales et régionales.

La Fédération Africaine d'eSport, créée en 2024, travaille actuellement à la structuration d'un championnat continental qui devrait générer plusieurs centaines d'emplois directs d'ici 2027.

Pour les jeunes professionnels souhaitant intégrer ce secteur, une combinaison de passion pour le gaming et de formation managériale sérieuse reste la voie royale.`,
    tags: ["eSport", "Gaming", "Marché", "Emploi"],
    relatedIds: [1, 3],
  },
  {
    id: 3,
    title: "Formation Continue : Clé du Succès Sportif",
    excerpt: "L'importance de la formation continue pour les professionnels du sport et de l'eSport.",
    date: "15 Avril 2026",
    category: "Formation",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
    author: {
      name: "Dr. Sophie Laurent",
      role: "Nutritionniste & Formatrice",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
    },
    content: `Dans un secteur sportif en constante évolution, la formation continue n'est plus une option mais une nécessité absolue. Les professionnels qui réussissent à long terme sont ceux qui investissent régulièrement dans leur développement de compétences.

Une étude récente menée auprès de 500 professionnels du sport en Afrique de l'Ouest révèle que ceux qui consacrent au moins 5 heures par mois à leur formation voient leurs revenus augmenter de 28% en moyenne sur trois ans.

La formation en ligne a révolutionné l'accès au savoir pour les professionnels africains du sport. Plus besoin de se déplacer à l'étranger pour accéder aux meilleures formations : des plateformes comme GalléWork Sport proposent des contenus de qualité internationale adaptés aux réalités locales.

Les domaines les plus recherchés en formation continue restent le management sportif, la nutrition, la préparation mentale et les nouvelles technologies appliquées au sport. Les certifications reconnues par les fédérations nationales et continentales sont particulièrement valorisées par les employeurs.

GalléWork Sport s'engage à proposer des parcours de formation flexibles, permettant aux professionnels en activité de se former sans interrompre leur carrière.`,
    tags: ["Formation", "Développement", "Carrière", "Afrique"],
    relatedIds: [1, 2],
  },
]

export default function Actualites() {
  return (
    <div className=" max-w-7xl w-[90vw] mx-auto min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Actualités</h2>
          <p className="text-gray-500 text-sm">Restez informé des dernières tendances du sport et de l'eSport</p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualitesData.map(a => (
            <Link
              key={a.id}
              to={`/actualites/${a.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  {a.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img src={a.author.avatar} alt={a.author.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs text-gray-500">{a.author.name}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{a.readTime} de lecture</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{a.date}</p>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{a.excerpt}</p>
                <span className="inline-block mt-4 text-blue-600 text-sm font-medium group-hover:underline">
                  Lire l'article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}