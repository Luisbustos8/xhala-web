'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const processSteps = [
  {
    step: 1,
    title: 'Primera Consulta',
    description: 'Evaluación inicial completa donde analizamos tu historial, objetivos y necesidades específicas. Te explicamos nuestro enfoque y respondemos todas tus dudas.',
    icon: '👋',
  },
  {
    step: 2,
    title: 'Valoración Personalizada',
    description: 'Realizamos una evaluación física detallada para identificar desequilibrios, limitaciones y áreas de mejora. Creamos un plan adaptado a ti.',
    icon: '🔍',
  },
  {
    step: 3,
    title: 'Plan de Tratamiento',
    description: 'Diseñamos un programa personalizado combinando Pilates terapéutico y osteopatía según tus necesidades. Establecemos objetivos medibles.',
    icon: '📋',
  },
  {
    step: 4,
    title: 'Sesiones de Trabajo',
    description: 'Comenzamos las sesiones con seguimiento continuo. Ajustamos el programa según tu evolución y feedback para optimizar resultados.',
    icon: '💪',
  },
  {
    step: 5,
    title: 'Evaluación de Progreso',
    description: 'Revisamos periódicamente tu evolución con mediciones objetivas. Celebramos los logros y ajustamos objetivos según sea necesario.',
    icon: '📈',
  },
  {
    step: 6,
    title: 'Mantenimiento y Prevención',
    description: 'Una vez alcanzados los objetivos, te proporcionamos herramientas para mantener los resultados y prevenir futuras lesiones.',
    icon: '🎯',
  },
];

const Process = () => {
  return (
    <Section id="proceso" variant="light">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Nuestro Proceso de Trabajo
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Un método estructurado y personalizado para garantizar los mejores resultados 
            en tu camino hacia el bienestar.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#96e3d8]/30" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#96e3d8] rounded-full items-center justify-center text-2xl font-bold text-black z-10">
                  {step.step}
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 lg:pr-16' : 'pl-8 lg:pl-16 lg:ml-auto'}`}>
                  <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#96e3d8] rounded-full flex items-center justify-center text-lg font-bold text-black">
                            {step.step}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <h3 className="hidden lg:block text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`hidden lg:block flex-1 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Listo para comenzar tu transformación?
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Process;
