import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { viewportOnce } from '@/lib/animations';

const steps = [
  { step: '01', title: 'Understand', description: 'We start by deeply understanding your business, challenges, and goals.' },
  { step: '02', title: 'Analyze', description: 'We analyze your current systems, processes, and data to identify opportunities.' },
  { step: '03', title: 'Strategize', description: 'We develop a practical transformation strategy with clear priorities.' },
  { step: '04', title: 'Build', description: 'We design and implement solutions using modern technology and best practices.' },
  { step: '05', title: 'Transform', description: 'We drive adoption and help your team embrace new ways of working.' },
  { step: '06', title: 'Support & Improve', description: 'We provide ongoing support and continuously refine for better results.' },
];

export default function ProcessTimeline() {
  return (
    <section className="iiq-process bg-offwhite py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="How We Work"
          title={<>A Structured Path to <span className="text-blue-bright">Digital Transformation</span></>}
          subtitle="Our proven six-step approach ensures every engagement delivers measurable business value."
          align="center"
        />

        {/* Desktop horizontal */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-blue-bright/10 via-blue-bright/30 to-blue-bright/10" />
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-bright/30 bg-white">
                    <span className="font-display text-lg font-extrabold text-navy-light">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-deep">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-graytext">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-6 border-l-2 border-blue-bright/20 pl-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-bright/30 bg-white">
                  <span className="text-xs font-extrabold text-navy-light">{step.step}</span>
                </div>
                <h3 className="text-base font-bold text-navy-deep">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-graytext">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
