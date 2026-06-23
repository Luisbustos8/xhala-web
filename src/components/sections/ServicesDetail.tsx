'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { MuscleIcon, YogaIcon, BarreIcon, PilatesIcon } from '../icons/TargetIcon';

const ServicesDetail = () => {
  return (
    <Section id="servicios-detallados" variant="light" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#96e3d8]/5 pointer-events-none" />
      
      <Container>
        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50">
              <div className="flex items-center gap-8 mb-10">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                    <PilatesIcon className="w-14 h-14 text-white" />
                  </div>
                </div>
                <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                  Pilates Máquina en Xhala
                </Heading>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala entendemos el Pilates Máquina como un método de movimiento consciente que combina precisión, control y fluidez. Trabajamos siempre en grupos reducidos, lo que nos permite adaptar cada ejercicio a las necesidades y capacidades de cada persona.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Las máquinas, como el Reformer, ofrecen un sistema de resistencia y asistencia que facilita el aprendizaje de la técnica, potencia la fuerza del centro, mejora la postura y aporta mayor movilidad y estabilidad articular. Al mismo tiempo, permiten liberar tensiones y corregir patrones de movimiento que, a menudo, son la causa de dolores o sobrecargas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Para nosotros, el pilates máquina no es únicamente un entrenamiento físico, sino una forma de educar al cuerpo en un movimiento más eficiente, armónico y saludable. Cada práctica es una oportunidad para reconectar, ganar energía y transformar la manera en la que nos relacionamos con nuestro propio cuerpo.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50">
              <div className="flex items-center gap-8 mb-10">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                    <YogaIcon className="w-14 h-14 text-white" />
                  </div>
                </div>
                <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                  Pilates Suelo en Xhala
                </Heading>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  El Pilates Suelo es la base de este método de movimiento consciente. En Xhala lo trabajamos en grupos reducidos, lo que permite cuidar cada detalle de la práctica y adaptarla al nivel de cada persona.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Con ejercicios realizados sobre colchoneta, sin la ayuda de máquinas, se desarrolla la fuerza del centro, la movilidad de la columna, la estabilidad de las articulaciones y una mayor conciencia corporal. La precisión y la respiración son claves para que cada movimiento tenga un efecto real y duradero en el bienestar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Para nosotros, el pilates suelo es un camino hacia el control del cuerpo desde dentro hacia fuera. Una práctica que no solo fortalece, sino que enseña a moverse con mayor armonía y eficiencia en la vida cotidiana.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50">
              <div className="flex items-center gap-8 mb-10">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                    <BarreIcon className="w-14 h-14 text-white" />
                  </div>
                </div>
                <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                  Barre en Xhala
                </Heading>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  El Barre es una disciplina que fusiona la elegancia de la danza con la precisión del pilates y la intensidad del entrenamiento funcional. En Xhala lo entendemos como una forma dinámica y divertida de trabajar todo el cuerpo desde la conciencia del movimiento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Las clases se realizan al ritmo de la música, utilizando la barra como apoyo, y están diseñadas para mejorar la fuerza, la resistencia, la coordinación y la postura. Al ser un entrenamiento fluido y energético, aporta vitalidad y, al mismo tiempo, equilibrio.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Para nosotros, el barre no es solo un ejercicio físico, sino una experiencia que conecta con la sensación de ligereza y disfrute en el movimiento, transformando el esfuerzo en energía positiva.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesDetail;
