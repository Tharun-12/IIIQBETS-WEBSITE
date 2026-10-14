// src/components/services/ServiceTechnologies.tsx
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

interface Props {
  technologies: string[];
}

/* "React Native" -> "RN", "Node.js" -> "NO", "AWS" -> "AW" */
function monogram(tech: string) {
  const words = tech.trim().split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return tech.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() || '•';
}

/* ---------- Single 3D chip: entrance + idle float + mouse tilt + glare ---------- */
function TechChip({ tech, index }: { tech: string; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [14, -14]), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 220, damping: 18 });

  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(130px circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), transparent 60%)`;

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
    <div style={{ perspective: 800 }}>
      {/* entrance: flips up out of the floor */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 44, rotateX: -55, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* idle float, staggered per chip */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -7, 0] }}
          transition={{
            duration: 4 + (index % 4) * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (index % 5) * 0.35,
          }}
        >
          {/* tilt */}
          <motion.div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            whileHover={reduce ? undefined : { scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="iiq-tech-badge group relative flex cursor-default items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-blue-bright/70 hover:shadow-[0_0_38px_-4px_rgba(59,130,246,0.65)] sm:px-5 sm:py-3.5"
          >
            {/* glare */}
            <motion.span
              aria-hidden
              style={{ background: glare }}
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* top edge highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />

            {/* monogram (lifted layer) */}
            <span
              aria-hidden
              style={{ transform: 'translateZ(32px)' }}
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-bright to-blue-bright/40 text-[0.7rem] font-bold tracking-wide text-white shadow-[0_6px_16px_-4px_rgba(59,130,246,0.8)] ring-1 ring-white/25"
            >
              {monogram(tech)}
            </span>

            {/* label (mid layer) */}
            <span
              style={{ transform: 'translateZ(20px)' }}
              className="relative text-sm font-semibold text-white/90 transition-colors duration-300 group-hover:text-white"
            >
              {tech}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function ServiceTechnologies({ technologies }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Tools We <span className="text-blue-bright">Work With</span>
            </>
          }
          align="center"
        />

        {/* 3D stage */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-navy-deep/20 bg-gradient-to-b from-navy-deep via-navy-deep to-[#0b1a3d] px-5 py-14 shadow-[0_40px_80px_-30px_rgba(10,25,60,0.6)] sm:px-12 sm:py-20">
          {/* depth background */}
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ perspective: 900 }}>
            {/* glow orbs */}
            <motion.div
              className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-bright/25 blur-3xl"
              animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-bright/20 blur-3xl"
              animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
              transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* perspective floor grid, scrolling toward the viewer */}
            <div
              className="absolute bottom-0 left-[-50%] h-[75%] w-[200%]"
              style={{
                transform: 'rotateX(62deg)',
                transformOrigin: '50% 100%',
                maskImage: 'linear-gradient(to top, black 15%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to top, black 15%, transparent 85%)',
              }}
            >
              <motion.div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.35) 1px, transparent 1px)',
                  backgroundSize: '56px 56px',
                }}
                animate={reduce ? undefined : { backgroundPositionY: ['0px', '56px'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* orbit rings */}
            <div
              className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 max-sm:h-[22rem] max-sm:w-[22rem]"
              style={{ transform: 'translate(-50%, -50%) rotateX(72deg)' }}
            >
              <motion.div
                className="relative h-full w-full rounded-full border border-blue-bright/30"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              >
                <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-bright shadow-[0_0_18px_6px_rgba(59,130,246,0.7)]" />
              </motion.div>
            </div>
            <div
              className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 max-sm:h-[14rem] max-sm:w-[14rem]"
              style={{ transform: 'translate(-50%, -50%) rotateX(72deg)' }}
            >
              <motion.div
                className="relative h-full w-full rounded-full border border-white/15"
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.6)]" />
              </motion.div>
            </div>
          </div>

          {/* chips */}
          <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {technologies.map((tech, i) => (
              <TechChip key={tech} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}