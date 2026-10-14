import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./DigitalMarketingOverview.css";

/* ------------------------------------------------------------------
   CONTENT  (taken from the reference screenshots)
------------------------------------------------------------------- */
const CONTENT = {
  pageTitle: "Data Analytics & Business Intelligence",
  intro: {
    eyebrow: "ANALYTICS & BUSINESS",
    heading: "Data Analytics & Business Intelligence",
  },
  solutions: {
    eyebrow: "ANALYTICS",
    heading: "Analytical Solutions",
    bullets: [
      "iiiQ\u2019s Data Engineering Practice specializes in building Data Lakes, Data Marts and Data Warehouses using AI analytics.",
      "We provide a wide variety of data engineering solutions, along with database analytics.",
      "Our team includes specialists in fetching data from public and commercial data sources. They can efficiently integrate, clean and thereby enhance clients data efficiency.",
      "Sales IQ is a unique product from iiiQ designed for all commercial organizations having sales teams as small as 5 people to as many as 500 people.",
      "We have customized solutions for clients in each industry.",
    ],
  },
};

/* ------------------------------------------------------------------
   helpers
------------------------------------------------------------------- */
const cssVars = (vars: Record<string, string | number>) =>
  vars as unknown as CSSProperties;

/* deterministic chart data (so the page looks the same on every load) */
const MAIN_BARS = Array.from(
  { length: 38 },
  (_, i) => Math.round(28 + Math.abs(Math.sin(i * 1.7)) * 55 + (i % 5) * 4)
);
const TALL_BARS = [92, 58, 100, 66, 44, 84, 54, 96, 40];
const DIVERGE = Array.from({ length: 22 }, (_, i) =>
  Math.round(Math.sin(i * 0.55 + 1) * 28 + (i - 11) * 1.8)
);

// [first slice %, second slice %]  (third = remainder)
const PIES: Array<[number, number]> = [
  [60, 30],
  [35, 42],
  [26, 40],
  [43, 40],
  [60, 28],
  [23, 45],
];

const pieBackground = ([a, b]: [number, number]) =>
  `conic-gradient(#0d5cab 0 ${a}%, #35a2ea ${a}% ${a + b}%, #bfe9ff ${a + b}% 100%)`;

const buildPath = (vals: number[], w: number, h: number, amp: number) =>
  vals
    .map((v, i) => {
      const x = (i / (vals.length - 1)) * w;
      const y = h / 2 - v * amp;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

const LINE_RED = buildPath(
  Array.from({ length: 30 }, (_, i) => Math.sin(i * 0.5) * 20 + Math.cos(i * 1.3) * 12),
  190,
  100,
  1
);
const LINE_BLUE = buildPath(
  Array.from({ length: 30 }, (_, i) => Math.cos(i * 0.4 + 1) * 24 - i * 0.6),
  190,
  100,
  1
);

/* ------------------------------------------------------------------
   3D wave of dots for the hero (canvas, no libraries)
------------------------------------------------------------------- */
function HeroWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    if (!context) return undefined;
    const ctx: CanvasRenderingContext2D = context;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const COLS = 90;
    const ROWS = 34;

    const streaks = Array.from({ length: 22 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.6,
      len: 0.15 + Math.random() * 0.4,
      p: Math.random() * 6.28,
    }));

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, w, h);

      streaks.forEach((s) => {
        const px = s.x * w;
        const py = s.y * h + Math.sin(t * 0.6 + s.p) * 10;
        const g = ctx.createLinearGradient(px, py, px, py + s.len * h);
        g.addColorStop(0, "rgba(140,150,255,0.55)");
        g.addColorStop(1, "rgba(140,150,255,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, py + s.len * h);
        ctx.stroke();
        ctx.fillStyle = "rgba(190,200,255,0.9)";
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, 6.28);
        ctx.fill();
      });

      const tilt = 0.9 + Math.sin(t * 0.25) * 0.05;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);
      const spanX = w * 1.6;
      const spanZ = 900;
      const cam = 620;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const nx = c / (COLS - 1) - 0.5;
          const nz = r / (ROWS - 1);
          const x = nx * spanX;
          const z0 = nz * spanZ;
          const y0 =
            Math.sin(nx * 9 + t * 1.1) * 38 +
            Math.cos(nz * 7 - t * 0.9) * 30 +
            Math.sin((nx + nz) * 5 + t * 0.6) * 22;

          const y = y0 * cosT - z0 * sinT;
          const z = y0 * sinT + z0 * cosT + 260;

          const scale = cam / (cam + z);
          const sx = w / 2 + x * scale;
          const sy = h * 0.95 + y * scale;
          if (sx < -10 || sx > w + 10 || sy < -10 || sy > h + 10) continue;

          const depth = 1 - nz;
          const a = 0.15 + depth * 0.75;
          const size = 0.6 + scale * 1.8;
          ctx.fillStyle = `rgba(${120 + depth * 80},${130 + depth * 70},255,${a})`;
          ctx.fillRect(sx, sy, size, size);
        }
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="da-hero__canvas" aria-hidden="true" />;
}

/* ------------------------------------------------------------------
   Small pieces of the 3D analytics scene
------------------------------------------------------------------- */
function Ring({ value, style }: { value: number; style?: CSSProperties }) {
  return (
    <div className="da-ringwrap" style={style}>
      <div className="da-ring" style={cssVars({ "--p": value })} />
      <span className="da-ringwrap__t">{value}%</span>
    </div>
  );
}

function DivergeChart() {
  const base = 70;
  return (
    <svg viewBox="0 0 220 130" className="da-diverge" role="presentation">
      {[20, 45, 70, 95, 120].map((y) => (
        <line key={y} x1="0" x2="220" y1={y} y2={y} className="da-diverge__grid" />
      ))}
      {DIVERGE.map((v, i) => {
        const h = Math.abs(v) * 0.9;
        const x = 6 + i * 9.6;
        return (
          <rect
            key={i}
            x={x}
            y={v >= 0 ? base - h : base}
            width="6"
            height={h}
            rx="1"
            className="da-diverge__bar"
            style={cssVars({ "--i": i, fill: v >= 0 ? "#1e6fbf" : "#4aa8e8" })}
          />
        );
      })}
      <path
        d={buildPath(DIVERGE.map((v) => v * 0.6 + Math.sin(v) * 6), 210, 140, 0.9)}
        className="da-line da-line--red"
        pathLength={1}
      />
    </svg>
  );
}

function AnalyticsScene() {
  const pointerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = pointerRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${px * 22}deg`);
    el.style.setProperty("--rx", `${-py * 14}deg`);
  };
  const onLeave = () => {
    const el = pointerRef.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  return (
    <div
      className="da-scene"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden="true"
    >
      <div className="da-scene__fit">
        <div className="da-pointer" ref={pointerRef}>
          <div className="da-sway">
            <div className="da-stage">
              {/* ground shadow */}
              <div className="da-groundshadow" />

              {/* tablet lying in 3D space */}
              <div className="da-tablet">
                <div className="da-tablet__body">
                  <div className="da-tablet__screen">
                    <div className="da-tablet__grid" />
                    <div className="da-tablet__glow" />
                    <div className="da-tablet__scan" />
                  </div>
                </div>
              </div>

              {/* floating chart panels (each at its own depth) */}
              <div className="da-float da-panel" style={cssVars({ left: 6, top: 0, width: 236, height: 134, "--z": "70px", "--d": "0s" })}>
                <DivergeChart />
              </div>

              <div className="da-float da-pies" style={cssVars({ left: 282, top: 14, "--z": "100px", "--d": "0.6s" })}>
                {PIES.map((p, i) => (
                  <div
                    key={i}
                    className="da-pie"
                    style={cssVars({ background: pieBackground(p), "--i": i })}
                  />
                ))}
              </div>

              <div className="da-float da-tall" style={cssVars({ left: 536, top: -14, "--z": "130px", "--d": "1.1s" })}>
                {TALL_BARS.map((h, i) => (
                  <span key={i} className="da-bar" style={cssVars({ "--h": `${h}%`, "--i": i })} />
                ))}
              </div>

              <div
                className="da-float da-pie da-pie--big"
                style={cssVars({ left: 118, top: 142, background: pieBackground([60, 30]), "--z": "90px", "--d": "0.3s" })}
              />

              <div className="da-float da-rings" style={cssVars({ left: 326, top: 208, "--z": "115px", "--d": "0.9s" })}>
                <Ring value={75} />
                <Ring value={25} />
                <Ring value={10} />
              </div>

              <div className="da-float da-bottombars" style={cssVars({ left: 62, top: 262, "--z": "48px", "--d": "1.4s" })}>
                {MAIN_BARS.map((h, i) => (
                  <span key={i} className="da-bar" style={cssVars({ "--h": `${h}%`, "--i": i })} />
                ))}
              </div>

              <div className="da-float da-panel da-panel--line" style={cssVars({ left: 262, top: 258, width: 196, height: 104, "--z": "72px", "--d": "0.2s" })}>
                <svg viewBox="0 0 190 100" role="presentation">
                  <path d={LINE_BLUE} className="da-line da-line--blue" pathLength={1} />
                  <path d={LINE_RED} className="da-line da-line--red" pathLength={1} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Page component
------------------------------------------------------------------- */
export default function DataAnalytics() {
  const rootRef = useRef<HTMLDivElement>(null);

  // reveal-on-scroll
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const els = root.querySelectorAll<HTMLElement>(".da-reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="da-page" ref={rootRef}>
      {/* ============ HERO ============ */}
      <section className="da-hero">
        <HeroWave />
        <div className="da-wrap da-hero__inner">
          <h1 className="da-hero__title">{CONTENT.pageTitle}</h1>
          <nav className="da-hero__crumbs" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span>{CONTENT.pageTitle.toUpperCase()}</span>
          </nav>
        </div>
      </section>

      {/* ============ INTRO + 3D ANALYTICS TABLET ============ */}
      <section className="da-intro">
        <div className="da-wrap da-intro__grid">
          <div className="da-intro__text da-reveal da-reveal--left">
            <span className="da-eyebrow">{CONTENT.intro.eyebrow}</span>
            <h2 className="da-heading">{CONTENT.intro.heading}</h2>

            <p className="da-lead">
              iiiQ is a trusted partner for enterprises to{" "}
              <strong>drive digital transformation</strong> outcomes.
            </p>

            <div className="da-lines">
              <span>
                We bring together Data Engineering, Advanced Analytics, AI
                accelerators, and Consulting expertise to deliver contextual
                AI-powered analytics solutions for customer experience and
                operational effectiveness.
              </span>
              <span>
                We make our customer&rsquo;s journey as the one which is Data
                Driven. Impact of this approach is an easier, faster and a
                sustainable journey.
              </span>
              <span>
                We also leverage <strong>unique problem-solving frameworks</strong>,{" "}
                <strong>extensive domain expertise</strong>, and{" "}
                <strong>data science capabilities</strong> to help companies
                accelerate their transformation journeys and build digital
                enterprises of the future
              </span>
            </div>
          </div>

          <div className="da-intro__visual da-reveal da-reveal--right">
            <AnalyticsScene />
          </div>
        </div>
      </section>

      {/* ============ ANALYTICAL SOLUTIONS ============ */}
      <section className="da-solutions">
        <div className="da-wrap">
          <div className="da-solutions__head da-reveal">
            <div>
              <span className="da-eyebrow">{CONTENT.solutions.eyebrow}</span>
              <h2 className="da-heading">{CONTENT.solutions.heading}</h2>
            </div>

            {/* small rotating data-cube */}
            <div className="da-cubewrap" aria-hidden="true">
              <div className="da-cube">
                <i className="da-cube__f da-cube__f--front" />
                <i className="da-cube__f da-cube__f--back" />
                <i className="da-cube__f da-cube__f--right" />
                <i className="da-cube__f da-cube__f--left" />
                <i className="da-cube__f da-cube__f--top" />
                <i className="da-cube__f da-cube__f--bottom" />
              </div>
            </div>
          </div>

          <ul className="da-bullets">
            {CONTENT.solutions.bullets.map((b, i) => (
              <li
                key={i}
                className="da-bullet da-reveal"
                style={cssVars({ "--i": i })}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}