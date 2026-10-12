import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const testimonials = [
  {
    quote: 'Very thoughtful and articulate communication. Clear milestones, deadlines and fast work.',
    author: 'Chief Transformation Leader, Alphabets',
  },
  {
    quote: 'Very professional, highly reliable team with great technical skills. They made our transformational journey look easy.',
    author: 'IT Chief, Q Pro Technologies',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section className="iiq-testimonials bg-offwhite py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted by Businesses. <span className="text-blue-bright">Driven by Results.</span></>}
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-navy-deep/8 bg-white p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-navy-deep/5" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <blockquote className="text-xl font-medium leading-relaxed text-navy-deep sm:text-2xl">
                  "{testimonials[current].quote}"
                </blockquote>
                <cite className="mt-6 block text-sm font-semibold not-italic text-blue-bright">
                  — {testimonials[current].author}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/15 text-navy-deep transition-colors hover:border-navy-light hover:bg-navy-deep hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-blue-bright' : 'w-2 bg-navy-deep/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/15 text-navy-deep transition-colors hover:border-navy-light hover:bg-navy-deep hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
