import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

const impactAreas = [
  { icon: 'Zap', title: 'Automate', description: 'Reduce repetitive manual activities and streamline workflows.' },
  { icon: 'Link2', title: 'Integrate', description: 'Connect applications, systems, data, and teams.' },
  { icon: 'BarChart3', title: 'Analyze', description: 'Convert business data into actionable insights.' },
  { icon: 'Gauge', title: 'Optimize', description: 'Improve productivity and operational efficiency.' },
  { icon: 'TrendingUp', title: 'Scale', description: 'Build technology infrastructure that can grow with your business.' },
  { icon: 'Lightbulb', title: 'Innovate', description: 'Use modern technologies to create new opportunities and competitive advantages.' },
];

export default function BusinessImpact() {
  return (
    <section className="iiq-business-impact relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="iiq-container relative z-10">
        <SectionHeading
          eyebrow="Business Impact"
          title={<>Transform the Way <span className="text-cyan">Your Business Works</span></>}
          subtitle="We focus on achieving measurable business outcomes rather than simply delivering technology."
          variant="light"
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {impactAreas.map((area) => {
            const IconComponent = (Icons[area.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
            return (
              <motion.div
                key={area.title}
                variants={staggerItem}
                className="iiq-impact-card group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan/30 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 transition-colors group-hover:bg-cyan/20">
                  <IconComponent className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{area.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
