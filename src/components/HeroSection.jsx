export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-primary-container min-h-[96vh] flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/30" />
      {/* Ambient Glow */}
      <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 flex flex-col justify-between">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          {/* Eyebrow */}
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-container">
            Private Chef &nbsp;·&nbsp; Bali Villas &nbsp;·&nbsp; Authentic Indonesian Cuisine
          </span>

          <h1 className="font-display text-display-mobile lg:text-display text-surface-bright tracking-tight leading-[1.05]">
            Authentic Indonesian Dining,{' '}
            <span className="italic text-secondary-container">Right in Your</span>
            {' '}Private Villa
          </h1>

          <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl font-light leading-relaxed">
            Experience the rich heritage of Indonesian cuisine freshly prepared and served by our
            private chefs in your Bali sanctuary. Zero hassle, impeccable hygiene, and thoughtfully
            tailored to your family's dietary needs.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="px-8 py-4 rounded-lg bg-secondary text-on-primary hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 shadow-xl font-label-lg text-label-lg tracking-wider uppercase inline-flex items-center gap-3 group"
            >
              <span>Reserve Your Private Chef</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="#menus"
              className="px-8 py-4 rounded-lg bg-surface-bright/10 text-surface-bright hover:bg-surface-bright/20 backdrop-blur-sm transition-all duration-300 font-label-lg text-label-lg tracking-wider uppercase"
            >
              Explore Our Menus
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface-bright/5 backdrop-blur-md rounded-xl p-6 border border-surface-bright/10">
          {[
            {
              icon: 'eco',
              title: '100% Sourced Locally',
              desc: 'Bedugul highland organics & Jimbaran seafood',
            },
            {
              icon: 'verified',
              title: 'Hygiene & Allergy Conscious',
              desc: 'Strict sanitation and separated allergy prep',
            },
            {
              icon: 'villa',
              title: 'Serving All Bali Villas',
              desc: 'Private estates, cliffside retreats & luxury compounds',
            },
          ].map((badge) => (
            <div key={badge.title} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-container text-[24px]">
                  {badge.icon}
                </span>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-surface-bright font-semibold">
                  {badge.title}
                </p>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-fixed-dim">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-[10px]">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary-fixed-dim to-transparent animate-pulse" />
      </div>
    </section>
  );
}
