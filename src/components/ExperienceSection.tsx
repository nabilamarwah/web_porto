import { useEffect, useState } from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';
import {
  EDUCATION_HISTORY,
  EXPERIENCES,
  type ExperienceItem,
} from '../data/portfolioData';

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!selectedExperience) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedExperience(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedExperience]);

  const getCardClasses = (variant: ExperienceItem['variant']) => {
    switch (variant) {
      case 'yellow':
        return 'bg-vibrant-yellow text-ink border-2 border-white shadow-[6px_6px_0px_#FFFFFF]';
      case 'white-yellow':
        return 'bg-white text-ink border-2 border-neutral-300 shadow-[6px_6px_0px_#FFE81F]';
      case 'white-blue':
        return 'bg-white text-ink border-2 border-neutral-300 shadow-[6px_6px_0px_#2F5BEA]';
    }
  };

  return (
    <section
      className="road-band py-20 text-white relative"
      data-purpose="experience-section"
      id="experience"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-display font-bold uppercase tracking-widest text-vibrant-yellow mb-2">
            ORGANISASI, KEPANITIAAN &amp; SEKOLAH
          </p>
          <h2 className="text-4xl sm:text-6xl font-heavy uppercase tracking-tight leading-tight">
            <span className="text-vibrant-yellow">PENGALAMAN</span> &amp;
            PENDIDIKAN
          </h2>
          <p className="text-neutral-400 text-sm mt-3 font-medium">
            Jejak langkah kontribusi aktif dalam kepemimpinan siswa dan dedikasi
            akademis formal.
          </p>
        </div>

        {/* 3 Feature Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {EXPERIENCES.map((exp) => {
            const isYellow = exp.variant === 'yellow';
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setSelectedExperience(exp)}
                className={`text-left p-7 rounded-[32px] flex flex-col justify-between transform hover:-translate-y-1.5 transition-transform duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-vibrant-yellow focus-visible:outline-offset-4 ${getCardClasses(
                  exp.variant
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span
                      className={`text-xs font-display font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        isYellow
                          ? 'bg-ink text-white'
                          : 'bg-neutral-100 text-neutral-700 border border-neutral-300'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase ${
                        isYellow ? 'text-ink' : 'text-neutral-500'
                      }`}
                    >
                      {exp.statusLabel}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight leading-tight mb-2">
                    {exp.organization}
                  </h3>

                  <div className="inline-block bg-ink text-white text-xs font-display font-bold px-3 py-1 rounded-full mb-4">
                    {exp.role}
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-medium leading-relaxed ${
                      isYellow ? 'text-neutral-900' : 'text-neutral-700'
                    }`}
                  >
                    {exp.summary}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold w-full ${
                    isYellow
                      ? 'border-ink/20 text-ink'
                      : 'border-neutral-200 text-neutral-500'
                  }`}
                >
                  <span>{exp.footerLeft}</span>
                  <span>{exp.footerRight}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Riwayat Pendidikan Formal */}
        <div className="border-t border-neutral-800 pt-10">
          <p className="text-xs font-display font-bold tracking-widest text-neutral-400 uppercase text-center mb-6">
            RIWAYAT PENDIDIKAN FORMAL
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EDUCATION_HISTORY.map((edu) => (
              <div
                key={edu.number}
                className="bg-neutral-900 border border-neutral-700 p-4 rounded-2xl flex items-center gap-4 hover:border-vibrant-yellow transition-colors"
              >
                <span
                  className={`text-2xl font-display font-black tabular-nums ${
                    edu.active ? 'text-vibrant-yellow' : 'text-neutral-400'
                  }`}
                >
                  {edu.number}
                </span>
                <div>
                  <p className="font-display font-bold text-sm text-white">
                    {edu.school}
                  </p>
                  <p className="text-xs text-neutral-400">{edu.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal when clicking an Experience Card */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exp-modal-title"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-cream text-ink rounded-[32px] border-2 border-ink shadow-[8px_8px_0px_#FFE81F] max-w-lg w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              aria-label="Tutup detail pengalaman"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-display font-black uppercase tracking-wider text-neutral-600 mb-2">
              <span>{selectedExperience.period}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedExperience.statusLabel}</span>
            </div>

            <h3
              id="exp-modal-title"
              className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink pr-10"
            >
              {selectedExperience.organization}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-block bg-vibrant-yellow text-ink border-2 border-ink text-xs font-display font-black px-3 py-1 rounded-full uppercase">
                {selectedExperience.role}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {selectedExperience.location}
              </span>
            </div>

            <p className="mt-5 text-sm text-neutral-800 leading-relaxed font-medium">
              {selectedExperience.summary}
            </p>

            <div className="mt-5 pt-4 border-t border-neutral-300">
              <p className="text-xs font-display font-black uppercase tracking-wider text-neutral-500 mb-3">
                Kontribusi &amp; Tanggung Jawab
              </p>
              <ul className="space-y-2.5">
                {selectedExperience.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-neutral-800"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-electric-blue shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
