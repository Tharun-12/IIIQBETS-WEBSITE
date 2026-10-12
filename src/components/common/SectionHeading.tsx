import { type ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  variant = 'dark',
  className = '',
}: SectionHeadingProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-deep';
  const subColor = variant === 'light' ? 'text-white/70' : 'text-graytext';

  return (
    <div
      className={`iiq-section-heading ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={`mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
              variant === 'light' ? 'text-cyan' : 'text-blue-bright'
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`text-section-heading font-extrabold leading-tight ${textColor}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${subColor}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
