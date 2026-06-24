'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { MuscleIcon, PainIcon, BrainIcon, BarreIcon, YogaIcon, EnergyIcon, Mobility } from '../icons/TargetIcon';

const Disciplines = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicios-detallados');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="disciplinas" variant="default" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#96e3d8]/5 pointer-events-none" />

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          <Heading level="h2" className="mb-6 text-center">
            Nuestras Disciplinas
          </Heading>

          <motion.p
            className="text-2xl text-gray-700 leading-relaxed mb-8 text-center font-light bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Un enfoque global para acompañarte en cada etapa
          </motion.p>

          <motion.p
            className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            En Xhala encontrarás diferentes disciplinas para adaptarnos a lo que tu cuerpo necesita en cada momento.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <MuscleIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Pilates máquinas</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Trabajo en reformer, torre y wunda chair para mejorar fuerza, control, postura y movilidad con un entrenamiento completo, guiado y adaptable.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <YogaIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Pilates suelo</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Sesiones enfocadas en el control corporal, la estabilidad, la fuerza profunda y la conciencia del movimiento.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <BarreIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Barre</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Una disciplina dinámica que combina fuerza, postura, control, resistencia y trabajo de piernas, glúteos y core.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <PainIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Osteopatía</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Terapia manual que no se centra solo en el lugar donde aparece el dolor, sino en cómo está funcionando el cuerpo en conjunto.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <BrainIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Pilates prenatal</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Movimiento y ejercicio adaptado durante el embarazo para cuidar tu cuerpo, mantenerte activa y prepararte para el parto.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <EnergyIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Mamás & bebés</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Clases pensadas para acompañar la recuperación física tras el parto, fortalecer el cuerpo y volver a conectar contigo, con tu bebé contigo.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group p-6 md:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <Mobility className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Presoterapia</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Un tratamiento de drenaje y bienestar que ayuda a mejorar la circulación, aliviar la sensación de piernas cansadas y favorecer la recuperación.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={scrollToServices}
              className="bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] hover:from-[#7ac9be] hover:to-[#96e3d8] text-black font-semibold px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
            >
              Descubrir nuestras disciplinas
            </button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Disciplines;
