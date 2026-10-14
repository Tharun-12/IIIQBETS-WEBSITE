import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { products } from '@/data/products';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';
import Gallery from '@/components/Productcompo/Gallery';

export default function Products() {
  return (
    <>
      <SEO
        title="Products | iiiQbets"
        description="Powerful business applications — ERP, CRM, POS, and Sales Force Automation. Manage your business operations efficiently and scale with growth."
        canonical="https://iiiqbets.com/products"
        ogTitle="Powerful Business Applications | iiiQbets"
        ogDescription="Enterprise-grade software products designed to manage your business operations efficiently."
      />

      <PageHero
        eyebrow="Our Products"
        title="Powerful Business Applications"
        description="Enterprise-grade software products designed to manage your business operations efficiently and scale with your growth."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <SectionHeading
            eyebrow="Product Suite"
            title={<>Four Products. <span className="text-blue-bright">Complete Business Coverage.</span></>}
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {products.map((product) => {
              const IconComponent = (Icons[product.icon as keyof typeof Icons] || Icons.Box) as Icons.LucideIcon;
              return (
                <motion.div key={product.slug} variants={staggerItem}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="iiq-product-card group flex h-full flex-col rounded-2xl border border-navy-deep/8 bg-white p-8 transition-all duration-300 hover:border-blue-bright/30 hover:shadow-xl hover:shadow-navy-deep/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-deep to-navy-light transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="h-7 w-7 text-cyan" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-graytext transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-bright" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-navy-deep">{product.shortTitle}</h3>
                    <p className="mt-2 text-sm font-semibold text-blue-bright">{product.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-graytext">{product.heroDescription}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.features.slice(0, 4).map((f) => (
                        <span key={f} className="rounded bg-offwhite px-2.5 py-1 text-xs text-graytext">
                          {f}
                        </span>
                      ))}
                      <span className="rounded bg-offwhite px-2.5 py-1 text-xs text-graytext">
                        +{product.features.length - 4} more
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <Gallery />
          
        </div>
      </section>
    </>
  );
}
