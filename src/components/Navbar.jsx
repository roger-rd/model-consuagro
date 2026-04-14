import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/',           label: 'Inicio' },
  { to: '/servicios',  label: 'Servicios' },
  { to: '/nosotros',   label: 'Nosotros' },
  { to: '/planes',     label: 'Planes' },
  { to: '/galeria',    label: 'Galería' },
  { to: '/contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-forest-600 rounded-lg flex items-center justify-center group-hover:bg-forest-700 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 6c0 0-4 4-4 8h8c0-4-4-8-4-8z" fill="currentColor" stroke="none" opacity="0.5"/>
              <path d="M12 14v4M8 18h8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={`font-display font-700 text-xl tracking-tight transition-colors ${
            scrolled ? 'text-forest-800' : 'text-white'
          }`}>
            Consu<span className="text-earth-500">Agro</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-sans text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-forest-600 text-white'
                    : scrolled
                      ? 'text-forest-800 hover:bg-forest-50 hover:text-forest-700'
                      : 'text-white/90 hover:bg-white/15 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="ml-4 btn-primary text-xs py-2.5 px-5">
            Agendar visita
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-forest-800' : 'text-white'}`}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-white border-t border-forest-100 px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-sans text-sm px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-forest-600 text-white' : 'text-forest-800 hover:bg-forest-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contacto" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center text-xs">
            Agendar visita
          </Link>
        </nav>
      </div>
    </header>
  )
}
