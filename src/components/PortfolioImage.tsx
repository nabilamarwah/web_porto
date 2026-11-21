import { useState } from 'react';
import { User } from 'lucide-react';

interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function PortfolioImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Nabila Marwah Az Zahra',
}: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-electric-blue via-blue-700 to-ink text-white p-6 text-center select-none"
        role="img"
        aria-label={alt}
      >
        <div className="w-16 h-16 rounded-2xl bg-vibrant-yellow text-ink border-2 border-ink flex items-center justify-center mb-3 shadow-[3px_3px_0px_#0E0E0E]">
          <User className="w-8 h-8" aria-hidden="true" />
        </div>
        <p className="font-display font-black uppercase tracking-tight text-lg leading-tight">
          {fallbackLabel}
        </p>
        <p className="text-xs text-white/80 mt-1">SMA Negeri 1 Jayapura</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
