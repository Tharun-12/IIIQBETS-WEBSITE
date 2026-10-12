import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { techCategories, allTechnologies } from '@/data/technologies';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function Technology() {
  return (
    <>
      <SEO
        title="Technology | iiiQbets"
        description="Explore the technology stack we work with — web development, mobile, cloud computing, data analytics, BI, AI & ML, IoT, e-commerce, and enterprise applications."
        canonical="https://iiiqbets.com/technology"
        ogTitle="Technology That Enables Innovation | iiiQbets"
        ogDescription="We work with a broad ecosystem of modern technologies to build reliable, scalable, and future-ready solutions."
      />

      <PageHero
        eyebrow="Technology"
        title="Technology That Enables Innovation"
        description="We work with a broad ecosystem of modern technologies to build solutions that are reliable, scalable, and future-ready. From cloud and data to AI and enterprise applications, we bring the right tools to every challenge."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Technology' }]}
      />

      {/* Categories */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Our Stack"
            title={<>Technology <span className="text-blue-bright">Categories</span></>}
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {techCategories.map((cat) => {
              const IconComponent = (Icons[cat.icon as keyof typeof Icons] || Icons.Cpu) as Icons.LucideIcon;
              return (
                <motion.div
                  key={cat.name}
                  variants={staggerItem}
                  className="iiq-tech-card group rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep/5 transition-colors group-hover:bg-blue-bright/10">
                    <IconComponent className="h-6 w-6 text-navy-light transition-colors group-hover:text-blue-bright" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-deep">{cat.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-navy-deep/10 bg-offwhite px-3 py-1.5 text-xs font-medium text-darktext transition-colors hover:border-blue-bright/40 hover:text-blue-bright"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technology badges */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Tools & Platforms"
            title={<>Technologies We <span className="text-blue-bright">Work With</span></>}
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {allTechnologies.map((tech) => (
              <div
                key={tech}
                className="iiq-tech-badge flex items-center gap-3 rounded-xl border border-navy-deep/10 bg-white px-6 py-4 transition-all duration-300 hover:border-blue-bright/40 hover:shadow-md"
              >
                <span className="h-2 w-2 rounded-full bg-cyan" />
                <span className="text-base font-semibold text-navy-deep">{tech}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" icon>Discuss Your Technology Needs</Button>
          </div>
        </div>
      </section>
    </>
  );
}
