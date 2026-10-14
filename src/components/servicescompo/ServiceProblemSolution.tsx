// src/components/services/ServiceProblemSolution.tsx
'use client';

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import Reveal from '@/components/common/Reveal';

interface Props {
  businessProblem: string;
  solution: string;
}

/* ---------- 3D tilt card with glare + depth layers ---------- */
function TiltCard({
  children,
  className = '',
  glare = 'rgba(255,255,255,0.35)',
  floatDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  glare?: string;
  floatDelay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 140, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 140, damping: 16 });

  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, ${glare}, transparent 45%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      {/* idle floating */}
      <motion.div
        className="h-full"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      >
        <motion.div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          whileHover={reduce ? undefined : { scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className={`group relative h-full overflow-hidden rounded-3xl p-8 sm:p-10 ${className}`}
        >
          {/* moving glare */}
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function ServiceProblemSolution({ businessProblem, solution }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(10,25,60,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,25,60,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-bright/20 blur-3xl"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-navy-deep/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="iiq-container relative">
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
          {/* connector between cards (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex"
          >
            <div className="relative h-px w-24 overflow-hidden bg-gradient-to-r from-transparent via-blue-bright/60 to-transparent">
              {!reduce && (
                <motion.span
                  className="absolute top-0 h-px w-10 bg-white"
                  animate={{ left: ['-40%', '110%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                />
              )}
            </div>
            <motion.div
              className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-bright text-white shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.div>
          </div>

          {/* Problem */}
          <Reveal>
            <TiltCard
              floatDelay={0}
              glare="rgba(59,130,246,0.22)"
              className="border border-navy-deep/10 bg-gradient-to-br from-white to-offwhite shadow-[0_30px_60px_-25px_rgba(10,25,60,0.35)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-black leading-none text-navy-deep/[0.05] [transform:translateZ(15px)]"
              >
                01
              </span>

              <div className="relative [transform-style:preserve-3d]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-deep/5 text-navy-deep [transform:translateZ(50px)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                    <path d="M12 9v4M12 17h.01" />
                  </svg>
                </div>

                <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-blue-bright [transform:translateZ(35px)]">
                  The Challenge
                </span>
                <h2 className="mt-3 text-2xl font-bold text-navy-deep sm:text-3xl [transform:translateZ(45px)]">
                  Business Problem
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graytext [transform:translateZ(25px)]">
                  {businessProblem}
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* Solution */}
          <Reveal delay={0.1}>
            <TiltCard
              floatDelay={1.2}
              glare="rgba(255,255,255,0.28)"
              className="border border-blue-bright/30 bg-gradient-to-br from-navy-deep via-navy-deep to-blue-bright/40 shadow-[0_35px_70px_-25px_rgba(37,99,235,0.55)]"
            >
              {/* animated light sweep */}
              {!reduce && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ left: ['-40%', '140%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                />
              )}
              <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-blue-bright/30 blur-3xl" />

              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-black leading-none text-white/[0.06] [transform:translateZ(15px)]"
              >
                02
              </span>

              <div className="relative [transform-style:preserve-3d]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur [transform:translateZ(50px)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6M10 22h4" />
                    <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2Z" />
                  </svg>
                </div>

                <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-blue-bright [transform:translateZ(35px)]">
                  Our Approach
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl [transform:translateZ(45px)]">
                  The Solution
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/75 [transform:translateZ(25px)]">
                  {solution}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}