import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'TENTANG' },
  { href: '#experience', label: 'PENGALAMAN' },
  { href: '#skills', label: 'KEAHLIAN' },
  { href: '#contact', label: 'KONTAK' },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white border-b border-neutral-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4 sm:gap-8">
        <a
          href="#"
          className="font-display font-black text-xl tracking-tighter text-white hover:text-vibrant-yellow transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-vibrant-yellow focus-visible:outline-offset-2 rounded"
        >
          NABILA<span className="text-vibrant-yellow">.</span>
        </a>

        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center space-x-8 text-xs font-display font-bold tracking-widest uppercase"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-200 hover:text-vibrant-yellow transition-colors py-1 border-b-2 border-transparent hover:border-vibrant-yellow whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-vibrant-yellow focus-visible:outline-offset-4 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center text-xs font-display font-black uppercase tracking-wider px-4 py-2 rounded-full bg-vibrant-yellow text-ink hover:bg-yellow-300 transition-transform active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            HUBUNGI
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-200 hover:text-vibrant-yellow hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Seluler"
          className="md:hidden border-t border-neutral-800 bg-ink px-4 py-3 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-xs font-display font-bold tracking-widest uppercase text-neutral-200 hover:text-vibrant-yellow hover:bg-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
