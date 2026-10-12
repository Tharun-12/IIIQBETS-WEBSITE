import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const floatingLabels = [
  { text: 'AI & Automation', top: '12%', left: '8%', delay: 0 },
  { text: 'Cloud', top: '22%', right: '6%', delay: 0.5 },
  { text: 'Data Analytics', top: '45%', left: '4%', delay: 1 },
  { text: 'ERP', top: '58%', right: '10%', delay: 1.5 },
  { text: 'CRM', top: '72%', left: '12%', delay: 2 },
  { text: 'Business Intelligence', top: '82%', right: '8%', delay: 2.5 },
];

const flowSteps = ['People', 'Processes', 'Applications', 'Data', 'Business Intelligence', 'Business Growth'];

export default function Hero() {
  return (
    <section className="iiq-hero relative min-h-screen overflow-hidden iiq-gradient-primary pt-24">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Network nodes SVG */}
      <NetworkBackground />

      {/* Decorative glow */}
      <div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1D8FE1 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #35C2E6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="iiq-container relative z-10 grid min-h-screen grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="iiq-hero__content"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Digital Transformation • Technology • Business Growth
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-hero font-extrabold leading-[1.05] text-white"
          >
            Powering Digital Transformation.
            <br />
            <span className="iiq-gradient-text">Driving Business Growth.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Transform your business with intelligent technology solutions, enterprise applications,
            data analytics, cloud services, and digital infrastructure.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/50"
          >
            With decades of combined technology and domain experience, iiiQbets helps enterprises,
            SMEs, and growing businesses become more technology-driven, data-centric, and
            operationally efficient.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-cyan/20"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/5"
            >
              Start Your Digital Transformation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-white/40">
            {['20+ Years of Experience', 'Digital Transformation', 'Technology Solutions', 'Business Intelligence'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="iiq-hero__visual relative hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#35C2E6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#35C2E6" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Network lines */}
        <g stroke="#1D8FE1" strokeWidth="0.5" opacity="0.15">
          <line x1="10%" y1="20%" x2="40%" y2="50%" />
          <line x1="40%" y1="50%" x2="70%" y2="30%" />
          <line x1="70%" y1="30%" x2="90%" y2="60%" />
          <line x1="40%" y1="50%" x2="60%" y2="80%" />
          <line x1="60%" y1="80%" x2="85%" y2="75%" />
          <line x1="10%" y1="20%" x2="25%" y2="75%" />
          <line x1="25%" y1="75%" x2="40%" y2="50%" />
        </g>
        {/* Nodes */}
        <g fill="#35C2E6" opacity="0.3">
          <circle cx="10%" cy="20%" r="3" />
          <circle cx="40%" cy="50%" r="4" />
          <circle cx="70%" cy="30%" r="3" />
          <circle cx="90%" cy="60%" r="3" />
          <circle cx="60%" cy="80%" r="3" />
          <circle cx="25%" cy="75%" r="3" />
          <circle cx="85%" cy="75%" r="3" />
        </g>
        {/* Glow on some nodes */}
        <circle cx="40%" cy="50%" r="20" fill="url(#nodeGlow)" opacity="0.4" />
        <circle cx="70%" cy="30%" r="15" fill="url(#nodeGlow)" opacity="0.3" />
      </svg>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Main visual card */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />

      {/* Inner content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8">
        {/* Flow diagram */}
        <div className="w-full space-y-3">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-bold text-cyan">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="text-sm font-medium text-white/90">{step}</span>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="absolute left-14 -mt-1 h-6 w-px bg-gradient-to-b from-cyan/40 to-transparent" style={{ marginTop: 28 }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating labels */}
      {floatingLabels.map((label) => (
        <motion.div
          key={label.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + label.delay * 0.3, duration: 0.6 }}
          className="absolute rounded-lg border border-white/10 bg-navy-deep/80 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
          style={{
            top: label.top,
            left: label.left,
            right: label.right,
          }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan" />
          {label.text}
        </motion.div>
      ))}
    </div>
  );
}
