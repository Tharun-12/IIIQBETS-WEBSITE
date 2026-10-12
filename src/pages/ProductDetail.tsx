import { useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import { Check, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { products } from '@/data/products';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const IconComponent = (Icons[product.icon as keyof typeof Icons] || Icons.Box) as Icons.LucideIcon;

  return (
    <>
      <SEO
        title={`${product.shortTitle} Solutions | iiiQbets`}
        description={product.tagline}
        canonical={`https://iiiqbets.com/products/${product.slug}`}
        ogTitle={`${product.title} | iiiQbets`}
        ogDescription={product.heroDescription}
      />

      <PageHero
        eyebrow="Product"
        title={product.heroHeading}
        description={product.heroDescription}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: product.shortTitle },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" icon>Request a Demo</Button>
          <Button to="/products" variant="outline">View All Products</Button>
        </div>
      </PageHero>

      {/* Overview + Image */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title={<>What is <span className="text-blue-bright">{product.shortTitle}?</span></>}
              />
              <p className="mt-6 text-base leading-relaxed text-graytext">{product.overview}</p>
              <div className="mt-8">
                <Button to="/contact" icon>Get Started</Button>
              </div>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={`${product.shortTitle} solution by iiiQbets`}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Features"
            title={<>Core <span className="text-blue-bright">Features</span></>}
            align="center"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {product.features.map((feature) => (
              <motion.div
                key={feature}
                variants={staggerItem}
                className="flex items-center gap-3 rounded-xl border border-navy-deep/8 bg-white p-4 transition-colors hover:border-blue-bright/30"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                  <Check className="h-4 w-4 text-blue-bright" />
                </div>
                <span className="text-sm font-medium text-darktext">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits + Use Cases */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title={<>Why Choose <span className="text-blue-bright">{product.shortTitle}</span></>}
              />
              <div className="mt-6 space-y-3">
                {product.benefits.map((benefit) => (
                  <Reveal key={benefit}>
                    <div className="flex items-start gap-3 rounded-lg border border-navy-deep/5 bg-offwhite px-4 py-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-bright" />
                      <span className="text-sm text-darktext">{benefit}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Use Cases"
                title={<>Who Is It <span className="text-blue-bright">For?</span></>}
              />
              <div className="mt-6 space-y-3">
                {product.useCases.map((useCase) => (
                  <Reveal key={useCase}>
                    <div className="flex items-start gap-3 rounded-lg border border-navy-deep/5 bg-offwhite px-4 py-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-bright/10 text-xs font-bold text-blue-bright">→</span>
                      <span className="text-sm text-darktext">{useCase}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-navy-deep py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Workflow"
            title={<>How <span className="text-cyan">{product.shortTitle}</span> Works</>}
            variant="light"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {product.workflow.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-3xl font-extrabold text-cyan/30">{step.step}</span>
                  <h3 className="mt-2 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology + Why iiiQbets */}
      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Technology"
                title={<>Built With <span className="text-blue-bright">Modern Technology</span></>}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {product.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-navy-deep/10 bg-white px-4 py-2.5 text-sm font-medium text-darktext transition-colors hover:border-blue-bright/40 hover:text-blue-bright"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Why iiiQbets"
                title={<>Why Choose <span className="text-blue-bright">Us?</span></>}
              />
              <div className="mt-6 space-y-3">
                {product.whyIiiQbets.map((reason) => (
                  <Reveal key={reason}>
                    <div className="flex items-start gap-3 rounded-lg border border-navy-deep/5 bg-offwhite px-4 py-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-bright" />
                      <span className="text-sm text-darktext">{reason}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="iiq-container-narrow">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Frequently Asked <span className="text-blue-bright">Questions</span></>}
            align="center"
          />
          <div className="mt-12 space-y-4">
            {product.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="iiq-gradient-primary py-16 sm:py-20">
        <div className="iiq-container text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-section-heading font-extrabold text-white">
              Want to See {product.shortTitle} in Action?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Request a demo and our team will walk you through how {product.shortTitle} can work for your business.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="white" icon>Request a Demo</Button>
              <Button to="/products" variant="whiteOutline">View All Products</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="iiq-faq-item overflow-hidden rounded-xl border border-navy-deep/10 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-navy-deep">{question}</span>
        {open ? <Minus className="h-5 w-5 flex-shrink-0 text-blue-bright" /> : <Plus className="h-5 w-5 flex-shrink-0 text-graytext" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-graytext">{answer}</p>
      </motion.div>
    </div>
  );
}
