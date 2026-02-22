import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gifts', label: 'Gifts' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      <div className="max-w-[120rem] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col"
            >
              <h1 className="font-heading text-3xl md:text-4xl text-foreground">
                AARTHI STUDIO
              </h1>
              <span className="font-paragraph text-xs text-primary tracking-wider">
                & VEDIO
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative"
              >
                <span className={`font-paragraph text-base transition-colors duration-300 ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}>
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:9442715605" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="font-paragraph text-sm">9442715605</span>
            </a>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border border-primary text-primary rounded-lg font-paragraph text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-6 pt-8 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-paragraph text-lg transition-colors duration-300 ${
                      isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:9442715605"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-paragraph text-base">9442715605</span>
                </a>
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-8 py-3 bg-transparent border border-primary text-primary rounded-lg font-paragraph text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Book Now
                  </button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
