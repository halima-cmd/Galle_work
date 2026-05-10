
import React from 'react'

export default function Formations() {

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

  return (
    <section className="py-9">
    <div className="max-w-7xl w-[90vw] mx-auto px-6">
      <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Formations populaires</h2>
          <p className=" text-gray-600">Découvrez nos cours les plus appréciés</p>
        </div>
        <button className="text-blue-600 px-6 py-2 rounded-full font-medium hover:underline transition-colors">
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
              <button className=" text-blue-600 py-2 rounded-full text-sm font-medium hover:underline transition-colors">
                Voir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
