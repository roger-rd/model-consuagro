import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Mg. Felipe Rojas', role: 'Director Técnico', spec: 'Ingeniero Agrónomo · 18 años de experiencia', emoji: '🧑‍🌾' },
  { name: 'Ing. Valentina Herrera', role: 'Especialista en Suelos', spec: 'Edafología · Certificación orgánica', emoji: '👩‍🔬' },
  { name: 'Ing. Sebastián Muñoz', role: 'Asesor Hídrico', spec: 'Riego tecnificado · Hidrología', emoji: '👨‍💻' },
  { name: 'Mg. Camila Torres', role: 'Especialista Fitosanitaria', spec: 'Entomología · Fitopatología', emoji: '👩‍🌾' },
]

const values = [
  { icon: '🏆', title: 'Excelencia técnica', desc: 'Aplicamos el conocimiento más actualizado y las mejores prácticas internacionales adaptadas a la realidad del campo chileno.' },
  { icon: '🤝', title: 'Compromiso real', desc: 'Nos involucramos genuinamente con cada productor. Su éxito es nuestro éxito.' },
  { icon: '🌿', title: 'Sostenibilidad', desc: 'Toda recomendación técnica considera el largo plazo: suelo, agua, biodiversidad y rentabilidad van de la mano.' },
  { icon: '💡', title: 'Innovación aplicada', desc: 'Incorporamos tecnología y nuevas herramientas cuando aportan valor real, sin perder de vista lo esencial.' },
  { icon: '📚', title: 'Formación continua', desc: 'Nuestro equipo se actualiza permanentemente a través de cursos, congresos y redes técnicas nacionales e internacionales.' },
  { icon: '🗣️', title: 'Comunicación clara', desc: 'Hablamos el lenguaje del campo. Cada informe, cada recomendación está pensada para ser entendida y aplicada.' },
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        tag="Sobre ConsuAgro"
        title="Técnicos que viven el campo cada día"
        subtitle="Somos un equipo de ingenieros agrónomos y especialistas con años de experiencia real en producción agrícola chilena."
        bgClass="bg-forest-900"
      />

      {/* Mission / Vision / Valores */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">Nuestra identidad</span>
            <h2 className="font-display text-4xl font-700 text-forest-900 mt-2">Lo que nos guía</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Misión',
                color: 'bg-forest-600',
                text: 'Brindar asesoría técnica agrícola de excelencia que mejore la productividad, sostenibilidad y rentabilidad de los predios de nuestros clientes, contribuyendo al desarrollo del campo chileno.',
              },
              {
                icon: '🔭',
                title: 'Visión',
                color: 'bg-earth-500',
                text: 'Ser la empresa de consultoría agrícola de referencia en Chile, reconocida por la calidad de nuestro trabajo técnico, la confianza de nuestros clientes y nuestro aporte a una agricultura más sostenible.',
              },
              {
                icon: '⚖️',
                title: 'Valores',
                color: 'bg-forest-800',
                text: 'Excelencia técnica, compromiso con el productor, sostenibilidad ambiental, ética profesional, innovación aplicada y comunicación transparente son los pilares que definen nuestra forma de trabajar.',
              },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-forest-100 card-hover">
                <div className={`${c.color} p-6 flex items-center gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">{c.icon}</div>
                  <h3 className="font-display text-2xl font-700 text-white">{c.title}</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-body text-forest-700/75 leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-sage-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">Nuestra historia</span>
            <h2 className="font-display text-4xl font-700 text-forest-900 mt-2 mb-6">Nacimos del campo,<br /><em className="text-forest-600">para el campo</em></h2>
            <p className="font-body text-forest-700/75 leading-relaxed mb-4">
              ConsuAgro fue fundada en 2012 por un grupo de ingenieros agrónomos convencidos de que el productor agrícola chileno merecía asesoría técnica de primer nivel, sin importar el tamaño de su predio.
            </p>
            <p className="font-body text-forest-700/75 leading-relaxed mb-4">
              Empezamos trabajando en la Región del Maule con pequeños viticultores y hortalizas, y con los años fuimos expandiendo nuestra presencia a 8 regiones del país, sumando especialistas en distintas áreas productivas.
            </p>
            <p className="font-body text-forest-700/75 leading-relaxed">
              Hoy somos más de 12 profesionales activos en terreno, con más de 380 predios asesorados y una tasa de retención de clientes superior al 90%.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '📅', label: 'Fundación', val: '2012' },
              { icon: '👥', label: 'Equipo', val: '12+ técnicos' },
              { icon: '🌎', label: 'Regiones', val: '8 zonas' },
              { icon: '📈', label: 'Retención', val: '94%' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-forest-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="font-display text-2xl font-700 text-forest-700">{s.val}</p>
                <p className="font-sans text-xs text-forest-600/60 mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag">Valores</span>
            <h2 className="font-display text-4xl font-700 text-forest-900 mt-2">Lo que nos define</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex gap-5 p-6 bg-sage-100 rounded-2xl hover:bg-forest-50 transition-colors border border-forest-100">
                <div className="text-3xl flex-shrink-0 mt-1">{v.icon}</div>
                <div>
                  <h3 className="font-display text-lg font-600 text-forest-900 mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-forest-700/70 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-forest-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag text-earth-400">Equipo</span>
            <h2 className="font-display text-4xl font-700 text-white mt-2">Las personas detrás<br /><em className="text-earth-400">de cada visita</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div key={i} className="bg-white/8 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-forest-700 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">{t.emoji}</div>
                <h3 className="font-display text-lg font-600 text-white">{t.name}</h3>
                <p className="font-sans text-sm text-earth-400 mt-1">{t.role}</p>
                <p className="font-body text-xs text-white/50 mt-2 leading-relaxed">{t.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-earth-500 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white font-600 mb-4">Conózcanos en su predio</h2>
          <p className="font-body text-white/70 mb-8">La primera visita es sin costo. Le mostramos cómo trabajamos y evaluamos juntos el potencial de su campo.</p>
          <Link to="/contacto" className="bg-white text-earth-700 font-sans font-600 px-8 py-4 rounded-full hover:bg-earth-50 transition-colors text-sm">
            Agendar visita →
          </Link>
        </div>
      </section>
    </>
  )
}
