import { MARQUEE_ITEMS } from '../data/portfolioData';

export function MarqueeBand() {
  const renderTickerSet = (prefix: string) => (
    <span className="inline-flex items-center gap-4 px-4">
      {MARQUEE_ITEMS.map((item, idx) => (
        <span key={`${prefix}-${idx}`} className="inline-flex items-center gap-4">
          <span
            className={
              idx === 0
                ? 'text-vibrant-yellow font-script normal-case text-2xl'
                : 'text-vibrant-yellow'
            }
          >
            ✦
          </span>
          <span
            className={
              item.script
                ? 'text-vibrant-yellow font-script normal-case text-2xl'
                : undefined
            }
          >
            {item.text}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <section
      aria-label="Ticker Pengumuman"
      className="road-band py-8 overflow-hidden border-y-2 border-ink"
    >
      <div className="animate-marquee whitespace-nowrap text-white font-display text-base sm:text-lg font-bold uppercase tracking-wider flex items-center">
        {renderTickerSet('a')}
        {renderTickerSet('b')}
      </div>
    </section>
  );
}
