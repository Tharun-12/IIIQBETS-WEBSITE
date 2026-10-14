// import { useParams, Navigate } from 'react-router-dom';
// import SEO from '@/components/common/SEO';
// import PageHero from '@/components/common/PageHero';
// import Reveal from '@/components/common/Reveal';
// import SectionHeading from '@/components/common/SectionHeading';
// import Button from '@/components/common/Button';
// import { motion } from 'framer-motion';
// import { Check, ArrowRight, Plus, Minus } from 'lucide-react';
// import { useState } from 'react';
// import { services } from '@/data/services';
// import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
// import * as Icons from 'lucide-react';

// export default function ServiceDetail() {
//   const { slug } = useParams<{ slug: string }>();
//   const service = services.find((s) => s.slug === slug);

//   if (!service) {
//     return <Navigate to="/services" replace />;
//   }

//   const IconComponent = (Icons[service.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;

//   return (
//     <>
//       <SEO
//         title={`${service.shortTitle} | iiiQbets`}
//         description={service.tagline}
//         canonical={`https://iiiqbets.com/services/${service.slug}`}
//         ogTitle={`${service.title} | iiiQbets`}
//         ogDescription={service.heroDescription}
//       />

//       <PageHero
//         eyebrow="Service"
//         title={service.title}
//         description={service.heroDescription}
//         breadcrumbs={[
//           { label: 'Home', to: '/' },
//           { label: 'Services', to: '/services' },
//           { label: service.shortTitle },
//         ]}
//       >
//         <div className="flex flex-wrap gap-4">
//           <Button to="/contact" icon>Get Started</Button>
//           <Button to="/services" variant="outline">View All Services</Button>
//         </div>
//       </PageHero>

//       {/* Business Problem & Solution */}
//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
//             <Reveal>
//               <div className="rounded-2xl border border-navy-deep/8 bg-offwhite p-8">
//                 <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-bright">The Challenge</span>
//                 <h2 className="mt-4 text-2xl font-bold text-navy-deep">Business Problem</h2>
//                 <p className="mt-4 text-base leading-relaxed text-graytext">{service.businessProblem}</p>
//               </div>
//             </Reveal>
//             <Reveal delay={0.1}>
//               <div className="rounded-2xl border border-blue-bright/20 bg-blue-bright/5 p-8">
//                 <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-bright">Our Approach</span>
//                 <h2 className="mt-4 text-2xl font-bold text-navy-deep">The Solution</h2>
//                 <p className="mt-4 text-base leading-relaxed text-graytext">{service.solution}</p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="bg-offwhite py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Capabilities"
//             title={<>What We <span className="text-blue-bright">Deliver</span></>}
//             align="center"
//           />
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {service.capabilities.map((cap) => (
//               <motion.div
//                 key={cap}
//                 variants={staggerItem}
//                 className="flex items-center gap-3 rounded-xl border border-navy-deep/8 bg-white p-4 transition-colors hover:border-blue-bright/30"
//               >
//                 <Check className="h-5 w-5 flex-shrink-0 text-blue-bright" />
//                 <span className="text-sm font-medium text-darktext">{cap}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Technologies */}
//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Technology"
//             title={<>Tools We <span className="text-blue-bright">Work With</span></>}
//             align="center"
//           />
//           <div className="mt-10 flex flex-wrap justify-center gap-3">
//             {service.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="iiq-tech-badge rounded-lg border border-navy-deep/10 bg-white px-4 py-2.5 text-sm font-medium text-darktext transition-colors hover:border-blue-bright/40 hover:text-blue-bright"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="bg-navy-deep py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Business Benefits"
//             title={<>Measurable <span className="text-cyan">Outcomes</span></>}
//             variant="light"
//             align="center"
//           />
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {service.benefits.map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 variants={staggerItem}
//                 className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
//               >
//                 <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan" />
//                 <span className="text-sm leading-relaxed text-white/80">{benefit}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Our Process"
//             title={<>How We <span className="text-blue-bright">Work</span></>}
//             align="center"
//           />
//           <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
//             {service.process.map((step, i) => (
//               <Reveal key={step.step} delay={i * 0.08}>
//                 <div className="relative rounded-2xl border border-navy-deep/8 p-6">
//                   <span className="font-display text-3xl font-extrabold text-navy-deep/10">{step.step}</span>
//                   <h3 className="mt-2 text-base font-bold text-navy-deep">{step.title}</h3>
//                   <p className="mt-2 text-xs leading-relaxed text-graytext">{step.description}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-offwhite py-20 sm:py-28">
//         <div className="iiq-container-narrow">
//           <SectionHeading
//             eyebrow="FAQ"
//             title={<>Frequently Asked <span className="text-blue-bright">Questions</span></>}
//             align="center"
//           />
//           <div className="mt-12 space-y-4">
//             {service.faqs.map((faq, i) => (
//               <FAQItem key={i} question={faq.question} answer={faq.answer} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="iiq-gradient-primary py-16 sm:py-20">
//         <div className="iiq-container text-center">
//           <Reveal>
//             <h2 className="mx-auto max-w-2xl text-section-heading font-extrabold text-white">
//               Ready to Get Started?
//             </h2>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <p className="mx-auto mt-4 max-w-xl text-white/70">
//               Let's discuss how our {service.shortTitle.toLowerCase()} services can help your business.
//             </p>
//           </Reveal>
//           <Reveal delay={0.15}>
//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <Button to="/contact" variant="white" icon>Talk to Our Experts</Button>
//               <Button to="/contact" variant="whiteOutline">Get a Free Quote</Button>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }

// function FAQItem({ question, answer }: { question: string; answer: string }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="iiq-faq-item overflow-hidden rounded-xl border border-navy-deep/10 bg-white">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex w-full items-center justify-between px-6 py-5 text-left"
//         aria-expanded={open}
//       >
//         <span className="text-base font-semibold text-navy-deep">{question}</span>
//         {open ? <Minus className="h-5 w-5 flex-shrink-0 text-blue-bright" /> : <Plus className="h-5 w-5 flex-shrink-0 text-graytext" />}
//       </button>
//       <motion.div
//         initial={false}
//         animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
//         transition={{ duration: 0.2 }}
//         className="overflow-hidden"
//       >
//         <p className="px-6 pb-5 text-sm leading-relaxed text-graytext">{answer}</p>
//       </motion.div>
//     </div>
//   );
// }





//new code
// src/pages/ServiceDetail.tsx
import { useParams } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Button from '@/components/common/Button';
import { services } from '@/data/services';
import * as Icons from 'lucide-react';

import ServiceNotFound from '@/components/servicescompo/ServiceNotFound';
import ServiceProblemSolution from '@/components/servicescompo/ServiceProblemSolution';
import ServiceCapabilities from '@/components/servicescompo/ServiceCapabilities';
import ServiceTechnologies from '@/components/servicescompo/ServiceTechnologies';
import ServiceBenefits from '@/components/servicescompo/ServiceBenefits';
import ServiceProcess from '@/components/servicescompo/ServiceProcess';
import ServiceFAQ from '@/components/servicescompo/ServiceFAQ';
import ServiceCTA from '@/components/servicescompo/ServiceCTA';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <ServiceNotFound />;
  }

  return (
    <>
      <SEO
        title={`${service.shortTitle} | iiiQbets`}
        description={service.tagline}
        canonical={`https://iiiqbets.com/services/${service.slug}`}
        ogTitle={`${service.title} | iiiQbets`}
        ogDescription={service.heroDescription}
      />

      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.heroDescription}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.shortTitle },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon>
            Get Started
          </Button>
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </PageHero>

      <ServiceProblemSolution
        businessProblem={service.businessProblem}
        solution={service.solution}
      />

      <ServiceCapabilities capabilities={service.capabilities} />

      <ServiceTechnologies technologies={service.technologies} />

      <ServiceBenefits benefits={service.benefits} />

      <ServiceProcess process={service.process} />

      <ServiceFAQ faqs={service.faqs} />

      <ServiceCTA serviceTitle={service.shortTitle} />
    </>
  );
}