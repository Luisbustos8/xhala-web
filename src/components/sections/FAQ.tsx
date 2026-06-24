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
    question: 'Nunca he hecho pilates, ¿puedo empezar en Xhala?',
    answer: 'Sí. Muchas personas llegan sin experiencia previa. Adaptamos el trabajo al nivel de cada persona para que puedas empezar con seguridad, entendiendo bien la técnica y avanzando poco a poco.',
  },
  {
    id: 2,
    question: '¿Qué disciplina me recomendáis si quiero tonificar y ganar fuerza?',
    answer: 'Depende de tu punto de partida y de lo que estés buscando. Pilates máquinas, pilates suelo y barre pueden ayudarte a ganar fuerza, tonificar y mejorar el control corporal. Si no tienes claro qué opción encaja mejor contigo, escríbenos y te orientamos.',
  },
  {
    id: 3,
    question: '¿Y si tengo dolor de espalda, una lesión o alguna patología?',
    answer: 'En Xhala trabajamos con grupos reducidos y profesionales formados, por lo que podemos adaptar las sesiones a muchas necesidades específicas. Si tienes una lesión, dolor o patología, lo ideal es que nos lo cuentes antes para valorar tu caso y orientarte bien.',
  },
  {
    id: 4,
    question: '¿Las clases son en grupo o individuales?',
    answer: 'Trabajamos principalmente en grupos reducidos, para poder ofrecer una atención cercana, supervisión y adaptación real durante la clase.',
  },
  {
    id: 5,
    question: '¿Cuántas personas hay por clase?',
    answer: 'En Xhala apostamos por grupos pequeños para cuidar la calidad de la sesión y la atención a cada persona.',
  },
  {
    id: 6,
    question: '¿Puedo combinar varias disciplinas?',
    answer: 'Sí. Puedes combinar diferentes disciplinas según tus objetivos, tu disponibilidad y lo que tu cuerpo necesite en cada momento.',
  },
  {
    id: 7,
    question: '¿Qué diferencia hay entre pilates suelo y pilates máquinas?',
    answer: 'Ambos trabajan fuerza, control, postura y movilidad, pero las máquinas permiten un trabajo muy versátil gracias a la resistencia y asistencia que ofrecen. El pilates suelo se centra más en el control corporal desde colchoneta y material de apoyo. Según cada persona, una opción puede encajar mejor o complementarse muy bien con la otra.',
  },
  {
    id: 8,
    question: '¿Puedo hacer pilates si llevo tiempo sin hacer ejercicio?',
    answer: 'Sí. De hecho, muchas personas empiezan en Xhala después de un tiempo de parón. Lo importante es comenzar con una práctica bien guiada y adaptada.',
  },
  {
    id: 9,
    question: '¿Tenéis clases para embarazadas?',
    answer: 'Sí. Contamos con pilates prenatal, pensado para acompañar el embarazo desde el movimiento, la fuerza, la movilidad y el bienestar.',
  },
  {
    id: 10,
    question: '¿Y clases para postparto?',
    answer: 'Sí. Tenemos clases de mamás & bebés enfocadas a la recuperación postparto, para ayudarte a cuidar tu cuerpo y volver a conectar contigo en esta etapa.',
  },
  {
    id: 11,
    question: '¿Puedo ir con mi bebé a las clases de postparto?',
    answer: 'Sí, ese es precisamente el sentido de este espacio: que puedas cuidarte y moverte acompañada de tu bebé.',
  },
  {
    id: 12,
    question: '¿La osteopatía se puede combinar con las clases?',
    answer: 'Sí. De hecho, en muchos casos ambas cosas se complementan muy bien, porque el tratamiento manual y el trabajo de movimiento pueden ayudarte desde diferentes ángulos.',
  },
  {
    id: 13,
    question: '¿Cómo sé si necesito osteopatía o una clase?',
    answer: 'Dependerá de tu caso. Si lo que buscas es aliviar una molestia concreta o valorar un dolor, quizá tenga más sentido empezar por osteopatía. Si buscas trabajar fuerza, postura, movilidad o retomar ejercicio, probablemente encaje mejor una clase. Si tienes dudas, escríbenos y te orientamos.',
  },
  {
    id: 14,
    question: '¿Cómo puedo pedir información o reservar?',
    answer: 'Puedes escribirnos a través del formulario de contacto, por teléfono o por WhatsApp, y te ayudaremos a encontrar la opción que mejor encaje contigo.',
  },
  {
    id: 15,
    question: '¿Dónde está Xhala?',
    answer: 'Estamos en Navalcarnero.',
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
