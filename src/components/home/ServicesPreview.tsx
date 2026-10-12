import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { services } from '@/data/services';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function ServicesPreview() {
  return (
    <section className="iiq-services-preview bg-offwhite py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Complete Digital Transformation <span className="text-blue-bright">Services</span></>}
          subtitle="From strategy to implementation, iiiQbets provides a broad range of technology services designed to help businesses modernize, automate, and scale."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
            return (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link
                  to={`/services/${service.slug}`}
                  className="iiq-service-card group flex h-full flex-col rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-xl hover:shadow-navy-deep/5"
                >
                  <div className="iiq-service-card__icon mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep/5 transition-colors group-hover:bg-blue-bright/10">
                    <IconComponent className="h-6 w-6 text-navy-light transition-colors group-hover:text-blue-bright" />
                  </div>
                  <h3 className="iiq-service-card__title text-lg font-bold text-navy-deep">
                    {service.shortTitle}
                  </h3>
                  <p className="iiq-service-card__content mt-3 flex-1 text-sm leading-relaxed text-graytext">
                    {service.tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-bright">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-lg border border-navy-deep/15 px-6 py-3 text-sm font-semibold text-navy-deep transition-all duration-300 hover:border-navy-light hover:bg-navy-deep hover:text-white"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
