import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { industries } from '@/data/industries';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function IndustriesPreview() {
  return (
    <section className="iiq-industries-preview bg-white py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="Industries"
          title={<>Serving <span className="text-blue-bright">Diverse Industries</span></>}
          subtitle="Our understanding of different industries helps us design solutions that are practical, relevant, and scalable."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => {
            const IconComponent = (Icons[industry.icon as keyof typeof Icons] || Icons.Building2) as Icons.LucideIcon;
            return (
              <motion.div key={industry.slug} variants={staggerItem}>
                <Link
                  to="/industries"
                  className="iiq-industry-card group flex h-full items-start gap-4 rounded-xl border border-navy-deep/8 p-5 transition-all duration-300 hover:border-blue-bright/40 hover:bg-offwhite"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-deep/5 transition-all duration-300 group-hover:bg-blue-bright/10 group-hover:translate-y-[-2px]">
                    <IconComponent className="h-5 w-5 text-navy-light transition-colors group-hover:text-blue-bright" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-navy-deep">{industry.name}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-graytext line-clamp-2">
                      {industry.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-graytext opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2 text-blue-bright" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
