import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Digital Transformation', to: '/services' },
      { label: 'Data Analytics', to: '/services/data-analytics' },
      { label: 'Cloud Services', to: '/services/cloud-services' },
      { label: 'Application Development', to: '/services/application-development' },
      { label: 'Business Intelligence', to: '/services/data-analytics' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'ERP', to: '/products/erp' },
      { label: 'CRM', to: '/products/crm' },
      { label: 'POS', to: '/products/pos' },
      { label: 'SFA', to: '/products/sfa' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Products', to: '/products' },
      { label: 'Industries', to: '/industries' },
      { label: 'Technology', to: '/technology' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="iiq-footer relative overflow-hidden bg-navy-deep">
      {/* Decorative top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      {/* Main footer */}
      <div className="iiq-container py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2" aria-label="iiiQbets home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/20">
                <span className="font-display text-sm font-extrabold text-cyan">iiiQ</span>
              </div>
              <span className="font-display text-2xl font-extrabold text-white">iiiQbets</span>
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-cyan">
              Your Partner for Digital Transformation
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              iiiQbets helps organizations transform the way they operate, engage with customers,
              manage data, and grow their business through technology.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <a href="mailto:contact@iiiqbets.com" className="hover:text-white">
                  contact@iiiqbets.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <div>
                  <a href="tel:+918041119030" className="block hover:text-white">+91 80411 19030</a>
                  <a href="tel:+918792920129" className="block hover:text-white">+91 87929 20129</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <span>Skyline Beverly Park, D 402, Amruthahalli Main Road, Bangalore – 560092</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="iiq-footer__link text-sm text-white/60 transition-colors hover:text-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/60">
            Ready to start your digital transformation journey?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-white"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="iiq-container py-5">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
            <p>© iiiQbets. All rights reserved.</p>
            <p>KRIKA MKB Corporation Private Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
