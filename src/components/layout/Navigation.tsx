'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    {
      name: 'Disciplinas',
      dropdown: [
        { name: 'Para quién es', href: '#para-quien-es' },
        { name: 'Nuestras Disciplinas', href: '#disciplinas' },
      ],
    },
    {
      name: 'Servicios',
      dropdown: [
        { name: 'Servicios Detallados', href: '#servicios-detallados' },
        { name: 'Cómo Trabajamos', href: '#proceso' },
        { name: 'Equipo', href: '#equipo' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleDropdownEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white border-b border-gray-200'
      )}
    >
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            aria-label="Xhala Pilates y Osteopatía - Ir al inicio"
          >
            <Image 
              src="/icon.png" 
              alt="Xhala Pilates y Osteopatía" 
              width={150}
              height={150}
              className="h-20 w-auto"
            />
           
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8 pr-4" aria-label="Navegación principal">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                    className="relative"
                  >
                    <motion.button
                      className="text-base font-medium text-black hover:text-[#96e3d8] transition-colors px-4 py-2 focus:outline-none rounded-lg flex items-center gap-1"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <motion.a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleNavClick(e, subItem.href)}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#96e3d8]/10 hover:text-[#96e3d8] transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              {subItem.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-base font-medium text-black hover:text-[#96e3d8] transition-colors px-4 py-2 focus:outline-none rounded-lg"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
            <Button size="md" onClick={(e) => handleNavClick(e, '#contacto')}>Contactar</Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#96e3d8]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#96e3d8] focus:ring-offset-2"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
            id="mobile-menu"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full text-left text-lg font-medium text-black hover:text-[#96e3d8] transition-colors py-2 focus:outline-none rounded-lg flex items-center justify-between"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <motion.a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="block text-base text-gray-600 hover:text-[#96e3d8] transition-colors py-2"
                                whileHover={{ x: 5 }}
                              >
                                {subItem.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-lg font-medium text-black hover:text-[#96e3d8] transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[#96e3d8] focus:ring-offset-2 rounded-lg"
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.a>
                  )}
                </div>
              ))}
              <Button className="w-full mt-6" size="lg" onClick={(e) => handleNavClick(e, '#contacto')}>Contactar</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
