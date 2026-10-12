import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { viewportOnce } from '@/lib/animations';

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function Reveal({
  children,
  variants,
  delay = 0,
  className = '',
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  const baseVariants = variants || {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay },
    },
  };

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={baseVariants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
