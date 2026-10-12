import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { viewportOnce } from '@/lib/animations';

export default function FinalCTA() {
  return (
    <section className="iiq-final-cta relative overflow-hidden iiq-gradient-primary py-20 sm:py-28">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #35C2E6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="iiq-container relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
        >
          Get Started Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.05 }}
          className="mx-auto max-w-3xl text-section-heading font-extrabold leading-tight text-white"
        >
          Ready to Start Your Digital Transformation Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Whether you are looking to modernize your existing systems, build a new digital platform,
          automate business processes, migrate to the cloud, or unlock the value of your data,
          iiiQbets can help.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className="mt-8 font-display text-2xl font-extrabold text-cyan sm:text-3xl"
        >
          Let's Build Your Digital Future Together.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-cyan/20"
          >
            Talk to Our Experts
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/5"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
