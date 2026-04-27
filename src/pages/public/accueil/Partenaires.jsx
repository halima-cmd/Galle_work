import React from 'react'
import mango from "../../../assets/images/mango.jpeg";
import afma from "../../../assets/images/afma.jpeg";
import mini from "../../../assets/images/ils.jpeg";
import once from "../../../assets/images/mini.jpeg";
import ils from "../../../assets/images/once.jpeg";

export default function Partenaires() {
  const partenaires = [
    { id: 1, name: "Mango", logo: mango },
    { id: 2, name: "Afma", logo: afma },
    { id: 3, name: "Mini", logo: mini },
    { id: 4, name: "Once", logo: once },
    { id: 5, name: "Once", logo: ils },
  ];

  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative w-full overflow-hidden">
          
          <div className="flex gap-10 animate-scroll">

            {/* duplication pour boucle infinie */}
            {[...partenaires, ...partenaires, ...partenaires].map(p => (
              <div
                key={p.id + Math.random()}
                className="flex items-center justify-center min-w-[120px] h-20 bg-white rounded-xl border border-gray-100 px-6"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}

          </div>

        </div>
        </div>
        </section>
     )
}
