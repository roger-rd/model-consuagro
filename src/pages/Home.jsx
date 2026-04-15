import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

/* ── Intersection observer hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ── Data ── */
const services = [
  { icon: '🌱', title: 'Diagnóstico de Suelos', desc: 'Análisis completo del estado físico, químico y biológico de sus suelos para tomar decisiones informadas.' },
  { icon: '🚜', title: 'Planificación de Cultivos', desc: 'Diseño de rotaciones y calendarios agrícolas adaptados a su pedido y condiciones climáticas locales.' },
  { icon: '💧', title: 'Eficiencia Hídrica', desc: 'Evaluación y optimización de sistemas de riego para reducir consumo y maximizar productividad.' },
  { icon: '🌿', title: 'Manejo Fitosanitario', desc: 'Diagnóstico y control integrado de plagas y enfermedades con enfoque sostenible y certificable.' },
]

const stats = [
  { value: '12+', label: 'Años de experiencia' },
  { value: '380+', label: 'Productores asesorados' },
  { value: '8', label: 'Regiones de cobertura' },
  { value: '94%', label: 'Clientes satisfechos' },
]

const steps = [
  { num: '01', title: 'Visita de diagnóstico', desc: 'Recorremos el pedido para entender sus condiciones actuales y objetivos productivos.' },
  { num: '02', title: 'Plan técnico', desc: 'Desarrollamos un plan de acción personalizado con metas claras y medibles.' },
  { num: '03', title: 'Implementación', desc: 'Acompañamiento durante la ejecución con visitas periódicas y seguimiento de indicadores.' },
  { num: '04', title: 'Evaluación', desc: 'Reportes de avance y ajustes continuos para garantizar los mejores resultados.' },
]

const testimonials = [
  { name: 'Carlos Muñoz', role: 'Productor de uva ', text: 'Desde que trabajo con ConsuAgro, mis rendimientos subieron un 30%. El seguimiento que hacen es constante y el equipo conoce el campo de verdad.' },
  { name: 'Ana Riquelme', role: 'Agricultora orgánica ', text: 'Me ayudaron a certificar mi pedido como orgánico. El proceso fue claro y el apoyo técnico fue fundamental para lograrlo.' },
  { name: 'Roberto Peña', role: 'Agricultor', text: 'Llevaba años con el mismo rendimiento. En una temporada con ConsuAgro entendí qué estaba fallando en mi suelo.' },
]

/* ── Hero section with animated particles ── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: dark forest gradient + field image simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />

      {/* Layered SVG landscape */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sun" cx="70%" cy="30%" r="40%">
              <stop offset="0%" stopColor="#e3a43d" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="1440" height="800" fill="url(#sun)" />
          {/* Hills */}
          <ellipse cx="200" cy="700" rx="400" ry="200" fill="#2d6832" opacity="0.6"/>
          <ellipse cx="900" cy="750" rx="600" ry="250" fill="#255329" opacity="0.5"/>
          <ellipse cx="1300" cy="680" rx="350" ry="180" fill="#1f4222" opacity="0.7"/>
          {/* Rows of crops */}
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="0" y1={540 + i * 20} x2="1440" y2={540 + i * 18} stroke="#3e8344" strokeWidth="1.5" opacity="0.4"/>
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <div key={i}
          className="absolute w-1 h-1 bg-earth-400 rounded-full opacity-30"
          style={{
            left: `${10 + i * 5.5}%`,
            top: `${20 + (i % 5) * 15}%`,
            animation: `float ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes float { from { transform: translateY(0); } to { transform: translateY(-16px); } }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase text-earth-400 mb-6 animate-fade-in-up">
            ◆ Asesoría técnica agrícola
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white font-700 leading-[1.05] animate-fade-in-up animation-delay-100">
            El campo merece<br />
            <em className="text-earth-400 not-italic">ciencia</em> y<br />
            dedicación
          </h1>
          <p className="mt-7 font-body text-white/65 text-lg leading-relaxed max-w-md animate-fade-in-up animation-delay-200">
            Acompañamos a productores agrícolas con asesoría técnica especializada, desde el diagnóstico del suelo hasta la optimización de cada ciclo productivo.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/contacto" className="btn-primary">Consulta gratuita →</Link>
            <Link to="/servicios" className="btn-outline text-white border-white/40 hover:border-white hover:bg-white hover:text-forest-800">
              Ver servicios
            </Link>
          </div>
          {/* Trust badges */}
          <div className="mt-12 flex items-center gap-6 animate-fade-in-up animation-delay-400">
            <div className="flex -space-x-3">
              {['🧑‍🌾','👩‍🌾','🧑‍🌾','👨‍🌾'].map((e, i) => (
                <div key={i} className="w-9 h-9 bg-forest-700 border-2 border-forest-900 rounded-full flex items-center justify-center text-sm">{e}</div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-earth-400 text-sm">★★★★★</div>
              <p className="text-white/50 text-xs font-sans mt-0.5">+380 productores confían en nosotros</p>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="hidden lg:block animate-fade-in-up animation-delay-300">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-forest-600 rounded-xl flex items-center justify-center text-xl">📋</div>
                <div>
                  <p className="font-sans font-600 text-sm">Diagnóstico rápido</p>
                  <p className="font-sans text-xs text-white/50">Respuesta en 24 horas</p>
                </div>
              </div>
              {[
                ['Análisis de suelo', '✓'],
                ['Plan de cultivo', '✓'],
                ['Manejo hídrico', '✓'],
                ['Certificación orgánica', '→'],
              ].map(([label, status]) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                  <span className="font-body text-sm text-white/80">{label}</span>
                  <span className={`font-sans text-xs px-3 py-1 rounded-full ${status === '✓' ? 'bg-forest-600/50 text-forest-200' : 'bg-earth-600/30 text-earth-300'}`}>
                    {status === '✓' ? 'Incluido' : 'Disponible'}
                  </span>
                </div>
              ))}
              <Link to="/planes" className="btn-primary mt-6 w-full justify-center text-sm">Ver planes →</Link>
            </div>
            {/* Decorative floating card */}
            <div className="absolute -bottom-6 -right-6 bg-earth-500 text-white rounded-xl px-5 py-3 shadow-xl">
              <p className="font-display text-2xl font-700">12+ años</p>
              <p className="font-sans text-xs text-white/80">en el campo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,80L1440,80L1440,40C1200,80 960,10 720,40C480,70 240,10 0,40Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

/* ── Stats banner ── */
function Stats() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 100}ms` }}>
            <p className="font-display text-4xl md:text-5xl font-700 text-forest-600">{s.value}</p>
            <p className="font-sans text-sm text-forest-700/60 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Services preview ── */
function ServicesPreview() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="bg-sage-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="font-display text-4xl md:text-5xl text-forest-900 font-700 mt-2">Servicios especializados<br /><em className="text-forest-600">para su pedido</em></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i}
              className={`bg-white rounded-2xl p-7 card-hover cursor-pointer group border border-forest-100 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="w-13 h-13 bg-forest-50 group-hover:bg-forest-600 rounded-xl flex items-center justify-center text-2xl transition-colors duration-300 mb-5">{s.icon}</div>
              <h3 className="font-display text-lg font-600 text-forest-900 mb-3">{s.title}</h3>
              <p className="font-body text-sm text-forest-700/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/servicios" className="btn-outline">Ver todos los servicios →</Link>
        </div>
      </div>
    </section>
  )
}

/* ── Process steps ── */
function Process() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">Cómo trabajamos</span>
          <h2 className="font-display text-4xl md:text-5xl text-forest-900 font-700 mt-2">Proceso claro,<br /><em className="text-forest-600">resultados reales</em></h2>
        </div>
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <div key={i} className={`relative text-center px-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-forest-100" />
              )}
              <div className="relative z-10 w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center font-display text-xl font-700 text-white mx-auto mb-5 shadow-lg shadow-forest-600/25">
                {s.num}
              </div>
              <h3 className="font-display text-lg font-600 text-forest-900 mb-3">{s.title}</h3>
              <p className="font-body text-sm text-forest-700/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── About preview ── */
function AboutPreview() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="bg-forest-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`}}
      />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <span className="section-tag text-earth-400">Quiénes somos</span>
          <h2 className="font-display text-4xl md:text-5xl text-white font-700 mt-2 leading-tight">
            Técnicos que viven<br /><em className="text-earth-400">el campo</em> cada día
          </h2>
          <p className="mt-6 font-body text-white/65 text-lg leading-relaxed">
            ConsuAgro nació de la convicción de que el productor agrícola merece el mismo rigor técnico que cualquier industria moderna. Nuestro equipo combina formación académica con presencia real en el terreno.
          </p>
          <p className="mt-4 font-body text-white/55 leading-relaxed">
            Operamos en 8 estados de venezuela, trabajando codo a codo con pequeños, medianos y grandes productores que buscan mejorar su rentabilidad sin comprometer la sostenibilidad de sus tierras.
          </p>
          <Link to="/nosotros" className="mt-8 btn-outline text-white border-white/30 hover:bg-white hover:text-forest-900 inline-flex">
            Conocer el equipo →
          </Link>
        </div>
        <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          {[
            { icon: '🏅', title: 'Certificados', val: 'INIA, SAG, INDAP' },
            { icon: '🌎', title: 'Cobertura', val: '8 Estados' },
            { icon: '📊', title: 'Experiencia', val: 'Más de 12 años' },
            { icon: '🤝', title: 'pedidos activos', val: '+380 clientes' },
          ].map((item, i) => (
            <div key={i} className="bg-white/8 border border-white/10 rounded-2xl p-6 text-white hover:bg-white/15 transition-colors">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-sans text-xs text-white/50 uppercase tracking-widest">{item.title}</p>
              <p className="font-display text-lg font-600 mt-1">{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function Testimonials() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="bg-sage-100 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="section-tag">Testimonios</span>
        <h2 className="font-display text-4xl md:text-5xl text-forest-900 font-700 mt-2 mb-14">
          Lo que dicen<br /><em className="text-forest-600">nuestros clientes</em>
        </h2>
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-forest-100 relative">
            <div className="text-6xl text-forest-200 font-display leading-none mb-4">"</div>
            <p className="font-body text-xl text-forest-800 leading-relaxed italic">
              {testimonials[active].text}
            </p>
            <div className="mt-8 flex flex-col items-center">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center text-2xl mb-3">🧑‍🌾</div>
              <p className="font-display font-600 text-forest-900">{testimonials[active].name}</p>
              <p className="font-sans text-sm text-forest-600/60 mt-1">{testimonials[active].role}</p>
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-3 bg-forest-600' : 'w-3 h-3 bg-forest-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="bg-earth-500 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 0L80 80H0L40 0z' opacity='0.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white font-700 leading-tight">
          ¿Listo para mejorar su pedido?
        </h2>
        <p className="mt-5 font-body text-white/75 text-lg leading-relaxed">
          Contáctenos hoy y agendemos una visita sin costo para conocer su situación actual.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contacto" className="bg-white text-earth-700 font-sans font-600 px-8 py-4 rounded-full hover:bg-earth-50 transition-colors shadow-lg text-sm">
            Agendar visita gratuita →
          </Link>
          <Link to="/planes" className="border-2 border-white/40 text-white font-sans font-500 px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm">
            Ver planes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <Process />
      <AboutPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
