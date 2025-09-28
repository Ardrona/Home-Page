import React, { useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalModal } from '@/components/shared/CalModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-xl border-b border-slate-200 shadow-lg">
      <div className="container-ardrona">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="symbol" size="xl" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium focus-ring rounded-md px-2 py-1"
              >
                {item.label}
              </a>
            ))}
            <CalModal 
              variant="outline" 
              size="lg"
              className="btn-primary ml-4 max-w-fit"
            >
              Get Started
            </CalModal>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary focus-ring"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/30 backdrop-blur-xl border-b border-slate-200 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary transition-colors duration-200 focus-ring rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <CalModal 
                variant="outline" 
                size="lg"
                className="btn-primary w-full max-w-fit mx-auto"
              >
                Get Started
              </CalModal>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
export default Navbar;