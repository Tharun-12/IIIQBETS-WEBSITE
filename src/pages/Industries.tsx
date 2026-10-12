import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { industries } from '@/data/industries';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries | iiiQbets"
        description="iiiQbets serves diverse industries — IT, retail, finance, gaming, manufacturing, professional services, SMEs, and enterprise organizations with tailored technology solutions."
        canonical="https://iiiqbets.com/industries"
        ogTitle="Industries We Serve | iiiQbets"
        ogDescription="Our understanding of different industries helps us design solutions that are practical, relevant, and scalable."
      />

      <PageHero
        eyebrow="Industries"
        title="Serving Diverse Industries"
        description="Our understanding of different industries helps us design solutions that are practical, relevant, and scalable. From IT and retail to manufacturing and finance, we bring domain expertise to every engagement."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Industry Expertise"
            title={<>Tailored Solutions for <span className="text-blue-bright">Every Sector</span></>}
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry) => {
              const IconComponent = (Icons[industry.icon as keyof typeof Icons] || Icons.Building2) as Icons.LucideIcon;
              return (
                <motion.div key={industry.slug} variants={staggerItem}>
                  <Link
                    to="/contact"
                    className="iiq-industry-card group flex h-full items-start gap-4 rounded-xl border border-navy-deep/8 p-6 transition-all duration-300 hover:border-blue-bright/40 hover:bg-offwhite hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-deep/5 transition-all duration-300 group-hover:bg-blue-bright/10 group-hover:-translate-y-0.5">
                      <IconComponent className="h-6 w-6 text-navy-light transition-colors group-hover:text-blue-bright" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-navy-deep">{industry.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-graytext">{industry.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-graytext opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2 text-blue-bright" />
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
