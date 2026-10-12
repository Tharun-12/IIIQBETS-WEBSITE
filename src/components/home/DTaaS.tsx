import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { viewportOnce } from '@/lib/animations';

const journey = [
  { step: '01', title: 'Evaluate', description: 'Assess your current technology landscape and identify transformation opportunities.' },
  { step: '02', title: 'Recommend', description: 'Develop a practical roadmap with clear priorities and measurable outcomes.' },
  { step: '03', title: 'Build', description: 'Design and implement solutions using modern, scalable technology.' },
  { step: '04', title: 'Promote', description: 'Drive adoption through training, communication, and change management.' },
  { step: '05', title: 'Analyze', description: 'Monitor performance and gather insights to continuously improve.' },
  { step: '06', title: 'Manage', description: 'Provide ongoing managed services to keep your technology running optimally.' },
];

export default function DTaaS() {
  return (
    <section className="iiq-dtaas relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Glow */}
      <div
        className="absolute right-0 top-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #35C2E6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="iiq-container relative z-10">
        <SectionHeading
          eyebrow="Digital Transformation as a Service"
          title={<>Your Technology Team. <span className="text-cyan">Without the Complexity.</span></>}
          subtitle="iiiQbets offers a Digital Transformation as a Service model designed to provide businesses with ongoing technology expertise at a predictable monthly cost."
          variant="light"
          align="center"
        />

        {/* Journey - horizontal on desktop */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-cyan/20 via-cyan/40 to-cyan/20" />
            <div className="grid grid-cols-6 gap-4">
              {journey.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-cyan/30 bg-navy-deep">
                    <span className="font-display text-2xl font-extrabold text-cyan">{item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey - vertical on mobile */}
        <div className="mt-12 lg:hidden">
          <div className="space-y-6">
            {journey.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-navy-deep">
                  <span className="font-display text-xl font-extrabold text-cyan">{item.step}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
