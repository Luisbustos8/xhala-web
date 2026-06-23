'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'Profesora',
    content: 'Después de años con dolor de espalda por trabajar sentada, el Pilates terapéutico ha cambiado mi vida. Mi postura ha mejorado increíblemente y el dolor ha desaparecido.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Deportista',
    content: 'La combinación de osteopatía y Pilates me ha ayudado a recuperarme de una lesión de rodilla mucho más rápido de lo esperado. Profesionalidad excepcional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Madre',
    content: 'Las sesiones de suelo pélvico postparto fueron fundamentales para mi recuperación. Me sentí comprendida y acompañada en todo momento. ¡100% recomendable!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Pedro Sánchez',
    role: 'Empresario',
    content: 'El estrés y la tensión acumulada desaparecieron tras las sesiones de osteopatía. Ahora duermo mejor y tengo más energía durante el día.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Laura López',
    role: 'Diseñadora',
    content: 'Las clases de Pilates en grupo son perfectas. El ambiente es relajado y los profesores se adaptan a cada nivel. He mejorado mi fuerza y flexibilidad.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Miguel Fernández',
    role: 'Programador',
    content: 'La reeducación postural me ha enseñado a cuidar mi cuerpo mientras trabajo. Ya no tengo dolor de cuello ni hombros al final del día.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonios">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Lo Que Dicen Nuestros Clientes
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Descubre las experiencias de personas que han transformado su salud 
            y bienestar con nosotros.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#96e3d8] text-2xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#96e3d8]/20 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-base text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#96e3d8]/20 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-[#96e3d8]">4.9/5</span>
            <span className="text-gray-600">basado en 200+ reseñas</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Testimonials;
