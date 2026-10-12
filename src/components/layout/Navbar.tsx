import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { products } from '@/data/products';

interface NavbarProps {
  onMenuClick: () => void;
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Products', to: '/products', hasDropdown: true },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries', hasDropdown: true },
  { label: 'Technology', to: '/technology' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const getDropdownItems = (label: string) => {
    if (label === 'Services') {
      return services.map((s) => ({ label: s.shortTitle, to: `/services/${s.slug}` }));
    }
    if (label === 'Products') {
      return products.map((p) => ({ label: p.shortTitle, to: `/products/${p.slug}` }));
    }
    if (label === 'Industries') {
      return [
        { label: 'Information Technology', to: '/industries' },
        { label: 'Retail & Distribution', to: '/industries' },
        { label: 'Business & Finance', to: '/industries' },
        { label: 'Manufacturing', to: '/industries' },
        { label: 'SMEs & Startups', to: '/industries' },
        { label: 'Enterprise Organizations', to: '/industries' },
      ];
    }
    return [];
  };

  return (
    <header
      className={`iiq-navbar fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-4'
          : 'border-b border-white/10 bg-navy-deep/95 py-2.5 backdrop-blur-md'
      }`}
    >
      <nav className="iiq-container flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="iiq-navbar__logo flex items-center gap-2" aria-label="iiiQbets home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/20 backdrop-blur-sm">
            <span className="font-display text-sm font-extrabold text-cyan">iiiQ</span>
          </div>
          <span className="font-display text-xl font-extrabold text-white">
            iiiQbets
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="iiq-navbar__links hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `iiq-navbar__link flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </NavLink>

              {/* Active indicator */}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-cyan opacity-0 transition-opacity duration-300 [.is-active_&]:opacity-100" />

              {/* Dropdown */}
              {item.hasDropdown && openDropdown === item.label && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="iiq-navbar__dropdown absolute left-0 top-full pt-2"
                  >
                    <div className="w-64 overflow-hidden rounded-xl border border-navy-light/20 bg-white shadow-2xl shadow-navy-deep/20">
                      <ul className="p-2">
                        {getDropdownItems(item.label).map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.to}
                              className="iiq-navbar__dropdown-link group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-darktext transition-colors hover:bg-offwhite hover:text-navy-light"
                            >
                              {sub.label}
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-60" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="iiq-navbar__cta hidden rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-cyan/20 sm:inline-block lg:inline-block"
          >
            Talk to Our Experts
          </Link>
          <button
            onClick={onMenuClick}
            className="iiq-navbar__menu-btn flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
