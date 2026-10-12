import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import { viewportOnce } from '@/lib/animations';

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: 'Multiple', label: 'Industries Served' },
  { value: 'Enterprise', label: 'Technology Solutions' },
  { value: 'End-to-End', label: 'Digital Transformation' },
];

export default function StatsStrip() {
  return (
    <section className="iiq-stats-strip relative border-b border-navy-deep/10 bg-offwhite py-12">
      <div className="iiq-container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="iiq-stats-strip__item text-center"
            >
              <div className="text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-graytext sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
