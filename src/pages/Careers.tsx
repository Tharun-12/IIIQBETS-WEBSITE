// import SEO from '@/components/common/SEO';
// import PageHero from '@/components/common/PageHero';
// import Reveal from '@/components/common/Reveal';
// import SectionHeading from '@/components/common/SectionHeading';
// import Button from '@/components/common/Button';
// import { motion } from 'framer-motion';
// import * as Icons from 'lucide-react';
// import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

// const values = [
//   { icon: 'Code2', title: 'Technology Culture', description: 'We live and breathe technology. Our team is passionate about learning, building, and pushing the boundaries of what is possible.' },
//   { icon: 'GraduationCap', title: 'Continuous Learning', description: 'We invest in our team&apos;s growth with ongoing training, certifications, and opportunities to work with the latest technologies.' },
//   { icon: 'Users', title: 'Collaboration', description: 'We work as a team, across disciplines and domains, to deliver the best outcomes for our clients and each other.' },
//   { icon: 'TrendingUp', title: 'Growth Opportunities', description: 'As we grow, our team grows with us. We offer clear career paths and opportunities to take on new challenges.' },
// ];

// export default function Careers() {
//   return (
//     <>
//       <SEO
//         title="Careers | iiiQbets"
//         description="Build the future with iiiQbets. Explore our technology culture, learning opportunities, and career growth in digital transformation and technology solutions."
//         canonical="https://iiiqbets.com/careers"
//         ogTitle="Build the Future With Us | iiiQbets Careers"
//         ogDescription="Join a team passionate about technology, learning, and delivering digital transformation."
//       />

//       <PageHero
//         eyebrow="Careers"
//         title="Build the Future With Us"
//         description="Join a team that is passionate about technology, committed to excellence, and dedicated to helping businesses transform and grow. At iiiQbets, you will work on meaningful projects with modern technologies and talented colleagues."
//         breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
//       />

//       {/* Why work with us */}
//       <section className="py-20 sm:py-28">
//         <div className="iiq-container">
//           <SectionHeading
//             eyebrow="Why Work With iiiQbets"
//             title={<>A Culture of <span className="text-blue-bright">Technology & Excellence</span></>}
//             align="center"
//           />

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {values.map((val) => {
//               const IconComponent = (Icons[val.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
//               return (
//                 <motion.div
//                   key={val.title}
//                   variants={staggerItem}
//                   className="iiq-career-card group rounded-2xl border border-navy-deep/8 bg-offwhite p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
//                 >
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-bright/10 transition-colors group-hover:bg-blue-bright/20">
//                     <IconComponent className="h-6 w-6 text-blue-bright" />
//                   </div>
//                   <h3 className="text-base font-bold text-navy-deep">{val.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-graytext">{val.description}</p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Open positions placeholder */}
//       <section className="bg-offwhite py-20 sm:py-28">
//         <div className="iiq-container-narrow">
//           <SectionHeading
//             eyebrow="Open Positions"
//             title={<>Current <span className="text-blue-bright">Openings</span></>}
//             align="center"
//           />

//           <Reveal delay={0.1}>
//             <div className="mt-12 rounded-2xl border border-navy-deep/10 bg-white p-12 text-center">
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-deep/5">
//                 <Icons.Briefcase className="h-8 w-8 text-navy-light" />
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-navy-deep">
//                 Current openings will be listed here.
//               </h3>
//               <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graytext">
//                 We are always looking for talented people. If you are passionate about technology
//                 and digital transformation, we would love to hear from you.
//               </p>
//               <div className="mt-8">
//                 <Button to="/contact" icon>Send Your Profile</Button>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="iiq-gradient-primary py-16 sm:py-20">
//         <div className="iiq-container text-center">
//           <Reveal>
//             <h2 className="mx-auto max-w-2xl text-section-heading font-extrabold text-white">
//               Want to Join Our Team?
//             </h2>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <p className="mx-auto mt-4 max-w-xl text-white/70">
//               Send us your profile and tell us about your aspirations. We will get in touch when
//               a matching opportunity arises.
//             </p>
//           </Reveal>
//           <Reveal delay={0.15}>
//             <div className="mt-8">
//               <Button to="/contact" variant="white" icon>Get in Touch</Button>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }




import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const values = [
  { icon: 'Code2', title: 'Technology Culture', description: 'We live and breathe technology. Our team is passionate about learning, building, and pushing the boundaries of what is possible.', accent: 'from-blue-bright/20 to-cyan-400/20' },
  { icon: 'GraduationCap', title: 'Continuous Learning', description: 'We invest in our team&apos;s growth with ongoing training, certifications, and opportunities to work with the latest technologies.', accent: 'from-purple-400/20 to-blue-bright/20' },
  { icon: 'Users', title: 'Collaboration', description: 'We work as a team, across disciplines and domains, to deliver the best outcomes for our clients and each other.', accent: 'from-emerald-400/20 to-teal-400/20' },
  { icon: 'TrendingUp', title: 'Growth Opportunities', description: 'As we grow, our team grows with us. We offer clear career paths and opportunities to take on new challenges.', accent: 'from-amber-400/20 to-orange-400/20' },
];

const perks = [
  { icon: 'HeartPulse', title: 'Health & Wellness', description: 'Comprehensive health coverage and wellness programs for you and your family.' },
  { icon: 'Laptop', title: 'Latest Tech', description: 'Work with modern tools, frameworks, and hardware that help you do your best work.' },
  { icon: 'Palmtree', title: 'Flexible Time Off', description: 'Recharge with generous paid time off and flexible working arrangements.' },
  { icon: 'Award', title: 'Performance Bonuses', description: 'Be rewarded for impactful work with competitive compensation and bonuses.' },
  { icon: 'BookOpen', title: 'Learning Budget', description: 'Annual budget for courses, certifications, conferences, and books.' },
  { icon: 'Globe', title: 'Remote Friendly', description: 'Hybrid and remote options so you can work from where you thrive.' },
];

const stats = [
  { value: '50+', label: 'Team Members' },
  { value: '12+', label: 'Countries Served' },
  { value: '98%', label: 'Employee Retention' },
  { value: '4.8', label: 'Glassdoor Rating' },
];

const steps = [
  { icon: 'FileText', title: 'Apply', description: 'Send us your profile and tell us about the impact you want to make.' },
  { icon: 'Phone', title: 'Intro Call', description: 'A friendly conversation to align on role, goals, and culture fit.' },
  { icon: 'Code2', title: 'Skill Review', description: 'A practical, collaborative exercise that reflects real work.' },
  { icon: 'Handshake', title: 'Offer & Onboard', description: 'Meet the team, get set up, and start building from day one.' },
];

const roles = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', type: 'Full-time', location: 'Remote / Hybrid', tags: ['React', 'Node.js', 'AWS'] },
  { title: 'Cloud Solutions Architect', team: 'Cloud & DevOps', type: 'Full-time', location: 'Hybrid', tags: ['Azure', 'Kubernetes', 'Terraform'] },
  { title: 'Data Engineer', team: 'Data & AI', type: 'Full-time', location: 'Remote', tags: ['Python', 'Spark', 'Snowflake'] },
  { title: 'Product Designer', team: 'Design', type: 'Full-time', location: 'Hybrid', tags: ['Figma', 'UX', 'Design Systems'] },
  { title: 'QA Automation Engineer', team: 'Quality', type: 'Full-time', location: 'Remote', tags: ['Playwright', 'CI/CD'] },
  { title: 'Digital Transformation Consultant', team: 'Consulting', type: 'Full-time', location: 'Hybrid', tags: ['Strategy', 'Agile'] },
];

const testimonials = [
  {
    quote: 'Joining iiiQbets was the best career decision I have made. The projects are challenging, the people are brilliant, and I have grown more in two years than in the previous five.',
    name: 'Aarav Mehta',
    role: 'Senior Engineer',
    initials: 'AM',
  },
  {
    quote: 'The learning culture here is unmatched. My manager actively invests in my growth, and I get to work with technologies that most engineers only read about.',
    name: 'Priya Sharma',
    role: 'Cloud Architect',
    initials: 'PS',
  },
  {
    quote: 'What I love most is the ownership. From day one, I was trusted to lead meaningful work and collaborate directly with clients to shape outcomes.',
    name: 'Rohan Iyer',
    role: 'Product Designer',
    initials: 'RI',
  },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers | iiiQbets"
        description="Build the future with iiiQbets. Explore our technology culture, learning opportunities, and career growth in digital transformation and technology solutions."
        canonical="https://iiiqbets.com/careers"
        ogTitle="Build the Future With Us | iiiQbets Careers"
        ogDescription="Join a team passionate about technology, learning, and delivering digital transformation."
      />

      <PageHero
        eyebrow="Careers"
        title="Build the Future With Us"
        description="Join a team that is passionate about technology, committed to excellence, and dedicated to helping businesses transform and grow. At iiiQbets, you will work on meaningful projects with modern technologies and talented colleagues."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      {/* Stats band */}
      <section className="border-y border-navy-deep/8 bg-white py-10">
        <div className="iiq-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="bg-gradient-to-r from-blue-bright to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-graytext sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-bright/10 blur-3xl"
        />
        <div className="iiq-container relative">
          <SectionHeading
            eyebrow="Why Work With iiiQbets"
            title={<>A Culture of <span className="text-blue-bright">Technology & Excellence</span></>}
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((val) => {
              const IconComponent = (Icons[val.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
              return (
                <motion.div
                  key={val.title}
                  variants={staggerItem}
                  className="iiq-career-card group relative overflow-hidden rounded-2xl border border-navy-deep/8 bg-offwhite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-bright/30 hover:shadow-xl"
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${val.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-bright/10 transition-colors group-hover:bg-blue-bright/20">
                    <IconComponent className="h-6 w-6 text-blue-bright" />
                  </div>
                  <h3 className="relative text-base font-bold text-navy-deep">{val.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-graytext">{val.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Perks & Benefits"
            title={<>More Than Just <span className="text-blue-bright">a Job</span></>}
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-graytext">
              We take care of our people so they can focus on doing their best work.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {perks.map((perk) => {
              const IconComponent = (Icons[perk.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
              return (
                <motion.div
                  key={perk.title}
                  variants={staggerItem}
                  className="group flex items-start gap-4 rounded-2xl border border-navy-deep/8 bg-white p-5 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-bright/15 to-cyan-400/15 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-5 w-5 text-blue-bright" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-deep">{perk.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-graytext">{perk.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Open Positions"
            title={<>Current <span className="text-blue-bright">Openings</span></>}
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-graytext">
              Explore roles across engineering, design, data, and consulting. New opportunities are added regularly.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 space-y-4"
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={staggerItem}
                className="group flex flex-col gap-4 rounded-2xl border border-navy-deep/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-bright/40 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-navy-deep transition-colors group-hover:text-blue-bright">
                      {role.title}
                    </h3>
                    <span className="rounded-full bg-blue-bright/10 px-2.5 py-0.5 text-xs font-semibold text-blue-bright">
                      {role.team}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-graytext">
                    <span className="inline-flex items-center gap-1.5">
                      <Icons.Briefcase className="h-4 w-4" /> {role.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icons.MapPin className="h-4 w-4" /> {role.location}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-navy-deep/10 bg-offwhite px-2 py-0.5 text-xs font-medium text-navy-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button to="/contact" variant="outline" icon>
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-dashed border-navy-deep/20 bg-offwhite p-8 text-center">
              <Icons.Sparkles className="mx-auto h-8 w-8 text-blue-bright" />
              <h3 className="mt-4 text-lg font-bold text-navy-deep">
                Do not see a role that fits?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-graytext">
                We are always looking for talented people. Send us your profile and we will reach
                out when a matching opportunity arises.
              </p>
              <div className="mt-6">
                <Button to="/contact" icon>Send Your Profile</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hiring process */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Hiring Process"
            title={<>How We <span className="text-blue-bright">Hire</span></>}
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-graytext">
              A transparent, respectful process designed to help both sides make the right decision.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-bright/30 to-transparent lg:block"
            />
            {steps.map((step, idx) => {
              const IconComponent = (Icons[step.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
              return (
                <motion.div key={step.title} variants={staggerItem} className="relative text-center">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-navy-deep/10 bg-white shadow-sm transition-all duration-300 hover:border-blue-bright/40 hover:shadow-lg">
                    <IconComponent className="h-8 w-8 text-blue-bright" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-bright text-xs font-bold text-white shadow-md">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-deep">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-graytext">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Life at iiiQbets"
            title={<>What Our <span className="text-blue-bright">Team Says</span></>}
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="relative flex h-full flex-col rounded-2xl border border-navy-deep/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-bright/30 hover:shadow-xl"
              >
                <Icons.Quote className="h-8 w-8 text-blue-bright/30" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-graytext">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-navy-deep/8 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-bright to-cyan-500 text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-deep">{t.name}</div>
                    <div className="text-xs text-graytext">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="iiq-gradient-primary relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <div className="iiq-container relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-section-heading font-extrabold text-white">
              Want to Join Our Team?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Send us your profile and tell us about your aspirations. We will get in touch when
              a matching opportunity arises.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="white" icon>Get in Touch</Button>
              <Button to="/about" variant="ghost" icon>Learn About Us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}