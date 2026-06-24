'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100vh] flex items-center justify-center pt-42 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#96e3d8]/10" />
      <div className="absolute inset-0 bg-[url('/salaPilatesMaquina.jpeg')] bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/90 to-[#96e3d8]/20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#96e3d8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#96e3d8]/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-8 py-4 mb-10 text-sm font-semibold bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] text-black rounded-full shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Centro de Pilates y Osteopatía en Navalcarnero
            </motion.span>
          </motion.div>

          <Heading level="h1" animate={false}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Movimiento, fuerza y cuidado para sentirte bien en tu cuerpo
            </motion.div>
          </Heading>

          <motion.p
            className="mt-10 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Pilates máquinas, pilates suelo, barre, osteopatía, prenatal, postparto y presoterapia en Navalcarnero.
          </motion.p>

          <motion.p
            className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            En Xhala trabajamos desde una visión global del cuerpo, combinando ejercicio, control, fuerza y cuidado terapéutico para ayudarte a sentirte mejor en tu día a día.
          </motion.p>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] hover:from-[#7ac9be] hover:to-[#96e3d8] shadow-xl"
            >
              Quiero información
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-[#96e3d8] hover:bg-[#96e3d8]/10"
            >
              Reservar / Contactar
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
