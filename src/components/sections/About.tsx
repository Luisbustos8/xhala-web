'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { BrainIcon, EnergyIcon } from '../icons/TargetIcon';

const About = () => {
  return (
    <Section id="sobre-nosotros" variant="light" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#96e3d8]/5 pointer-events-none" />
      
      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          <Heading level="h2" className="mb-16 text-center">
            Sobre Xhala
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <BrainIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Nuestra Filosofía</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Xhala es un espacio de movimiento y cuidado integral, donde el cuerpo y la mente encuentran equilibrio. A través de pilates, osteopatía y técnicas de bienestar, acompañamos a cada persona en su propio proceso, con grupos reducidos y atención personalizada.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <EnergyIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Nuestro Objetivo</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Nuestro objetivo es que respires, fortalezcas y te reconectes contigo mismo en un entorno cercano, profesional y lleno de calma.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
