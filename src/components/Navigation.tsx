import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#contact-form' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-purple-600 bg-opacity-95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold">Wishup</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}