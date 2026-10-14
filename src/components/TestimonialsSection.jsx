const testimonials = [
  {
    name: 'Sarah & Frank Jenkins',
    location: 'Melbourne, Australia · Staying at Villa Anggrek, Pererenan',
    rating: 5,
    text: '"Hands down the highlight of our two weeks in Bali. Travelling with three kids under eight and my parents, restaurant dinners were turning into stressful taxi marathons. Chef Wayan arrived punctually, the Balinese Megibung was breathtaking, and the sate for the kids was perfectly mild. Our villa kitchen was left spotless!"',
  },
  {
    name: 'Lars & Beatrix Obi',
    location: 'Hamburg, Germany · Staying at Villa Uluwatu Cliff',
    rating: 5,
    text: '"The authenticity of flavors was remarkable. As someone with IBD issues, eating out in Southeast Asia can be nerve-wracking. The KUALI team confirmed every ingredient beforehand over WhatsApp and prepared gluten-free Rendang that rivalled any fine dining establishment in Amsterdam. Impeccable hospitality."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-28 section-bg-testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
              Guest Reviews
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Trusted by Families Worldwide
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
            <span className="font-body-md text-body-md text-on-surface-variant ml-2">4.9 × Across 85+ Bali Deliveries</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-xl bg-surface-container-lowest border border-[rgba(140,106,83,0.12)] hover:shadow-[0_16px_36px_-12px_rgba(34,32,30,0.08)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(140,106,83,0.12)]">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-headline-sm text-headline-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-primary">{t.name}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
