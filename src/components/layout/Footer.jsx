import React from 'react'

export default function Footer() {
  return (
    <div>
    {/* ── FOOTER ── */}
    <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl w-[90vw] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold">GalléWork Sport</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            La première plateforme éducative dédiée aux métiers du sport et de l'eSport en Afrique.
          </p>
        </div>
        {[
          { title: 'À propos', links: ['Qui sommes-nous ?','Nos services','Partenaires','Carrières'] },
          { title: 'Formations', links: ['Catalogue','Formations gratuites','Certifications','Webinaires'] },
          { title: 'Support', links: ['FAQ','Contact','Aide','Confidentialité'] }
        ].map(col => (
          <div key={col.title}>
            <h4 className="text-lg font-semibold mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">© 2026 GalléWork Sport. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'utilisation</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}
