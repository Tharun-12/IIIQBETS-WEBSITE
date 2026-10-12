import { type ReactNode } from 'react';
import Reveal from '@/components/common/Reveal';
import Breadcrumb, { type BreadcrumbItem } from '@/components/common/Breadcrumb';
import ProcessReengineering from '../AboutCompo/ProcessReengineering';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  variant?: 'dark' | 'gradient';
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  variant = 'gradient',
}: PageHeroProps) {
  const bgClass =
    variant === 'gradient'
      ? 'iiq-gradient-primary'
      : 'bg-navy-deep';

  return (
    <section className={`iiq-page-hero relative overflow-hidden ${bgClass} pb-16 pt-32 sm:pb-20 sm:pt-36`}>
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Decorative glow */}
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1D8FE1 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="iiq-container relative z-10">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} variant="light" />
          </div>
        )}
        {eyebrow && (
          <Reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-white">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      
    </section>
  
  );
}
