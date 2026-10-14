export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container">
      {/* CTA Band */}
      <div className="bg-primary py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest block text-[10px]">
              Direct Concierge Booking
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright">
              Ready to Host an Unforgettable Bali Dining Ritual?
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed max-w-lg">
              Send your preferred dining date, villa location, and guest count directly to our culinary coordinator. We reply within minutes with menu confirmation and final transparent logistics tally.
            </p>
            <ul className="space-y-1.5 mt-4">
              {[
                'Personal chef + service assistant included',
                'Ethical produce, preserved market-fresh, morning of event',
                'Zero kitchen cleanup — we leave immaculate',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-body-sm text-body-sm text-primary-fixed">
                  <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-on-primary rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 shadow-xl"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Book via WhatsApp Concierge
            </a>
            <a
              href="#menus"
              className="font-label-lg text-label-lg text-primary-fixed-dim hover:text-secondary-container transition-colors underline underline-offset-4"
            >
              View Tasting Menus →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div>
                <p className="font-headline-md text-headline-md text-surface-bright tracking-wider">KUALI</p>
                <p className="font-label-caps text-label-caps uppercase text-on-primary-container tracking-widest -mt-1">
                  Bali Villa Dining
                </p>
              </div>
              <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                Bespoke Indonesian private chef service curating private dining rituals across luxury villas in Bali.
              </p>
              <p className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px]">
                @KUALI.DINING.BALI
              </p>
            </div>

            {/* Private Dining */}
            <div>
              <p className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px] mb-4">Private Dining</p>
              <ul className="space-y-3">
                {['Nusantara Degustation', 'Balinese Royal Megibung', 'Archipelago Seafood BBQ', 'Vegan & Plant-Based Courses'].map(
                  (item) => (
                    <li key={item}>
                      <a href="#menus" className="font-body-sm text-body-sm text-on-primary-container hover:text-secondary-container transition-colors">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Island Coverage */}
            <div>
              <p className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px] mb-4">Island Coverage</p>
              <ul className="space-y-3">
                {['Seminyak, Canggu, Pererenan', 'Nusa Dua, Sanur, & Ubud'].map((item) => (
                  <li key={item} className="font-body-sm text-body-sm text-on-primary-container">{item}</li>
                ))}
                <li>
                  <p className="font-label-caps text-label-caps uppercase text-on-primary-container tracking-widest text-[10px] mt-4 mb-1">Operational Hours</p>
                  <p className="font-body-sm text-body-sm text-on-primary-container">Daily: 07.00 – 23.00 WITA</p>
                  <p className="font-body-sm text-body-sm text-on-primary-container">Concierge Desk: 24/7</p>
                </li>
              </ul>
            </div>

            {/* Concierge */}
            <div>
              <p className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px] mb-4">
                Concierge Inquiries
              </p>
              <p className="font-body-sm text-body-sm text-on-primary-container mb-2">
                Direct WhatsApp Hotline for Villa Bookings & Custom Menus:
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="font-headline-sm text-headline-sm text-surface-bright hover:text-secondary-container transition-colors block mb-4"
              >
                +62 812-XXXX-XXXX
              </a>
              <a
                href="#book"
                className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest text-[10px] font-bold hover:text-surface-bright transition-colors"
              >
                Reserve Dining Session →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-surface-bright/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body-sm text-body-sm text-on-primary-container">
              © 2025 KUALI Bali. Crafted with reverence for Indonesian gastronomy.
            </p>
            <div className="flex gap-6">
              {['Culinary Philosophy', 'Villa Terms'].map((link) => (
                <a key={link} href="#" className="font-label-caps text-label-caps uppercase text-on-primary-container hover:text-secondary-container transition-colors tracking-widest text-[10px]">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
