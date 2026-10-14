// src/components/services/ServiceCTA.tsx
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
import Button from '@/components/common/Button';

interface Props {
  serviceTitle: string;
}

/* ---------- Floating glass cube (pure CSS 3D) ---------- */
const CUBE_FACES = [
  'rotateY(0deg)',
  'rotateY(90deg)',
  'rotateY(180deg)',
  'rotateY(-90deg)',
  'rotateX(90deg)',
  'rotateX(-90deg)',
];

function GlassCube({
  size,
  className,
  duration,
  delay = 0,
  reverse = false,
}: {
  size: number;
  className: string;
  duration: number;
  delay?: number;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();
  const half = size / 2;

  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`} style={{ perspective: 800 }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -22, 0] }}
        transition={{ duration: duration * 0.6, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <motion.div
          style={{ width: size, height: size, transformStyle: 'preserve-3d' }}
          initial={{ rotateX: -25, rotateY: 35 }}
          animate={
            reduce
              ? undefined
              : { rotateX: reverse ? [-25, -385] : [-25, 335], rotateY: reverse ? [35, -325] : [35, 395] }
          }
          transition={{ duration, repeat: Infinity, ease: 'linear' }}
          className="relative"
        >
          {CUBE_FACES.map((t, i) => (
            <span
              key={i}
              className="absolute inset-0 border border-white/30 bg-gradient-to-br from-white/15 to-white/[0.02] backdrop-blur-[2px]"
              style={{ transform: `${t} translateZ(${half}px)` }}
            />
          ))}
          {/* glowing core */}
          <span
            className="absolute left-1/2 top-1/2 rounded-full bg-cyan/70 blur-md"
            style={{ width: size * 0.3, height: size * 0.3, transform: 'translate(-50%, -50%)' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Floating particles ---------- */
const PARTICLES = [
  { l: '6%', t: '18%', s: 4, d: 0 },
  { l: '14%', t: '72%', s: 3, d: 1.2 },
  { l: '22%', t: '38%', s: 5, d: 0.6 },
  { l: '31%', t: '84%', s: 3, d: 2.1 },
  { l: '43%', t: '10%', s: 4, d: 1.7 },
  { l: '57%', t: '90%', s: 5, d: 0.3 },
  { l: '66%', t: '14%', s: 3, d: 2.4 },
  { l: '74%', t: '66%', s: 4, d: 1.0 },
  { l: '83%', t: '30%', s: 5, d: 1.9 },
  { l: '91%', t: '80%', s: 3, d: 0.8 },
  { l: '95%', t: '12%', s: 4, d: 2.7 },
  { l: '50%', t: '50%', s: 3, d: 1.5 },
];

/* ---------- Section ---------- */
export default function ServiceCTA({ serviceTitle }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 120, damping: 18 });

  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(520px circle at ${gx}% ${gy}%, rgba(255,255,255,0.16), transparent 55%)`;

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
    <section className="iiq-gradient-primary relative overflow-hidden py-20 sm:py-28">
      {/* ---------- 3D background ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ perspective: 900 }}>
        {/* glow orbs */}
        <motion.div
          className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan/20 blur-3xl"
          animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-bright/30 blur-3xl"
          animate={reduce ? undefined : { x: [0, -60, 0], y: [0, -30, 0] }}
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
                'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
            animate={reduce ? undefined : { backgroundPositionY: ['0px', '56px'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* tilted orbit rings */}
        <div
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] max-sm:h-[26rem] max-sm:w-[26rem]"
          style={{ transform: 'translate(-50%, -50%) rotateX(74deg)' }}
        >
          <motion.div
            className="relative h-full w-full rounded-full border border-white/20"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_18px_6px_rgba(34,211,238,0.65)]" />
          </motion.div>
        </div>
        <div
          className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] max-sm:h-[18rem] max-sm:w-[18rem]"
          style={{ transform: 'translate(-50%, -50%) rotateX(74deg)' }}
        >
          <motion.div
            className="relative h-full w-full rounded-full border border-cyan/25"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.6)]" />
          </motion.div>
        </div>

        {/* particles */}
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/70 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]"
            style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
            animate={reduce ? undefined : { y: [0, -18, 0], opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: p.d }}
          />
        ))}
      </div>

      {/* floating glass cubes */}
      <GlassCube size={64} className="left-[5%] top-[14%] hidden md:block" duration={22} delay={0} />
      <GlassCube size={44} className="right-[7%] top-[20%] hidden md:block" duration={18} delay={1} reverse />
      <GlassCube size={52} className="bottom-[12%] left-[12%] hidden lg:block" duration={26} delay={0.5} reverse />
      <GlassCube size={36} className="bottom-[16%] right-[14%] hidden lg:block" duration={20} delay={1.6} />

      {/* ---------- Content ---------- */}
      <div className="iiq-container relative">
        <div style={{ perspective: 1300 }} className="mx-auto max-w-4xl">
          {/* entrance: tips up out of the floor */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 70, rotateX: -30, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* idle float */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* tilt */}
              <motion.div
                ref={ref}
                onPointerMove={handleMove}
                onPointerLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="group relative"
              >
                {/* panel body (clips border + glare so 3D layers above can overhang) */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-[0_50px_100px_-30px_rgba(0,0,0,0.65)]">
                  {/* rotating gradient border */}
                  <motion.div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-[220%] w-[220%]"
                    style={{
                      x: '-50%',
                      y: '-50%',
                      background:
                        'conic-gradient(from 0deg, transparent 0%, transparent 55%, rgba(34,211,238,0.95) 78%, rgba(255,255,255,0.95) 88%, transparent 100%)',
                    }}
                    animate={reduce ? undefined : { rotate: 360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* glass surface */}
                  <div className="absolute inset-[1.5px] overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-navy-deep/80 backdrop-blur-xl">
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-blue-bright/[0.12]"
                    />
                    <motion.span
                      aria-hidden
                      style={{ background: glare }}
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    {!reduce && (
                      <motion.span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ left: ['-40%', '140%'] }}
                        transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                      />
                    )}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    />
                  </div>
                </div>

                {/* watermark (back layer) */}
                <span
                  aria-hidden
                  style={{ transform: 'translateZ(8px)' }}
                  className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[11rem] font-black leading-none text-white/[0.04]"
                >
                  GO
                </span>

                {/* text + buttons */}
                <div
                  className="relative px-6 py-14 text-center sm:px-14 sm:py-20"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span
                    style={{ transform: 'translateZ(30px)' }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
                  >
                    <span className="relative flex h-2 w-2">
                      {!reduce && (
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-cyan"
                          animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        />
                      )}
                      <span className="relative h-2 w-2 rounded-full bg-cyan" />
                    </span>
                    Let&apos;s Build Together
                  </span>

                  <h2
                    style={{ transform: 'translateZ(60px)' }}
                    className="mx-auto mt-6 max-w-2xl text-section-heading font-extrabold text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.35)]"
                  >
                    Ready to Get Started?
                  </h2>

                  <p
                    style={{ transform: 'translateZ(36px)' }}
                    className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg"
                  >
                    Let's discuss how our {serviceTitle.toLowerCase()} services can help your business.
                  </p>

                  <div
                    style={{ transform: 'translateZ(70px)' }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                  >
                    <Button to="/contact" variant="white" icon>
                      Talk to Our Experts
                    </Button>
                    <Button to="/contact" variant="whiteOutline">
                      Get a Free Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}