import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { techCategories, allTechnologies } from '@/data/technologies';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TechnologyPreview() {
  return (
    <section className="iiq-tech-preview bg-offwhite py-20 sm:py-28">
      <div className="iiq-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Technology"
              title={<>Technology That Enables <span className="text-blue-bright">Innovation</span></>}
              subtitle="We work with a broad ecosystem of modern technologies to build solutions that are reliable, scalable, and future-ready."
            />
            <Link
              to="/technology"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-bright"
            >
              Explore Our Technology Stack
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: tech badges */}
          <div className="lg:col-span-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {techCategories.slice(0, 6).map((cat) => {
                const IconComponent = (Icons[cat.icon as keyof typeof Icons] || Icons.Cpu) as Icons.LucideIcon;
                return (
                  <motion.div
                    key={cat.name}
                    variants={staggerItem}
                    className="iiq-tech-card group rounded-xl border border-navy-deep/8 bg-white p-5 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
                  >
                    <IconComponent className="h-6 w-6 text-navy-light transition-colors group-hover:text-blue-bright" />
                    <h3 className="mt-3 text-sm font-bold text-navy-deep">{cat.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {cat.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded bg-offwhite px-2 py-0.5 text-xs text-graytext">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Technology badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="iiq-tech-badge rounded-lg border border-navy-deep/10 bg-white px-3 py-1.5 text-xs font-medium text-darktext transition-colors hover:border-blue-bright/40 hover:text-blue-bright"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
