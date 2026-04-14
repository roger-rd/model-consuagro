export default function PageHero({ tag, title, subtitle, bgClass = 'bg-forest-800' }) {
  return (
    <section className={`relative pt-36 pb-20 overflow-hidden ${bgClass}`}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10"
        style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/60 via-transparent to-forest-700/30" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {tag && (
          <span className="inline-block font-sans text-xs font-600 tracking-[0.2em] uppercase text-earth-300 mb-4 animate-fade-in-up">
            {tag}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-6xl text-white font-700 leading-tight animate-fade-in-up animation-delay-100 max-w-3xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 font-body text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
