import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import clsx from 'clsx';
import logo from '../../assets/logo.JPEG';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Majestix Drive Logo" className="h-10 md:h-12 w-auto object-contain rounded-md shadow-sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-secondary',
                location.pathname === link.path ? 'text-secondary font-semibold' : (isScrolled ? 'text-dark' : 'text-white/90')
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:6381656491" className={clsx("flex items-center gap-2 text-sm font-medium transition-colors hover:text-secondary", isScrolled ? "text-dark" : "text-white")}>
            <Phone size={16} />
            <span>6381656491</span>
          </a>
          <Link
            to="/contact"
            className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-button text-sm font-semibold transition-colors shadow-[0_4px_14px_0_rgba(8,26,45,0.39)] hover:shadow-[0_6px_20px_rgba(19,93,255,0.23)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={clsx("md:hidden p-2", isScrolled ? "text-dark" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-3 px-4 text-dark font-medium border-b border-gray-50 last:border-0 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-4">
                <a href="tel:6381656491" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 text-dark font-medium">
                  <Phone size={18} />
                  <span>Call 6381656491</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-primary text-white text-center py-3 rounded-xl font-button font-semibold"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
