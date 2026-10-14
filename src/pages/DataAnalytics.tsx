import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import "./DataAnalytics.css";

/* ------------------------------------------------------------------
   CONTENT  (same content as the reference screenshots).
   Edit this object if you want to change the text later.
------------------------------------------------------------------- */
type IconName = "phone" | "code" | "design" | "chart";

interface ServiceGroup {
  id: string;
  title: string;
  icon: IconName;
  items: string[];
}

const CONTENT: {
  pageTitle: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  tagline: string;
  groups: ServiceGroup[];
  orbit: string[];
  orbitCenter: [string, string];
} = {
  pageTitle: "Digital Marketing",
  eyebrow: "// WHAT WE OFFER",
  heading: "Digital Marketing",
  paragraphs: [
    "iiiQ is dedicated to the task of providing desired results to our valuable customers. We set the highest standards for ourselves which make our customers trust us and comeback to us for all their marketing needs.",
    "Our digital solutions address requirements of MSME clients to MNC Customers across different industries. Right from the start to the finish, our customized online solutions and web solutions are targeted towards only one goal: \u201Cenhancing the online Presence and generating great Sales Funnel\u201D. Through our Digital Marketing solutions, our mission is to turn traffic into revenues. Our understanding and expertise in nuances of search engines and online marketing help organizations to realize great ROI.",
  ],
  tagline:
    "Here at iiiQ,  we begin our projects with doing in-house market research and customer analysis. We employ strategies that find the right customers for a business and take steps to make the business unique and thus drive real traffic and real customers to that company\u2019s website.",
  groups: [
    {
      id: "dm",
      title: "Digital Marketing",
      icon: "phone",
      items: [
        "Search Engine Optimization",
        "Online Advertising - Facebook / Instagram",
        "Social Media Marketing",
        "Mobile Advertising",
        "Digital Profile Management",
        "Content writing",
      ],
    },
    {
      id: "other",
      title: "Other Services",
      icon: "code",
      items: ["Web Hosting", "Website Maintenance", "Image Editing"],
    },
    {
      id: "wd",
      title: "Web Design",
      icon: "design",
      items: [
        "Logo/Graphic Design",
        "Landing Page Creatives",
        "Template Design",
        "News Letter Design",
      ],
    },
    {
      id: "wdev",
      title: "Web Development",
      icon: "chart",
      items: [
        "Content Management System",
        "Web Application Development",
        "E-commerce Website Development",
        "Mobile Website Development",
        "Mobile Application Development",
      ],
    },
  ],
  orbit: [
    "RESEARCH",
    "WWW",
    "VIRAL",
    "ELECTRONIC DEVICES",
    "ANALYSIS",
    "SEO",
    "SEARCH",
    "CONTENT",
  ],
  orbitCenter: ["DIGITAL", "MARKETING"],
};

/* helper: set a CSS custom property inline without TS complaining */
const cssVar = (name: string, value: string) =>
  ({ [name]: value }) as CSSProperties;

/* ------------------------------------------------------------------
   Small inline SVG icons
------------------------------------------------------------------- */
const Icon = ({ name }: { name: IconName }) => {
  const common = {
    width: 56,
    height: 56,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "#e8231a",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <rect x="8" y="14" width="26" height="38" rx="3" />
          <rect x="30" y="22" width="26" height="30" rx="3" />
          <path d="M14 24h14M14 30h14M36 30h14M36 36h14M36 42h10" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <rect x="8" y="10" width="48" height="32" rx="3" />
          <path d="M26 24l-5 4 5 4M38 24l5 4-5 4M30 34l4-12" />
          <path d="M22 52h20M32 42v10" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <rect x="10" y="8" width="44" height="48" rx="3" />
          <path d="M20 22l-5 4 5 4M44 22l5 4-5 4M34 20l-4 12" />
          <path d="M18 42h28M18 48h20" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="12" y="8" width="38" height="48" rx="3" />
          <circle cx="28" cy="26" r="8" />
          <path d="M28 18v8h8" />
          <path d="M20 44v6M28 40v10M36 36v14M44 42v8" />
        </svg>
      );
  }
};

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

    // floating light streaks
    const streaks = Array.from({ length: 22 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.6,
      len: 0.15 + Math.random() * 0.4,
      s: 0.0004 + Math.random() * 0.0008,
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

      // streaks
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

      // wave grid (perspective projected)
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

          // rotate around X
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
   Mouse-tilt helper (3D hover effect)
------------------------------------------------------------------- */
const tiltMove = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--ry", `${px * 14}deg`);
  el.style.setProperty("--rx", `${-py * 14}deg`);
};
const tiltLeave = (e: MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.setProperty("--ry", "0deg");
  e.currentTarget.style.setProperty("--rx", "0deg");
};

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

  const left = [CONTENT.groups[0], CONTENT.groups[1]];
  const right = [CONTENT.groups[2], CONTENT.groups[3]];

  const renderGroup = (g: ServiceGroup, side: "left" | "right") => (
    <div
      key={g.id}
      className={`da-card da-reveal da-reveal--${side}`}
      onMouseMove={tiltMove}
      onMouseLeave={tiltLeave}
    >
      <div className="da-card__inner">
        <div className="da-card__icon">
          <Icon name={g.icon} />
        </div>
        <div>
          <h3 className="da-card__title">{g.title}</h3>
          <ul className="da-card__list">
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="da-page" ref={rootRef}>
      {/* ============ HERO ============ */}
      <section className="da-hero">
        <HeroWave />
        <div className="da-hero__inner">
          <h1 className="da-hero__title">{CONTENT.pageTitle}</h1>
          <nav className="da-hero__crumbs" aria-label="Breadcrumb">
            <a href="/">HOME</a>
            <span>{CONTENT.pageTitle.toUpperCase()}</span>
          </nav>
        </div>
      </section>

      {/* ============ WHAT WE OFFER ============ */}
      <section className="da-offer">
        <div className="da-offer__grid">
          {/* 3D visual */}
          <div className="da-scene da-reveal da-reveal--left" aria-hidden="true">
            <div className="da-scene__stage">
              <div className="da-scene__map" />
              <div className="da-lens">
                <div className="da-lens__ring" />
                <div className="da-lens__glass">
                  <span>SEO</span>
                </div>
                <div className="da-lens__handle" />
              </div>

              <div className="da-orbit">
                <div className="da-orbit__item" style={cssVar("--a", "0deg")}>
                  <div className="da-chip da-chip--red">&#9906;</div>
                </div>
                <div className="da-orbit__item" style={cssVar("--a", "90deg")}>
                  <div className="da-chip da-chip--navy">&lt;/h&gt;</div>
                </div>
                <div className="da-orbit__item" style={cssVar("--a", "180deg")}>
                  <div className="da-chip da-chip--teal">&#9881;</div>
                </div>
                <div className="da-orbit__item" style={cssVar("--a", "270deg")}>
                  <div className="da-chip da-chip--orange">&#9650;</div>
                </div>
              </div>
              <div className="da-scene__shadow" />
            </div>
          </div>

          {/* text */}
          <div className="da-offer__text da-reveal da-reveal--right">
            <span className="da-eyebrow">{CONTENT.eyebrow}</span>
            <h2 className="da-offer__heading">{CONTENT.heading}</h2>
            {CONTENT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES + 3D ORBIT ============ */}
      <section className="da-services">
        <p className="da-services__tagline da-reveal">{CONTENT.tagline}</p>

        <div className="da-services__grid">
          <div className="da-col da-col--left">
            {left.map((g) => renderGroup(g, "left"))}
          </div>

          <div className="da-core da-reveal" aria-hidden="true">
            <div className="da-core__stage">
              <div className="da-core__ring">
                {CONTENT.orbit.map((label, i) => (
                  <div
                    key={label}
                    className="da-core__item"
                    style={cssVar("--a", `${(360 / CONTENT.orbit.length) * i}deg`)}
                  >
                    <div className="da-core__unrotate">
                      <div className="da-core__counter">
                        <div className="da-core__label">{label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="da-core__cloud">
                <span>{CONTENT.orbitCenter[0]}</span>
                <span>{CONTENT.orbitCenter[1]}</span>
              </div>
            </div>
          </div>

          <div className="da-col da-col--right">
            {right.map((g) => renderGroup(g, "right"))}
          </div>
        </div>
      </section>
    </div>
  );
}