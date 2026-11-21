import { useState } from 'react';
import { INTRO_PORTRAIT_URL } from '../data/portfolioData';
import { PortfolioImage } from './PortfolioImage';

const QUICK_FACTS = [
  'Aktif di OSIS sejak kelas X!',
  'Suka desain poster & publikasi.',
  'Tertib arsip & notulensi rapat.',
] as const;

export function IntroductionSection() {
  const [factIndex, setFactIndex] = useState<number | null>(null);
  const [thumbBounce, setThumbBounce] = useState(false);
  const [appreciated, setAppreciated] = useState(false);

  const handleToggleFact = () => {
    setFactIndex((prev) =>
      prev === null ? 0 : prev + 1 >= QUICK_FACTS.length ? null : prev + 1
    );
  };

  const handleThumbsClick = () => {
    setThumbBounce(true);
    setAppreciated((prev) => !prev);
    window.setTimeout(() => setThumbBounce(false), 300);
  };

  return (
    <section
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6"
      data-purpose="introduction-section"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Stacked Headline & Dark Intro Card */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs uppercase font-display font-black tracking-widest text-neutral-600 bg-neutral-200 px-3 py-1 rounded-full">
              MY INTRODUCTION
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heavy uppercase leading-[0.9] tracking-tighter text-ink mb-8">
            <span>PERKE-</span>
            <br />
            <span>
              N<span className="slit-slash">A</span>L
              <span className="slit-slash">A</span>N
            </span>
            <br />
            <span>DIRI</span>
          </h2>

          {/* Dark rounded container card matching template layout */}
          <div className="bg-ink text-white p-7 sm:p-9 rounded-[32px] border-2 border-ink shadow-[6px_6px_0px_#FFE81F] relative">
            <div className="absolute -top-3 left-8 bg-vibrant-yellow text-ink text-[11px] font-display font-black px-3 py-0.5 rounded-full uppercase tracking-wider border border-ink">
              Halo!
            </div>

            <p className="text-base sm:text-lg font-body leading-relaxed text-neutral-200">
              Hai, Nabila di sini! Aku{' '}
              <strong className="text-white font-bold underline decoration-vibrant-yellow decoration-2 underline-offset-4">
                Nabila Marwah Az Zahra
              </strong>
              . Siswi SMA Negeri 1 Jayapura yang komunikatif, bertanggung jawab,
              dan memiliki antusiasme tinggi dalam kegiatan sosial serta
              kepemimpinan pendidikan.
            </p>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Siap Berkolaborasi
              </span>
              <span className="font-display font-bold text-neutral-300">
                Jayapura, Papua 🇮🇩
              </span>
            </div>
          </div>
        </div>

        {/* Right: Portrait Frame with Overlapping Badges/Stickers */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px]">
            {/* Corner Sticker: Clickable Black "•••" Pill */}
            <button
              type="button"
              onClick={handleToggleFact}
              aria-label="Tampilkan catatan singkat tentang Nabila"
              aria-expanded={factIndex !== null}
              className="absolute -top-3 -left-3 z-20 bg-ink text-white px-3.5 py-2 rounded-full border-2 border-white shadow-md flex items-center space-x-1 hover:bg-electric-blue transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </button>

            {factIndex !== null && (
              <div className="absolute -top-14 left-2 z-30 bg-white text-ink border-2 border-ink rounded-2xl px-3.5 py-2 text-xs font-display font-bold shadow-[3px_3px_0px_#0E0E0E] max-w-[240px]">
                {QUICK_FACTS[factIndex]}
              </div>
            )}

            {/* Portrait Image Wrapper */}
            <div className="rounded-[36px] overflow-hidden border-2 border-ink bg-neutral-100 aspect-[4/5] shadow-xl relative group">
              <PortfolioImage
                src={INTRO_PORTRAIT_URL}
                alt="Potret Nabila Marwah Az Zahra memakai blazer sekolah rapi"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Corner Sticker: Yellow Thumbs-Up Badge */}
            <button
              type="button"
              onClick={handleThumbsClick}
              aria-pressed={appreciated}
              aria-label="Beri apresiasi jempol"
              className={`absolute -bottom-3 -right-3 z-20 w-14 h-14 rounded-2xl border-2 border-ink shadow-[3px_3px_0px_#0E0E0E] flex items-center justify-center text-ink hover:rotate-6 active:scale-90 transition-all cursor-pointer ${
                thumbBounce
                  ? 'scale-125 bg-white'
                  : appreciated
                    ? 'bg-electric-blue text-white'
                    : 'bg-vibrant-yellow text-ink'
              }`}
            >
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8v-.08c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.77-.66-1.24-.47l-3.23 1.29c-.54.21-.87.73-.87 1.3v8.59c0 .77.62 1.4 1.4 1.4h7.03c.69 0 1.28-.47 1.43-1.14l1.97-8.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
