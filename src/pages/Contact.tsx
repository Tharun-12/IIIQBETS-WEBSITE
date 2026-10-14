import { useEffect, useRef, useState, type FormEvent } from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Send,
  CheckCircle,
  Loader2,
  Navigation,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

const serviceOptions = [
  'Digital Transformation',
  'Business Process Reengineering',
  'Digital Infrastructure',
  'Digital Marketing',
  'Data Analytics & BI',
  'Cloud Services',
  'Application Development',
  'ERP',
  'CRM',
  'POS',
  'SFA',
  'Other',
];

const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  companySize: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@iiiqbets.com',
    href: 'mailto:contact@iiiqbets.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 80411 19030\n+91 87929 20129',
    href: 'tel:+918041119030',
  },
];

const officeLocations = [
  {
    title: 'India',
    address: 'Skyline Beverly Park, D 402, Amruthahalli Main Road, Amruthahalli, Bangalore – 560092',
  },
  {
    title: 'Development Center',
    address: '120 Newport Center Dr, Newport Beach, CA 92660, USA',
  },
  {
    title: 'Canada',
    address: '118-2945 Pembina Hwy, Winnipeg, Manitoba R3T 3R1',
  },
];

// Bengaluru office used by the map section (same address as the India office above)
const BENGALURU_QUERY = 'Skyline Beverly Park, Amruthahalli Main Road, Amruthahalli, Bengaluru 560092';
const BENGALURU_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  BENGALURU_QUERY
)}&z=15&output=embed`;
const BENGALURU_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BENGALURU_QUERY
)}`;
const BENGALURU_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BENGALURU_QUERY
)}`;

/* ------------------------------------------------------------------ */
/* Mouse-following mascot (original character, additive)               */
/* Mouse left  -> head, face, eyes and hands move left                 */
/* Mouse right -> they move right; up -> up; down -> down             */
/* ------------------------------------------------------------------ */

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function MouseMascot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const faceRef = useRef<SVGGElement>(null);
  const pupilLRef = useRef<SVGGElement>(null);
  const pupilRRef = useRef<SVGGElement>(null);
  const handLRef = useRef<SVGGElement>(null);
  const handRRef = useRef<SVGGElement>(null);
  const antennaRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      // -1 (far left / top) ... +1 (far right / bottom), relative to the mascot
      tx = clamp((e.clientX - cx) / (window.innerWidth * 0.45), -1, 1);
      ty = clamp((e.clientY - cy) / (window.innerHeight * 0.45), -1, 1);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const set = (el: SVGGElement | null, t: string) => {
      if (el) el.style.transform = t;
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      set(bodyRef.current, `translate(${x * 5}px, ${y * 3}px)`);
      set(headRef.current, `translate(${x * 12}px, ${y * 9}px) rotate(${x * 4}deg)`);
      set(faceRef.current, `translate(${x * 9}px, ${y * 7}px)`);
      set(pupilLRef.current, `translate(${x * 5}px, ${y * 5}px)`);
      set(pupilRRef.current, `translate(${x * 5}px, ${y * 5}px)`);
      set(handLRef.current, `translate(${x * 16}px, ${y * 11}px) rotate(${x * 10}deg)`);
      set(handRRef.current, `translate(${x * 16}px, ${y * 11}px) rotate(${x * 10}deg)`);
      set(antennaRef.current, `rotate(${-x * 10}deg)`);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="p-3 md:pr-0">
      <div
        ref={wrapRef}
        className="relative h-72 overflow-hidden rounded-xl md:h-full md:min-h-[480px]"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(34,211,238,.45), transparent 45%), linear-gradient(160deg, #0b1f4d 0%, #1d4ed8 62%, #22d3ee 135%)',
        }}
      >
        {/* twinkling dots */}
        {[
          ['12%', '14%', '0s'],
          ['78%', '10%', '0.8s'],
          ['88%', '38%', '1.4s'],
          ['8%', '46%', '0.4s'],
          ['66%', '28%', '1.1s'],
        ].map(([l, t, d], i) => (
          <span
            key={i}
            aria-hidden="true"
            className="iiq-twinkle absolute h-1.5 w-1.5 rounded-full bg-white/80"
            style={{ left: l, top: t, animationDelay: d }}
          />
        ))}

        {/* soft ground glow */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full bg-cyan/30 blur-2xl"
        />

        <div className="iiq-mascot-bob absolute inset-x-0 top-3 mx-auto h-[80%] w-full">
          <svg
            viewBox="0 0 300 340"
            className="h-full w-full"
            role="img"
            aria-label="Friendly mascot that follows your mouse"
          >
            <defs>
              <linearGradient id="iiq-m-head" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFB892" />
                <stop offset="100%" stopColor="#FF8A5B" />
              </linearGradient>
              <linearGradient id="iiq-m-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8A5B" />
                <stop offset="100%" stopColor="#F26B3A" />
              </linearGradient>
              <radialGradient id="iiq-m-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde047" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ground shadow */}
            <ellipse cx="150" cy="332" rx="74" ry="8" fill="rgba(0,0,0,.28)" />

            {/* BODY */}
            <g ref={bodyRef} style={{ transition: 'none' }}>
              <ellipse cx="118" cy="320" rx="26" ry="12" fill="#E5582A" />
              <ellipse cx="182" cy="320" rx="26" ry="12" fill="#E5582A" />
              <ellipse cx="150" cy="258" rx="72" ry="62" fill="url(#iiq-m-body)" />
              <ellipse cx="150" cy="268" rx="44" ry="38" fill="#FFD6BF" opacity="0.9" />
              <rect x="128" y="252" width="44" height="28" rx="8" fill="#0b1f4d" />
              <text
                x="150"
                y="272"
                textAnchor="middle"
                fontSize="18"
                fontWeight="800"
                fill="#67e8f9"
                fontFamily="system-ui, sans-serif"
              >
                iQ
              </text>
            </g>

            {/* HANDS (move with the mouse, in front of the body) */}
            <g ref={handLRef} style={{ transformOrigin: '84px 232px' }}>
              <ellipse cx="72" cy="254" rx="20" ry="28" transform="rotate(18 72 254)" fill="#FF8A5B" stroke="#FFB892" strokeWidth="3" />
              <ellipse cx="66" cy="262" rx="8" ry="11" transform="rotate(18 66 262)" fill="#FFD6BF" opacity="0.8" />
            </g>
            <g ref={handRRef} style={{ transformOrigin: '216px 232px' }}>
              <ellipse cx="228" cy="254" rx="20" ry="28" transform="rotate(-18 228 254)" fill="#FF8A5B" stroke="#FFB892" strokeWidth="3" />
              <ellipse cx="234" cy="262" rx="8" ry="11" transform="rotate(-18 234 262)" fill="#FFD6BF" opacity="0.8" />
            </g>

            {/* HEAD */}
            <g ref={headRef} style={{ transformOrigin: '150px 200px' }}>
              {/* antenna */}
              <g ref={antennaRef} style={{ transformOrigin: '150px 64px' }}>
                <line x1="150" y1="64" x2="150" y2="38" stroke="#E5582A" strokeWidth="5" strokeLinecap="round" />
                <circle cx="150" cy="30" r="20" fill="url(#iiq-m-glow)" />
                <circle cx="150" cy="30" r="9" fill="#fde047" />
              </g>

              {/* ears */}
              <circle cx="60" cy="140" r="17" fill="#F26B3A" />
              <circle cx="60" cy="140" r="8" fill="#FFD6BF" />
              <circle cx="240" cy="140" r="17" fill="#F26B3A" />
              <circle cx="240" cy="140" r="8" fill="#FFD6BF" />

              {/* head shell */}
              <ellipse cx="150" cy="135" rx="88" ry="74" fill="url(#iiq-m-head)" />
              <ellipse cx="118" cy="92" rx="30" ry="14" fill="#fff" opacity="0.18" />

              {/* FACE (moves a little more than the head for depth) */}
              <g ref={faceRef}>
                <rect x="88" y="98" width="124" height="70" rx="32" fill="#0b1f4d" stroke="rgba(255,255,255,.28)" strokeWidth="2" />

                {/* left eye */}
                <g className="iiq-blink" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <ellipse cx="122" cy="128" rx="16" ry="19" fill="#67e8f9" />
                  <g ref={pupilLRef}>
                    <circle cx="122" cy="130" r="8" fill="#0b1f4d" />
                    <circle cx="125" cy="126" r="3" fill="#fff" />
                  </g>
                </g>
                {/* right eye */}
                <g className="iiq-blink" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                  <ellipse cx="178" cy="128" rx="16" ry="19" fill="#67e8f9" />
                  <g ref={pupilRRef}>
                    <circle cx="178" cy="130" r="8" fill="#0b1f4d" />
                    <circle cx="181" cy="126" r="3" fill="#fff" />
                  </g>
                </g>

                {/* smile */}
                <path d="M136 154 Q150 166 164 154" fill="none" stroke="#67e8f9" strokeWidth="3.5" strokeLinecap="round" />
                {/* cheeks */}
                <circle cx="102" cy="150" r="6" fill="#FF8A5B" opacity="0.55" />
                <circle cx="198" cy="150" r="6" fill="#FF8A5B" opacity="0.55" />
              </g>
            </g>
          </svg>
        </div>

        {/* tagline */}
        <div className="absolute bottom-4 left-5 text-2xl font-extrabold uppercase leading-[1.05] tracking-tight text-white drop-shadow sm:text-3xl">
          Talk.
          <br />
          Build.
          <br />
          Grow.
        </div>
      </div>
    </div>
  );
}

/** Particle network for the top hero. Reacts to the mouse; never blocks clicks. */
function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.6,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        mouse.x = -9999;
        mouse.y = -9999;
      } else {
        mouse.x = x;
        mouse.y = y;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 180) {
          p.vx += (dxm / dm) * 0.015;
          p.vy += (dym / dm) * 0.015;
        }
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(125, 235, 255, 0.8)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(80, 180, 255, ${(1 - d / 110) * 0.3})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        if (dm < 150) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dm / 150) * 0.7})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterestedIn: '',
    companySize: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const pageHeroRef = useRef<HTMLDivElement>(null);

  // Top hero: mouse parallax + spotlight (writes CSS variables, no re-render per move)
  const onPageHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = pageHeroRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    el.style.setProperty('--mx', (px / rect.width - 0.5).toFixed(3));
    el.style.setProperty('--my', (py / rect.height - 0.5).toFixed(3));
    el.style.setProperty('--sx', `${px}px`);
    el.style.setProperty('--sy', `${py}px`);
  };
  const onPageHeroLeave = () => {
    const el = pageHeroRef.current;
    if (!el) return;
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
  };

  // Scroll-driven effects: top progress bar + gentle parallax for background orbs
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
        setScrollY(window.scrollY);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Replaceable API function — no backend is currently connected.
    // When a backend is available, replace this with a real API call.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const inputClass = (hasError?: string) =>
    `iiq-contact-form__input w-full rounded-lg border px-4 py-3 text-sm text-darktext transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:-translate-y-0.5 focus:shadow-lg ${
      hasError
        ? 'border-red-400 bg-red-50/50'
        : 'border-navy-deep/15 bg-white focus:border-blue-bright'
    }`;

  return (
    <>
      {/* Scoped animation styles (additive — no global CSS touched) */}
      <style>{`
        @keyframes iiq-float-a { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(30px,-40px,0) scale(1.1); } }
        @keyframes iiq-float-b { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-40px,30px,0) scale(1.15); } }
        @keyframes iiq-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes iiq-border-spin { to { transform: rotate(360deg); } }
        @keyframes iiq-pin-pulse { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(2.8); opacity: 0; } }
        @keyframes iiq-pin-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes iiq-scroll-cue { 0%,100% { transform: translateY(0); opacity: .6; } 50% { transform: translateY(8px); opacity: 1; } }
        @keyframes iiq-shine { from { transform: translateX(-120%) skewX(-20deg); } to { transform: translateX(220%) skewX(-20deg); } }
        @keyframes iiq-mascot-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes iiq-blink { 0%,92%,100% { transform: scaleY(1); } 95% { transform: scaleY(0.08); } }
        @keyframes iiq-twinkle { 0%,100% { opacity: .2; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.3); } }
        @keyframes iiq-cloud-drift { 0% { transform: translateX(-6%); } 50% { transform: translateX(6%); } 100% { transform: translateX(-6%); } }

        .iiq-orb-a { animation: iiq-float-a 14s ease-in-out infinite; }
        .iiq-orb-b { animation: iiq-float-b 18s ease-in-out infinite; }
        .iiq-marquee-track { animation: iiq-marquee 38s linear infinite; }
        .iiq-marquee:hover .iiq-marquee-track { animation-play-state: paused; }
        .iiq-pin-ring { animation: iiq-pin-pulse 2.2s ease-out infinite; }
        .iiq-pin-ring.delay { animation-delay: 1.1s; }
        .iiq-pin-body { animation: iiq-pin-bounce 1.8s ease-in-out infinite; }
        .iiq-scroll-cue { animation: iiq-scroll-cue 1.8s ease-in-out infinite; }
        .iiq-mascot-bob { animation: iiq-mascot-bob 4.5s ease-in-out infinite; }
        .iiq-blink { animation: iiq-blink 5s ease-in-out infinite; }
        .iiq-twinkle { animation: iiq-twinkle 3s ease-in-out infinite; }
        .iiq-cloud { animation: iiq-cloud-drift 16s ease-in-out infinite; }

        /* ---- Top hero (PageHero) animation ---- */
        @keyframes iiq-ph-in { from { opacity: 0; transform: translateY(34px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes iiq-title-glow { 0%,100% { text-shadow: 0 0 0 rgba(34,211,238,0); } 50% { text-shadow: 0 0 30px rgba(34,211,238,.5); } }
        @keyframes iiq-wave-move { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes iiq-aurora-a { 0%,100% { transform: translate3d(-10%,0,0) scale(1); } 50% { transform: translate3d(14%,12%,0) scale(1.25); } }
        @keyframes iiq-aurora-b { 0%,100% { transform: translate3d(10%,6%,0) scale(1.15); } 50% { transform: translate3d(-14%,-8%,0) scale(0.95); } }
        @keyframes iiq-ph-bob-a { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(8deg); } }
        @keyframes iiq-ph-bob-b { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(14px) rotate(-10deg); } }
        @keyframes iiq-ph-spin { to { transform: rotate(360deg); } }

        .iiq-pagehero { --mx: 0; --my: 0; --sx: 50%; --sy: 50%; }
        .iiq-pagehero h1 { opacity: 0; animation: iiq-ph-in 1s cubic-bezier(.2,.8,.2,1) .3s forwards, iiq-title-glow 4.5s ease-in-out 1.6s infinite; }
        .iiq-pagehero p { opacity: 0; animation: iiq-ph-in 1s cubic-bezier(.2,.8,.2,1) .6s forwards; }
        .iiq-pagehero nav, .iiq-pagehero ol:not(nav *) { opacity: 0; animation: iiq-ph-in .9s cubic-bezier(.2,.8,.2,1) .05s forwards; }
        .iiq-pagehero [class*="uppercase"] { opacity: 0; animation: iiq-ph-in .9s cubic-bezier(.2,.8,.2,1) .15s forwards; }

        .iiq-ph-layer { transition: transform .25s ease-out; will-change: transform; }
        .iiq-ph-d1 { transform: translate3d(calc(var(--mx) * 36px), calc(var(--my) * 30px), 0); }
        .iiq-ph-d2 { transform: translate3d(calc(var(--mx) * -54px), calc(var(--my) * -44px), 0); }
        .iiq-ph-d3 { transform: translate3d(calc(var(--mx) * 80px), calc(var(--my) * 60px), 0); }
        .iiq-ph-aurora-a { animation: iiq-aurora-a 12s ease-in-out infinite; }
        .iiq-ph-aurora-b { animation: iiq-aurora-b 15s ease-in-out infinite; }
        .iiq-ph-shape-a { animation: iiq-ph-bob-a 8s ease-in-out infinite; }
        .iiq-ph-shape-b { animation: iiq-ph-bob-b 10s ease-in-out infinite; }
        .iiq-ph-ring { animation: iiq-ph-spin 26s linear infinite; }
        .iiq-ph-spot { opacity: 0; transition: opacity .4s ease; background: radial-gradient(420px circle at var(--sx) var(--sy), rgba(34,211,238,.2), transparent 62%); }
        .iiq-pagehero:hover .iiq-ph-spot { opacity: 1; }
        .iiq-ph-wave-a { animation: iiq-wave-move 18s linear infinite; }
        .iiq-ph-wave-b { animation: iiq-wave-move 11s linear infinite; }

        .iiq-card-hover { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; position: relative; overflow: hidden; }
        .iiq-card-hover:hover { transform: translateY(-4px) translateX(2px); box-shadow: 0 18px 40px -18px rgba(10,30,80,.35); border-color: rgba(30,120,255,.35); }
        .iiq-card-hover::after { content:''; position:absolute; top:0; left:0; width:40%; height:100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); transform: translateX(-120%) skewX(-20deg); pointer-events:none; }
        .iiq-card-hover:hover::after { animation: iiq-shine .9s ease; }

        .iiq-gradient-border { position: relative; border-radius: 1rem; padding: 2px; overflow: hidden; }
        .iiq-gradient-border::before { content:''; position:absolute; inset:-60%; background: conic-gradient(from 0deg, transparent 0 60%, #22d3ee 75%, #2563eb 88%, transparent 100%); animation: iiq-border-spin 6s linear infinite; }
        .iiq-gradient-border > .iiq-gradient-inner { position: relative; border-radius: calc(1rem - 2px); background: #fff; }

        .iiq-map-frame iframe { filter: grayscale(.85) contrast(1.05) brightness(.95); transition: filter .6s ease; }
        .iiq-map-frame:hover iframe { filter: grayscale(0) contrast(1) brightness(1); }

        @media (prefers-reduced-motion: reduce) {
          .iiq-orb-a, .iiq-orb-b, .iiq-marquee-track, .iiq-pin-ring, .iiq-pin-body, .iiq-scroll-cue, .iiq-gradient-border::before,
          .iiq-mascot-bob, .iiq-blink, .iiq-twinkle, .iiq-cloud,
          .iiq-ph-aurora-a, .iiq-ph-aurora-b, .iiq-ph-shape-a, .iiq-ph-shape-b, .iiq-ph-ring, .iiq-ph-wave-a, .iiq-ph-wave-b { animation: none !important; }
          .iiq-pagehero h1, .iiq-pagehero p, .iiq-pagehero nav, .iiq-pagehero ol, .iiq-pagehero [class*="uppercase"] { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      {/* Scroll progress bar */}
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan via-blue-bright to-navy-light transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <SEO
        title="Contact Us | iiiQbets"
        description="Get in touch with iiiQbets to discuss your digital transformation goals. Email, phone, and office locations in India, USA, and Canada."
        canonical="https://iiiqbets.com/contact"
        ogTitle="Let's Talk About Your Business | iiiQbets"
        ogDescription="Reach out to discuss your digital transformation goals. Our team is ready to help."
      />

      {/* Animated wrapper around the existing PageHero (PageHero itself is untouched) */}
      <div
        ref={pageHeroRef}
        onMouseMove={onPageHeroMove}
        onMouseLeave={onPageHeroLeave}
        className="iiq-pagehero relative isolate overflow-hidden"
      >
        <PageHero
          eyebrow="Contact"
          title="Let's Talk About Your Business"
          description="Reach out to discuss your digital transformation goals. Our team is ready to help you navigate your technology journey."
          breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        />

        {/* Decorative animated layers (never block clicks) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          {/* aurora glows */}
          <div className="iiq-ph-aurora-a absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />
          <div className="iiq-ph-aurora-b absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-bright/25 blur-3xl" />

          {/* particle network reacting to the mouse */}
          <HeroParticles />

          {/* mouse spotlight */}
          <div className="iiq-ph-spot absolute inset-0" />

          {/* floating shapes with mouse parallax */}
          <div className="iiq-ph-layer iiq-ph-d1 absolute left-[7%] top-[22%]">
            <div className="iiq-ph-shape-a h-16 w-16 rounded-2xl border border-cyan/40 bg-cyan/10 backdrop-blur-sm" />
          </div>
          <div className="iiq-ph-layer iiq-ph-d2 absolute bottom-[26%] left-[44%]">
            <div className="iiq-ph-shape-b h-10 w-10 rounded-full bg-gradient-to-br from-blue-bright/60 to-cyan/60" />
          </div>
          <div className="iiq-ph-layer iiq-ph-d3 absolute right-[9%] top-[18%]">
            <div className="iiq-ph-ring h-28 w-28 rounded-full border-2 border-dashed border-white/25" />
          </div>
          <div className="iiq-ph-layer iiq-ph-d1 absolute bottom-[22%] right-[20%]">
            <div className="iiq-ph-shape-a h-14 w-14 rotate-12 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm" />
          </div>

          {/* animated wave divider into the next section */}
          <svg
            className="iiq-ph-wave-a absolute bottom-[-1px] left-0 h-10 w-[200%] sm:h-14"
            viewBox="0 0 2880 80"
            preserveAspectRatio="none"
          >
            <path d="M0 40 Q360 0 720 40 T1440 40 T2160 40 T2880 40 V80 H0 Z" fill="rgba(255,255,255,.45)" />
          </svg>
          <svg
            className="iiq-ph-wave-b absolute bottom-[-1px] left-0 h-8 w-[200%] sm:h-10"
            viewBox="0 0 2880 80"
            preserveAspectRatio="none"
          >
            <path d="M0 48 Q360 12 720 48 T1440 48 T2160 48 T2880 48 V80 H0 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center py-4">
        <a
          href="#iiq-contact-form-section"
          aria-label="Scroll to contact form"
          className="iiq-scroll-cue flex flex-col items-center text-xs font-semibold uppercase tracking-widest text-graytext"
        >
          Scroll
          <ChevronDown className="mt-1 h-5 w-5 text-blue-bright" />
        </a>
      </div>

      {/* Services marquee */}
      <div className="iiq-marquee relative overflow-hidden border-y border-navy-deep/8 bg-offwhite py-4">
        <div className="iiq-marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...serviceOptions, ...serviceOptions].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-wider text-navy-deep/70"
            >
              {s}
              <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" />
            </span>
          ))}
        </div>
      </div>

      <section id="iiq-contact-form-section" className="relative overflow-hidden py-20 sm:py-28">
        {/* Soft sky wash + drifting clouds behind the card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(186,224,255,.55) 0%, rgba(255,255,255,0) 65%)' }}
        />
        <div aria-hidden="true" className="iiq-cloud pointer-events-none absolute left-[6%] top-16 h-24 w-64 rounded-full bg-white/70 blur-2xl" />
        <div
          aria-hidden="true"
          className="iiq-cloud pointer-events-none absolute right-[8%] top-40 h-28 w-72 rounded-full bg-white/60 blur-2xl"
          style={{ animationDelay: '-6s' }}
        />

        {/* Parallax background orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan/20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <div className="iiq-orb-a h-full w-full rounded-full bg-cyan/30" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-bright/20 blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.06}px)` }}
        >
          <div className="iiq-orb-b h-full w-full rounded-full bg-blue-bright/30" />
        </div>

        <div className="iiq-container relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="iiq-gradient-border">
                  {/* Split card: mascot panel (left) + form (right) */}
                  <div className="iiq-gradient-inner overflow-hidden rounded-2xl border border-navy-deep/8 bg-white md:grid md:grid-cols-[260px_1fr]">
                    <MouseMascot />

                    <div className="p-6 sm:p-8">
                      {status === 'success' ? (
                        <div className="flex flex-col items-center py-12 text-center">
                          <CheckCircle className="h-16 w-16 text-green-500" />
                          <h2 className="mt-6 text-2xl font-bold text-navy-deep">Thank You!</h2>
                          <p className="mt-3 max-w-md text-sm leading-relaxed text-graytext">
                            Your enquiry has been received. Our team will get back to you within 24 hours
                            to discuss your project.
                          </p>
                          <button
                            onClick={() => {
                              setStatus('idle');
                              setFormData({
                                fullName: '',
                                companyName: '',
                                email: '',
                                phone: '',
                                serviceInterestedIn: '',
                                companySize: '',
                                message: '',
                              });
                            }}
                            className="mt-6 rounded-lg border border-navy-deep/15 px-6 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-offwhite"
                          >
                            Send Another Enquiry
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="iiq-contact-form space-y-5" noValidate>
                          <h2 className="text-xl font-bold text-navy-deep">Send Us a Message</h2>

                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                              <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-darktext">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={inputClass(errors.fullName)}
                                placeholder="John Doe"
                                aria-required="true"
                                aria-invalid={!!errors.fullName}
                              />
                              {errors.fullName && (
                                <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                              )}
                            </div>

                            <div>
                              <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium text-darktext">
                                Company Name
                              </label>
                              <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={inputClass()}
                                placeholder="Your Company"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-darktext">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={inputClass(errors.email)}
                                placeholder="john@company.com"
                                aria-required="true"
                                aria-invalid={!!errors.email}
                              />
                              {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                              )}
                            </div>

                            <div>
                              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-darktext">
                                Phone Number
                              </label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className={inputClass()}
                                placeholder="+91 00000 00000"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                              <label htmlFor="serviceInterestedIn" className="mb-1.5 block text-sm font-medium text-darktext">
                                Service Interested In
                              </label>
                              <select
                                id="serviceInterestedIn"
                                name="serviceInterestedIn"
                                value={formData.serviceInterestedIn}
                                onChange={handleChange}
                                className={inputClass()}
                              >
                                <option value="">Select a service</option>
                                {serviceOptions.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label htmlFor="companySize" className="mb-1.5 block text-sm font-medium text-darktext">
                                Company Size
                              </label>
                              <select
                                id="companySize"
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleChange}
                                className={inputClass()}
                              >
                                <option value="">Select size</option>
                                {companySizes.map((s) => (
                                  <option key={s} value={s}>{s} employees</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-darktext">
                              Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              className={inputClass(errors.message)}
                              placeholder="Tell us about your project or requirements..."
                              aria-required="true"
                              aria-invalid={!!errors.message}
                            />
                            {errors.message && (
                              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                            )}
                          </div>

                          <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-navy-light px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-bright hover:shadow-lg hover:shadow-blue-bright/30 active:scale-[0.99] disabled:opacity-60"
                          >
                            {status === 'loading' ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Enquiry
                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </button>

                          <p className="text-xs text-graytext">
                            By submitting this form, you agree to be contacted by iiiQbets regarding
                            your enquiry. We respect your privacy and will not share your information.
                          </p>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-28">
                {/* Quick contact */}
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Reveal key={info.label}>
                      <div className="iiq-card-hover flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-5">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                          <info.icon className="h-5 w-5 text-blue-bright" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-graytext">{info.label}</div>
                          <a href={info.href} className="text-sm font-medium text-navy-deep hover:text-blue-bright whitespace-pre-line">
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Legal name */}
                <Reveal delay={0.1}>
                  <div className="iiq-card-hover rounded-xl border border-navy-deep/8 bg-offwhite p-5">
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-blue-bright" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-graytext">Legal Name</div>
                        <div className="text-sm font-medium text-navy-deep">KRIKA MKB Corporation Private Limited</div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Office locations */}
                <div className="space-y-4">
                  {officeLocations.map((office, i) => (
                    <Reveal key={office.title} delay={0.15 + i * 0.05}>
                      <div className="iiq-card-hover flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-5">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                          <MapPin className="h-5 w-5 text-blue-bright" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-graytext">{office.title}</div>
                          <p className="text-sm text-darktext">{office.address}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bengaluru map section */}
      <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28" aria-labelledby="iiq-map-heading">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(34,211,238,.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(37,99,235,.4), transparent 45%)',
          }}
        />
        <div className="iiq-container relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Find Us</div>
              <h2 id="iiq-map-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Visit Our Bengaluru Office
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Drop by for a coffee and a conversation about your digital transformation journey.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-12">
            <Reveal delay={0.1}>
              <div className="iiq-map-frame relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40">
                <iframe
                  title="iiiQbets Bengaluru office location"
                  src={BENGALURU_EMBED_URL}
                  className="h-[380px] w-full sm:h-[480px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Animated pin badge */}
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-3 rounded-full bg-navy-deep/90 py-2 pl-3 pr-4 text-xs font-semibold text-white backdrop-blur">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="iiq-pin-ring absolute inset-0 rounded-full bg-cyan/60" />
                    <span className="iiq-pin-ring delay absolute inset-0 rounded-full bg-cyan/60" />
                    <span className="iiq-pin-body relative">
                      <MapPin className="h-5 w-5 text-cyan" />
                    </span>
                  </span>
                  Bengaluru, India
                </div>
              </div>
            </Reveal>

            {/* Floating address card */}
            <Reveal delay={0.2}>
              <div className="relative z-10 mx-auto -mt-12 w-[92%] max-w-xl rounded-2xl border border-navy-deep/8 bg-white p-6 shadow-xl sm:-mt-16 sm:p-8 lg:absolute lg:-bottom-10 lg:right-10 lg:mt-0 lg:w-[380px]">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                    <MapPin className="h-5 w-5 text-blue-bright" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-graytext">Head Office · India</div>
                    <p className="mt-1 text-sm font-semibold text-navy-deep">KRIKA MKB Corporation Private Limited</p>
                    <p className="mt-1 text-sm leading-relaxed text-darktext">
                      Skyline Beverly Park, D 402, Amruthahalli Main Road, Amruthahalli, Bangalore – 560092
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={BENGALURU_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-lg bg-navy-light px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-bright hover:shadow-lg hover:shadow-blue-bright/30"
                  >
                    <Navigation className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    Get Directions
                  </a>
                  <a
                    href={BENGALURU_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-navy-deep/15 px-4 py-2.5 text-xs font-semibold text-navy-deep transition-colors hover:bg-offwhite"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Spacer so the floating card doesn't collide with the section edge on large screens */}
          <div className="hidden h-10 lg:block" />
        </div>
      </section>
    </>
  );
}