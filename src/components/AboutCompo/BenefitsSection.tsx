
import { useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Improved Cost, Service & Speed",
  "Elimination of Process Waste",
  "Increased Standardization",
  "Reduced Operating Costs",
  "Increased Accuracy",
  "Elimination of Process Bottlenecks",
];

export default function BenefitsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate items to create a seamless scrolling row
  const scrollingBenefits = [...benefits, ...benefits];

  return (
    <section className="relative overflow-hidden border-y border-slate-800/60 bg-[#030617] py-12 text-white sm:py-14">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,116,139,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.09) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1520px] px-5 sm:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-xl font-bold tracking-tight sm:text-2xl md:mb-9 md:text-3xl"
        >
          Benefits of Business Process Reengineering{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            . Better Results.
          </span>
        </motion.h2>

        {/* Horizontal scrolling benefits */}
        <div
          ref={scrollRef}
          className="group relative overflow-hidden"
          aria-label="Business process reengineering benefits"
        >
          <div className="flex w-max animate-benefits-scroll gap-4 hover:[animation-play-state:paused]">
            {scrollingBenefits.map((benefit, index) => (
              <div
                key={`${benefit}-${index}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-3.5 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/[0.08] sm:px-5"
              >
                {/* Check icon */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#17294b] text-blue-300">
                  <Check className="h-5 w-5" strokeWidth={2} />
                </span>

                {/* Benefit text */}
                <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-slate-200 sm:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes benefits-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-benefits-scroll {
          animation: benefits-scroll 35s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-benefits-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
