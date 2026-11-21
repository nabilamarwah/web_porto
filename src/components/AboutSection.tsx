import { useState } from 'react';
import { HOBBIES } from '../data/portfolioData';

export function AboutSection() {
  const [selectedHobbyId, setSelectedHobbyId] = useState<string | null>(null);

  return (
    <section
      className="py-16 bg-cream-tint/60 border-t border-neutral-300"
      data-purpose="about-me-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Center Giant Headline: TENTANG AKU with flipped 'U' */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-heavy uppercase tracking-tight text-ink">
            TENTANG AK<span className="flip-letter text-ink">U</span>
          </h2>
        </div>

        {/* Middle narrative row with hand-drawn blue oval */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-4xl mx-auto mb-14">
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="drawn-oval-wrap py-2 px-6">
              <svg
                fill="none"
                viewBox="0 0 160 70"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15 35C15 15 45 6 85 6C130 6 155 18 152 35C148 54 110 65 72 63C32 61 7 50 12 33C14 26 25 18 42 14"
                  stroke="#2F5BEA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.6"
                />
              </svg>
              <span className="font-script text-2xl sm:text-3xl text-electric-blue relative z-10 -rotate-3 select-none">
                ini aku!
              </span>
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed border-l-2 border-ink pl-5">
              Memiliki kemauan tinggi untuk berbagi ilmu, belajar dari
              pengalaman langsung di lapangan, serta berkontribusi aktif dalam
              menciptakan lingkungan belajar yang positif, suportif, dan
              interaktif.
            </p>
            <div className="mt-2 pl-5 text-xs font-display font-black tracking-wider text-neutral-500 uppercase">
              📍 Berdomisili di Jayapura, Papua
            </div>
          </div>
        </div>

        {/* 3 Playful Angled Interest / Hobby Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {HOBBIES.map((hobby) => {
            const isSelected = selectedHobbyId === hobby.id;
            return (
              <button
                key={hobby.id}
                type="button"
                onClick={() =>
                  setSelectedHobbyId((prev) =>
                    prev === hobby.id ? null : hobby.id
                  )
                }
                aria-expanded={isSelected}
                className={`text-left bg-white p-6 rounded-[28px] border-2 border-ink shadow-[4px_4px_0px_#0E0E0E] transform transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'rotate-0 ring-2 ring-electric-blue bg-vibrant-yellow/25'
                    : `${hobby.rotationClass} hover:rotate-0`
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${hobby.iconBgClass} border-2 border-ink flex items-center justify-center text-2xl mb-4 shadow-sm`}
                >
                  {hobby.emoji}
                </div>
                <h3 className="font-display font-black text-lg text-ink uppercase tracking-tight">
                  {hobby.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-2 font-medium leading-relaxed">
                  {hobby.description}
                </p>
                {isSelected && (
                  <p className="mt-3 pt-2.5 border-t border-ink/15 text-[11px] font-display font-bold text-electric-blue">
                    {hobby.highlight}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
