// import { useState, useEffect } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
// import { services } from '@/data/services';
// import { products } from '@/data/products';

// interface NavbarProps {
//   onMenuClick: () => void;
// }

// const navItems = [
//   { label: 'Home', to: '/' },
//   { label: 'About Us', to: '/about' },
//   { label: 'Services', to: '/services', hasDropdown: true },
//   { label: 'Products', to: '/products', hasDropdown: true },
//   { label: 'Solutions', to: '/solutions' },
//   { label: 'Industries', to: '/industries', hasDropdown: true },
//   { label: 'Technology', to: '/technology' },
//   { label: 'Insights', to: '/insights' },
//   { label: 'Careers', to: '/careers' },
//   { label: 'Contact', to: '/contact' },
// ];

// export default function Navbar({ onMenuClick }: NavbarProps) {
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 24);
//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setOpenDropdown(null);
//   }, [location.pathname]);

//   const isHome = location.pathname === '/';
//   const isTransparent = isHome && !scrolled;

//   const getDropdownItems = (label: string) => {
//     if (label === 'Services') {
//       return services.map((s) => ({ label: s.shortTitle, to: `/services/${s.slug}` }));
//     }
//     if (label === 'Products') {
//       return products.map((p) => ({ label: p.shortTitle, to: `/products/${p.slug}` }));
//     }
//     if (label === 'Industries') {
//       return [
//         { label: 'Information Technology', to: '/industries' },
//         { label: 'Retail & Distribution', to: '/industries' },
//         { label: 'Business & Finance', to: '/industries' },
//         { label: 'Manufacturing', to: '/industries' },
//         { label: 'SMEs & Startups', to: '/industries' },
//         { label: 'Enterprise Organizations', to: '/industries' },
//       ];
//     }
//     return [];
//   };

//   return (
//     <header
//       className={`iiq-navbar fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
//         isTransparent
//           ? 'bg-transparent py-4'
//           : 'border-b border-white/10 bg-navy-deep/95 py-2.5 backdrop-blur-md'
//       }`}
//     >
//       <nav className="iiq-container flex items-center justify-between" aria-label="Main navigation">
//         {/* Logo */}
//         <Link to="/" className="iiq-navbar__logo flex items-center gap-2" aria-label="iiiQbets home">
//           <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/20 backdrop-blur-sm">
//             <span className="font-display text-sm font-extrabold text-cyan">iiiQ</span>
//           </div>
//           <span className="font-display text-xl font-extrabold text-white">
//             iiiQbets
//           </span>
//         </Link>

//         {/* Desktop nav */}
//         <ul className="iiq-navbar__links hidden items-center gap-1 lg:flex">
//           {navItems.map((item) => (
//             <li
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <NavLink
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `iiq-navbar__link flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
//                     isActive
//                       ? 'text-cyan'
//                       : 'text-white/80 hover:text-white'
//                   }`
//                 }
//               >
//                 {item.label}
//                 {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
//               </NavLink>

//               {/* Active indicator */}
//               <span className="absolute bottom-0 left-3 right-3 h-px bg-cyan opacity-0 transition-opacity duration-300 [.is-active_&]:opacity-100" />

//               {/* Dropdown */}
//               {item.hasDropdown && openDropdown === item.label && (
//                 <AnimatePresence>
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="iiq-navbar__dropdown absolute left-0 top-full pt-2"
//                   >
//                     <div className="w-64 overflow-hidden rounded-xl border border-navy-light/20 bg-white shadow-2xl shadow-navy-deep/20">
//                       <ul className="p-2">
//                         {getDropdownItems(item.label).map((sub) => (
//                           <li key={sub.label}>
//                             <Link
//                               to={sub.to}
//                               className="iiq-navbar__dropdown-link group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-darktext transition-colors hover:bg-offwhite hover:text-navy-light"
//                             >
//                               {sub.label}
//                               <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-60" />
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* CTA + Mobile toggle */}
//         <div className="flex items-center gap-3">
//           <Link
//             to="/contact"
//             className="iiq-navbar__cta hidden rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-cyan/20 sm:inline-block lg:inline-block"
//           >
//             Talk to Our Experts
//           </Link>
//           <button
//             onClick={onMenuClick}
//             className="iiq-navbar__menu-btn flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
//             aria-label="Open menu"
//             aria-expanded="false"
//           >
//             <Menu className="h-5 w-5" />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }




// import { useState, useEffect } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Menu, ChevronDown, ArrowRight } from 'lucide-react';
// import { services } from '@/data/services';
// import { products } from '@/data/products';

// // 👇 IMPORT YOUR LOGO HERE
// import logo from '@/assets/logo.webp'; 

// interface NavbarProps {
//   onMenuClick: () => void;
// }

// const navItems = [
//   { label: 'Home', to: '/' },
//   { label: 'About Us', to: '/about' },
//   { label: 'Services', to: '/services', hasDropdown: true },
//   { label: 'Products', to: '/products', hasDropdown: true },
//   { label: 'Solutions', to: '/solutions' },
//   { label: 'Industries', to: '/industries', hasDropdown: true },
//   { label: 'Technology', to: '/technology' },
//   { label: 'Insights', to: '/insights' },
//   { label: 'Careers', to: '/careers' },
//   { label: 'Contact', to: '/contact' },
// ];

// export default function Navbar({ onMenuClick }: NavbarProps) {
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 24);
//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setOpenDropdown(null);
//   }, [location.pathname]);

//   const isHome = location.pathname === '/';
//   const isTransparent = isHome && !scrolled;

//   const getDropdownItems = (label: string) => {
//     if (label === 'Services') {
//       return services.map((s) => ({ label: s.shortTitle, to: `/services/${s.slug}` }));
//     }
//     if (label === 'Products') {
//       return products.map((p) => ({ label: p.shortTitle, to: `/products/${p.slug}` }));
//     }
//     if (label === 'Industries') {
//       return [
//         { label: 'Information Technology', to: '/industries' },
//         { label: 'Retail & Distribution', to: '/industries' },
//         { label: 'Business & Finance', to: '/industries' },
//         { label: 'Manufacturing', to: '/industries' },
//         { label: 'SMEs & Startups', to: '/industries' },
//         { label: 'Enterprise Organizations', to: '/industries' },
//       ];
//     }
//     return [];
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
//         isTransparent
//           ? 'bg-transparent py-5'
//           : 'border-b border-white/5 bg-[#0A1128]/95 py-3 shadow-lg shadow-black/40 backdrop-blur-xl'
//       }`}
//     >
//       <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        
//         {/* Logo Section - Enhanced for Visibility */}
//         <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]" aria-label="iiiQbets home">
//           {/* White container ensures the dark text in the logo is visible against the dark navbar */}
//           <div className="flex h-12 items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-md shadow-black/20">
//             <img 
//               src={logo} 
//               alt="iiiQbets Logo" 
//               className="h-8 w-auto object-contain" 
//             />
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden items-center gap-1 lg:flex">
//           {navItems.map((item) => (
//             <li
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <NavLink
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `group flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${
//                     isActive
//                       ? 'text-cyan-400 bg-cyan-400/10'
//                       : 'text-slate-200 hover:bg-white/5 hover:text-white'
//                   }`
//                 }
//               >
//                 {item.label}
//                 {item.hasDropdown && (
//                   <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180 text-cyan-400' : 'opacity-50 group-hover:opacity-100'}`} />
//                 )}
//               </NavLink>

//               {/* Dropdown Menu */}
//               {item.hasDropdown && openDropdown === item.label && (
//                 <AnimatePresence>
//                   <motion.div
//                     initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: 8, scale: 0.98 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     className="absolute left-0 top-full pt-4"
//                   >
//                     <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0A1128]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">
//                       <ul className="p-2">
//                         {getDropdownItems(item.label).map((sub) => (
//                           <li key={sub.label}>
//                             <Link
//                               to={sub.to}
//                               className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400"
//                             >
//                               {sub.label}
//                               <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* CTA & Mobile Menu Toggle */}
//         <div className="flex items-center gap-4">
//           <Link
//             to="/contact"
//             className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 sm:inline-block"
//           >
//             Talk to Our Experts
//           </Link>
          
//           <button
//             onClick={onMenuClick}
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
//             aria-label="Open menu"
//             aria-expanded="false"
//           >
//             <Menu className="h-5 w-5" />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }


import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, ChevronDown, ArrowRight, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { services } from '@/data/services';
import { products } from '@/data/products';

// 👇 IMPORT YOUR LOGO HERE
import logo from '@/assets/logo.webp'; 

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

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
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
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Top Info Bar */}
      <div
        className={`w-full border-b transition-all duration-500 ${
          isTransparent
            ? 'border-white/5 bg-transparent'
            : 'border-white/5 bg-[#060B1A]'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          {/* Left: Registered Legal Name */}
          <div className="hidden items-center gap-2 text-slate-400 md:flex">
            <span className="font-medium text-slate-300">KRIKA MKB CORPORATION PVT LTD</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Registered Legal Name</span>
          </div>

          {/* Right: Contact & Social */}
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <div className="flex items-center gap-4">
              <a
                href="tel:+918041119030"
                className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-cyan-400"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">+91 80411 19030</span>
              </a>
              <a
                href="mailto:contact@iiiqbets.com"
                className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-cyan-400"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">contact@iiiqbets.com</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent py-4'
            : 'border-b border-white/5 bg-[#0A1128]/95 py-3 shadow-lg shadow-black/40 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]" aria-label="iiiQbets home">
            <div className="flex h-12 items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-md shadow-black/20">
              <img 
                src={logo} 
                alt="iiiQbets Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
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
                    `group flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180 text-cyan-400' : 'opacity-50 group-hover:opacity-100'}`} />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.label && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-4"
                    >
                      <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0A1128]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                        <ul className="p-2">
                          {getDropdownItems(item.label).map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.to}
                                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-300 transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400"
                              >
                                {sub.label}
                                <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
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

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 sm:inline-block"
            >
              Talk to Our Experts
            </Link>
            
            <button
              onClick={onMenuClick}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}