import { useState } from 'react';

const setMenus = [
  {
    id: 'rijsttafel',
    name: 'Balinese Royal Megibung',
    courses: 6,
    desc: 'A ceremonial communal feast of Balinese royalty. Slow-roasted Babi Guling spice profile, Duck Betutu, Sambal Matah, Lawar, crispy jukut nangka, and steamed black rice.',
    price: 'IDR 750k',
    unit: '/ person',
    badges: ['100% Pork Free Available', 'Dairy Free'],
    badgeColors: ['badge-halal', 'badge-gf'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  },
  {
    id: 'sumatran',
    name: 'Sumatran Spice Banquet',
    courses: 5,
    desc: 'Aromatic Padang & Minangkabau riches: slow-braised Beef Rendang, Gulai Snapper, Sambal Ijo, crispy tempe balado, and saffron turmeric rice.',
    price: 'IDR 850k',
    unit: '/ person',
    badges: ['100% Halal', 'Dairy Free'],
    badgeColors: ['badge-halal', 'badge-gf'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
  },
  {
    id: 'seafood',
    name: 'Archipelago Seafood BBQ',
    courses: 4,
    desc: 'Live-fire coastal celebration: whole Ikan Bakar, sate lilit tuna, jimbaran prawns, coconut clams, and sambal dabu-dabu. Paired with kelapa muda agua fresca.',
    price: 'IDR 950k',
    unit: '/ person',
    badges: ['Gluten-Free', 'No Pork'],
    badgeColors: ['badge-gf', 'badge-nopork'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
];

const alaCarteItems = [
  { name: 'Sate Ayam Madura', desc: 'Charcoal-grilled chicken skewers, kacang sauce, lontong', price: 'IDR 120k', badges: ['badge-halal'], badgeLabels: ['No Pork'] },
  { name: 'Gado-Gado Nusantara', desc: 'Compressed vegetable salad, house peanut dressing, crackers', price: 'IDR 95k', badges: ['badge-vegan'], badgeLabels: ['Vegan'] },
  { name: 'Nasi Goreng Kampung', desc: 'Village-style wok fried rice, egg, kerupuk, acar', price: 'IDR 110k', badges: ['badge-vegetarian'], badgeLabels: ['Vegetarian Option'] },
  { name: 'Rendang Daging Sapi', desc: '6-hour dry-braised wagyu in 40-spice Minang paste', price: 'IDR 185k', badges: ['badge-halal'], badgeLabels: ['Halal'] },
  { name: 'Sayur Lodeh', desc: 'Coconut milk vegetable curry with long beans, chayote & tofu', price: 'IDR 85k', badges: ['badge-vegan'], badgeLabels: ['Vegan'] },
  { name: 'Es Teler Eksotis', desc: 'Chilled avocado, coconut, jackfruit, lychee & sweetened milk', price: 'IDR 65k', badges: ['badge-vegetarian'], badgeLabels: ['Vegetarian'] },
];

function DietaryBadge({ className, label }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider text-[10px] font-semibold ${className}`}>
      {label}
    </span>
  );
}

export default function MenuSection() {
  const [tab, setTab] = useState('set');

  return (
    <section id="menus" className="w-full py-28 section-bg-menu">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-3">
            Signature Tasting Secrets
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Signature Dining Rituals
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Hand-ground spice pastes ground fresh, artisan-fermented sauces, and theatrical grilling
            craftsmanship you enjoy in your own kitchen.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface-container rounded-xl p-1 border border-outline-variant/40">
            <button
              onClick={() => setTab('set')}
              className={`px-6 py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 ${
                tab === 'set'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Set Menus
            </button>
            <button
              onClick={() => setTab('alacarte')}
              className={`px-6 py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 ${
                tab === 'alacarte'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              À La Carte
            </button>
          </div>
        </div>

        {/* Set Menu Cards */}
        {tab === 'set' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {setMenus.map((menu) => (
              <div
                key={menu.id}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-[rgba(140,106,83,0.12)] hover:shadow-[0_16px_36px_-12px_rgba(34,32,30,0.10)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px]">
                      {menu.courses} Courses
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary">{menu.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {menu.desc}
                  </p>

                  {/* Dietary Badges */}
                  <div className="flex flex-wrap gap-2">
                    {menu.badges.map((badge, i) => (
                      <DietaryBadge key={badge} className={menu.badgeColors[i]} label={badge} />
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="pt-2 flex items-center justify-between border-t border-[rgba(140,106,83,0.12)]">
                    <div>
                      <span className="font-headline-sm text-headline-sm text-primary">
                        {menu.price}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">
                        {menu.unit}
                      </span>
                    </div>
                    <a
                      href="#book"
                      className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
                    >
                      Select Menu
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* À La Carte */}
        {tab === 'alacarte' && (
          <div className="max-w-4xl mx-auto space-y-0">
            <p className="font-body-sm text-body-sm text-on-surface-variant italic text-center mb-8">
              🌿 Travelling with picky eaters or strict allergies? We effortlessly customize à la carte for children, specific dietary levels, and fully plant-based preferences.
            </p>
            {alaCarteItems.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-start justify-between gap-6 py-6 ${i < alaCarteItems.length - 1 ? 'border-b border-[rgba(140,106,83,0.15)]' : ''}`}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-headline-sm text-headline-sm text-primary">{item.name}</h3>
                    {item.badges.map((b, bi) => (
                      <DietaryBadge key={b} className={b} label={item.badgeLabels[bi]} />
                    ))}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="font-label-lg text-label-lg text-secondary font-semibold block">
                    {item.price}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">per portion</span>
                </div>
              </div>
            ))}
            <div className="pt-8 text-center">
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Discuss Custom Menu via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
