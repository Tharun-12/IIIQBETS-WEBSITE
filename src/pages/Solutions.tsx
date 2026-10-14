// import SEO from '@/components/common/SEO';
// import PageHero from '@/components/common/PageHero';
// import Reveal from '@/components/common/Reveal';
// import SectionHeading from '@/components/common/SectionHeading';
// import Button from '@/components/common/Button';
// import { motion } from 'framer-motion';
// import * as Icons from 'lucide-react';
// import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

// const solutions = [
//   { icon: 'RefreshCw', title: 'Digital Transformation', description: 'End-to-end transformation strategy and execution across your organization.', color: 'from-blue-bright to-cyan' },
//   { icon: 'Zap', title: 'Business Automation', description: 'Automate repetitive workflows and free your team to focus on higher-value work.', color: 'from-navy-light to-blue-bright' },
//   { icon: 'BarChart3', title: 'Data & Analytics', description: 'Turn raw data into actionable insights with modern analytics and BI platforms.', color: 'from-blue-bright to-navy-light' },
//   { icon: 'Cloud', title: 'Cloud Transformation', description: 'Migrate, modernize, and optimize your infrastructure for the cloud era.', color: 'from-cyan to-blue-bright' },
//   { icon: 'LayoutDashboard', title: 'Enterprise Applications', description: 'ERP, CRM, POS, and SFA systems that integrate seamlessly with your operations.', color: 'from-navy-light to-cyan' },
//   { icon: 'ShoppingCart', title: 'Digital Commerce', description: 'Build scalable e-commerce platforms with integrated payments and inventory.', color: 'from-blue-bright to-navy-deep' },
//   { icon: 'HeartHandshake', title: 'Customer Experience', description: 'Create connected, personalized experiences across every customer touchpoint.', color: 'from-cyan to-navy-light' },
//   { icon: 'Wrench', title: 'Technology Modernization', description: 'Modernize legacy systems and embrace contemporary, scalable architecture.', color: 'from-navy-deep to-blue-bright' },
// ];

// export default function Solutions() {
//   return (
//     <>
//       <SEO
//         title="Solutions | iiiQbets"
//         description="Digital transformation, business automation, data & analytics, cloud transformation, enterprise applications, digital commerce, customer experience, and technology modernization solutions."
//         canonical="https://iiiqbets.com/solutions"
//         ogTitle="Digital Transformation Solutions | iiiQbets"
//         ogDescription="Comprehensive technology solutions that help businesses automate, integrate, analyze, optimize, and scale."
//       />

//       <PageHero
//         eyebrow="Solutions"
//         title="Solutions That Drive Business Outcomes"
//         description="We design and deliver integrated technology solutions that address real business challenges — from automation and analytics to cloud transformation and enterprise applications."
//         breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}
//       />

//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Our Solutions"
//             title={<>Eight Solutions. One <span className="text-blue-bright">Connected Ecosystem.</span></>}
//             subtitle="Each solution is designed to integrate with your existing systems and scale with your business."
//             align="center"
//           />

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {solutions.map((sol) => {
//               const IconComponent = (Icons[sol.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
//               return (
//                 <motion.div
//                   key={sol.title}
//                   variants={staggerItem}
//                   className="iiq-solution-card group relative overflow-hidden rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-xl hover:shadow-navy-deep/5"
//                 >
//                   <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${sol.color} transition-transform duration-300 group-hover:scale-110`}>
//                     <IconComponent className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-navy-deep">{sol.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-graytext">{sol.description}</p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Visual storytelling section */}
//       <section className="bg-navy-deep py-20 sm:py-28">
//         <div className="iiq-container">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
//             <div>
//               <SectionHeading
//                 eyebrow="Integrated Approach"
//                 title={<>Connected Solutions for a <span className="text-cyan">Connected Business</span></>}
//                 variant="light"
//                 subtitle="We don't deliver isolated tools. We build connected ecosystems where data, processes, and applications work together seamlessly."
//               />
//               <div className="mt-8 space-y-4">
//                 {['People + Processes + Applications + Data', 'Strategy + Technology + Implementation + Support', 'Automation + Integration + Analytics + Optimization'].map((item) => (
//                   <Reveal key={item}>
//                     <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
//                       <span className="h-2 w-2 rounded-full bg-cyan" />
//                       <span className="text-sm font-medium text-white/80">{item}</span>
//                     </div>
//                   </Reveal>
//                 ))}
//               </div>
//             </div>
//             <Reveal delay={0.1}>
//               <div className="relative overflow-hidden rounded-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1200"
//                   alt="Data analytics dashboard visualization"
//                   className="w-full object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 sm:py-28">
//         <div className="iiq-container text-center">
//           <SectionHeading
//             eyebrow="Get Started"
//             title={<>Find the Right <span className="text-blue-bright">Solution</span> for Your Business</>}
//             align="center"
//           />
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <Button to="/contact" icon>Talk to Our Experts</Button>
//             <Button to="/services" variant="secondary">Explore Services</Button>
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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== Category cards — 3D flip-in with stagger =====
      const cards = gsap.utils.toArray<HTMLElement>('.iiq-tech-card');
      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          rotateX: -25,
          rotateY: 8,
          transformPerspective: 1200,
          transformOrigin: 'center top',
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: {
            each: 0.12,
            from: 'start',
          },
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ===== Tech pills inside each card — cascade with bounce =====
      const pills = gsap.utils.toArray<HTMLElement>('.iiq-tech-pill');
      gsap.fromTo(
        pills,
        { scale: 0.4, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'back.out(2)',
          stagger: 0.015,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 72%',
          },
        }
      );

      // ===== Card icons — pop in with rotation =====
      const cardIcons = gsap.utils.toArray<HTMLElement>('.iiq-tech-icon');
      gsap.fromTo(
        cardIcons,
        { scale: 0, rotate: -180, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 80%',
          },
        }
      );

      // ===== Badges — wave-in effect from center =====
      const badges = gsap.utils.toArray<HTMLElement>('.iiq-tech-badge');
      gsap.fromTo(
        badges,
        { y: 40, opacity: 0, scale: 0.7, rotate: -3 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: 'back.out(1.6)',
          stagger: {
            each: 0.04,
            from: 'center',
          },
          scrollTrigger: {
            trigger: badgesRef.current,
            start: 'top 82%',
          },
        }
      );

      // ===== Infinite marquee for badges row =====
      if (marqueeRef.current) {
        const marqueeInner = marqueeRef.current.querySelector('.marquee-track');
        if (marqueeInner) {
          gsap.to(marqueeInner, {
            xPercent: -50,
            duration: 40,
            ease: 'none',
            repeat: -1,
          });
        }
      }

      // ===== Stats counter =====
      const statEls = gsap.utils.toArray<HTMLElement>('.iiq-stat-value');
      statEls.forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}+`;
          },
        });
      });

      // ===== CTA fade-up with glow pulse =====
      gsap.fromTo(
        ctaRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        }
      );

      // ===== Section headings — soft blur-in =====
      gsap.utils.toArray<HTMLElement>('.gsap-heading').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
            },
          }
        );
      });

      // ===== Parallax floating orbs =====
      gsap.utils.toArray<HTMLElement>('.iiq-orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -80 : 80,
          x: i % 2 === 0 ? 40 : -40,
          ease: 'none',
          scrollTrigger: {
            trigger: orb,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
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

      {/* ===== Stats strip ===== */}
      <section ref={statsRef} className="relative border-y border-navy-deep/5 bg-white py-12">
        <div className="iiq-container">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: 40, label: 'Technologies' },
              { value: 12, label: 'Categories' },
              { value: 200, label: 'Projects Delivered' },
              { value: 15, label: 'Industries Served' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="iiq-stat-value text-3xl font-extrabold text-blue-bright sm:text-4xl"
                  data-value={stat.value}
                >
                  0+
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-light/70 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Decorative glows */}
        <div className="iiq-orb pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-bright/10 blur-3xl" />
        <div className="iiq-orb pointer-events-none absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
        <div className="iiq-orb pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-blue-bright/5 blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

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
                  className="iiq-tech-card group relative overflow-hidden rounded-2xl border border-navy-deep/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-bright/40 hover:shadow-2xl hover:shadow-blue-bright/15"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated gradient border on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-bright/0 via-transparent to-cyan/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-bright/5 group-hover:to-cyan/10 group-hover:opacity-100" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-bright to-cyan transition-all duration-500 group-hover:w-full" />

                  {/* Corner glow */}
                  <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-bright/0 blur-2xl transition-all duration-500 group-hover:bg-blue-bright/20" />

                  <div className="iiq-tech-icon relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-deep/5 to-navy-deep/10 transition-all duration-500 group-hover:scale-110 group-hover:from-blue-bright/15 group-hover:to-cyan/15">
                    <IconComponent className="h-6 w-6 text-navy-light transition-colors duration-300 group-hover:text-blue-bright" />
                  </div>

                  <h3 className="relative text-lg font-bold text-navy-deep transition-colors duration-300 group-hover:text-blue-bright">
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

      {/* ===== Infinite marquee strip ===== */}
      <section className="relative overflow-hidden border-y border-navy-deep/5 bg-navy-deep py-6">
        <div ref={marqueeRef} className="overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
            {[...allTechnologies, ...allTechnologies].map((tech, i) => (
              <div key={`${tech}-${i}`} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                <span className="text-sm font-semibold tracking-wide text-white/80">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Technology badges ===== */}
      <section className="relative overflow-hidden bg-offwhite py-20 sm:py-28">
        <div className="iiq-orb pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
        <div className="iiq-orb pointer-events-none absolute top-0 -left-20 h-72 w-72 rounded-full bg-blue-bright/10 blur-3xl" />

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
                className="iiq-tech-badge group relative flex items-center gap-3 overflow-hidden rounded-xl border border-navy-deep/10 bg-white px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-bright/50 hover:shadow-xl hover:shadow-blue-bright/10"
              >
                {/* Shine sweep on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative h-2 w-2 rounded-full bg-cyan transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-bright group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                <span className="relative text-base font-semibold text-navy-deep transition-colors group-hover:text-blue-bright">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="mt-14 text-center">
            <div className="relative inline-block">
              {/* Pulsing glow behind CTA */}
              <div className="pointer-events-none absolute -inset-4 rounded-full bg-blue-bright/20 blur-2xl" />
              <Button to="/contact" icon>
                Discuss Your Technology Needs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}