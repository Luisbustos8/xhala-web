'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg text-white z-50 border-t border-gray-800"
        role="dialog"
        aria-label="Banner de cookies"
        aria-modal="true"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm md:text-base text-gray-300">
                Utilizamos cookies para mejorar su experiencia de navegación. 
                Al continuar navegando, acepta nuestra{' '}
                <Link 
                  href="/cookies" 
                  className="text-[#96e3d8] hover:text-[#7ac9be] underline font-medium"
                  aria-label="Leer política de cookies"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] text-black font-semibold rounded-xl hover:from-[#7ac9be] hover:to-[#96e3d8] transition-all focus:outline-none focus:ring-2 focus:ring-[#96e3d8] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Aceptar cookies"
              >
                Aceptar
              </button>
              <Link
                href="/cookies"
                className="px-6 py-3 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#96e3d8] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Configurar cookies"
              >
                Configurar
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
