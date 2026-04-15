import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Base',
    subtitle: 'Para productores que comienzan',
    price: '$120.000',
    period: '/ mes',
    highlight: false,
    color: 'border-forest-200',
    features: [
      'Diagnóstico inicial de suelo',
      'Plan de cultivo estacional',
      '1 visita técnica mensual',
      'Informe mensual de avance',
      'Atención vía WhatsApp',
      'Recomendaciones de fertilización',
    ],
    missing: ['Manejo fitosanitario continuo', 'Gestión de certificaciones', 'Acceso a red de proveedores'],
    cta: 'Contratar plan Base',
    ctaClass: 'btn-outline',
  },
  {
    name: 'Profesional',
    subtitle: 'La opción más elegida',
    price: '$250.000',
    period: '/ mes',
    highlight: true,
    color: 'border-forest-600',
    features: [
      'Todo lo del Plan Base',
      '3 visitas técnicas mensuales',
      'Manejo fitosanitario continuo',
      'Análisis de agua de riego',
      'Asesoría en eficiencia hídrica',
      'Informes técnicos detallados',
      'Acceso red de proveedores ConsuAgro',
      'Atención telefónica prioritaria',
    ],
    missing: ['Gestión de certificaciones orgánicas'],
    cta: 'Contratar plan Profesional',
    ctaClass: 'btn-primary',
  },
  {
    name: 'Integral',
    subtitle: 'Asesoría total sin límites',
    price: '$420.000',
    period: '/ mes',
    highlight: false,
    color: 'border-earth-300',
    features: [
      'Todo lo del Plan Profesional',
      'Visitas ilimitadas',
      'Gestión de certificación orgánica',
      'Apoyo en postulaciones INDAP/SAG',
      'Planificación financiera del pedido',
      'Análisis foliar incluido',
      'Asesoría en comercialización',
      'Acceso a capacitaciones exclusivas',
      'Atención 7 días / WhatsApp urgencias',
    ],
    missing: [],
    cta: 'Contratar plan Integral',
    ctaClass: 'btn-outline',
  },
]

const faqs = [
  { q: '¿Los planes tienen contrato de permanencia?', a: 'No. Nuestros planes son mensuales y puede cambiar o cancelar en cualquier momento. Creemos que la mejor fidelización es la calidad del servicio.' },
  { q: '¿El diagnóstico inicial tiene algún costo?', a: 'La primera visita diagnóstica es completamente gratuita y sin compromiso. Solo después de conocer su pedido le ofrecemos el plan que más le conviene.' },
  { q: '¿Puedo personalizar algún plan?', a: 'Sí. Si necesita servicios específicos que no encajan en ningún plan estándar, ofrecemos cotizaciones a medida. Contáctenos y conversamos.' },
  { q: '¿Trabajan con pedidos pequeños?', a: 'Por supuesto. Asesoramos desde pequeños huertos familiares hasta grandes propiedades agrícolas. Cada pedido tiene su propio potencial.' },
]

export default function Planes() {
  return (
    <>
      <PageHero
        tag="Planes y tarifas"
        title="Asesoría técnica a su medida"
        subtitle="Planes diseñados para distintos niveles de necesidad y presupuesto, con la misma calidad técnica en todos."
        bgClass="bg-forest-800"
      />

      {/* Plans */}
      <section className="bg-sage-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((p, i) => (
              <div key={i}
                className={`relative bg-white rounded-3xl border-2 ${p.color} flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  p.highlight ? 'shadow-xl shadow-forest-600/20' : 'shadow-sm'
                }`}>
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-forest-600 text-white text-xs font-sans font-600 px-5 py-1.5 rounded-full tracking-wide uppercase">
                    Más popular
                  </div>
                )}

                <div className={`p-8 ${p.highlight ? 'bg-forest-600 rounded-t-[22px]' : ''}`}>
                  <h3 className={`font-display text-2xl font-700 ${p.highlight ? 'text-white' : 'text-forest-900'}`}>{p.name}</h3>
                  <p className={`font-body text-sm mt-1 ${p.highlight ? 'text-white/70' : 'text-forest-600/70'}`}>{p.subtitle}</p>
                  <div className="flex items-end gap-1 mt-6">
                    <span className={`font-display text-4xl font-700 ${p.highlight ? 'text-white' : 'text-forest-800'}`}>{p.price}</span>
                    <span className={`font-body text-sm mb-1 ${p.highlight ? 'text-white/60' : 'text-forest-600/60'}`}>{p.period}</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-forest-500 mt-0.5 flex-shrink-0">✓</span>
                        <span className="font-body text-sm text-forest-800">{f}</span>
                      </li>
                    ))}
                    {p.missing.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 opacity-40">
                        <span className="text-forest-400 mt-0.5 flex-shrink-0">✗</span>
                        <span className="font-body text-sm text-forest-600 line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contacto" className={`${p.ctaClass} mt-8 justify-center text-sm`}>
                    {p.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-sm text-forest-700/60 mt-8">
            Precios en CLP + IVA · Planes sin permanencia mínima · Pago mensual
          </p>
        </div>
      </section>

      {/* Custom */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-earth-50 border border-earth-200 rounded-3xl p-10">
            <div className="text-4xl mb-4">🗂️</div>
            <h2 className="font-display text-3xl font-700 text-forest-900 mb-4">¿Necesita algo diferente?</h2>
            <p className="font-body text-forest-700/70 mb-8 leading-relaxed">
              Para pedidos con necesidades específicas o proyectos puntuales, ofrecemos cotizaciones a medida. Contáctenos y diseñamos juntos la asesoría ideal para su situación.
            </p>
            <Link to="/contacto" className="btn-primary">Solicitar cotización personalizada →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sage-100 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag">Preguntas frecuentes</span>
            <h2 className="font-display text-4xl font-700 text-forest-900 mt-2">Resolvemos sus dudas</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-forest-100 group overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-sans font-500 text-forest-900 hover:text-forest-600 transition-colors">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-forest-500 group-open:rotate-180 transition-transform duration-200 text-lg">↓</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body text-sm text-forest-700/75 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
