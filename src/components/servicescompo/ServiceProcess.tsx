// src/components/services/ServiceProcess.tsx
'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Props {
  process: ProcessStep[];
}

/* ---------- Single 3D step card ---------- */
function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [11, -11]), { stiffness: 190, damping: 17 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-11, 11]), { stiffness: 190, damping: 17 });

  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(240px circle at ${gx}% ${gy}%, rgba(59,130,246,0.2), transparent 55%)`;

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
    <div style={{ perspective: 1000 }} className="h-full">
      {/* entrance: tips up out of the floor, staggered left to right */}
      <motion.div
        className="h-full"
        initial={reduce ? false : { opacity: 0, y: 60, rotateX: -35, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* tilt */}
        <motion.div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="group relative h-full"
        >
          {/* card body (clips glare and sweep, so the node can overhang the edge) */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-navy-deep/10 bg-gradient-to-br from-white to-offwhite shadow-[0_26px_50px_-26px_rgba(10,25,60,0.4)] transition-[border-color,box-shadow] duration-300 group-hover:border-blue-bright/50 group-hover:shadow-[0_30px_60px_-20px_rgba(37,99,235,0.45)]">
            <motion.span
              aria-hidden
              style={{ background: glare }}
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            {!reduce && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-blue-bright/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100"
              />
            )}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-bright/50 to-transparent"
            />
            {/* bottom line draws in on entrance */}
            <motion.span
              aria-hidden
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + index * 0.14, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-blue-bright to-transparent"
            />
          </div>

          {/* node (front layer, centred on the card's top edge) */}
          <div className="absolute inset-x-0 -top-7 flex justify-center">
            <span
              style={{ transform: 'translateZ(64px)' }}
              className="relative flex h-14 w-14 items-center justify-center"
            >
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-blue-bright/40"
                  animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: index * 0.35 }}
                />
              )}
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-bright to-navy-deep font-display text-base font-extrabold tracking-wide text-white shadow-[0_12px_26px_-6px_rgba(37,99,235,0.7)] ring-4 ring-white">
                {step.step}
              </span>
            </span>
          </div>

          {/* text */}
          <div
            className="relative px-6 pb-8 pt-12 text-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3
              style={{ transform: 'translateZ(40px)' }}
              className="text-lg font-bold text-navy-deep transition-colors duration-300 group-hover:text-blue-bright"
            >
              {step.title}
            </h3>
            <p
              style={{ transform: 'translateZ(22px)' }}
              className="mt-3 text-sm leading-relaxed text-graytext"
            >
              {step.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function ServiceProcess({ process }: Props) {
  const reduce = useReducedMotion();
  const edge = `${50 / Math.max(process.length, 1)}%`;

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
          className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-bright/20 blur-3xl"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-navy-deep/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="iiq-container relative">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              How We <span className="text-blue-bright">Work</span>
            </>
          }
          align="center"
        />

        <div className="relative mt-20">
          {/* connector line through the nodes (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 hidden h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-navy-deep/10 lg:block"
            style={{ left: edge, right: edge }}
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-blue-bright via-blue-bright to-navy-deep"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{ originX: 0 }}
            />
            {!reduce && (
              <motion.span
                className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ left: ['-10%', '110%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.2, ease: 'linear' }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}