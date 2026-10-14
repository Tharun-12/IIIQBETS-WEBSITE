// src/components/services/ServiceBenefits.tsx
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
import { Check } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

interface Props {
  benefits: string[];
}

/* ---------- Single 3D benefit card ---------- */
function BenefitCard({ benefit, index }: { benefit: string; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 180, damping: 17 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 180, damping: 17 });

  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(260px circle at ${gx}% ${gy}%, rgba(34,211,238,0.22), transparent 55%)`;

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
    <div
      style={{ perspective: 1000 }}
      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      {/* entrance: tips up out of the floor */}
      <motion.div
        className="h-full"
        initial={reduce ? false : { opacity: 0, y: 60, rotateX: -35, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* idle float */}
        <motion.div
          className="h-full"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{
            duration: 5 + (index % 3) * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.4,
          }}
        >
          {/* tilt */}
          <motion.div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            whileHover={reduce ? undefined : { scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-cyan/50 hover:shadow-[0_0_44px_-6px_rgba(34,211,238,0.45)]"
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
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent"
            />

            {/* light sweep on hover */}
            {!reduce && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100"
              />
            )}

            {/* watermark number (back layer) */}
            <span
              aria-hidden
              style={{ transform: 'translateZ(10px)' }}
              className="pointer-events-none absolute -right-1 -top-4 select-none text-[6.5rem] font-black leading-none text-white/[0.04]"
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="relative flex items-start gap-4" style={{ transformStyle: 'preserve-3d' }}>
              {/* check badge (front layer) */}
              <span
                style={{ transform: 'translateZ(42px)' }}
                className="relative mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center"
              >
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-xl bg-cyan/30"
                    animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: index * 0.3,
                    }}
                  />
                )}
                <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-blue-bright text-navy-deep shadow-[0_8px_20px_-4px_rgba(34,211,238,0.7)] ring-1 ring-white/30">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
              </span>

              {/* text (mid layer) */}
              <span
                style={{ transform: 'translateZ(24px)' }}
                className="text-[0.95rem] font-medium leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-white"
              >
                {benefit}
              </span>
            </div>

            {/* bottom progress line draws in on entrance */}
            <motion.span
              aria-hidden
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + (index % 3) * 0.12, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan via-blue-bright to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function ServiceBenefits({ benefits }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      {/* 3D background */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ perspective: 900 }}>
        {/* glow orbs */}
        <motion.div
          className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl"
          animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-bright/20 blur-3xl"
          animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* perspective floor grid, scrolling toward the viewer */}
        <div
          className="absolute bottom-0 left-[-50%] h-[70%] w-[200%]"
          style={{
            transform: 'rotateX(64deg)',
            transformOrigin: '50% 100%',
            maskImage: 'linear-gradient(to top, black 10%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent 80%)',
          }}
        >
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(34,211,238,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.28) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
            animate={reduce ? undefined : { backgroundPositionY: ['0px', '56px'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* tilted orbit ring */}
        <div
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] max-sm:h-[24rem] max-sm:w-[24rem]"
          style={{ transform: 'translate(-50%, -50%) rotateX(74deg)' }}
        >
          <motion.div
            className="relative h-full w-full rounded-full border border-cyan/20"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_18px_6px_rgba(34,211,238,0.6)]" />
          </motion.div>
        </div>
      </div>

      <div className="iiq-container relative">
        <SectionHeading
          eyebrow="Business Benefits"
          title={
            <>
              Measurable <span className="text-cyan">Outcomes</span>
            </>
          }
          variant="light"
          align="center"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}