import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-forest-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 6c0 0-4 4-4 8h8c0-4-4-8-4-8z" fill="currentColor" stroke="none" opacity="0.7"/>
                  <path d="M12 14v4M8 18h8" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display text-xl font-700">Consu<span className="text-earth-400">Agro</span></span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
              Asesoría técnica agrícola especializada para productores que buscan mejorar su rendimiento y sostenibilidad en el campo.
            </p>
            <div className="flex gap-3 mt-6">
              {['📱','📧','📍'].map((icon, i) => (
                <span key={i} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-forest-600 transition-colors cursor-pointer">{icon}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-600 text-sm tracking-widest uppercase text-earth-400 mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[['/', 'Inicio'], ['/servicios', 'Servicios'], ['/nosotros', 'Nosotros'], ['/planes', 'Planes'], ['/galeria', 'Galería'], ['/contacto', 'Contacto']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="font-body text-sm text-white/60 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-600 text-sm tracking-widest uppercase text-earth-400 mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/60 font-body">
              <li>+56 9 8765 4321</li>
              <li>contacto@consuagro.cl</li>
              <li>Región del Maule, Chile</li>
              <li className="pt-2">
                <span className="inline-block bg-forest-700/40 text-forest-300 text-xs px-3 py-1 rounded-full">
                  Lun–Vie · 8:00–18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-sans">© 2025 ConsuAgro · Todos los derechos reservados</p>
          <p className="text-white/30 text-xs font-sans">Hecho con ❤ para el campo chileno</p>
        </div>
      </div>
    </footer>
  )
}
