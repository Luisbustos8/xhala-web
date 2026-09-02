'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { Mobility, EnergyIcon } from '../icons/TargetIcon';

const Schedule = () => {
  return (
    <Section id="horarios" variant="default">
      <Container>
        <div className="max-w-5xl mx-auto">
          <Heading level="h2" className="mb-12 text-center">
            Horarios y Reservas
          </Heading>
          
          <motion.p
            className="text-xl text-gray-700 leading-relaxed mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            En Xhala queremos que tu visita sea fácil y cómoda.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center text-[#96e3d8]">
                  <Mobility className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-black">Horarios de Clases</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-lg font-medium">Lunes y miércoles</span>
                  <span className="text-lg text-gray-600">9:00 – 14:00 y 16:00 – 21:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-lg font-medium">Martes y jueves</span>
                  <span className="text-lg text-gray-600">9:00 – 13:00 y 15:00 – 21:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-medium">Viernes</span>
                  <span className="text-lg text-gray-600">9:00 – 14:00</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center text-[#96e3d8]">
                  <EnergyIcon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-black">Horario de Recepción</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-lg font-medium">Lunes a jueves</span>
                  <span className="text-lg text-gray-600">8:00 a 22:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-medium">Viernes</span>
                  <span className="text-lg text-gray-600">8:00 – 13:00</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-[#96e3d8]/10 p-12 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Si quieres reservar tu clase o sesión, envíanos un WhatsApp o llámanos. Para cualquier otra consulta, estaremos encantadas de ayudarte y darte toda la información que necesites.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Schedule;
