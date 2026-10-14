const areas = ['Canggu', 'Seminyak', 'Pererenan', 'Ubud', 'Uluwatu', 'Sanur', 'Nusa Dua', 'Jimbaran', 'Kuta', 'Kerobokan'];

const features = [
  {
    icon: 'directions_car',
    title: 'Skip the Traffic & Taxi Chaos',
    desc: 'No frantic sunset cab bookings or navigating narrow Gangs with sleepy children. Uncork your favorite bottle and dine barefoot by your private pool deck.',
    tag: '0 km commute • Infinite Serenity',
  },
  {
    icon: 'family_restroom',
    title: 'Family & Kid Friendly',
    desc: 'Every dish is calibrated to your comfort. Enjoy fiery Balinese sambals on the side while kids feast on mild sweet soy chicken satay and fragrant coconut rice.',
    tag: 'Allergens Checked • Custom Spice Levels',
  },
  {
    icon: 'cleaning_services',
    title: 'Private Chef & Clean-Up Included',
    desc: "We bring artisanal cookware, serve course-by-course with Balinese hospitality, and leave your villa kitchen immaculate. Zero post-dinner chores.",
    tag: 'Spotless Kitchen • Zero Footprint',
  },
];

export default function CoverageAndFeatures() {
  return (
    <>
      {/* Island-Wide Coverage Banner */}
      <section className="w-full py-12 overflow-hidden relative border-y border-[rgba(143,76,45,0.08)] section-bg-coverage-banner">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-[32px] shrink-0">explore</span>
            <div>
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
                Island-Wide Coverage
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                We Bring the Feast Across Bali
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 font-label-md text-label-md">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-surface-bright text-on-surface shadow-sm border border-outline-variant/40 hover:bg-secondary hover:text-on-primary transition-all duration-200 cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-4 text-center lg:text-right">
          <p className="font-body-sm text-body-sm text-on-surface-variant italic">
            *Complimentary travel within South Bali & Ubud central. Modest travel fee applies for
            remote cliffside and northern locations.
          </p>
        </div>
      </section>

      {/* Why KUALI Features */}
      <section className="w-full py-28 relative section-bg-features">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
                Designed for Villa Living
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Uncompromising Villa Luxury
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Vacationing with family shouldn't mean wrestling chaotic traffic, crowded restaurants,
              or tired toddlers at dinner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="group bg-surface-container-low p-8 rounded-xl transition-all duration-300 hover:shadow-[0_16px_36px_-12px_rgba(34,32,30,0.10)] flex flex-col justify-between border border-transparent hover:border-outline-variant/50"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-surface-bright flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">{feat.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      {feat.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/30">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
                    {feat.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
