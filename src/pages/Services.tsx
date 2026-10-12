import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { services } from '@/data/services';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <>
      <SEO
        title="Services | iiiQbets"
        description="Complete digital transformation services — business process reengineering, digital infrastructure, digital marketing, data analytics, cloud services, and application development."
        canonical="https://iiiqbets.com/services"
        ogTitle="Complete Digital Transformation Services | iiiQbets"
        ogDescription="From strategy to implementation, iiiQbets provides technology services designed to help businesses modernize, automate, and scale."
      />

      <PageHero
        eyebrow="Our Services"
        title="Complete Digital Transformation Services"
        description="From strategy to implementation, iiiQbets provides a broad range of technology services designed to help businesses modernize, automate, and scale."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Six Services. One <span className="text-blue-bright">Transformation Partner.</span></>}
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {services.map((service) => {
              const IconComponent = (Icons[service.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
              return (
                <motion.div key={service.slug} variants={staggerItem}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="iiq-service-card group flex h-full flex-col rounded-2xl border border-navy-deep/8 bg-white p-8 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-xl hover:shadow-navy-deep/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-deep/5 transition-colors group-hover:bg-blue-bright/10">
                        <IconComponent className="h-7 w-7 text-navy-light transition-colors group-hover:text-blue-bright" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-graytext transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-bright" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-navy-deep">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-graytext">{service.tagline}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <span key={cap} className="rounded bg-offwhite px-2.5 py-1 text-xs text-graytext">
                          {cap}
                        </span>
                      ))}
                      <span className="rounded bg-offwhite px-2.5 py-1 text-xs text-graytext">
                        +{service.capabilities.length - 3} more
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
