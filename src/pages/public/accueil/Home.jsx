import React from 'react'
import { useState } from 'react'
import Partenaires from './Partenaires'
import heroImage from '../../../assets/images/hero.png'
import Formations from './Formations'
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import './App.css'



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


export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [email, setEmail] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div className="d">
        <div className="min-h-screen bg-white font-sans">
    
         
    
          {/* ── HERO ── */}
          <section
            className="relative h-[500px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-blue-900/70" />
            <div className="relative max-w-7xl mx-[4rem] px-6 text-white">
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
          <Partenaires />
    
          {/* ── PRÉSENTATION PLATEFORME ── */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl w-[90vw] mx-auto px-6">
              <div className=" mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Votre parcours vers l'excellence sportive
                </h2>
                <p className=" text-gray-600 max-w-2xl">
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
        <Formations/>
    
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
    
       
        </div>
        </div>
      )
}
