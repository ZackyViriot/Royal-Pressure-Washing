import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <img 
              src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-1/637424558_122102489763263468_4349248179243756201_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=hDhkTJ6rIzcQ7kNvwHS5rQM&_nc_oc=AdkUBW71xUKjJRVmin_Ghyreq6SNYEbcRB4j2MLvEnqk1oIb6Kcu8pdrfQCObizqtHxEFWBQabCU1K52G5-nX0UO&_nc_zt=24&_nc_ht=scontent-den2-1.xx&_nc_gid=MIcX2d5g1woOAA6dib-mbw&_nc_ss=8&oh=00_Afykqy2Vy9mHTvj0TgD64UqYlc2SpiuE7yYnc91UZoWcvA&oe=69AE8003" 
              alt="Royal Pressure Washing Logo" 
              className="h-12 w-12 rounded-full border-2 border-gold object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="font-heading font-bold text-xl tracking-tight text-white hidden sm:block">
              ROYAL <span className="text-royal-blue">PRESSURE WASHING</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-hover text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-gold hover:bg-white/5 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center mt-4 bg-gold hover:bg-gold-hover text-black font-bold py-3 px-6 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
