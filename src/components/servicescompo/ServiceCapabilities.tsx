// src/components/services/ServiceCapabilities.tsx
import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

interface Props {
  capabilities: string[];
}

export default function ServiceCapabilities({ capabilities }: Props) {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              What We <span className="text-blue-bright">Deliver</span>
            </>
          }
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl border border-navy-deep/8 bg-white p-4 transition-colors hover:border-blue-bright/30"
            >
              <Check className="h-5 w-5 flex-shrink-0 text-blue-bright" />
              <span className="text-sm font-medium text-darktext">{cap}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}