import PageHero from '../components/PageHero'
import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', region: '', mensaje: '', servicio: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        tag="Contáctenos"
        title="Hablemos de su predio"
        subtitle="Complete el formulario y un técnico se comunicará con usted dentro de 24 horas hábiles."
        bgClass="bg-forest-900"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left – info */}
          <div>
            <span className="section-tag">Información de contacto</span>
            <h2 className="font-display text-3xl font-700 text-forest-900 mt-2 mb-8">Estamos cerca del campo,<br /><em className="text-forest-600">siempre disponibles</em></h2>

            <div className="space-y-6 mb-10">
              {[
                { icon: '📞', label: 'Teléfono', val: '+56 9 8765 4321', sub: 'Lun–Vie 8:00–18:00' },
                { icon: '📧', label: 'Correo electrónico', val: 'contacto@consuagro.cl', sub: 'Respondemos en 24h' },
                { icon: '📍', label: 'Oficina principal', val: 'Curicó, Región del Maule', sub: 'Con cobertura en 8 regiones' },
                { icon: '💬', label: 'WhatsApp', val: '+56 9 8765 4321', sub: 'Urgencias técnicas 24/7' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-sage-100 rounded-2xl border border-forest-100">
                  <div className="w-12 h-12 bg-forest-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-forest-600/60 mb-1">{c.label}</p>
                    <p className="font-body text-forest-900 font-500">{c.val}</p>
                    <p className="font-body text-xs text-forest-600/60 mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-forest-100 h-48 flex items-center justify-center border border-forest-200">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="font-sans text-sm text-forest-600">Cobertura en todo Chile</p>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Regiones del Maule, Biobío, O'Higgins y más</p>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div>
            <div className="bg-white border border-forest-100 rounded-3xl p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="font-display text-2xl font-700 text-forest-900 mb-3">¡Mensaje recibido!</h3>
                  <p className="font-body text-forest-700/70 leading-relaxed">
                    Gracias por contactarnos. Un técnico de nuestro equipo se comunicará con usted antes de 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 btn-outline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-700 text-forest-900 mb-6">Solicite una consulta</h3>
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wide text-forest-700 mb-2">Nombre completo *</label>
                        <input
                          type="text" name="nombre" required value={form.nombre} onChange={handle}
                          placeholder="Juan González"
                          className="w-full border border-forest-200 rounded-xl px-4 py-3 font-body text-sm text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all placeholder:text-forest-400/60"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wide text-forest-700 mb-2">Teléfono</label>
                        <input
                          type="tel" name="telefono" value={form.telefono} onChange={handle}
                          placeholder="+56 9 1234 5678"
                          className="w-full border border-forest-200 rounded-xl px-4 py-3 font-body text-sm text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all placeholder:text-forest-400/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wide text-forest-700 mb-2">Correo electrónico *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handle}
                        placeholder="su@correo.cl"
                        className="w-full border border-forest-200 rounded-xl px-4 py-3 font-body text-sm text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all placeholder:text-forest-400/60"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wide text-forest-700 mb-2">Región</label>
                        <select name="region" value={form.region} onChange={handle}
                          className="w-full border border-forest-200 rounded-xl px-4 py-3 font-body text-sm text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all bg-white">
                          <option value="">Seleccionar...</option>
                          {["O'Higgins","Maule","Ñuble","Biobío","La Araucanía","Metropolitana","Valparaíso","Coquimbo"].map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wide text-forest-700 mb-2">Servicio de interés</label>
                        <select name="servicio" value={form.servicio} onChange={handle}
                          className="w-full border border-forest-200 rounded-xl px-4 py-3 font-body text-sm text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all bg-white">
                          <option value="">Seleccionar...</option>
                          {['Diagnóstico de suelos','Planificación de cultivos','Eficiencia hídrica','Manejo fitosanitario','Certificación orgánica','Gestión predial','Otro'].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wide text-forest-700 mb-2">Mensaje *</label>
                      <textarea
                        name="mensaje" required value={form.mensaje} onChange={handle} rows={5}
                        placeholder="Cuéntenos sobre su predio, sus cultivos actuales y qué necesita mejorar..."
                        className="w-full border border-forest-200 rounded-xl px-4 py-3 font-body text-sm text-forest-900 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all resize-none placeholder:text-forest-400/60"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      Enviar consulta →
                    </button>

                    <p className="text-center font-sans text-xs text-forest-600/50">
                      La primera visita de diagnóstico es gratuita y sin compromiso
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
