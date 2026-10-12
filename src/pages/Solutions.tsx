import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const solutions = [
  { icon: 'RefreshCw', title: 'Digital Transformation', description: 'End-to-end transformation strategy and execution across your organization.', color: 'from-blue-bright to-cyan' },
  { icon: 'Zap', title: 'Business Automation', description: 'Automate repetitive workflows and free your team to focus on higher-value work.', color: 'from-navy-light to-blue-bright' },
  { icon: 'BarChart3', title: 'Data & Analytics', description: 'Turn raw data into actionable insights with modern analytics and BI platforms.', color: 'from-blue-bright to-navy-light' },
  { icon: 'Cloud', title: 'Cloud Transformation', description: 'Migrate, modernize, and optimize your infrastructure for the cloud era.', color: 'from-cyan to-blue-bright' },
  { icon: 'LayoutDashboard', title: 'Enterprise Applications', description: 'ERP, CRM, POS, and SFA systems that integrate seamlessly with your operations.', color: 'from-navy-light to-cyan' },
  { icon: 'ShoppingCart', title: 'Digital Commerce', description: 'Build scalable e-commerce platforms with integrated payments and inventory.', color: 'from-blue-bright to-navy-deep' },
  { icon: 'HeartHandshake', title: 'Customer Experience', description: 'Create connected, personalized experiences across every customer touchpoint.', color: 'from-cyan to-navy-light' },
  { icon: 'Wrench', title: 'Technology Modernization', description: 'Modernize legacy systems and embrace contemporary, scalable architecture.', color: 'from-navy-deep to-blue-bright' },
];

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions | iiiQbets"
        description="Digital transformation, business automation, data & analytics, cloud transformation, enterprise applications, digital commerce, customer experience, and technology modernization solutions."
        canonical="https://iiiqbets.com/solutions"
        ogTitle="Digital Transformation Solutions | iiiQbets"
        ogDescription="Comprehensive technology solutions that help businesses automate, integrate, analyze, optimize, and scale."
      />

      <PageHero
        eyebrow="Solutions"
        title="Solutions That Drive Business Outcomes"
        description="We design and deliver integrated technology solutions that address real business challenges — from automation and analytics to cloud transformation and enterprise applications."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Our Solutions"
            title={<>Eight Solutions. One <span className="text-blue-bright">Connected Ecosystem.</span></>}
            subtitle="Each solution is designed to integrate with your existing systems and scale with your business."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {solutions.map((sol) => {
              const IconComponent = (Icons[sol.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
              return (
                <motion.div
                  key={sol.title}
                  variants={staggerItem}
                  className="iiq-solution-card group relative overflow-hidden rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-xl hover:shadow-navy-deep/5"
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${sol.color} transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-deep">{sol.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graytext">{sol.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Visual storytelling section */}
      <section className="bg-navy-deep py-20 sm:py-28">
        <div className="iiq-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Integrated Approach"
                title={<>Connected Solutions for a <span className="text-cyan">Connected Business</span></>}
                variant="light"
                subtitle="We don't deliver isolated tools. We build connected ecosystems where data, processes, and applications work together seamlessly."
              />
              <div className="mt-8 space-y-4">
                {['People + Processes + Applications + Data', 'Strategy + Technology + Implementation + Support', 'Automation + Integration + Analytics + Optimization'].map((item) => (
                  <Reveal key={item}>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                      <span className="h-2 w-2 rounded-full bg-cyan" />
                      <span className="text-sm font-medium text-white/80">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Data analytics dashboard visualization"
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container text-center">
          <SectionHeading
            eyebrow="Get Started"
            title={<>Find the Right <span className="text-blue-bright">Solution</span> for Your Business</>}
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" icon>Talk to Our Experts</Button>
            <Button to="/services" variant="secondary">Explore Services</Button>
          </div>
        </div>
      </section>
    </>
  );
}
