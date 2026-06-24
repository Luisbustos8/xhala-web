'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const processSteps = [
  {
    step: 1,
    title: 'Grupos reducidos',
    description: 'Nos permiten observar mejor, corregir, adaptar y ofrecer una atención mucho más personalizada.',
    icon: '�',
  },
  {
    step: 2,
    title: 'Adaptación real',
    description: 'Cada cuerpo parte de un punto distinto. Adaptamos el trabajo al nivel, la experiencia, las molestias, el momento vital y las necesidades de cada persona.',
    icon: '🎯',
  },
  {
    step: 3,
    title: 'Formación y supervisión',
    description: 'Todas las sesiones están guiadas por profesionales formados, con experiencia en movimiento y cuidado corporal.',
    icon: '�',
  },
  {
    step: 4,
    title: 'Visión global',
    description: 'Nos gusta combinar ejercicio y tratamiento cuando hace falta, porque muchas veces el cuerpo necesita ambas cosas para mejorar.',
    icon: '�',
  },
];

const Process = () => {
  return (
    <Section id="proceso" variant="light">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Nuestra forma de trabajar
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            En Xhala apostamos por un trabajo cercano, consciente y bien guiado.
            No entendemos las clases como un entrenamiento impersonal, sino como un espacio donde cada persona pueda moverse con seguridad, mejorar de verdad y sentirse acompañada.
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

      </Container>
    </Section>
  );
};

export default Process;
