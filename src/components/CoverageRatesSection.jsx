import { useState } from 'react';

const zones = [
  {
    number: '01',
    name: 'South Bali Prime',
    areas: 'Seminyak, Canggu, Pererenan, Kerobokan, Legian, Sanur',
    transport: 'FREE (Included)',
    transportClass: 'text-emerald-700 bg-emerald-50',
    features: ['Built in to menu cost', 'Same-day short-lead bookings'],
  },
  {
    number: '02',
    name: 'Central & Peninsula',
    areas: 'Ubud central, Badung / Uluwatu, Nusa Dua, Jimbaran cliffside',
    transport: '+IDR 150,000',
    transportClass: 'text-secondary bg-secondary-container/30',
    features: ['Cliff & jungle-access verified', 'Includes toll-road dispatch'],
  },
  {
    number: '03',
    name: 'Extended & East',
    areas: 'Tabanan (Kediri/Canggu), Payangan, Tegallalang, Candidasa',
    transport: '+IDR 250,000',
    transportClass: 'text-secondary bg-secondary-container/30',
    features: ['Flat fee per villa booking', 'Specialized low-remote vehicle'],
  },
  {
    number: '04',
    name: 'Remote Destinations',
    areas: 'Singaraja, Pemuteran, West Bali National Park',
    transport: '+IDR 350k – 450k',
    transportClass: 'text-on-surface-variant bg-surface-container',
    features: ['Dual-insulated cooling crates', 'Dedicated logistics navigator'],
  },
];

const faqs = [
  {
    q: 'What kitchen equipment must our villa have?',
    a: 'We require only a working sink, standard fridge space, and electricity. Our chefs arrive with hand-forged Santoku knives, induction units, high-pressure burners, portable cookware, and customised serveware.',
  },
  {
    q: 'What if our villa is remote or hard to locate?',
    a: 'No problem. Share your Google Maps pin or villa address when booking. Our logistics team pre-scouts remote routes. We factor in travel time so your chef arrives calm and fully prepared.',
  },
  {
    q: 'Can we split set menus or accommodate dietary needs?',
    a: "Absolutely. We can serve two different set menus simultaneously for the same table. Dietary needs (vegan, gluten-free, nut allergy, no pork) are handled with dedicated prep stations and labeled servingware.",
  },
  {
    q: 'How does clean-up work at the end of the evening?',
    a: 'Our team performs a complete kitchen restoration: all surfaces wiped down, cookware removed, waste sorted and taken out, and your kitchen left spotless. Typically takes 30–40 minutes post-dinner.',
  },
];

export default function CoverageRatesSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="coverage" className="w-full py-28 section-bg-coverage-rates">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-3">
              Coverage & Rates
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Bali Island Coverage & Rates
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We cater to private villas across the entirety of Bali. Clear pricing, transparent
              logistics, and zero hidden surcharges — bringing the sensory ritual of refined
              Indonesian dining directly to your dining pavilion.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-surface-container-low border border-[rgba(140,106,83,0.12)] text-center">
              <span className="font-headline-sm text-headline-sm text-secondary block mb-1">4.7°C</span>
              <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest text-[10px]">Avg. Transit Cold Temp</p>
            </div>
            <div className="p-5 rounded-xl bg-surface-container-low border border-[rgba(140,106,83,0.12)] text-center">
              <span className="font-headline-sm text-headline-sm text-secondary block mb-1">100%</span>
              <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest text-[10px]">Carbon-Balanced Trips</p>
            </div>
            <div className="col-span-2 p-5 rounded-xl bg-primary text-on-primary border border-transparent">
              <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px] block mb-1">All Regions Served</span>
              <p className="font-body-sm text-body-sm text-primary-fixed">Mobile preparation commissary + Bespoke tableside curation included.</p>
            </div>
          </div>
        </div>

        {/* Zone Cards */}
        <div className="mb-16">
          <h3 className="font-headline-md text-headline-md text-primary mb-2">Regional Surcharge & Villa Zones</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
            Fees are calculated per booking, not per guest, encompassing your chef brigade, service team, portable cookware, and clean-up logistics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((zone) => (
              <div
                key={zone.number}
                className="p-6 rounded-xl bg-surface-container-low border border-[rgba(140,106,83,0.12)] hover:border-secondary/30 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[10px] mb-2">
                  Zone {zone.number}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">{zone.name}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">{zone.areas}</p>
                <div className={`inline-block self-start px-3 py-1.5 rounded-lg font-label-lg text-label-lg font-semibold mb-4 ${zone.transportClass}`}>
                  {zone.transport}
                </div>
                <ul className="space-y-1.5">
                  {zone.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-[14px]">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Guarantee bar */}
          <div className="mt-6 p-4 rounded-xl bg-surface-container-low border border-secondary/20 flex items-start gap-3">
            <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">verified_user</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong className="text-on-surface">Logistical Guarantee:</strong> All transportation fees cover our culinary brigade's door-to-door transit, complete mobile kitchen equipment, dining table styling accoutrements, and strict cold-chain food safeguarding directly to your villa entrance. No additional demands or surplus surcharges apply.
            </p>
          </div>
        </div>

        {/* Group Guidelines */}
        <div className="mb-20">
          <h3 className="font-headline-md text-headline-md text-primary mb-8">Minimum Spend & Group Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'group',
                title: 'Strictly 10 Guests Max',
                tag: 'Pacing & Craft',
                desc: 'Maximum capacity is kept strictly to 10 guests per sitting. This guarantees that complex archipelago courses — such as wood-smoked sambals and delicate heirloom rice towers — are plated at prime thermodynamic temperatures.',
                sub: 'Intimate Quality Guarantee',
              },
              {
                icon: 'restaurant',
                title: '2 Guests Minimum',
                tag: 'Maximum Volume',
                desc: 'Whether for a honeymoon poolside dinner in Ubud or a quiet reunion in Uluwatu. Single diners may book under the 2-guest minimum culinary package.',
                sub: 'Romantic Duos Welcome',
              },
              {
                icon: 'payments',
                title: 'Deposit & Payment',
                tag: 'Simple Settlement',
                desc: 'Secure your dining date with a 50% deposit via Wise, Revolut, Stripe link, or Indonesian bank transfer (BCA/Mandiri). The balance is payable upon conclusion of dinner via cash/tap, bank link, or local IDR cash.',
                sub: 'Flexible Multi-Currency',
              },
            ].map((g) => (
              <div key={g.title} className="p-6 rounded-xl bg-surface-container-low border border-[rgba(140,106,83,0.12)]">
                <span className="material-symbols-outlined text-secondary text-[28px] mb-4 block">{g.icon}</span>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[10px] block mb-2">{g.tag}</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">{g.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{g.desc}</p>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[10px] font-semibold">{g.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="text-center mb-10">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">
              Villa Guest Guide
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary">Frequently Asked Questions</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Everything you need to know about preparing your holiday sanctuary for our culinary team.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b border-[rgba(140,106,83,0.15)] ${i === 0 ? 'border-t' : ''}`}
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-headline-sm text-headline-sm text-primary">{faq.q}</span>
                  <span className="material-symbols-outlined text-secondary shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    expand_more
                  </span>
                </button>
                <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                  <p className="font-body-md text-body-md text-on-surface-variant pb-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
