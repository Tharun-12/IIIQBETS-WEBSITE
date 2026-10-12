import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';

const highlights = [
  'Process re-engineering and optimization',
  'Enterprise application development',
  'Cloud migration and managed services',
  'Data analytics and business intelligence',
  'Digital infrastructure and e-commerce',
  'Digital marketing and brand building',
];

export default function AboutPreview() {
  return (
    <section className="iiq-about relative overflow-hidden py-20 sm:py-28">
      <div className="iiq-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business professionals collaborating in a modern conference room"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-navy-deep/10 bg-white p-5 shadow-xl sm:block">
              <div className="text-2xl font-extrabold text-navy-deep">20+</div>
              <div className="text-xs font-medium text-graytext">Years of Experience</div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <SectionHeading
              eyebrow="About iiiQbets"
              title={<>Your Partner for <span className="text-blue-bright">Digital Transformation</span></>}
              subtitle="At iiiQbets, we help organizations transform the way they operate, engage with customers, manage data, and grow their business. We combine technology expertise, business understanding, and industry experience to deliver practical digital solutions."
            />

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-lg border border-navy-deep/5 bg-offwhite px-4 py-3 transition-colors hover:border-blue-bright/30">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-bright/10 text-xs font-bold text-blue-bright">
                      ✓
                    </span>
                    <span className="text-sm text-darktext">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/about" icon>
                  Learn More About Us
                </Button>
                <Button to="/contact" variant="secondary">
                  Talk to Our Experts
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
