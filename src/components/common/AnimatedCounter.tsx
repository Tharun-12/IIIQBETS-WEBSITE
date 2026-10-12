import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  const numericPart = value.replace(/[^0-9.]/g, '');
  const target = parseFloat(numericPart) || 0;
  const isNumeric = numericPart.length > 0 && /^\d/.test(value);

  useEffect(() => {
    if (!inView || !isNumeric) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${target}${suffix}`);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [inView, isNumeric, target, suffix, duration, value]);

  if (!isNumeric) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}
    </span>
  );
}
