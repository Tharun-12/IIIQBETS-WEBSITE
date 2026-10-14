// src/components/services/ServiceFAQ.tsx
'use client';

import { useId, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

/* ---------- Single 3D FAQ card ---------- */
function FAQCard({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const panelId = `${uid}-panel`;
  const buttonId = `${uid}-button`;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 160, damping: 18 });

  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(320px circle at ${gx}% ${gy}%, rgba(59,130,246,0.16), transparent 55%)`;

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
    <div style={{ perspective: 1100 }}>
      {/* entrance: tips up out of the floor, staggered top to bottom */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 50, rotateX: -28, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* tilt + lift when open */}
        <motion.div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          animate={reduce ? undefined : { scale: open ? 1.025 : 1 }}
          whileHover={reduce ? undefined : { scale: open ? 1.03 : 1.015 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="group relative"
        >
          {/* card body (clips glare and sweep so 3D layers above can overhang) */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-2xl border bg-gradient-to-br from-white to-offwhite transition-[border-color,box-shadow] duration-500 ${
              open
                ? 'border-blue-bright/50 shadow-[0_34px_70px_-26px_rgba(37,99,235,0.5)]'
                : 'border-navy-deep/10 shadow-[0_22px_44px_-26px_rgba(10,25,60,0.4)] group-hover:border-blue-bright/40'
            }`}
          >
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
            {/* accent bar grows when open */}
            <motion.span
              aria-hidden
              initial={false}
              animate={{ scaleY: open ? 1 : 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{ originY: 0 }}
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-bright to-navy-deep"
            />
          </div>

          {/* header */}
          <button
            id={buttonId}
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative flex w-full items-center gap-4 rounded-2xl px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-bright/60 sm:gap-5 sm:px-7 sm:py-6"
          >
            {/* number badge (front layer) */}
            <span
              style={{ transform: 'translateZ(40px)' }}
              className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center"
            >
              {!reduce && open && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-xl bg-blue-bright/40"
                  animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <span
                className={`relative flex h-11 w-11 items-center justify-center rounded-xl font-display text-sm font-extrabold tracking-wide ring-1 transition-all duration-300 ${
                  open
                    ? 'bg-gradient-to-br from-blue-bright to-navy-deep text-white shadow-[0_10px_22px_-6px_rgba(37,99,235,0.7)] ring-white/30'
                    : 'bg-navy-deep/5 text-navy-deep ring-navy-deep/10 group-hover:bg-blue-bright/10 group-hover:text-blue-bright'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </span>

            {/* question (mid layer) */}
            <span
              style={{ transform: 'translateZ(24px)' }}
              className={`flex-1 text-base font-bold leading-snug transition-colors duration-300 sm:text-lg ${
                open ? 'text-blue-bright' : 'text-navy-deep group-hover:text-blue-bright'
              }`}
            >
              {faq.question}
            </span>

            {/* plus icon (front layer) */}
            <span
              style={{ transform: 'translateZ(34px)' }}
              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                open
                  ? 'border-blue-bright bg-blue-bright text-white'
                  : 'border-navy-deep/15 bg-white text-navy-deep group-hover:border-blue-bright/50 group-hover:text-blue-bright'
              }`}
            >
              <motion.span
                initial={false}
                animate={{ rotate: open ? 135 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="flex"
              >
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              </motion.span>
            </span>
          </button>

          {/* answer */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden"
              >
                <div className="px-5 pb-6 pl-5 pt-0 sm:px-7 sm:pb-7 sm:pl-[5.75rem]">
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-blue-bright/40 via-navy-deep/10 to-transparent" />
                  <motion.p
                    initial={reduce ? false : { y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-sm leading-relaxed text-graytext sm:text-base"
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function ServiceFAQ({ faqs }: Props) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-offwhite py-20 sm:py-28">
      {/* ambient 3D background */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ perspective: 900 }}>
        <div
          className="absolute inset-0 opacity-[0.4]"
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
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* giant spinning question marks (desktop) */}
        <motion.span
          className="absolute -left-4 top-24 hidden select-none font-display text-[16rem] font-black leading-none text-navy-deep/[0.05] xl:block"
          style={{ transformStyle: 'preserve-3d' }}
          animate={reduce ? undefined : { rotateY: [-25, 25, -25], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          ?
        </motion.span>
        <motion.span
          className="absolute -right-4 bottom-16 hidden select-none font-display text-[13rem] font-black leading-none text-blue-bright/[0.09] xl:block"
          style={{ transformStyle: 'preserve-3d' }}
          animate={reduce ? undefined : { rotateY: [25, -25, 25], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        >
          ?
        </motion.span>
      </div>

      <div className="iiq-container-narrow relative">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-blue-bright">Questions</span>
            </>
          }
          align="center"
        />

        <div className="mt-14 space-y-5">
          {faqs.map((faq, i) => (
            <FAQCard
              key={i}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}