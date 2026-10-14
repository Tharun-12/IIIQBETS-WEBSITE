import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./CloudServices.css";

/* ------------------------------------------------------------------
   CONTENT  (taken from the reference screenshots)
------------------------------------------------------------------- */
interface Quad {
  id: 1 | 2 | 3 | 4;
  n: string;
  title: string;
  items: string[];
  numArea: string;
  titleArea: string;
  listArea: string;
}

const QUADS: Quad[] = [
  {
    id: 1,
    n: "01",
    title: "Optimize",
    items: ["Transformation Projects", "Rationalize", "Augment"],
    numArea: "1 / 1 / 2 / 2",
    titleArea: "1 / 2 / 2 / 3",
    listArea: "2 / 1 / 3 / 3",
  },
  {
    id: 2,
    n: "02",
    title: "Advisory",
    items: ["Business Case & Roadmap", "Assessment", "Design & Architect"],
    numArea: "1 / 4 / 2 / 5",
    titleArea: "1 / 3 / 2 / 4",
    listArea: "2 / 3 / 3 / 5",
  },
  {
    id: 3,
    n: "03",
    title: "Transform",
    items: ["Validation", "Deployment", "Migrate"],
    numArea: "4 / 4 / 5 / 5",
    titleArea: "4 / 3 / 5 / 4",
    listArea: "3 / 3 / 4 / 5",
  },
  {
    id: 4,
    n: "04",
    title: "Manage",
    items: ["Monitor", "Maintain", "Manage"],
    numArea: "4 / 1 / 5 / 2",
    titleArea: "4 / 2 / 5 / 3",
    listArea: "3 / 1 / 4 / 3",
  },
];

type FeatureIconName =
  | "analytics"
  | "folder"
  | "tools"
  | "hosting"
  | "devices"
  | "support";

interface Feature {
  label: string;
  icon: FeatureIconName;
}

const FEATURES_LEFT: Feature[] = [
  { label: "Data Analytics", icon: "analytics" },
  { label: "Admin Center", icon: "folder" },
  { label: "Installation Tools", icon: "tools" },
];
const FEATURES_RIGHT: Feature[] = [
  { label: "Hosting", icon: "hosting" },
  { label: "Customization", icon: "devices" },
  { label: "Support", icon: "support" },
];

const cssVars = (vars: Record<string, string | number>) =>
  vars as unknown as CSSProperties;

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

  return <canvas ref={ref} className="cs-hero__canvas" aria-hidden="true" />;
}

/* ------------------------------------------------------------------
   Mouse-driven 3D tilt wrapper
------------------------------------------------------------------- */
function Tilt({
  children,
  className = "",
  max = 14,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const inner = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = inner.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${px * max * 1.6}deg`);
    el.style.setProperty("--rx", `${-py * max}deg`);
  };
  const onLeave = () => {
    const el = inner.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  return (
    <div
      className={`cs-tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="cs-tilt__in" ref={inner}>
        {children}
      </div>
    </div>
  );
}

const featureMove = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--ry", `${px * 16}deg`);
  el.style.setProperty("--rx", `${-py * 16}deg`);
};
const featureLeave = (e: MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.setProperty("--ry", "0deg");
  e.currentTarget.style.setProperty("--rx", "0deg");
};

/* ------------------------------------------------------------------
   Icons
------------------------------------------------------------------- */
const RED = "#e8231a";

const FeatureIcon = ({ name }: { name: FeatureIconName }) => {
  const base = { width: 62, height: 62, viewBox: "0 0 64 64" };
  const line = {
    fill: "none",
    stroke: RED,
    strokeWidth: 3.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "analytics":
      return (
        <svg {...base} {...line}>
          <rect x="5" y="8" width="54" height="36" rx="4" />
          <path d="M32 44v10M20 56h24" />
          <path d="M14 36v-7M21 36v-12M28 36v-8" strokeWidth="4.5" />
          <circle cx="44" cy="25" r="8" fill={RED} />
        </svg>
      );
    case "folder":
      return (
        <svg {...base}>
          <path d="M4 14h20l6 7h30v31H4z" fill={RED} />
          <path d="M4 52l8-24h52l-8 24z" fill="#f2564c" />
        </svg>
      );
    case "tools":
      return (
        <svg {...base} {...line} strokeWidth="6">
          <path d="M14 52L44 22" />
          <path d="M50 52L22 24" />
          <circle cx="47" cy="19" r="8" strokeWidth="5" />
          <path d="M12 12l10 10" strokeWidth="9" />
        </svg>
      );
    case "hosting":
      return (
        <svg {...base} {...line}>
          <path d="M18 34a10 10 0 0 1 2-19 14 14 0 0 1 27 4 9 9 0 0 1 2 15" />
          <rect x="17" y="30" width="30" height="8" rx="2" fill={RED} />
          <rect x="17" y="40" width="30" height="8" rx="2" fill={RED} />
          <path d="M32 50v8M24 58h16" />
        </svg>
      );
    case "devices":
      return (
        <svg {...base} {...line}>
          <rect x="4" y="12" width="38" height="28" rx="3" />
          <path d="M14 48h18M23 40v8" />
          <rect x="34" y="24" width="20" height="32" rx="3" fill="#fff" />
          <path d="M42 51h4" />
        </svg>
      );
    default:
      return (
        <svg {...base} {...line}>
          <circle cx="32" cy="34" r="16" />
          <path d="M14 34v-4a18 18 0 0 1 36 0v4" strokeWidth="5" />
          <rect x="9" y="30" width="7" height="14" rx="3" fill={RED} />
          <rect x="48" y="30" width="7" height="14" rx="3" fill={RED} />
          <path d="M48 46c0 7-6 9-14 9" />
          <circle cx="26" cy="33" r="1.8" fill={RED} />
          <circle cx="38" cy="33" r="1.8" fill={RED} />
          <path d="M27 41q5 4 10 0" />
        </svg>
      );
  }
};

const CLOUD_PATH =
  "M78 244C30 244 6 206 18 170 26 144 52 134 74 138 80 92 124 56 172 66 198 34 258 38 282 84 326 82 362 116 352 164 374 184 372 234 326 244Z";

/* ------------------------------------------------------------------
   Page component
------------------------------------------------------------------- */
export default function CloudServices() {
  const rootRef = useRef<HTMLDivElement>(null);

  // adds .is-in to anything marked .cs-watch once it scrolls into view
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const els = root.querySelectorAll<HTMLElement>(".cs-watch");
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

  const renderFeature = (f: Feature, side: "l" | "r", i: number) => (
    <div
      key={f.label}
      className={`cs-feature cs-feature--${side} cs-watch cs-reveal`}
      style={cssVars({ "--i": i })}
      onMouseMove={featureMove}
      onMouseLeave={featureLeave}
    >
      <div className="cs-feature__in">
        {side === "r" && (
          <span className="cs-feature__icon">
            <FeatureIcon name={f.icon} />
          </span>
        )}
        <span className="cs-feature__label">{f.label}</span>
        {side === "l" && (
          <span className="cs-feature__icon">
            <FeatureIcon name={f.icon} />
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="cs-page" ref={rootRef}>
      {/* ============ HERO ============ */}
      <section className="cs-hero">
        <HeroWave />
        <div className="cs-wrap cs-hero__inner">
          <h1 className="cs-hero__title">Cloud Services</h1>
          <nav className="cs-hero__crumbs" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span>CLOUD SERVICES</span>
          </nav>
        </div>
      </section>

      {/* ============ INTRO + 3D FRAMEWORK BOARD ============ */}
      <section className="cs-intro">
        <div className="cs-wrap">
          <h2 className="cs-heading cs-watch cs-reveal">Cloud Services</h2>

          <div className="cs-intro__grid">
            <div className="cs-intro__text cs-watch cs-reveal cs-reveal--left">
              <p className="cs-strong">
                At <em>iiiQbets</em>, we help you build a cloud migration strategy
                for moving your IT systems and applications to Cloud, with
                minimal cost and effort. We provide the tools and expertise
                required to accelerate your deployments, simplify your operations
                and empower your team to make more data-driven decisions that
                optimize costs, improve compliance and reduce risk.
              </p>
              <p className="cs-soft cs-gap">
                Cloud Migration services help you implement your cloud strategy
                with a structured, risk-mitigated approach for full-stack
                migration&mdash;while laying a solid security foundation for
                continuous performance improvements and DevOps.
              </p>
              <p className="cs-soft">
                iiiQ&rsquo;s tool-based framework speeds time to market and adds
                value to your cloud-enabled business transformation projects,
                with well-defined, agile methodologies in a structured approach
                to planning and execution.
              </p>
            </div>

            <div className="cs-panel cs-watch cs-reveal cs-reveal--right">
              <Tilt className="cs-board-tilt" max={12}>
                <div className="cs-board cs-watch">
                  {QUADS.map((q, qi) => (
                    <div key={q.id} style={{ display: "contents" }}>
                      <div
                        className={`cs-tile cs-num cs-q${q.id}`}
                        style={cssVars({ gridArea: q.numArea, "--z": "46px", "--i": qi * 3 })}
                      >
                        {q.n}
                      </div>
                      <div
                        className={`cs-tile cs-ttl cs-q${q.id}`}
                        style={cssVars({ gridArea: q.titleArea, "--z": "28px", "--i": qi * 3 + 1 })}
                      >
                        {q.title}
                      </div>
                      <div
                        className={`cs-tile cs-lst cs-q${q.id}`}
                        style={cssVars({ gridArea: q.listArea, "--z": "12px", "--i": qi * 3 + 2 })}
                      >
                        <ul>
                          {q.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Tilt>
              <div className="cs-panel__bar" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOUD PLATFORM DIAGRAM ============ */}
      <section className="cs-platform">
        <div className="cs-wrap">
          <div className="cs-platform__head cs-watch cs-reveal">
            <span className="cs-eyebrow">BUSINESS GROWTH FLEXIBILITY SCALIBILITY</span>
            <h2 className="cs-heading">Cloud Services</h2>
          </div>

          <div className="cs-diagram">
            <div className="cs-col cs-col--l">
              {FEATURES_LEFT.map((f, i) => renderFeature(f, "l", i))}
            </div>

            <div className="cs-center cs-watch cs-reveal" aria-hidden="true">
              <Tilt className="cs-center-tilt" max={12}>
                <div className="cs-scene">
                  <div className="cs-halo cs-halo--a" />
                  <div className="cs-halo cs-halo--b" />

                  <div className="cs-cloud">
                    {Array.from({ length: 9 }, (_, k) => (
                      <svg
                        key={k}
                        viewBox="0 0 380 280"
                        className="cs-cloud__layer"
                        style={cssVars({ "--k": k - 4 })}
                      >
                        <path
                          d={CLOUD_PATH}
                          fill={k === 8 ? "url(#cs-grad)" : `hsl(205 ${70 - (8 - k) * 3}% ${18 + k * 1.2}%)`}
                          stroke={k === 8 ? "rgba(120,190,255,0.5)" : "none"}
                          strokeWidth="2"
                        />
                        {k === 8 && (
                          <defs>
                            <linearGradient id="cs-grad" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#0b4f80" />
                              <stop offset="1" stopColor="#052f55" />
                            </linearGradient>
                          </defs>
                        )}
                      </svg>
                    ))}
                    <div className="cs-cloud__label">
                      <svg width="46" height="46" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 34a10 10 0 0 1 2-19 14 14 0 0 1 27 4 9 9 0 0 1 2 15" />
                        <rect x="19" y="28" width="26" height="8" rx="2" />
                        <rect x="19" y="38" width="26" height="8" rx="2" />
                        <path d="M32 48v8M24 56h16" />
                      </svg>
                      <span>Essence Cloud</span>
                      <span>Service Platform</span>
                    </div>
                  </div>

                  <div className="cs-pill cs-pill--l">Service Provider Tools</div>
                  <div className="cs-pill cs-pill--r">Business Operation</div>
                </div>
              </Tilt>
            </div>

            <div className="cs-col cs-col--r">
              {FEATURES_RIGHT.map((f, i) => renderFeature(f, "r", i))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}