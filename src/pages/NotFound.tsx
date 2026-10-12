import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { Home, Mail } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | iiiQbets"
        description="The page you're looking for may have moved or no longer exists."
        canonical="https://iiiqbets.com/404"
      />

      <section className="iiq-gradient-primary relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
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
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #35C2E6 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="iiq-container relative z-10 text-center">
          <Reveal>
            <span className="font-display text-8xl font-extrabold text-cyan/30 sm:text-9xl">404</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Page Not Found</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
              The page you're looking for may have moved or no longer exists.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/70 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
