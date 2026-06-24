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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"/></svg>,
  },
  {
    step: 2,
    title: 'Adaptación real',
    description: 'Cada cuerpo parte de un punto distinto. Adaptamos el trabajo al nivel, la experiencia, las molestias, el momento vital y las necesidades de cada persona.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.25.25 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301l2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.94.94 0 0 1-.663.275"/><path fill="currentColor" d="M2.625 12A9.375 9.375 0 0 0 12 21.375A9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3c0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12S5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.4 9.4 0 0 0 12 2.625A9.375 9.375 0 0 0 2.625 12"/><path fill="currentColor" d="M7.125 12a4.874 4.874 0 1 0 9.717-.569a.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253a6.376 6.376 0 0 1 5.236-10.844a.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12"/></svg>,
  },
  {
    step: 3,
    title: 'Formación y supervisión',
    description: 'Todas las sesiones están guiadas por profesionales formados, con experiencia en movimiento y cuidado corporal.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6.5 2c1.11 0 2-.89 2-2s-.89-2-2-2s-2.01.89-2 2c0 1.11.89 2 2 2M11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10M5.84 17.12c.68-.54 2.27-1.11 3.66-1.11c.07 0 .15.01.23.01c.24-.64.67-1.29 1.3-1.86A9 9 0 0 0 9.5 14c-1.3 0-3.39.45-4.73 1.43c-.5-1.04-.78-2.2-.78-3.43c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37c-1-.59-2.36-.87-3.24-.87c-1.52 0-4.5.81-4.5 2.7v2.78a7.94 7.94 0 0 1-5.66-2.86"/></svg>,
  },
  {
    step: 4,
    title: 'Visión global',
    description: 'Nos gusta combinar ejercicio y tratamiento cuando hace falta, porque muchas veces el cuerpo necesita ambas cosas para mejorar.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M11.25 22.5a10.5 10.5 0 1 1 0-21"/><path d="M11.25 1.5S6 4.5 6 12s5.25 10.5 5.25 10.5m0-15H1.761m9.489 9H1.761m13.989-12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5.61 5.346L18.75 13.5l-2.61-3.654a4.49 4.49 0 0 0-1.89 3.654v3a1.5 1.5 0 0 0 1.5 1.5h.75v3a1.5 1.5 0 0 0 1.5 1.5h1.5A1.5 1.5 0 0 0 21 21v-3h.75a1.5 1.5 0 0 0 1.5-1.5v-3a4.49 4.49 0 0 0-1.89-3.654"/></g></svg>,
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
                className={`relative flex items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#96e3d8] rounded-full items-center justify-center text-2xl font-bold text-white z-10">
                  {step.step}
                </div>

                <div className="flex-1 lg:w-5/12">
                  <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl text-[#96e3d8]">{step.icon}</div>
                      <div className="flex-1">
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#96e3d8] rounded-full flex items-center justify-center text-lg font-bold text-white">
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

                <div className="hidden lg:block flex-1 lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
};

export default Process;
