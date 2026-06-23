'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { MuscleIcon, PainIcon, BrainIcon, BarreIcon } from '../icons/TargetIcon';

const Disciplines = () => {
  return (
    <Section id="disciplinas" variant="default" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#96e3d8]/5 pointer-events-none" />
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          <Heading level="h2" className="mb-16 text-center">
            Nuestras Disciplinas
          </Heading>
          
          <motion.p
            className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            En Xhala entendemos el bienestar como un todo: cuerpo, mente y energía en equilibrio. Por eso ofrecemos diferentes disciplinas que, aunque únicas en su esencia, se complementan de manera natural y profunda.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <MuscleIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Pilates</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  El Pilates es una técnica que fortalece desde el centro del cuerpo, mejora la postura y aporta conciencia en cada movimiento. Trabajamos tanto en suelo como en máquinas, siempre en grupos reducidos, para garantizar una práctica segura y adaptada a cada persona.
                </p>
              </div>
            </motion.div>

            <motion.div
className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <PainIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Osteopatía</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  La Osteopatía es el pilar terapéutico de nuestro centro. A través de una visión global del organismo, busca el origen de las tensiones y bloqueos que afectan a la salud, favoreciendo la capacidad natural del cuerpo para autorregularse y sanar.
                </p>
              </div>
            </motion.div>

            <motion.div
className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <BarreIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Barre</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  El Barre es una disciplina dinámica que combina la fluidez de la danza, la precisión del pilates y la intensidad del entrenamiento funcional. Es una forma divertida y consciente de mejorar la fuerza, la coordinación y la resistencia.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20 backdrop-blur-xl p-16 rounded-3xl mt-16 border border-[#96e3d8]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-xl">
                <BrainIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black text-center bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Nuestra Filosofía</h3>
            <p className="text-gray-700 leading-relaxed text-xl text-center max-w-3xl mx-auto">
              La unión de estas técnicas no es casual: en Xhala creemos que el movimiento y la terapia manual se potencian mutuamente. El pilates y el barre fortalecen y corrigen patrones de movimiento, mientras que la osteopatía libera restricciones y restablece el equilibrio del cuerpo.
            </p>
          </motion.div>

          <motion.p
            className="text-4xl leading-relaxed mt-4 text-center max-w-4xl mx-auto font-caveat tracking-wide bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Nuestro mayor propósito es acompañarte en este camino, combinando herramientas que no se limitan a entrenar el cuerpo, sino que lo cuidan, lo entienden y lo transforman.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
};

export default Disciplines;
