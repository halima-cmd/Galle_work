import React from 'react'
import { useState } from 'react'
import logo from '../../assets/images/logoG.svg'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (


 <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className=" mx-auto w-[90vw] px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Galle Work Logo"
            className="h-10 w-auto object-contain"
          />
          </div>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Accueil','À propos','Formations','Webinaires','Actualités'].map(item => (
              <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
            FR
            </button>
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors">
              Connexion
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              S'inscrire
            </button>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {['Accueil','À propos','Formations','Webinaires','Actualités'].map(item => (
              <a key={item} href="#" className="text-gray-700 font-medium py-1">
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full">Connexion</button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-full">S'inscrire</button>
            </div>
          </div>
        )}
      </header>


  )
}
