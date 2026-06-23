'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { BrainIcon, EnergyIcon, Mobility, MuscleIcon, PainIcon, YogaIcon } from '../icons/TargetIcon';


const benefits = [
  {
    icon: <PainIcon />,
    title: 'Reducción del Dolor',
    description: 'Alivia el dolor musculoesquelético en espalda, cuello, hombros y zona lumbar mediante tratamientos especializados.',
  },
  {
    icon: <YogaIcon />,
    title: 'Mejora de Postura',
    description: 'Corrige desequilibrios posturales y mejora tu alineación corporal para una vida más saludable y sin dolor.',
  },
  {
    icon: <MuscleIcon />,
    title: 'Prevención de Lesiones',
    description: 'Fortalece tu cuerpo y aumenta la conciencia corporal para prevenir lesiones futuras.',
  },
  {
    icon: <Mobility />,
    title: 'Rehabilitación Funcional',
    description: 'Recupera la movilidad y funcionalidad tras lesiones o sobrecargas con programas personalizados.',
  },
  {
    icon: <EnergyIcon />,
    title: 'Mayor Energía',
    description: 'Aumenta tu vitalidad y energía diaria a través del movimiento consciente y el equilibrio físico.',
  },
  {
    icon: <BrainIcon />,
    title: 'Conciencia Corporal',
    description: 'Desarrolla una mayor conexión mente-cuerpo para entender y mejorar tu movimiento.',
  },
];

const Benefits = () => {
  return (
    <Section id="beneficios" variant="light">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Beneficios del Pilates y Osteopatía
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Descubre cómo nuestra combinación de Pilates terapéutico y osteopatía 
            puede transformar tu salud y bienestar.
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
