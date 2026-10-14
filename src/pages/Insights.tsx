// import SEO from '@/components/common/SEO';
// import PageHero from '@/components/common/PageHero';
// import Reveal from '@/components/common/Reveal';
// import SectionHeading from '@/components/common/SectionHeading';
// import { Clock, ArrowRight } from 'lucide-react';

// const categories = [
//   'Digital Transformation',
//   'Business Intelligence',
//   'Cloud',
//   'AI & Automation',
//   'Enterprise Technology',
//   'Digital Marketing',
// ];

// export default function Insights() {
//   return (
//     <>
//       <SEO
//         title="Insights | iiiQbets"
//         description="Explore insights on digital transformation, business intelligence, cloud, AI & automation, enterprise technology, and digital marketing from iiiQbets."
//         canonical="https://iiiqbets.com/insights"
//         ogTitle="Insights | iiiQbets"
//         ogDescription="Thoughts and perspectives on digital transformation, technology, and business growth."
//       />

//       <PageHero
//         eyebrow="Insights"
//         title="Perspectives on Digital Transformation"
//         description="Thoughts, perspectives, and ideas on technology, business transformation, and the future of digital enterprises."
//         breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
//       />

//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           {/* Category filter */}
//           <div className="flex flex-wrap gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 className="rounded-lg border border-navy-deep/15 px-4 py-2 text-sm font-medium text-darktext transition-colors hover:border-blue-bright hover:bg-navy-deep hover:text-white"
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Placeholder content */}
//           <div className="mt-16 text-center">
//             <Reveal>
//               <div className="mx-auto max-w-md">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-deep/5 mx-auto">
//                   <Clock className="h-8 w-8 text-navy-light" />
//                 </div>
//                 <h2 className="mt-6 text-2xl font-bold text-navy-deep">
//                   Insights Coming Soon
//                 </h2>
//                 <p className="mt-3 text-sm leading-relaxed text-graytext">
//                   We're preparing thoughtful content on digital transformation, technology trends,
//                   and business growth. Check back soon for articles, guides, and perspectives
//                   from our team.
//                 </p>
//               </div>
//             </Reveal>
//           </div>

//           {/* Editorial framework placeholder */}
//           <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {categories.map((cat, i) => (
//               <Reveal key={cat} delay={i * 0.08}>
//                 <div className="iiq-insight-card group rounded-2xl border border-navy-deep/8 bg-offwhite p-6 transition-all duration-300 hover:border-blue-bright/30">
//                   <span className="text-xs font-semibold uppercase tracking-wider text-blue-bright">
//                     {cat}
//                   </span>
//                   <h3 className="mt-3 text-lg font-bold text-navy-deep">
//                     Article Title Placeholder
//                   </h3>
//                   <p className="mt-2 text-sm leading-relaxed text-graytext">
//                     This space will feature insights and articles on {cat.toLowerCase()}.
//                     Content will be added as it becomes available.
//                   </p>
//                   <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-graytext">
//                     Coming Soon
//                     <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-60" />
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

const categories = [
  'Digital Transformation',
  'Business Intelligence',
  'Cloud',
  'AI & Automation',
  'Enterprise Technology',
  'Digital Marketing',
];

// Pre-computed box configs (avoid Math.random for SSR hydration stability)
const boxes = [
  { size: 70, top: '8%', left: '6%', delay: '0s', duration: '14s', rotate: '12deg', opacity: 'opacity-20' },
  { size: 110, top: '18%', left: '78%', delay: '1.2s', duration: '18s', rotate: '-18deg', opacity: 'opacity-15' },
  { size: 55, top: '38%', left: '14%', delay: '2.4s', duration: '12s', rotate: '24deg', opacity: 'opacity-25' },
  { size: 90, top: '52%', left: '86%', delay: '0.6s', duration: '20s', rotate: '-8deg', opacity: 'opacity-15' },
  { size: 130, top: '68%', left: '8%', delay: '1.8s', duration: '22s', rotate: '16deg', opacity: 'opacity-10' },
  { size: 60, top: '82%', left: '68%', delay: '3s', duration: '16s', rotate: '-22deg', opacity: 'opacity-20' },
  { size: 80, top: '28%', left: '46%', delay: '0.9s', duration: '19s', rotate: '30deg', opacity: 'opacity-10' },
  { size: 45, top: '72%', left: '42%', delay: '2.1s', duration: '13s', rotate: '-14deg', opacity: 'opacity-25' },
  { size: 100, top: '4%', left: '56%', delay: '1.5s', duration: '21s', rotate: '8deg', opacity: 'opacity-10' },
  { size: 65, top: '88%', left: '24%', delay: '0.3s', duration: '17s', rotate: '-26deg', opacity: 'opacity-20' },
];

export default function Insights() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Insights | iiiQbets"
        description="Explore insights on digital transformation, business intelligence, cloud, AI & automation, enterprise technology, and digital marketing from iiiQbets."
        canonical="https://iiiqbets.com/insights"
        ogTitle="Insights | iiiQbets"
        ogDescription="Thoughts and perspectives on digital transformation, technology, and business growth."
      />

      <PageHero
        eyebrow="Insights"
        title="Perspectives on Digital Transformation"
        description="Thoughts, perspectives, and ideas on technology, business transformation, and the future of digital enterprises."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
      />

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-20 sm:py-28"
      >
        {/* ============ PURE TAILWIND ANIMATED BACKGROUND ============ */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-white to-offwhite" />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-bright/10 via-transparent to-navy-deep/5 animate-pulse [animation-duration:6s]" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #0a1f44 1px, transparent 1px), linear-gradient(to bottom, #0a1f44 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating gradient boxes — pure Tailwind */}
          {boxes.map((box, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl border border-blue-bright/30 bg-gradient-to-br from-blue-bright/20 via-navy-light/10 to-transparent backdrop-blur-[1px] ${box.opacity} animate-[floatBox_${box.duration}_ease-in-out_infinite]`}
              style={{
                width: `${box.size}px`,
                height: `${box.size}px`,
                top: box.top,
                left: box.left,
                animationDelay: box.delay,
                animationDuration: box.duration,
                transform: `rotate(${box.rotate})`,
              }}
            />
          ))}

          {/* Larger glowing boxes */}
          <div className="absolute -top-10 left-1/4 h-72 w-72 animate-[floatBox_20s_ease-in-out_infinite] rounded-3xl bg-gradient-to-br from-blue-bright/15 to-transparent blur-2xl" />
          <div
            className="absolute bottom-10 right-1/4 h-80 w-80 animate-[floatBox_25s_ease-in-out_infinite_reverse] rounded-3xl bg-gradient-to-tl from-navy-deep/10 to-transparent blur-2xl"
            style={{ animationDelay: '2s' }}
          />

          {/* Diagonal shimmer sweep */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-0 h-[200%] w-1/3 -translate-x-full animate-[shimmer_8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          {/* Corner accent squares */}
          <div className="absolute left-0 top-0 h-32 w-32 animate-[spinSlow_30s_linear_infinite] rounded-br-[3rem] border-b-2 border-r-2 border-blue-bright/20" />
          <div className="absolute bottom-0 right-0 h-40 w-40 animate-[spinSlow_40s_linear_infinite_reverse] rounded-tl-[3rem] border-l-2 border-t-2 border-navy-light/20" />

          {/* Small floating dots */}
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-blue-bright/50 animate-[floatBox_12s_ease-in-out_infinite]"
              style={{
                top: `${10 + i * 11}%`,
                left: `${(i * 13 + 5) % 95}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${10 + (i % 4) * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="iiq-container relative">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="group relative overflow-hidden rounded-lg border border-navy-deep/15 px-4 py-2 text-sm font-medium text-darktext transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-bright hover:bg-navy-deep hover:text-white hover:shadow-lg hover:shadow-blue-bright/20"
              >
                <span className="relative z-10">{cat}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-bright/20 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            ))}
          </div>

          {/* Placeholder content */}
          <div className="mt-16 text-center">
            <Reveal>
              <div className="mx-auto max-w-md">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-deep/5">
                  <span className="absolute inset-0 animate-ping rounded-2xl bg-blue-bright/20 [animation-duration:3s]" />
                  <Clock className="relative h-8 w-8 animate-[tick_4s_ease-in-out_infinite] text-navy-light" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-navy-deep">
                  Insights Coming Soon
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-graytext">
                  We're preparing thoughtful content on digital transformation, technology trends,
                  and business growth. Check back soon for articles, guides, and perspectives
                  from our team.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Editorial framework placeholder */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat} delay={i * 0.08}>
                <div className="iiq-insight-card group relative overflow-hidden rounded-2xl border border-navy-deep/8 bg-offwhite/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-bright/30 hover:shadow-xl hover:shadow-navy-deep/5">
                  {/* Card hover gradient glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-bright/0 via-blue-bright/0 to-blue-bright/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-bright/10 group-hover:via-transparent group-hover:to-navy-deep/10 group-hover:opacity-100" />

                  {/* Sparkle accent */}
                  <Sparkles className="absolute right-4 top-4 h-4 w-4 text-blue-bright/0 transition-all duration-500 group-hover:rotate-12 group-hover:text-blue-bright/60" />

                  <span className="relative text-xs font-semibold uppercase tracking-wider text-blue-bright">
                    {cat}
                  </span>
                  <h3 className="relative mt-3 text-lg font-bold text-navy-deep">
                    Article Title Placeholder
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-graytext">
                    This space will feature insights and articles on {cat.toLowerCase()}.
                    Content will be added as it becomes available.
                  </p>
                  <div className="relative mt-4 flex items-center gap-1.5 text-sm font-semibold text-graytext transition-colors group-hover:text-blue-bright">
                    Coming Soon
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}