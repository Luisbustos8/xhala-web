'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Pilates', href: '#disciplinas' },
      { name: 'Osteopatía', href: '#disciplinas' },
      { name: 'Barre', href: '#disciplinas' },
    ],
    empresa: [
      { name: 'Sobre Xhala', href: '#sobre' },
      { name: 'Nuestro Equipo', href: '#equipo' },
      { name: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Términos de Servicio', href: '/terminos' },
      { name: 'Aviso Legal', href: '/aviso-legal' },
      { name: 'Política de Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <motion.h3
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
               <Image 
              src="/icon.png" 
              alt="Xhala Pilates y Osteopatía" 
              width={80}
              height={80}
              className="h-20 w-auto"
            />
              </motion.h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="flex gap-4">
                <motion.a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#96e3d8] hover:text-black transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.002 21.041c-2.46 0-2.75-.013-3.71-.055a6.583 6.583 0 0 1-2.185-.45a4.619 4.619 0 0 1-2.63-2.631a6.591 6.591 0 0 1-.419-2.187c-.056-.958-.056-1.272-.056-3.713c0-2.467.013-2.755.056-3.71a6.59 6.59 0 0 1 .419-2.184A4.61 4.61 0 0 1 6.11 3.479a6.533 6.533 0 0 1 2.184-.42c.955-.054 1.269-.054 3.708-.054c2.48 0 2.765.013 3.71.054c.748.014 1.49.156 2.19.42a4.615 4.615 0 0 1 2.633 2.632c.267.71.41 1.46.421 2.217c.056.958.056 1.271.056 3.711s-.014 2.76-.056 3.707a6.603 6.603 0 0 1-.42 2.189a4.624 4.624 0 0 1-2.634 2.632c-.7.262-1.439.404-2.186.419c-.955.055-1.268.055-3.714.055Zm-.034-16.453c-2.446 0-2.7.012-3.655.055a4.99 4.99 0 0 0-1.67.311a2.99 2.99 0 0 0-1.718 1.712c-.2.54-.305 1.111-.311 1.687c-.053.969-.053 1.223-.053 3.652c0 2.4.009 2.691.053 3.654c.009.57.114 1.135.311 1.67c.306.787.93 1.409 1.719 1.711a4.92 4.92 0 0 0 1.669.311c.968.056 1.223.056 3.655.056c2.453 0 2.707-.012 3.654-.056a4.962 4.962 0 0 0 1.67-.311a3 3 0 0 0 1.71-1.709c.2-.54.305-1.112.311-1.688h.011c.043-.956.043-1.211.043-3.654c0-2.443-.011-2.7-.054-3.655a5.06 5.06 0 0 0-.311-1.668a3 3 0 0 0-1.71-1.712a4.94 4.94 0 0 0-1.67-.311c-.967-.055-1.22-.055-3.654-.055Zm.034 12.036A4.623 4.623 0 1 1 16.622 12a4.63 4.63 0 0 1-4.62 4.624Zm0-7.626a3 3 0 1 0 3 3a3.007 3.007 0 0 0-3-3Zm4.8-.713a1.078 1.078 0 1 1 .008-2.156a1.078 1.078 0 0 1-.008 2.156Z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#96e3d8] hover:text-black transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1a8 8 0 0 0 8-7.93a8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15l-2.49.66l.66-2.43l-.16-.25a6.6 6.6 0 0 1 10.25-8.17a6.65 6.65 0 0 1 2 4.66a6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05a8.9 8.9 0 0 0 3.39 3a3.85 3.85 0 0 0 2.38.5a2 2 0 0 0 1.33-.94a1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="bg-black border-t border-white/10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} {siteConfig.name}. Todos los derechos reservados.
              </p>
              <a
                href="https://www.malt.es/profile/luisbustos?origin=site_nav_bar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#96e3d8] transition-colors text-xs"
              >
                Desarrollado por Luis Bustos
              </a>
            </div>
            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
