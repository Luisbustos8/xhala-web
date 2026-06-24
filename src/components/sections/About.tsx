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
          <Heading level="h2" className="mb-6 text-center">
            Sobre Xhala
          </Heading>

          <motion.p
            className="text-2xl text-gray-700 leading-relaxed mb-8 text-center font-light bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Un espacio para cuidarte desde una visión global del cuerpo
          </motion.p>

          <motion.div
            className="bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-white/50 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Xhala nace de la idea de que el cuerpo no se trabaja por partes, sino como un conjunto.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Por eso nuestro enfoque une movimiento, fuerza, control, conciencia corporal y cuidado terapéutico, para acompañarte de una forma más completa y personalizada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Queremos que venir a Xhala sea mucho más que hacer una clase: que sea un momento para parar, reconectar contigo, ganar bienestar y sentirte mejor en tu cuerpo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Trabajamos con disciplinas como pilates máquinas, pilates suelo, barre, osteopatía, pilates prenatal, postparto y presoterapia, adaptándonos a diferentes etapas, necesidades y objetivos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('/hall.jpeg')] bg-cover bg-center bg-no-repeat" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#96e3d8]/30 to-transparent" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('/sala1.jpeg')] bg-cover bg-center bg-no-repeat" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#96e3d8]/30 to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-8 mb-12">
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-10 md:w-3/4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <BrainIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Nuestra forma de trabajar</h3>
                  <ul className="space-y-3 text-gray-700 leading-relaxed font-light">
                    <li>• Atención cercana y personalizada</li>
                    <li>• Grupos reducidos</li>
                    <li>• Adaptación al nivel y necesidades de cada persona</li>
                    <li>• Acompañamiento en casos con molestias o patologías</li>
                    <li>• Combinación de movimiento y cuidado terapéutico</li>
                    <li>• Trabajo consciente, seguro y bien guiado</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-10 md:w-3/4 md:ml-auto"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <EnergyIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Nuestro objetivo</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Ayudarte a ganar fuerza, movilidad, control y bienestar, cuidando el cuerpo desde el respeto, la técnica y una mirada global.
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
