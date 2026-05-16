import { useParams, useNavigate, Link } from 'react-router-dom'
import { actualitesData } from './Actualites'

export default function ActualiteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = actualitesData.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold text-gray-700">Article introuvable</p>
        <button
          onClick={() => navigate('/actualites')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Retour aux actualités
        </button>
      </div>
    )
  }

  const related = actualitesData.filter(a => article.relatedIds.includes(a.id))

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <div
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('${article.image}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-7xl w-[90vw] mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <button
            onClick={() => navigate('/actualites')}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            ← Retour aux actualités
          </button>
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold text-white bg-blue-600 mb-3 w-fit">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-7xl w-[90vw] mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── CONTENU PRINCIPAL ── */}
          <article className="flex-1 min-w-0">

            {/* Meta auteur */}
            <div className="flex items-center gap-4 pb-6 mb-8 border-b border-gray-100">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{article.author.name}</p>
                <p className="text-xs text-gray-500">{article.author.role}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs text-gray-400">{article.date}</p>
                <p className="text-xs text-gray-400">{article.readTime} de lecture</p>
              </div>
            </div>

            {/* Excerpt mis en avant */}
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8 border-l-4 border-blue-500 pl-5 italic">
              {article.excerpt}
            </p>

            {/* Contenu */}
            <div className="prose prose-sm max-w-none space-y-5">
              {article.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-sm">
                  {para.replace(/\*\*(.*?)\*\*/g, '$1')}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Partage */}
            {/* <div className="mt-8 p-5 bg-gray-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-semibold text-gray-700">Partager cet article</p>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map(r => (
                  <button
                    key={r}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div> */}

          </article>

          {/* ── SIDEBAR ── */}
          <aside className="lg:w-72 flex-shrink-0 space-y-6">

            {/* À propos de l'auteur */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-4 text-sm">À propos de l'auteur</p>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{article.author.name}</p>
                  <p className="text-xs text-gray-500">{article.author.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Expert reconnu dans son domaine, contribue régulièrement aux publications de GalléWork Sport.
              </p>
            </div>

            {/* Articles liés */}
            {related.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-4 text-sm">Articles liés</p>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link
                      key={r.id}
                      to={`/actualites/${r.id}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-xs font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {r.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{r.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <p className="font-bold mb-2 text-sm">Ne ratez rien !</p>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                Recevez nos derniers articles directement dans votre boîte mail.
              </p>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-2 rounded-xl text-gray-900 text-xs mb-3 outline-none"
              />
              <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-xl text-xs hover:bg-blue-50 transition-colors">
                S'abonner
              </button>
            </div>

          </aside>
        </div>
      </div>

    </div>
  )
}