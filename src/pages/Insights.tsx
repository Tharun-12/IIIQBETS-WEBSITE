import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { Clock, ArrowRight } from 'lucide-react';

const categories = [
  'Digital Transformation',
  'Business Intelligence',
  'Cloud',
  'AI & Automation',
  'Enterprise Technology',
  'Digital Marketing',
];

export default function Insights() {
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

      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="rounded-lg border border-navy-deep/15 px-4 py-2 text-sm font-medium text-darktext transition-colors hover:border-blue-bright hover:bg-navy-deep hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Placeholder content */}
          <div className="mt-16 text-center">
            <Reveal>
              <div className="mx-auto max-w-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-deep/5 mx-auto">
                  <Clock className="h-8 w-8 text-navy-light" />
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
                <div className="iiq-insight-card group rounded-2xl border border-navy-deep/8 bg-offwhite p-6 transition-all duration-300 hover:border-blue-bright/30">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-bright">
                    {cat}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy-deep">
                    Article Title Placeholder
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graytext">
                    This space will feature insights and articles on {cat.toLowerCase()}.
                    Content will be added as it becomes available.
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-graytext">
                    Coming Soon
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-60" />
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
