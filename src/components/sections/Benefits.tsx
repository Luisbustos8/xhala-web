'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { BrainIcon, EnergyIcon, Mobility, MuscleIcon, PainIcon, YogaIcon } from '../icons/TargetIcon';


const benefits = [
  {
    icon: <YogaIcon />,
    title: 'Mejorar la postura y la alineación corporal',
    description: 'Trabajamos para corregir desequilibrios y ayudarte a mantener una postura saludable en tu día a día.',
  },
  {
    icon: <MuscleIcon />,
    title: 'Ganar fuerza, estabilidad y control',
    description: 'Desarrollamos tu musculatura profunda y mejoramos tu estabilidad para un movimiento más seguro y eficiente.',
  },
  {
    icon: <Mobility />,
    title: 'Recuperar movilidad y flexibilidad',
    description: 'Ayudamos a tu cuerpo a moverse con mayor libertad y amplitud de movimiento.',
  },
  {
    icon: <PainIcon />,
    title: 'Aliviar tensiones y sobrecargas',
    description: 'Liberamos las tensiones acumuladas y trabajamos para reducir las molestias físicas.',
  },
  {
    icon: <BrainIcon />,
    title: 'Prevenir molestias y compensaciones',
    description: 'Enseñamos a tu cuerpo a moverse de forma más equilibrada para evitar futuras lesiones.',
  },
  {
    icon: <EnergyIcon />,
    title: 'Mejorar la conciencia corporal',
    description: 'Desarrollamos una mayor conexión con tu cuerpo para entender y mejorar tu movimiento.',
  },
  {
    icon: <YogaIcon />,
    title: 'Ayudarte a sentirte más ágil, fuerte y conectada con tu cuerpo',
    description: 'Nuestro objetivo final es que te sientas mejor, más capaz y más en sintonía contigo misma.',
  },
];

const Benefits = () => {
  return (
    <Section id="beneficios" variant="light">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Lo que buscamos en cada sesión
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nuestro enfoque está diseñado para ayudarte a mejorar de forma integral y sostenible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#96e3d8] rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white">{benefit.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Benefits;
