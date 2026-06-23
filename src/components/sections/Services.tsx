'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const services = [
  {
    id: 'pilates-terapeutico',
    title: 'Pilates Terapéutico',
    description: 'Sesiones individuales personalizadas para tratar condiciones específicas como dolor lumbar, cervicalgia, hernias discales y recuperación post-lesión.',
    icon: '🧘‍♀️',
    price: 'Desde 45€',
    duration: '55 min',
    features: [
      'Evaluación postural inicial',
      'Programa personalizado',
      'Corrección de movimiento',
      'Ejercicios adaptados',
    ],
  },
  {
    id: 'pilates-mat',
    title: 'Pilates en Suelo',
    description: 'Clases en grupo para mejorar la fuerza, flexibilidad y conciencia corporal. Ideal para todos los niveles.',
    icon: '🤸',
    price: 'Desde 25€',
    duration: '55 min',
    features: [
      'Grupos reducidos',
      'Todos los niveles',
      'Material incluido',
      'Ambiente relajado',
    ],
  },
  {
    id: 'osteopatia',
    title: 'Osteopatía',
    description: 'Tratamiento manual para aliviar el dolor, mejorar la movilidad y restaurar el equilibrio del cuerpo.',
    icon: '🙌',
    price: 'Desde 60€',
    duration: '45 min',
    features: [
      'Diagnóstico osteopático',
      'Técnicas manuales',
      'Tratamiento integral',
      'Consejos de autocuidado',
    ],
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación Funcional',
    description: 'Programas de recuperación tras lesiones deportivas o quirúrgicas con enfoque en la funcionalidad.',
    icon: '🏃',
    price: 'Desde 50€',
    duration: '55 min',
    features: [
      'Valoración funcional',
      'Objetivos específicos',
      'Progresión gradual',
      'Seguimiento continuo',
    ],
  },
  {
    id: 'suelo-pelvico',
    title: 'Suelo Pélvico',
    description: 'Ejercicios especializados para fortalecer el suelo pélvico, ideal para embarazadas, postparto y prevención de prolapsos.',
    icon: '🌸',
    price: 'Desde 40€',
    duration: '45 min',
    features: [
      'Evaluación específica',
      'Ejercicios guiados',
      'Educación pélvica',
      'Apoyo continuo',
    ],
  },
  {
    id: 'postural',
    title: 'Reeducación Postural',
    description: 'Corrección de hábitos posturales y enseñanza de ergonomía para el trabajo y vida diaria.',
    icon: '📐',
    price: 'Desde 45€',
    duration: '55 min',
    features: [
      'Análisis postural',
      'Ergonomía laboral',
      'Hábitos saludables',
      'Ejercicios correctivos',
    ],
  },
];

const Services = () => {
  return (
    <Section id="servicios">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Nuestros Servicios
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ofrecemos una amplia gama de servicios diseñados para mejorar tu salud 
            y bienestar de manera integral y personalizada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-[#96e3d8] transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
              
              <div className="flex items-center gap-4 mb-6 text-base">
                <span className="bg-[#96e3d8]/20 px-4 py-2 rounded-full font-medium">
                  {service.price}
                </span>
                <span className="text-gray-500">
                  ⏱ {service.duration}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-base text-gray-600">
                    <span className="w-2 h-2 bg-[#96e3d8] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full" size="md">
                Más Información
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿No estás seguro de qué servicio es el adecuado para ti?
          </p>
          <Button size="lg" onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicita una Valoración Gratuita
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;
