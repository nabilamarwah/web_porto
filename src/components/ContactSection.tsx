import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { CONTACTS, type ContactMethod } from '../data/portfolioData';

function ContactIcon({ id }: { id: ContactMethod['id'] }) {
  if (id === 'whatsapp') {
    return (
      <svg className="w-7 h-7 fill-ink" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.76C7.62 10.96 8.5 12.12 8.62 12.28C8.75 12.44 10.35 14.91 12.8 15.97C13.38 16.22 13.84 16.38 14.19 16.49C14.78 16.68 15.31 16.65 15.73 16.59C16.2 16.51 17.18 15.99 17.38 15.42C17.59 14.86 17.59 14.37 17.53 14.28C17.47 14.18 17.3 14.12 17.05 14C16.8 13.87 15.55 13.26 15.32 13.17C15.09 13.09 14.92 13.05 14.75 13.3C14.58 13.54 14.11 14.12 13.96 14.28C13.82 14.45 13.67 14.47 13.42 14.35C13.17 14.22 12.38 13.96 11.44 13.12C10.71 12.47 10.22 11.66 10.08 11.41C9.93 11.17 10.06 11.03 10.19 10.91C10.3 10.8 10.44 10.62 10.57 10.47C10.7 10.32 10.74 10.21 10.83 10.05C10.91 9.88 10.87 9.74 10.81 9.61C10.74 9.5 10.27 8.35 10.07 7.89C9.89 7.42 9.7 7.49 9.55 7.48C9.42 7.47 9.26 7.44 9.11 7.44Z" />
      </svg>
    );
  }
  if (id === 'email') {
    return (
      <svg className="w-7 h-7 fill-ink" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  }
  return (
    <svg className="w-7 h-7 fill-ink" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    id: string,
    value: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 1800);
    } catch {
      // Clipboard API may be unavailable in restricted contexts; ignore silently
    }
  };

  return (
    <section
      className="road-band pt-20 pb-12 text-white relative"
      data-purpose="contact-and-footer"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Contact Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-display font-bold uppercase tracking-widest text-neutral-400 mb-2">
            SAPA AKU, KOLABORASI, ATAU NGOBROL SANTAI
          </p>
          <h2 className="text-5xl sm:text-7xl font-heavy uppercase tracking-tight leading-tight">
            AYO <span className="text-vibrant-yellow">TERHUBUNG</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-3 font-medium">
            Terbuka untuk diskusi proyek OSIS, kolaborasi kepemudaan, maupun
            program pertukaran ide antarsekolah.
          </p>
        </div>

        {/* 3 Interactive White Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTACTS.map((contact) => {
            const isCopied = copiedId === contact.id;
            return (
              <div
                key={contact.id}
                className="bg-white text-ink p-6 rounded-[28px] border-2 border-neutral-300 shadow-[6px_6px_0px_#FFE81F] flex items-center justify-between gap-3 hover:-translate-y-1 hover:border-ink transition-all group"
              >
                <a
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-electric-blue rounded-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-vibrant-yellow border-2 border-ink flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                    <ContactIcon id={contact.id} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase font-display font-black text-neutral-500 tracking-wider">
                      {contact.label}
                    </p>
                    <p className="font-display font-bold text-base text-ink truncate group-hover:text-electric-blue transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopy(e, contact.id, contact.copyValue)}
                  aria-label={`Salin ${contact.label}`}
                  title={isCopied ? 'Tersalin!' : `Salin ${contact.label}`}
                  className="w-10 h-10 rounded-xl border border-neutral-300 bg-neutral-100 hover:bg-vibrant-yellow hover:border-ink flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-ink" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-600" aria-hidden="true" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Semantic Sub-footer */}
        <footer className="pt-8 border-t border-neutral-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-neutral-400">
          <p>© 2026 Nabila Marwah Az Zahra · Hak Cipta Dilindungi.</p>
          <div className="mt-4 sm:mt-0 flex items-center justify-center gap-2 font-display uppercase tracking-widest text-[11px] text-neutral-300">
            <span>✸ Pelajar</span>
            <span>•</span>
            <span>OSIS</span>
            <span>•</span>
            <span>Sekretaris SMA Negeri 1 Jayapura</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
