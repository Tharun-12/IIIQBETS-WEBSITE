import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { products } from '@/data/products';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainNavItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', hasChildren: true },
  { label: 'Products', to: '/products', hasChildren: true },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technology', to: '/technology' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    onClose();
    setExpandedItem(null);
  }, [location.pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const getChildren = (label: string) => {
    if (label === 'Services') return services.map((s) => ({ label: s.shortTitle, to: `/services/${s.slug}` }));
    if (label === 'Products') return products.map((p) => ({ label: p.shortTitle, to: `/products/${p.slug}` }));
    return [];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-navy-deep/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="iiq-mobile-menu fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-sm flex-col bg-navy-deep lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Link to="/" className="flex items-center gap-2" onClick={onClose}>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/20">
                  <span className="font-display text-sm font-extrabold text-cyan">iiiQ</span>
                </div>
                <span className="font-display text-xl font-extrabold text-white">iiiQbets</span>
              </Link>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    {item.hasChildren ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedItem(expandedItem === item.label ? null : item.label)
                          }
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5"
                          aria-expanded={expandedItem === item.label}
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedItem === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              <li>
                                <Link
                                  to={item.to}
                                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-cyan transition-colors hover:bg-white/5"
                                  onClick={onClose}
                                >
                                  View All
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </li>
                              {getChildren(item.label).map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.to}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                                    onClick={onClose}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.to}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="border-t border-white/10 p-5">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-white"
                onClick={onClose}
              >
                Talk to Our Experts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
