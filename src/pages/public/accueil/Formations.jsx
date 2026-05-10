

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Formations() {
  const navigate = useNavigate();

  const formations = [
    {
      id: 1,
      title: "Management Sportif Professionnel",
      category: "Sport",
      level: "Intermédiaire",
      price: "Gratuit",
      duration: "8 semaines",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop",
      description:
        "Apprenez les bases du management sportif professionnel.",
    },
    {
      id: 2,
      title: "Coaching eSport Avancé",
      category: "eSport",
      level: "Avancé",
      price: "150 000 XOF",
      duration: "12 semaines",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      description:
        "Formation avancée pour devenir coach eSport professionnel.",
    },
    {
      id: 3,
      title: "Nutrition Sportive",
      category: "Sport",
      level: "Débutant",
      price: "50 000 XOF",
      duration: "6 semaines",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      description:
        "Comprendre l’alimentation adaptée aux sportifs.",
    },
    {
      id: 4,
      title: "Streaming et Contenu eSport",
      category: "eSport",
      level: "Intermédiaire",
      price: "100 000 XOF",
      duration: "10 semaines",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=250&fit=crop",
      description:
        "Créer du contenu et développer son audience gaming.",
    },
  ];

  const handleDetails = (formationId) => {
    navigate(`/formations/${formationId}`);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl w-[90vw] mx-auto">
        <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Formations populaires
            </h2>

            <p className="text-gray-600">
              Découvrez nos cours les plus appréciés
            </p>
          </div>

          <button className="text-blue-600 font-medium hover:underline">
            Voir toutes les formations
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((f) => (
            <div
              key={f.id}
              onClick={() => handleDetails(f.id)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group hover:border-blue-500 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* CATEGORY BADGE */}
                <span
                  className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold text-white ${
                    f.category === "Sport"
                      ? "bg-blue-600"
                      : "bg-purple-600"
                  }`}
                >
                  {f.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
              

                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {f.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                  {f.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{f.level}</span>

                  <span className="text-sm text-gray-500">
                    ⏱ {f.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`font-bold text-lg ${
                      f.price === "Gratuit"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  >
                    {f.price}
                  </span>

                  {/* <button className="text-blue-600 text-sm font-semibold hover:underline">
                    Voir détails →
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}