import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🌱',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    title: 'Diagnóstico de Suelos',
    desc: 'Realizamos análisis físico-químico y biológico completo de sus suelos. Evaluamos pH, materia orgánica, macro y micronutrientes, y capacidad de retención hídrica para diseñar estrategias de fertilización precisas.',
    tags: ['Análisis físico', 'Análisis químico', 'Microbiología'],
  },
  {
    icon: '🚜',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    title: 'Planificación de Cultivos',
    desc: 'Diseño de rotaciones, calendarios agrícolas y planificación de siembras considerando las condiciones edafoclimáticas de su zona. Maximizamos el potencial productivo sin agotar el recurso suelo.',
    tags: ['Rotación cultivos', 'Calendario agrícola', 'Variedades'],
  },
  {
    icon: '💧',
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
    title: 'Eficiencia Hídrica',
    desc: 'Diagnóstico y optimización de sistemas de riego. Calculamos necesidades reales de agua por cultivo, evaluamos eficiencia del sistema actual y proponemos mejoras para reducir costos y mejorar producción.',
    tags: ['Riego tecnificado', 'Balance hídrico', 'Eficiencia'],
  },
  {
    icon: '🌿',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    title: 'Manejo Fitosanitario',
    desc: 'Control integrado de plagas y enfermedades con enfoque agroecológico. Monitoreo continuo, umbrales de acción y uso racional de insumos para proteger el cultivo y la salud del ecosistema.',
    tags: ['Control integrado', 'Plagas y enfermedades', 'Agroecología'],
  },
  {
    icon: '📜',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    title: 'Certificación Orgánica',
    desc: 'Acompañamos el proceso de transición y certificación orgánica. Gestionamos la documentación, preparamos el pedido para las auditorías y coordinamos con organismos certificadores acreditados.',
    tags: ['Transición orgánica', 'Documentación', 'Auditorías'],
  },
  {
    icon: '📊',
    img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80',
    title: 'Gestión Predial Integral',
    desc: 'Asesoría de gestión completa: costos de producción, rentabilidad por hectárea, planificación financiera del ciclo agrícola y apoyo en postulaciones a subsidios INDAP, SAG y otros organismos.',
    tags: ['Costos producción', 'Rentabilidad', 'Postulaciones'],
  },
]

export default function Servicios() {
  return (
    <>
      <PageHero
        tag="Nuestros servicios"
        title="Soluciones técnicas para cada desafío del campo"
        subtitle="Servicios especializados diseñados para aumentar su rentabilidad y sostener la productividad de su pedido a largo plazo."
        bgClass="bg-forest-800"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-forest-100 card-hover shadow-sm">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-forest-100">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
                  {/* Floating icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {s.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-600 text-forest-900 mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-forest-700/70 leading-relaxed mb-5">{s.desc}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs font-sans bg-sage-100 text-forest-700 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-forest-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white font-600 mb-4">¿No sabe por dónde empezar?</h2>
          <p className="font-body text-white/65 mb-8">Agenda una visita de diagnóstico sin costo y le ayudamos a identificar las prioridades de su pedido.</p>
          <Link to="/contacto" className="btn-primary">Solicitar diagnóstico gratuito →</Link>
        </div>
      </section>
    </>
  )
}
