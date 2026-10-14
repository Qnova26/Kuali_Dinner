import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menus & Dining', href: '#menus' },
  { label: 'The Experience', href: '#experience' },
  { label: 'Coverage & Rates', href: '#coverage' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = ['home', 'menus', 'experience', 'coverage', 'book'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col text-left group">
          <span
            className={`font-headline-md text-headline-md tracking-wider transition-colors ${
              scrolled ? 'text-primary' : 'text-surface-bright'
            } group-hover:text-secondary`}
          >
            KUALI
          </span>
          <span
            className={`font-label-caps text-label-caps uppercase tracking-widest -mt-1 transition-colors ${
              scrolled ? 'text-on-surface-variant' : 'text-primary-fixed-dim'
            }`}
          >
            Bali Villa Dining
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-label-lg text-label-lg pb-1 transition-all duration-200 border-b ${
                  isActive
                    ? 'text-secondary border-secondary'
                    : scrolled
                    ? 'text-on-surface-variant hover:text-secondary border-transparent hover:border-secondary'
                    : 'text-primary-fixed-dim hover:text-secondary border-transparent hover:border-secondary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#book"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-on-primary hover:bg-on-secondary-container transition-all duration-300 shadow-sm font-label-md text-label-md uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            Book via WhatsApp
          </a>
          {/* Mobile hamburger */}
          <button
            className={`lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5 ${scrolled ? 'text-primary' : 'text-surface-bright'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-xl border-t border-outline-variant px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-label-lg text-label-lg text-on-surface-variant hover:text-secondary py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-secondary text-on-primary font-label-md text-label-md uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            Book via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
