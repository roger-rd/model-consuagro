import PageHero from '../components/PageHero'
import { useState } from 'react'

const images = [
  { url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80', label: 'Análisis de suelos en terreno', cat: 'Suelos' },
  { url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', label: 'Asesoría en cosecha de cereales', cat: 'Cultivos' },
  { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', label: 'Viñedos del Valle Central', cat: 'Vitivinicultura' },
  { url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', label: 'Plantación de hortalizas', cat: 'Hortalizas' },
  { url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80', label: 'Sistema de riego tecnificado', cat: 'Riego' },
  { url: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=80', label: 'Diagnóstico fitosanitario', cat: 'Fitosanidad' },
  { url: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80', label: 'Cultivo de maíz', cat: 'Cultivos' },
  { url: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80', label: 'Taller técnico con productores', cat: 'Capacitación' },
  { url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80', label: 'Sector frutícola, Maule', cat: 'Frutales' },
  { url: 'https://images.unsplash.com/photo-1444392061186-9fc38f16d4ec?w=800&q=80', label: 'Vista aérea del pedido productor', cat: 'pedidos' },
  { url: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=800&q=80', label: 'Invernadero de vegetales', cat: 'Hortalizas' },
  { url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80', label: 'Plantación de lavanda', cat: 'Aromáticas' },
]

const cats = ['Todos', ...new Set(images.map(i => i.cat))]

export default function Galeria() {
  const [active, setActive] = useState('Todos')
  const [modal, setModal] = useState(null)

  const filtered = active === 'Todos' ? images : images.filter(i => i.cat === active)

  return (
    <>
      <PageHero
        tag="Galería fotográfica"
        title="El campo en imágenes"
        subtitle="Una muestra de nuestro trabajo en distintos cultivos y regiones del país."
        bgClass="bg-forest-800"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map(c => (
              <button key={c}
                onClick={() => setActive(c)}
                className={`font-sans text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                  active === c
                    ? 'bg-forest-600 text-white shadow-md'
                    : 'bg-sage-100 text-forest-700 hover:bg-forest-100'
                }`}>
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div key={i}
                onClick={() => setModal(img)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-forest-100 aspect-square"
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="font-body text-white text-sm font-500">{img.label}</span>
                  <span className="font-sans text-xs text-earth-300 mt-1">{img.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setModal(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white font-sans text-sm"
            >
              Cerrar ✕
            </button>
            <img src={modal.url} alt={modal.label} className="w-full rounded-2xl" />
            <div className="mt-4 text-center">
              <p className="font-body text-white text-lg">{modal.label}</p>
              <span className="font-sans text-sm text-earth-400 mt-1 inline-block">{modal.cat}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
