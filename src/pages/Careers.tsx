import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const values = [
  { icon: 'Code2', title: 'Technology Culture', description: 'We live and breathe technology. Our team is passionate about learning, building, and pushing the boundaries of what is possible.' },
  { icon: 'GraduationCap', title: 'Continuous Learning', description: 'We invest in our team&apos;s growth with ongoing training, certifications, and opportunities to work with the latest technologies.' },
  { icon: 'Users', title: 'Collaboration', description: 'We work as a team, across disciplines and domains, to deliver the best outcomes for our clients and each other.' },
  { icon: 'TrendingUp', title: 'Growth Opportunities', description: 'As we grow, our team grows with us. We offer clear career paths and opportunities to take on new challenges.' },
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

      {/* Why work with us */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
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
                  className="iiq-career-card group rounded-2xl border border-navy-deep/8 bg-offwhite p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-bright/10 transition-colors group-hover:bg-blue-bright/20">
                    <IconComponent className="h-6 w-6 text-blue-bright" />
                  </div>
                  <h3 className="text-base font-bold text-navy-deep">{val.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graytext">{val.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open positions placeholder */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container-narrow">
          <SectionHeading
            eyebrow="Open Positions"
            title={<>Current <span className="text-blue-bright">Openings</span></>}
            align="center"
          />

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-navy-deep/10 bg-white p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-deep/5">
                <Icons.Briefcase className="h-8 w-8 text-navy-light" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-deep">
                Current openings will be listed here.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graytext">
                We are always looking for talented people. If you are passionate about technology
                and digital transformation, we would love to hear from you.
              </p>
              <div className="mt-8">
                <Button to="/contact" icon>Send Your Profile</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="iiq-gradient-primary py-16 sm:py-20">
        <div className="iiq-container text-center">
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
            <div className="mt-8">
              <Button to="/contact" variant="white" icon>Get in Touch</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
