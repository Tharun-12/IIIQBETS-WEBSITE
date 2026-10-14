// import SEO from '@/components/common/SEO';
// import PageHero from '@/components/common/PageHero';
// import { motion } from 'framer-motion';
// import SectionHeading from '@/components/common/SectionHeading';
// import Button from '@/components/common/Button';
// import { techCategories, allTechnologies } from '@/data/technologies';
// import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
// import * as Icons from 'lucide-react';

// export default function Technology() {
//   return (
//     <>
//       <SEO
//         title="Technology | iiiQbets"
//         description="Explore the technology stack we work with — web development, mobile, cloud computing, data analytics, BI, AI & ML, IoT, e-commerce, and enterprise applications."
//         canonical="https://iiiqbets.com/technology"
//         ogTitle="Technology That Enables Innovation | iiiQbets"
//         ogDescription="We work with a broad ecosystem of modern technologies to build reliable, scalable, and future-ready solutions."
//       />

//       <PageHero
//         eyebrow="Technology"
//         title="Technology That Enables Innovation"
//         description="We work with a broad ecosystem of modern technologies to build solutions that are reliable, scalable, and future-ready. From cloud and data to AI and enterprise applications, we bring the right tools to every challenge."
//         breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Technology' }]}
//       />

//       {/* Categories */}
//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Our Stack"
//             title={<>Technology <span className="text-blue-bright">Categories</span></>}
//             align="center"
//           />

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {techCategories.map((cat) => {
//               const IconComponent = (Icons[cat.icon as keyof typeof Icons] || Icons.Cpu) as Icons.LucideIcon;
//               return (
//                 <motion.div
//                   key={cat.name}
//                   variants={staggerItem}
//                   className="iiq-tech-card group rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
//                 >
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep/5 transition-colors group-hover:bg-blue-bright/10">
//                     <IconComponent className="h-6 w-6 text-navy-light transition-colors group-hover:text-blue-bright" />
//                   </div>
//                   <h3 className="text-lg font-bold text-navy-deep">{cat.name}</h3>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {cat.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="rounded-lg border border-navy-deep/10 bg-offwhite px-3 py-1.5 text-xs font-medium text-darktext transition-colors hover:border-blue-bright/40 hover:text-blue-bright"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Technology badges */}
//       <section className="bg-offwhite py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Tools & Platforms"
//             title={<>Technologies We <span className="text-blue-bright">Work With</span></>}
//             align="center"
//           />

//           <div className="mt-12 flex flex-wrap justify-center gap-4">
//             {allTechnologies.map((tech) => (
//               <div
//                 key={tech}
//                 className="iiq-tech-badge flex items-center gap-3 rounded-xl border border-navy-deep/10 bg-white px-6 py-4 transition-all duration-300 hover:border-blue-bright/40 hover:shadow-md"
//               >
//                 <span className="h-2 w-2 rounded-full bg-cyan" />
//                 <span className="text-base font-semibold text-navy-deep">{tech}</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Button to="/contact" icon>Discuss Your Technology Needs</Button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { useEffect, useRef } from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { techCategories, allTechnologies } from '@/data/technologies';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Category cards — staggered reveal with subtle 3D lift
      const cards = gsap.utils.toArray<HTMLElement>('.iiq-tech-card');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, rotateX: -12, transformPerspective: 1000 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Tech pills inside each card — cascade in
      const pills = gsap.utils.toArray<HTMLElement>('.iiq-tech-pill');
      gsap.fromTo(
        pills,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          stagger: 0.02,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 70%',
          },
        }
      );

      // Badges — wave-in effect
      const badges = gsap.utils.toArray<HTMLElement>('.iiq-tech-badge');
      gsap.fromTo(
        badges,
        { y: 30, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: {
            each: 0.05,
            from: 'center',
          },
          scrollTrigger: {
            trigger: badgesRef.current,
            start: 'top 80%',
          },
        }
      );

      // CTA fade-up
      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        }
      );

      // Section headings — soft blur-in
      gsap.utils.toArray<HTMLElement>('.gsap-heading').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Technology | iiiQbets"
        description="Explore the technology stack we work with — web development, mobile, cloud computing, data analytics, BI, AI & ML, IoT, e-commerce, and enterprise applications."
        canonical="https://iiiqbets.com/technology"
        ogTitle="Technology That Enables Innovation | iiiQbets"
        ogDescription="We work with a broad ecosystem of modern technologies to build reliable, scalable, and future-ready solutions."
      />

      <PageHero
        eyebrow="Technology"
        title="Technology That Enables Innovation"
        description="We work with a broad ecosystem of modern technologies to build solutions that are reliable, scalable, and future-ready. From cloud and data to AI and enterprise applications, we bring the right tools to every challenge."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Technology' }]}
      />

      {/* Categories */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-bright/10 blur-3xl" />

        <div className="iiq-container relative">
          <div className="gsap-heading">
            <SectionHeading
              eyebrow="Our Stack"
              title={
                <>
                  Technology <span className="text-blue-bright">Categories</span>
                </>
              }
              align="center"
            />
          </div>

          <div
            ref={categoriesRef}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {techCategories.map((cat) => {
              const IconComponent = (Icons[cat.icon as keyof typeof Icons] ||
                Icons.Cpu) as Icons.LucideIcon;
              return (
                <div
                  key={cat.name}
                  className="iiq-tech-card group relative overflow-hidden rounded-2xl border border-navy-deep/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-bright/40 hover:shadow-2xl hover:shadow-blue-bright/10"
                >
                  {/* Hover gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-bright/0 via-transparent to-cyan/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-blue-bright/5 group-hover:to-cyan/10" />

                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-bright/10">
                    <IconComponent className="h-6 w-6 text-navy-light transition-colors group-hover:text-blue-bright" />
                  </div>

                  <h3 className="relative text-lg font-bold text-navy-deep transition-colors group-hover:text-blue-bright">
                    {cat.name}
                  </h3>

                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {cat.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="iiq-tech-pill rounded-lg border border-navy-deep/10 bg-offwhite px-3 py-1.5 text-xs font-medium text-darktext transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-bright/40 hover:bg-blue-bright/5 hover:text-blue-bright"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology badges */}
      <section className="relative overflow-hidden bg-offwhite py-20 sm:py-28">
        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />

        <div className="iiq-container relative">
          <div className="gsap-heading">
            <SectionHeading
              eyebrow="Tools & Platforms"
              title={
                <>
                  Technologies We <span className="text-blue-bright">Work With</span>
                </>
              }
              align="center"
            />
          </div>

          <div
            ref={badgesRef}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {allTechnologies.map((tech) => (
              <div
                key={tech}
                className="iiq-tech-badge group flex items-center gap-3 rounded-xl border border-navy-deep/10 bg-white px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-bright/50 hover:shadow-lg hover:shadow-blue-bright/10"
              >
                <span className="h-2 w-2 rounded-full bg-cyan transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-bright group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                <span className="text-base font-semibold text-navy-deep transition-colors group-hover:text-blue-bright">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="mt-12 text-center">
            <Button to="/contact" icon>
              Discuss Your Technology Needs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}