// src/components/common/FAQItem.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="iiq-faq-item overflow-hidden rounded-xl border border-navy-deep/10 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-navy-deep">{question}</span>
        {open ? (
          <Minus className="h-5 w-5 flex-shrink-0 text-blue-bright" />
        ) : (
          <Plus className="h-5 w-5 flex-shrink-0 text-graytext" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-graytext">{answer}</p>
      </motion.div>
    </div>
  );
}