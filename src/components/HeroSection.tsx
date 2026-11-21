import { useState } from 'react';
import {
  CORE_COMPETENCIES,
  HERO_SLIDES,
  ROLES,
} from '../data/portfolioData';
import { PortfolioImage } from './PortfolioImage';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const currentSlide = HERO_SLIDES[activeSlideIndex];

  const handleToggleRole = () => {
    setRoleIndex((prev) => (prev + 1) % ROLES.length);
  };

  const handleToggleHeart = () => {
    setIsHeartActive((prev) => {
      const next = !prev;
      setLikeCount((c) => (next ? c + 1 : c - 1));
      return next;
    });
  };

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-14 lg:pb-20"
      data-purpose="hero-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Giant Editorial Typography & Roles */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-vibrant-yellow border border-ink" />
            <span className="text-xs uppercase font-display font-bold tracking-widest text-neutral-600">
              PORTFOLIO SISWI BERPRESTASI
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-heavy uppercase leading-[0.88] text-ink tracking-tight mb-6">
            <span>
              N<span className="slit-slash">A</span>BIL
              <span className="slit-slash">A</span>
            </span>
            <br />
            <span>
              M<span className="slit-slash">A</span>RW
              <span className="slit-slash">A</span>H
            </span>
            <br />
            <span className="text-ink">
              AZ Z<span className="slit-slash">A</span>HR
              <span className="slit-slash">A</span>
            </span>
          </h1>

          {/* Interactive Role Switcher Pill */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleToggleRole}
              title="Klik untuk ganti peran"
              className="cursor-pointer select-none inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-vibrant-yellow border-2 border-ink shadow-[3px_3px_0px_#0E0E0E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all text-xs font-heavy uppercase tracking-wider whitespace-nowrap focus-visible:outline-2 focus-visible:outline-electric-blue focus-visible:outline-offset-2"
            >
              <span>{ROLES[roleIndex]}</span>
              <span className="w-2 h-2 rounded-full bg-ink" aria-hidden="true" />
            </button>
            <span className="text-[11px] font-medium text-neutral-500 italic">
              (Klik untuk switch status)
            </span>
          </div>

          {/* Core Competency Horizontal Pills */}
          <div className="pt-6 border-t border-neutral-300">
            <p className="text-xs font-display font-black uppercase text-neutral-500 tracking-wider mb-2.5">
              Fokus Utama
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink">
              {CORE_COMPETENCIES.map((item, idx) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="bg-white px-3 py-1.5 rounded-full border border-neutral-300 shadow-sm whitespace-nowrap">
                    {item}
                  </span>
                  {idx < CORE_COMPETENCIES.length - 1 && (
                    <span className="text-neutral-400 font-bold" aria-hidden="true">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Photo Frame with Stickers */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            <div
              className="absolute inset-0 bg-ink rounded-[40px] translate-x-3 translate-y-3.5 -z-10"
              aria-hidden="true"
            />

            <div
              className={`relative rounded-[38px] overflow-hidden border-2 border-ink ${currentSlide.bgClass} aspect-[4/5] shadow-xl group transition-colors duration-300`}
            >
              <PortfolioImage
                src={currentSlide.imageUrl}
                alt={currentSlide.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Sticker: Interactive Heart Reaction Button */}
              <button
                type="button"
                onClick={handleToggleHeart}
                aria-pressed={isHeartActive}
                aria-label={`Suka profil Nabila (${likeCount} suka)`}
                className={`absolute top-4 right-4 h-11 px-3 rounded-full bg-ink text-white flex items-center justify-center gap-1.5 border-2 shadow-md hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer ${
                  isHeartActive ? 'border-vibrant-yellow' : 'border-white'
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isHeartActive
                      ? 'fill-vibrant-yellow scale-110'
                      : 'fill-white scale-100'
                  }`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {isHeartActive && (
                  <span className="text-[11px] font-display font-black text-vibrant-yellow tabular-nums">
                    {likeCount}
                  </span>
                )}
              </button>

              {/* Sticker: Bottom Left Pill Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                <div className="bg-ink/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full border border-white/20 text-[11px] font-display font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-vibrant-yellow shrink-0" />
                  <span className="truncate">{currentSlide.badgeText}</span>
                </div>
              </div>
            </div>

            {/* Interactive Slide Indicator Dots below photo */}
            <div
              className="flex justify-center items-center gap-2 mt-4"
              role="tablist"
              aria-label="Galeri Foto Profil"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Tampilkan foto ${idx + 1}: ${slide.caption}`}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'w-7 bg-ink'
                        : 'w-2.5 bg-neutral-400 hover:bg-neutral-600'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
