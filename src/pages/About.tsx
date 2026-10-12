import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import { viewportOnce, staggerContainer, staggerItem } from '@/lib/animations';
import ProcessReengineering from '@/components/AboutCompo/ProcessReengineering';

const whyChoose = [
  { num: '01', title: 'Experience', description: 'More than two decades of experience across technology, business domains, and industries.' },
  { num: '02', title: 'Excellence', description: 'We combine technical expertise with business understanding to deliver reliable and scalable solutions.' },
  { num: '03', title: 'Ethics', description: 'Integrity, transparency, and strong professional values are at the heart of how we work.' },
  { num: '04', title: 'Results', description: 'We focus on achieving measurable business outcomes rather than simply delivering technology.' },
  { num: '05', title: 'Industry Knowledge', description: 'Our understanding of different industries helps us design solutions that are practical, relevant, and scalable.' },
  { num: '06', title: 'Technology Collaboration', description: 'We integrate digital solutions with your existing technology ecosystem to create a connected business environment.' },
];

const philosophy = [
  { title: 'Business First', description: 'We start with your business goals, not with technology. Every solution we design is grounded in measurable business outcomes.' },
  { title: 'Practical Innovation', description: 'We embrace modern technology, but only where it creates real value. We avoid hype-driven solutions that add complexity without benefit.' },
  { title: 'Long-Term Partnership', description: 'We build relationships, not just projects. Our goal is to be your trusted technology partner for years to come.' },
  { title: 'Connected Ecosystem', description: 'We design solutions that integrate with your existing systems, creating a connected technology ecosystem rather than isolated tools.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | iiiQbets"
        description="Learn about iiiQbets — your partner for digital transformation. We combine technology expertise, business understanding, and industry experience to deliver practical digital solutions."
        canonical="https://iiiqbets.com/about"
        ogTitle="About iiiQbets — Your Partner for Digital Transformation"
        ogDescription="We help organizations transform the way they operate, engage with customers, manage data, and grow their business."
      />

      <PageHero
        eyebrow="About iiiQbets"
        title="Your Partner for Digital Transformation"
        description="At iiiQbets, we help organizations transform the way they operate, engage with customers, manage data, and grow their business. We combine technology expertise, business understanding, and industry experience to design practical digital solutions that deliver measurable business value."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* Company overview */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title={<>Technology Expertise Meets <span className="text-blue-bright">Business Understanding</span></>}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-graytext">
                <p>
                  From process re-engineering and application development to cloud, analytics, AI,
                  digital infrastructure, and marketing, we support organizations across their
                  complete digital transformation journey.
                </p>
                <p>
                  Our team brings together decades of combined experience in technology and business
                  domains, enabling us to design solutions that are not only technically robust but
                  also practically aligned with how your business actually works.
                </p>
                <p>
                  We believe digital transformation is not about adopting technology for its own sake.
                  It is about creating a connected, intelligent, and efficient business environment
                  where people, processes, applications, and data work together to drive growth.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" icon>Get in Touch</Button>
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="IT professional examining data servers in a modern data center"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose iiiQbets */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Why Choose iiiQbets"
            title={<>Technology. Experience. Excellence. <span className="text-blue-bright">Integrity.</span></>}
            subtitle="Six principles that define how we work and why businesses trust us with their digital transformation."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.num}
                variants={staggerItem}
                className="iiq-why-card group rounded-2xl border border-navy-deep/8 bg-white p-6 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-lg"
              >
                <span className="font-display text-3xl font-extrabold text-navy-deep/10 transition-colors group-hover:text-blue-bright/20">
                  {item.num}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graytext">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProcessReengineering />

      {/* Transformation philosophy */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Our Philosophy"
            title={<>How We Approach <span className="text-blue-bright">Digital Transformation</span></>}
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-deep/5 text-sm font-extrabold text-navy-light">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-deep">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-graytext">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="iiq-gradient-primary py-16 sm:py-20">
        <div className="iiq-container text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-section-heading font-extrabold text-white">
              Ready to Work Together?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Let's discuss how iiiQbets can help your business transform, grow, and thrive in the digital age.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="white" icon>Talk to Our Experts</Button>
              <Button to="/services" variant="whiteOutline">Explore Services</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
