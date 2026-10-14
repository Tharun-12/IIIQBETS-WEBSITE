import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

/* Video is in src/assets (imported, so Vite bundles it and the path is always correct) */
import bprVideo from '@/assets/video-poster.mp4';

/* Section 2 video — src/assets/ai_video.mp4 (imported, so Vite bundles it) */
import aiVideo from '@/assets/ai_video.mp4';

const CLIP_SECONDS = 11; // the scroll scrubs 0:00 → 0:11

const benefits = [
  'Improved cost, service, and speed benchmarks',
  'Elimination of waste and non-value-added activities',
  'Increased standardization',
  'Reduced operating costs',
  'Increased accuracy',
  'Elimination of process bottlenecks',
];

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return matches;
}

/* ================================================================== */
/*  HERO — dark purple banner with a living dot-wave                   */
/*  The wave, light lines and title all react to the mouse, and        */
/*  drift apart while you scroll.                                      */
/* ================================================================== */
type Pointer = { x: number; y: number };

function DotWave({ target, scrollRef }: { target: React.MutableRefObject<Pointer & { active: number }>; scrollRef: React.MutableRefObject<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(canvasRef);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !inView) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const m = { x: 0.5, y: 0.5, active: 0 }; // smoothed pointer
    let raf = 0;
    const ROWS = 30;

    const draw = (t: number) => {
      // ease the pointer
      m.x += (target.current.x - m.x) * 0.06;
      m.y += (target.current.y - m.y) * 0.06;
      m.active += (target.current.active - m.active) * 0.05;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cols = Math.max(40, Math.round(w / 11));
      const mxp = m.x * w;
      const myp = m.y * h;
      const sc = scrollRef.current;
      const time = reduce ? 0 : t;

      for (let r = 0; r < ROWS; r++) {
        const z = r / (ROWS - 1); // 0 far → 1 near
        const baseY = h * (0.48 + z * 0.55) + sc * 70 * z;
        for (let c = 0; c <= cols; c++) {
          const x = (c / cols) * w;
          const phase = c * 0.085 + time * 0.0006 + z * 2.3 + (m.x - 0.5) * 3.2;
          const amp = (12 + 36 * z) * (0.75 + 0.45 * Math.sin(c * 0.021 + time * 0.0003));
          let y = baseY + Math.sin(phase) * amp + Math.sin(c * 0.046 - time * 0.0004 + z * 5) * amp * 0.4;

          // lift the wave toward the pointer
          const dx = x - mxp;
          const dy = y - myp;
          const bump = Math.exp(-(dx * dx + dy * dy) / (2 * 150 * 150)) * 44 * m.active;
          y -= bump;

          const size = 0.7 + z * 1.5 + bump * 0.035;
          const alpha = Math.min(1, 0.16 + z * 0.62 + bump * 0.01);
          const hue = 268 - (x / w) * 42; // violet → periwinkle
          const light = 58 + bump * 0.5;
          ctx.fillStyle = `hsla(${hue},85%,${light}%,${alpha})`;
          ctx.fillRect(x, y, size, size);
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [inView, reduce, target, scrollRef]);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}

function ProcessHero({ title, breadcrumbs }: { title: string; breadcrumbs: { label: string; to?: string }[] }) {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const target = useRef({ x: 0.5, y: 0.5, active: 0 });
  const scrollRef = useRef(0);

  // pointer → motion values (-0.5 … 0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 70, damping: 16 });
  const smy = useSpring(my, { stiffness: 70, damping: 16 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    scrollRef.current = v;
  });

  // layers follow the pointer, each at its own depth
  const titleRotY = useTransform(smx, [-0.5, 0.5], reduce ? [0, 0] : [-14, 14]);
  const titleRotX = useTransform(smy, [-0.5, 0.5], reduce ? [0, 0] : [8, -8]);
  const titleX = useTransform(smx, [-0.5, 0.5], reduce ? [0, 0] : [-26, 26]);
  const linesX = useTransform(smx, [-0.5, 0.5], reduce ? [0, 0] : [-48, 48]);
  const crumbX = useTransform(smx, [-0.5, 0.5], reduce ? [0, 0] : [-14, 14]);

  // scrolling: title lifts away, lines rise, banner glow fades
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const titleFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);
  const linesY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const spotX = useTransform(smx, (v) => `${(v + 0.5) * 100}%`);
  const spotY = useTransform(smy, (v) => `${(v + 0.5) * 100}%`);
  const spot = useMotionTemplate`radial-gradient(520px circle at ${spotX} ${spotY}, rgba(120,110,255,0.28), transparent 65%)`;

  // light lines (stable, generated once)
  const lines = useMemo(() => {
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    return Array.from({ length: 30 }, () => ({
      left: rnd() * 100,
      top: rnd() * 40,
      height: 90 + rnd() * 260,
      opacity: 0.25 + rnd() * 0.55,
      dot: 3 + rnd() * 4,
    }));
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    target.current = { x, y, active: 1 };
    mx.set(x - 0.5);
    my.set(y - 0.5);
  };
  const onLeave = () => {
    target.current = { x: 0.5, y: 0.5, active: 0 };
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate flex min-h-[340px] items-center overflow-hidden pb-14 pt-28 sm:min-h-[420px]"
      style={{ background: 'linear-gradient(180deg,#0c0a38 0%,#150f55 55%,#271a78 100%)' }}
    >
      {/* vertical light lines with glowing tips */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ x: linesX, y: linesY }}>
        {lines.map((l, i) => (
          <span
            key={i}
            className="absolute w-px"
            style={{
              left: `${l.left}%`,
              top: `${l.top}%`,
              height: l.height,
              opacity: l.opacity,
              background: 'linear-gradient(180deg, rgba(150,150,255,0.9), rgba(120,110,255,0.15) 70%, transparent)',
            }}
          >
            <span
              className="absolute -left-[2px] -top-[2px] rounded-full bg-[#9a9bff]"
              style={{ width: l.dot, height: l.dot, boxShadow: '0 0 12px 2px rgba(140,140,255,0.8)' }}
            />
          </span>
        ))}
      </motion.div>

      {/* pointer spotlight */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: spot }} />

      {/* dot wave */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <DotWave target={target} scrollRef={scrollRef} />
      </div>

      {/* content */}
      <div className="iiq-container relative flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div style={{ perspective: 1000 }} className="max-w-[780px]">
          <motion.h1
            className="text-4xl font-extrabold leading-[1.15] text-white drop-shadow-[0_6px_30px_rgba(90,80,255,0.45)] sm:text-5xl lg:text-[3.4rem]"
            style={{
              rotateY: titleRotY,
              rotateX: titleRotX,
              x: titleX,
              y: titleY,
              opacity: titleFade,
              transformStyle: 'preserve-3d',
            }}
          >
            {title}
          </motion.h1>
        </div>

        <motion.nav aria-label="Breadcrumb" style={{ x: crumbX, y: titleY, opacity: titleFade }}>
          <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wide">
            {breadcrumbs.map((b, i) => (
              <li key={b.label} className="flex items-center gap-3">
                {b.to ? (
                  <Link to={b.to} className="text-[#9a9bff] transition-colors hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span aria-hidden className="h-px w-3 bg-white/30" />}
              </li>
            ))}
          </ol>
        </motion.nav>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 1 — pinned 3D video, scrubbed by the scroll wheel          */
/*  Scroll down → video plays forward. Scroll up → it rewinds.         */
/*  It reaches 0:11 exactly as the next section opens.                 */
/* ================================================================== */
function VideoScene() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantRef = useRef(0); // 0..1 target position
  const [failed, setFailed] = useState(false);

  // progress is 0 when the section pins and 1 the moment it unpins
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    wantRef.current = Math.min(1, Math.max(0, v));
  });

  /* ---- scrub: ease the video's playhead toward the scroll position ---- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.pause();
    let cur = 0;
    let raf = 0;
    const loop = () => {
      const dur = Math.min(CLIP_SECONDS, v.duration || CLIP_SECONDS);
      const want = wantRef.current * dur * 0.999;
      cur += (want - cur) * 0.22;
      if (Math.abs(want - cur) < 0.004) cur = want;
      if (v.readyState >= 1 && !v.seeking && Math.abs(v.currentTime - cur) > 0.015) {
        v.currentTime = cur;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ---- scroll-linked 3D ---- */
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const scrollRotY = useTransform(p, [0, 0.5, 1], reduce ? [0, 0, 0] : [-28, 0, 28]);
  const scrollRotX = useTransform(p, [0, 0.5, 1], reduce ? [0, 0, 0] : [10, 0, -8]);
  const scrollZ = useTransform(p, [0, 0.5, 1], reduce ? [0, 0, 0] : [-70, 50, -70]);
  const scrollScale = useTransform(p, [0, 0.5, 1], [0.95, 1.03, 0.95]);
  const orbY = useTransform(p, [0, 1], [-80, 80]);
  const orbYInverse = useTransform(p, [0, 1], [80, -80]);
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(p, [0, 1], [30, -30]);

  /* ---- mouse-linked 3D ---- */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 140, damping: 18 });
  const smy = useSpring(my, { stiffness: 140, damping: 18 });
  const tiltX = useTransform(smy, [0, 1], reduce ? [0, 0] : [12, -12]);
  const tiltY = useTransform(smx, [0, 1], reduce ? [0, 0] : [-16, 16]);
  const gx = useTransform(smx, (v) => v * 100);
  const gy = useTransform(smy, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(255,255,255,0.22), transparent 60%)`;
  const sx = useTransform(smx, [0, 1], [34, -34]);
  const sy = useTransform(smy, [0, 1], [40, -4]);
  const shadow = useMotionTemplate`${sx}px ${sy}px 90px rgba(60,80,255,0.35)`;
  const plateX = useTransform(smx, [0, 1], [22, -22]);
  const plateY = useTransform(smy, [0, 1], [22, -22]);

  // Frame size: as tall as the screen allows (4:5), so the video is big and never cut off
  const frameHeight = isDesktop
    ? 'clamp(380px, calc(100vh - 170px), 800px)'
    : 'clamp(240px, calc(100vh - 440px), 520px)';

  return (
    // NOTE: no overflow-hidden here — it would break position: sticky
    <section
      ref={sectionRef}
      className="relative h-[320vh] overflow-x-clip lg:h-[360vh]"
      style={{ background: 'linear-gradient(180deg,#271a78 0%,#0b0a33 18%,#0b0a33 100%)' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* faint perspective grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(140,150,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(140,150,255,.9) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 65% 50%, black 10%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 65% 50%, black 10%, transparent 70%)',
          }}
        />

        <div className="iiq-container grid h-full grid-rows-[auto_1fr] items-center gap-4 pb-6 pt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-1 lg:gap-14 lg:pb-8 lg:pt-24">
          {/* text */}
          <motion.div style={{ y: textY }}>
            <Reveal3D>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
                Process Reengineering for Digitization
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-indigo-100/80 sm:text-base lg:mt-8 lg:text-lg lg:leading-loose">
                We create value for our customers by understanding and improving their processes both from
                short-term and long-term perspective. We guide business process owners and subject matter
                experts in re-engineering business processes by focusing on redesign and reconfiguration of
                existing processes.
              </p>
            </Reveal3D>
          </motion.div>

          {/* 3D video stage */}
          <div className="relative flex h-full min-h-0 items-center justify-center" style={{ perspective: 1600 }}>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-[6%] top-[10%] h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl"
              style={{ y: orbY }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute bottom-[6%] right-[4%] h-60 w-60 rounded-full bg-blue-500/25 blur-3xl"
              style={{ y: orbYInverse }}
            />

            <motion.div
              style={{ rotateY: scrollRotY, rotateX: scrollRotX, z: scrollZ, scale: scrollScale, transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="relative"
                style={{
                  height: frameHeight,
                  aspectRatio: '4 / 5',
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  mx.set((e.clientX - r.left) / r.width);
                  my.set((e.clientY - r.top) / r.height);
                }}
                onMouseLeave={() => {
                  mx.set(0.5);
                  my.set(0.5);
                }}
              >
                {/* depth plates */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-3xl border border-indigo-400/30 bg-indigo-500/10"
                  style={{ transform: 'translateZ(-100px)', x: plateX, y: plateY }}
                />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-3xl border border-white/15 bg-white/[0.04]"
                  style={{ transform: 'translateZ(-50px)', x: plateX, y: plateY }}
                />

                {/* the video */}
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-3xl border border-white/15 bg-[#050420]"
                  style={{ boxShadow: shadow }}
                >
                  {failed ? (
                    <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-white/60">
                      Video not found at src/assets/video-poster.mp4
                    </div>
                  ) : (
                    <video
                      ref={videoRef}
                      src={bprVideo}
                      className="absolute inset-0 h-full w-full object-cover"
                      muted
                      playsInline
                      preload="auto"
                      onError={() => setFailed(true)}
                      aria-label="Business process re-engineering video"
                    />
                  )}
                  <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glare }} />

                  {/* playhead */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                    <motion.div className="h-full bg-gradient-to-r from-indigo-400 to-sky-400" style={{ width: barWidth }} />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3D image: rotates in on scroll, tilts with the mouse ---------- */
function Image3D({ src, alt, side }: { src: string; alt: string; side: 'left' | 'right' }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'center 55%'] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });
  const dir = side === 'left' ? 1 : -1;
  const enterRotY = useTransform(p, [0, 1], reduce ? [0, 0] : [35 * dir, 0]);
  const enterRotX = useTransform(p, [0, 1], reduce ? [0, 0] : [18, 0]);
  const enterZ = useTransform(p, [0, 1], reduce ? [0, 0] : [-160, 0]);
  const enterOpacity = useTransform(p, [0, 0.7], [0, 1]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 200, damping: 20 });
  const smy = useSpring(my, { stiffness: 200, damping: 20 });
  const tiltX = useTransform(smy, [0, 1], reduce ? [0, 0] : [9, -9]);
  const tiltY = useTransform(smx, [0, 1], reduce ? [0, 0] : [-9, 9]);
  const gx = useTransform(smx, (v) => v * 100);
  const gy = useTransform(smy, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(360px circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), transparent 60%)`;
  const sx = useTransform(smx, [0, 1], [20, -20]);
  const sy = useTransform(smy, [0, 1], [24, -8]);
  const shadow = useMotionTemplate`${sx}px ${sy}px 60px rgba(10,22,52,0.25)`;

  return (
    <motion.div
      ref={ref}
      style={{ rotateY: enterRotY, rotateX: enterRotX, z: enterZ, opacity: enterOpacity, transformPerspective: 1400 }}
    >
      <div style={{ perspective: 1000 }}>
        <motion.div
          className="relative overflow-hidden rounded-xl"
          style={{ rotateX: tiltX, rotateY: tiltY, boxShadow: shadow, transformStyle: 'preserve-3d' }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width);
            my.set((e.clientY - r.top) / r.height);
          }}
          onMouseLeave={() => {
            mx.set(0.5);
            my.set(0.5);
          }}
        >
          <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" />
          <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glare }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  SECTION 2 — pinned video, scrubbed by the scroll wheel             */
/*  Scroll down → video plays forward. Scroll up → it rewinds.         */
/*  The video is finished exactly when the next section opens.         */
/* ================================================================== */
function AiVideoScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantRef = useRef(0); // 0..1 target position
  const [failed, setFailed] = useState(false);

  // progress is 0 when the section pins and 1 the moment it unpins (next section opens)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    wantRef.current = Math.min(1, Math.max(0, v));
  });
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  /* ---- scrub: ease the video's playhead toward the scroll position ---- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.pause();
    let cur = 0;
    let raf = 0;
    const loop = () => {
      const dur = v.duration || 0;
      const want = wantRef.current * dur;
      cur += (want - cur) * 0.2;
      if (Math.abs(want - cur) < 0.004) cur = want;
      if (dur && v.readyState >= 1 && !v.seeking && Math.abs(v.currentTime - cur) > 0.015) {
        v.currentTime = Math.min(cur, dur);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    // NOTE: no overflow-hidden here — it would break position: sticky
    <section ref={sectionRef} className="relative h-[300vh] overflow-x-clip" style={{ background: '#0b0a33' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="iiq-container grid h-full grid-rows-[auto_1fr] items-center gap-6 pb-6 pt-24 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16">
          {/* video (left) */}
          <div className="flex items-center justify-center">
            <div
              className="relative overflow-hidden rounded-xl border border-white/15 bg-[#050420] shadow-2xl shadow-indigo-500/30"
              style={{ height: 'clamp(240px, calc(100vh - 260px), 720px)', aspectRatio: '9 / 16' }}
            >
              {failed ? (
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-white/60">
                  Video not found at src/assets/ai_video.mp4
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={aiVideo}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  playsInline
                  preload="auto"
                  onError={() => setFailed(true)}
                  aria-label="AI-driven digitization video"
                />
              )}

              {/* playhead */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                <motion.div className="h-full bg-gradient-to-r from-indigo-400 to-sky-400" style={{ width: barWidth }} />
              </div>
            </div>
          </div>

          {/* copy (right) */}
          <Reveal3D className="space-y-4 text-sm leading-relaxed text-indigo-100/80 sm:text-base lg:space-y-6 lg:leading-loose">
            <p>
              It is common to observe that core business processes continue to operate in their own
              traditional despite Digitization drive across the industry as well as with in the
              organization itself. This usually goes unnoticed despite the potential of integrating the
              aggregation of information across functions. Operating models struggle to achieve a unified
              digital vision.
            </p>
            <p>
              At iiiQ, our starting point in any assignment is Business Process Reengineering (BPR). We,
              along with our customers, take a critical look at core processes to spot areas that need
              improvement and potential candidates for digitization.
            </p>
            <p>
              By taking a step back, strategists can analyse areas like supply chain, customer experience
              and finance operations so that experts can embed emerging technologies and intelligent
              workflows to improve the business holistically.
            </p>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}

/* ---------- Text block that swings in from a 3D angle ---------- */
function Reveal3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, rotateX: -28, y: 40 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1000, transformOrigin: '50% 100%' }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Benefit card: flips up on scroll, tilts with the mouse ---------- */
function BenefitCard({ text, index }: { text: string; index: number }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 220, damping: 20 });
  const smy = useSpring(my, { stiffness: 220, damping: 20 });
  const tiltX = useTransform(smy, [0, 1], reduce ? [0, 0] : [12, -12]);
  const tiltY = useTransform(smx, [0, 1], reduce ? [0, 0] : [-12, 12]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, rotateX: -70, y: 50 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 900, transformOrigin: '50% 100%' }}
    >
      <div style={{ perspective: 800 }} className="h-full">
        <motion.div
          className="group flex h-full items-center gap-4 rounded-2xl border border-navy-deep/10 bg-white p-6 shadow-lg shadow-navy-deep/5 transition-colors hover:border-blue-bright/40"
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width);
            my.set((e.clientY - r.top) / r.height);
          }}
          onMouseLeave={() => {
            mx.set(0.5);
            my.set(0.5);
          }}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-bright/10 text-sm font-bold text-blue-bright transition-colors group-hover:bg-blue-bright group-hover:text-white"
            style={{ transform: 'translateZ(40px)' }}
          >
            {index + 1}
          </span>
          <p className="text-base leading-snug text-graytext" style={{ transform: 'translateZ(24px)' }}>
            {text}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function ProcessReengineering() {
  return (
    <>
      <SEO
        title="Process Reengineering for Digitization | iiiQbets"
        description="We guide business process owners and subject matter experts in re-engineering business processes by focusing on redesign and reconfiguration of existing processes."
        canonical="https://iiiqbets.com/services/process-reengineering-for-digitization"
        ogTitle="Process Reengineering for Digitization | iiiQbets"
        ogDescription="Business Process Reengineering is the starting point of every iiiQ assignment — spot areas that need improvement and candidates for digitization."
      />

      <ProcessHero
        title="Process Reengineering for Digitization"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Process Reengineering for Digitization' }]}
      />

      <VideoScene />

      {/* Section 2 — scroll-scrubbed video + copy */}
      <AiVideoScene />

      {/* Section 3 — benefits */}
      <section className="overflow-x-clip py-14 sm:py-16">
        <div className="iiq-container">
          <Reveal3D>
            <h2 className="text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
              Benefits of Business Process Reengineering
            </h2>
          </Reveal3D>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <BenefitCard key={b} text={b} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}