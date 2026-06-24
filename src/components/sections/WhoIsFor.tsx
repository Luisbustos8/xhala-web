'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const whoIsForItems = [
  'quieres ganar fuerza, movilidad y control corporal',
  'buscas una forma de entrenar cuidada, guiada y adaptada',
  'has estado un tiempo sin hacer ejercicio y quieres retomar con seguridad',
  'notas dolor de espalda, rigidez, malas posturas o sobrecargas',
  'quieres tonificar y sentirte más ágil, sin machacarte',
  'estás embarazada y quieres seguir cuidándote y prepararte para el parto',
  'acabas de ser mamá y quieres recuperar tu cuerpo con calma y acompañamiento',
  'buscas un espacio donde combinar movimiento y cuidado terapéutico',
];

const WhoIsFor = () => {
  return (
    <Section id="para-quien-es" variant="default" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#96e3d8]/5 pointer-events-none" />

      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          <Heading level="h2" className="mb-6 text-center">
            Para quién es Xhala
          </Heading>

          <motion.p
            className="text-2xl text-gray-700 leading-relaxed mb-16 text-center font-light bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Xhala es para ti si…
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoIsForItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#96e3d8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhoIsFor;
