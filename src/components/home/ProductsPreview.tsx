import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { products } from '@/data/products';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import * as Icons from 'lucide-react';

export default function ProductsPreview() {
  return (
    <section className="iiq-products-preview bg-white py-20 sm:py-28">
      <div className="iiq-container">
        <SectionHeading
          eyebrow="Our Products"
          title={<>Powerful <span className="text-blue-bright">Business Applications</span></>}
          subtitle="Enterprise-grade software products designed to manage your business operations efficiently and scale with your growth."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => {
            const IconComponent = (Icons[product.icon as keyof typeof Icons] || Icons.Box) as Icons.LucideIcon;
            return (
              <motion.div key={product.slug} variants={staggerItem}>
                <Link
                  to={`/products/${product.slug}`}
                  className="iiq-product-card group flex h-full flex-col rounded-2xl border border-navy-deep/8 bg-offwhite p-6 transition-all duration-300 hover:border-cyan/40 hover:shadow-xl hover:shadow-navy-deep/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-deep to-navy-light transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-deep">{product.shortTitle}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-graytext">
                    {product.tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-bright">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
