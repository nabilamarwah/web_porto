import { useState } from 'react';
import { PRACTICAL_SKILLS, SKILLS } from '../data/portfolioData';

export function SkillsSection() {
  const [activeSkillNumber, setActiveSkillNumber] = useState<string | null>(
    null
  );

  return (
    <section
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6"
      data-purpose="skills-section"
      id="skills"
    >
      {/* Headline & hand drawn oval subtitle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 border-b border-neutral-300 pb-8">
        <div>
          <span className="text-xs uppercase font-display font-black tracking-widest text-neutral-500">
            KOMPETENSI &amp; KEAHLIAN
          </span>
          <h2 className="text-4xl sm:text-6xl font-heavy uppercase tracking-tight text-ink mt-1">
            KEAHLIAN-KU
          </h2>
        </div>

        {/* Hand drawn blue oval: banyak peran, satu orang */}
        <div className="drawn-oval-wrap py-2 px-6">
          <svg
            fill="none"
            viewBox="0 0 160 70"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 35C10 18 42 7 82 7C125 7 152 16 150 34C147 52 112 63 76 62C38 61 9 52 11 36C12 28 22 20 38 15"
              stroke="#2F5BEA"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.6"
            />
          </svg>
          <span className="font-script text-xl sm:text-2xl text-electric-blue relative z-10 rotate-1 select-none">
            banyak peran, satu orang
          </span>
        </div>
      </div>

      {/* Numbered Process Tiles (01, 02, 03, 04) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {SKILLS.map((skill) => {
          const isSelected = activeSkillNumber === skill.number;
          return (
            <button
              key={skill.number}
              type="button"
              onClick={() =>
                setActiveSkillNumber((prev) =>
                  prev === skill.number ? null : skill.number
                )
              }
              aria-expanded={isSelected}
              className={`text-left p-6 rounded-[30px] border-2 border-ink shadow-[4px_4px_0px_#0E0E0E] transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-vibrant-yellow -translate-y-1'
                  : 'bg-card-grey/30 hover:bg-vibrant-yellow'
              }`}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-ink flex items-center justify-center font-display font-black text-2xl mb-6 shadow-sm transition-colors tabular-nums ${
                    isSelected
                      ? 'text-vibrant-yellow'
                      : 'text-white group-hover:text-vibrant-yellow'
                  }`}
                >
                  {skill.number}
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-tight mb-2 text-ink">
                  {skill.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm font-medium leading-relaxed ${
                    isSelected
                      ? 'text-ink'
                      : 'text-neutral-700 group-hover:text-ink'
                  }`}
                >
                  {skill.description}
                </p>
              </div>

              {isSelected && (
                <div className="mt-4 pt-3 border-t border-ink/20 text-[11px] font-medium text-ink">
                  <span className="font-display font-black uppercase tracking-wider block mb-0.5">
                    Penerapan Nyata:
                  </span>
                  {skill.example}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Hard Skills & Practical Tools Badges */}
      <div className="bg-white p-7 rounded-[32px] border-2 border-ink shadow-[5px_5px_0px_#0E0E0E] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-black uppercase text-base text-ink tracking-tight">
            Keahlian Praktis &amp; Administratif
          </h3>
          <p className="text-xs text-neutral-600">
            Instrumen pendukung kerja operasional organisasi
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {PRACTICAL_SKILLS.map((label) => (
            <span
              key={label}
              className="px-4 py-2 rounded-full bg-vibrant-yellow border-2 border-ink text-xs font-display font-black uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-default"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
