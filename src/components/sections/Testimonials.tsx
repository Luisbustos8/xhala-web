'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const testimonials = [
  {
    id: 1,
    name: 'Loli',
    role: 'Alumna',
    content: 'Llegué con dolor de espalda y desde que voy me encuentro mucho mejor. Las clases son súper cuidadas y se nota muchísimo la atención personalizada.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rosa',
    role: 'Alumna',
    content: 'Xhala se ha convertido en mi momento de la semana. Me siento más fuerte, más ágil y muchísimo mejor en mi cuerpo.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Isabel',
    role: 'Alumna',
    content: 'El trato es increíble y se nota que están pendientes de cada persona. No es solo una clase, es un espacio donde de verdad te cuidan.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonios">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Lo que viven en Xhala
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Más que una clase, buscamos que cada persona encuentre un espacio donde cuidarse, moverse mejor y sentirse acompañada.
          </motion.p>
          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            La experiencia de quienes confían en Xhala habla de fuerza, alivio, bienestar, cercanía y confianza.
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

      </Container>
    </Section>
  );
};

export default Testimonials;
