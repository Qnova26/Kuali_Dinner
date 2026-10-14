const steps = [
  {
    number: '01',
    icon: 'restaurant_menu',
    title: 'Choose Your Feast',
    desc: 'Browse our curated set menus or build your own à la carte experience. Filter by dietary needs and regional specialties.',
  },
  {
    number: '02',
    icon: 'villa',
    title: 'Submit Villa Details',
    desc: 'Share your villa address, preferred dining time and guest count. Complete the form and review your generated booking preview.',
  },
  {
    number: '03',
    icon: 'chat',
    title: 'Confirm & Relax',
    desc: 'Connect directly with our culinary director to verify allergies, local timing, and lock in your five-star dining date.',
  },
];

const pillars = [
  { icon: 'sanitizer', title: 'High Hygiene Standards', desc: 'Strict certified-kitchen protocols: sanitized Santoku knives, induction units, high-pressure burners. Market-fresh ingredients, same-day sourcing.' },
  { icon: 'table_restaurant', title: 'Complete Table & Clean-Up', desc: 'Tableware, artisan serving bowls, and tropical floral arrangements included. We clean everything — spotless kitchen guarantee.' },
  { icon: 'child_friendly', title: 'Kid Friendly & Custom Heat', desc: 'Exceptionally family-calibrated. Every dish has a mild option and a full-fire adults version. We bring custom spice kits per table.' },
  { icon: 'local_florist', title: 'Fresh Local Sourcing', desc: 'We source 100% from Bedugul highland growers and Jimbaran fishermen. 0-day seafood and 2-day seasonal greens.' },
];

const timeline = [
  { time: '01 · 3:00 PM', title: 'Discreet Villa Arrival', desc: 'Our culinary coordinator arrives quietly and proceeds through a 15-minute kitchen compliance check.' },
  { time: '02 · 5:00 PM', title: 'Aromas & Table Styling', desc: 'Spice-grinding commences. Signature tropical floral table architecture and bespoke candle settings.' },
  { time: '03 · 7:00 PM', title: 'Course Presentation', desc: 'Each course is announced by your chef in the language of your choice. Dishes paced to maximize enjoyment.' },
  { time: '04 · 9:30 PM', title: 'Flawless Departure', desc: 'Full kitchen restoration. Every surface sanitized. Sign-off receipt shared digitally within 15 minutes.' },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full" style={{background: '#fbf9f5'}}>
      {/* How to Book */}
      <div className="py-28 border-y border-[rgba(143,76,45,0.06)] section-bg-experience-steps">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-3">
              Effortlessly Inspired By
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              How Your Dining Unfolds
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              Booking a private culinary team is as smooth as feeling your concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-8 left-[17%] right-[17%] h-px bg-gradient-to-r from-secondary/30 via-secondary/60 to-secondary/30" />
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center gap-5">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-md relative z-10 transition-all duration-300 hover:scale-110 ${
                    i === 1
                      ? 'bg-secondary text-on-primary'
                      : 'bg-surface-bright text-secondary border border-outline-variant/40'
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
                    Step {step.number}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chef Profile & Pillars */}
      <div className="py-28 section-bg-experience-chef">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Chef intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Head Chef Wayan Sudarmika"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating name card */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface/95 backdrop-blur-md rounded-xl p-4 shadow-[0_16px_36px_-12px_rgba(34,32,30,0.12)]">
                <p className="font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-1">
                  Head Culinary Director
                </p>
                <h3 className="font-headline-sm text-headline-sm text-primary">Chef Wayan Sudarmika</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Trained in 5-star Ayurvedic kitchens across Bali & Yogyakarta. 15+ years mastering Archipelago gastronomy.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
                The Culinary Lineage
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Honoring centuries of Archipelago craft through 5-star precision.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Trained in the meticulous Juru Dapur traditions of Ayurvedic and Royal Balinese
                kitchens, Chef Wayan spent fifteen years refining modern high-dining technique
                before returning to the ancestral culinary roots of the islands.
              </p>
              <blockquote className="pl-6 border-l-2 border-secondary italic font-body-lg text-body-lg text-on-surface-variant">
                "Indonesian food is a sacred celebration of spices and hospitality. We bring ancestral
                traditions into your villa without compromising hygiene, dietary comfort, or artistic
                presentation."
              </blockquote>
              <div className="flex gap-8 pt-2">
                {[['15+', 'Resort Years'], ['100%', 'Local Sourced'], ['0', 'Cleanup Stress']].map(
                  ([num, label]) => (
                    <div key={label}>
                      <p className="font-headline-sm text-headline-sm text-secondary">{num}</p>
                      <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">
                        {label}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* 4-Pillar Promise */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
                Our Accompanying Standard
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                The 4-Pillar Villa Dining Promise
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="p-6 rounded-xl bg-surface-container-low border border-[rgba(140,106,83,0.12)] hover:border-secondary/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-bright flex items-center justify-center text-secondary mb-4 shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">{p.icon}</span>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-2">
                    Pillar 0{i + 1}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{p.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Timeline */}
          <div>
            <div className="text-center mb-10">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
                The Culinary Experience
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                How an Evening with KUALI Unfolds in Your Villa
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {timeline.map((t) => (
                <div
                  key={t.time}
                  className="relative bg-surface-container-low rounded-xl p-5 border border-[rgba(140,106,83,0.12)] overflow-hidden group hover:border-secondary/30 transition-all"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent" />
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-3 text-[10px]">
                    {t.time}
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-2">{t.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
