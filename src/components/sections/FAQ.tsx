'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import JsonLd from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/structured-data';

const faqs = [
  {
    id: 1,
    question: '¿Qué es el Pilates terapéutico?',
    answer: 'El Pilates terapéutico es una adaptación del método Pilates tradicional, diseñado específicamente para tratar condiciones físicas y dolores. Se centra en ejercicios personalizados que ayudan a rehabilitar lesiones, mejorar la postura y aliviar el dolor crónico bajo la supervisión de profesionales especializados.',
  },
  {
    id: 2,
    question: '¿En qué se diferencia la osteopatía de la fisioterapia?',
    answer: 'La osteopatía se enfoca en el cuerpo como un todo, tratando no solo los síntomas sino también las causas subyacentes. Utiliza técnicas manuales para restaurar el equilibrio y la movilidad del cuerpo. Mientras que la fisioterapia suele ser más específica para la rehabilitación de lesiones, la osteopatía adopta un enfoque más holístico.',
  },
  {
    id: 3,
    question: '¿Necesito experiencia previa para empezar Pilates?',
    answer: 'No necesitas experiencia previa. Nuestros programas están diseñados para todos los niveles, desde principiantes hasta avanzados. En la primera sesión evaluamos tu condición física y adaptamos los ejercicios a tus necesidades y capacidades.',
  },
  {
    id: 4,
    question: '¿Cuántas sesiones se recomiendan para ver resultados?',
    answer: 'La mayoría de los clientes comienzan a notar mejoras después de 4-6 sesiones. Sin embargo, esto varía según la condición y los objetivos. Para resultados óptimos, recomendamos 1-2 sesiones semanales durante los primeros 2-3 meses, luego podemos ajustar la frecuencia según tu progreso.',
  },
  {
    id: 5,
    question: '¿Tratáis embarazadas y postparto?',
    answer: 'Sí, ofrecemos programas especializados para embarazadas y mujeres en postparto. Nuestros profesionales están certificados en salud pélvica y diseñan ejercicios seguros y efectivos para cada etapa. Es importante obtener el visto bueno de tu médico antes de comenzar.',
  },
  {
    id: 6,
    question: '¿Qué debo llevar a mi primera sesión?',
    answer: 'Para tu primera sesión, te recomendamos llevar ropa cómoda que permita el movimiento (leggings, camiseta deportiva), calcetines antideslizantes si los tienes, y una toalla. Si tienes informes médicos previos relacionados con tu condición, tráyelos para que podamos tener una visión completa.',
  },
  {
    id: 7,
    question: '¿Aceptáis seguros médicos?',
    answer: 'Trabajamos con varias compañías de seguros. Te recomendamos contactar con tu aseguradora para verificar la cobertura. También ofrecemos facturación detallada que puedes presentar para reembolso. Contáctanos para más información sobre convenios específicos.',
  },
  {
    id: 8,
    question: '¿Podéis ayudar con dolor de espalda crónico?',
    answer: 'Absolutamente. El dolor de espalda crónico es una de las especialidades que más tratamos. Combinamos osteopatía para aliviar el dolor agudo y Pilates terapéutico para fortalecer los músculos de soporte y prevenir recurrencias. Muchos de nuestros clientes han encontrado alivio significativo.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" variant="light">
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Preguntas Frecuentes
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Resolvemos las dudas más comunes sobre nuestros servicios y tratamientos.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openId === faq.id}
              >
                <span className="font-semibold text-xl pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-[#96e3d8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 pt-0 text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Tienes más preguntas? Estamos aquí para ayudarte.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default FAQ;
