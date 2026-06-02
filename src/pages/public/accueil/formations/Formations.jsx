import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formationsMetier, formationsDecouverte } from "../../../../data/formations";

export default function Formations() {
  const navigate = useNavigate();

  // À remplacer par ton contexte Auth
  const isAuthenticated = false;

  const [activeTab, setActiveTab] = useState("decouverte");

  const formations =
    activeTab === "metier" ? formationsMetier : formationsDecouverte;

  const handleDetails = (formationId, type) => {
    if (type === "metier" && !isAuthenticated) {
      navigate("/login");
      return;
    }
    navigate(`/formations/${formationId}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl w-[90vw] mx-auto">

        {/* HEADER */}
        <div className="text-left mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Nos Formations
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Choisissez entre des formations professionnelles pour apprendre
            un métier ou des contenus gratuits pour découvrir un sujet.
          </p>
        </div>

        {/* TABS */}
        <div className="flex mb-10">
          <div className=" rounded-xl p-1">
            <button
              onClick={() => setActiveTab("decouverte")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === "decouverte"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Découvrir un sujet
            </button>

            <button
              onClick={() => setActiveTab("metier")}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === "metier"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Apprendre un métier
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((f) => (
            <div
              key={f.id}
              onClick={() => handleDetails(f.id, activeTab)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10" />
                <span
                  className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold text-white ${
                    f.category === "Sport" ? "bg-blue-600" : "bg-purple-600"
                  }`}
                >
                  {f.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {f.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{f.level}</span>
                  <span className="text-sm text-gray-500">⏱ {f.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-bold text-lg ${
                      f.price === "Gratuit" ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {f.price}
                  </span>
                  {/* <span className="text-blue-600 text-sm font-semibold">
                    Voir →
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}