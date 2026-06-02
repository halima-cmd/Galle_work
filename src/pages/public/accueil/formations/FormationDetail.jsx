import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allFormations } from "../../../../data/formations";

/* ---------------- STAR RATING ---------------- */
function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= count ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ---------------- PROGRAM ITEM ---------------- */
function ProgramItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div>
          <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
          <p className="text-xs text-gray-500 mt-0.5">
            {item.duration} · {item.items?.length || 0} leçons
          </p>
        </div>
        <span className="text-gray-400 text-lg">{open ? "▲" : "▼"}</span>
      </button>

      {open && item.items?.length > 0 && (
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          {item.items.map((lesson, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
            >
              <span className="text-green-500 text-sm">✓</span>
              <span className="text-sm text-gray-700">{lesson}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- FAQ ITEM (optionnel si utilisé plus tard) ---------------- */
function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-medium text-gray-900 text-sm">{item.q}</span>
        <span className="text-gray-400 ml-4 flex-shrink-0">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

/* ---------------- PAGE DETAIL ---------------- */
export default function FormationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id || isNaN(Number(id))) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">ID invalide.</p>
      </div>
    );
  }

  const formation = allFormations.find((f) => f.id === Number(id));

  if (!formation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold text-gray-700">
          Formation introuvable
        </p>
        <button
          onClick={() => navigate("/formations")}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Retour aux formations
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('${formation.image}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-7xl w-[90vw] mx-auto px-6 h-full flex flex-col justify-end pb-8">

          <button
            onClick={() => navigate("/formations")}
            className="absolute top-6 left-6 text-white/80 hover:text-white text-sm"
          >
            ← Retour aux formations
          </button>

          <span className="px-4 py-1 rounded-full text-xs font-semibold text-white bg-blue-600 w-fit mb-3">
            {formation.category}
          </span>

          <h1 className="text-3xl font-bold text-white">
            {formation.title}
          </h1>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl w-[90vw] mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT COLUMN */}
        <div className="flex-1">

          {/* OVERVIEW */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Vue d'ensemble</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {formation.description}
            </p>
          </section>

          {/* OBJECTIVES */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Objectifs</h2>
            <div className="space-y-2">
              {formation.objectives.map((obj, i) => (
                <div key={i} className="bg-green-50 p-3 rounded-lg">
                  ✓ {obj}
                </div>
              ))}
            </div>
          </section>

          {/* PROGRAM */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Programme</h2>
            <div className="space-y-3">
              {formation.program.map((item, i) => (
                <ProgramItem
                  key={item.id}
                  item={item}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </section>

          {/* TRAINER */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Formateur</h2>
            <p className="font-bold">{formation.trainer.name}</p>
            <p className="text-gray-600">{formation.trainer.role}</p>
          </section>

          {/* TESTIMONIALS */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Témoignages</h2>
            <div className="space-y-4">
              {formation.testimonials.map((t, i) => (
                <div key={i} className="border p-4 rounded-xl">
                  <p className="font-bold">{t.name}</p>
                  <Stars count={t.stars} />
                  <p className="text-gray-600 italic">{t.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-80 xl:w-96 flex-shrink-0">
          <div className="sticky top-24 space-y-4">

            {/* PRICE CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <p className={`text-3xl font-bold text-center mb-1 ${
                formation.price === "Gratuit"
                  ? "text-green-500"
                  : "text-blue-600"
              }`}>
                {formation.price}
              </p>

              <p className="text-center text-xs text-gray-500 mb-5">
                Accès complet à la formation
              </p>

              {/* <div className="space-y-2 mb-5">
                {formation.advantages.map((adv, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-sm">✓</span>
                    <span className="text-sm text-gray-700">{adv}</span>
                  </div>
                ))}
              </div> */}

              <button
                onClick={() => navigate(`/learn/${formation.id}`)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl"
              >
                Commencer la formation
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Prochaine session : {formation.nextSession}
              </p>
            </div>

            {/* INFO CARD */}
            {/* <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-4">
                Informations pratiques
              </p>

              <div className="space-y-3">
                {[
                  ["Durée", formation.duration],
                  ["Effort estimé", formation.effortPerWeek],
                  ["Langue", formation.language],
                  ["Niveau", formation.level],
                  ["Certificat", formation.certified],
                  ["Prérequis", formation.prerequisites],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between text-sm border-b border-gray-50 pb-2"
                  >
                    <span className="text-gray-500">{label}</span>
                    <span className="font-medium text-gray-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
}