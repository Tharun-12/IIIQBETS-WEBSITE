import Reveal from '@/components/common/Reveal';
import Button from '@/components/common/Button';

export default function DTMessage() {
  return (
    <section className="iiq-dt-message relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="iiq-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Content */}
          <div>
            <Reveal>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-bright">
                Digital Transformation
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-section-heading font-extrabold leading-tight text-navy-deep">
                The Future Belongs to <span className="text-blue-bright">Digital Businesses</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-graytext sm:text-lg">
                Businesses today need more than individual software tools. They need an integrated
                technology ecosystem that connects people, processes, applications, and data.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-graytext">
                iiiQbets helps organizations move from disconnected systems and manual processes
                toward a connected, intelligent, and efficient digital business environment.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-8 border-l-2 border-cyan pl-6">
                <p className="font-display text-xl font-bold text-navy-deep sm:text-2xl">
                  One strategy. Multiple technologies. One transformation partner.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8">
                <Button to="/solutions" icon>
                  Explore Our Solutions
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Visual */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3862094/pexels-photo-3862094.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Diverse team collaborating on digital transformation in a modern office"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
