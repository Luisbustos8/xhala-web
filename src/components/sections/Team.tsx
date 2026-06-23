'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';

const Team = () => {
  return (
    <Section id="equipo" variant="light" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#96e3d8]/5 pointer-events-none" />
      
      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          <Heading level="h2" className="mb-16 text-center">
            Nuestro Equipo
          </Heading>
          
          <motion.p
            className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            En Xhala creemos que el bienestar nace del cuidado, la cercanía y la pasión por lo que hacemos. Nuestro equipo está aquí para acompañarte en cada paso de tu camino hacia el equilibrio.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-12">
                <div className="mb-8">
                  <div className="w-20 h-1 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] rounded-full mb-6" />
                  <h3 className="text-5xl font-light mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Paula</h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Osteópata & Profesora</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Paula es osteópata y profesora de todas nuestras disciplinas. Su profundo conocimiento del cuerpo le permite guiar cada clase con precisión y sensibilidad. Su carisma y amabilidad crean un espacio donde aprender y disfrutar del movimiento se siente natural, y gracias a su visión osteopática, cada sesión se convierte en un momento de conexión, conciencia y transformación.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-12">
                <div className="mb-8">
                  <div className="w-20 h-1 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] rounded-full mb-6" />
                  <h3 className="text-5xl font-light mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Eva</h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Instructora de Barre</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Eva es instructora de Barre y la persona que asegura que todo en Xhala fluya con armonía. Siempre amable, cercana y dispuesta a ayudar, transmite calidez y tranquilidad en cada interacción, haciendo que te sientas acompañado y cuidado en todo momento.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-4xl leading-relaxed mt-16 text-center max-w-4xl mx-auto font-caveat tracking-wide bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Juntas formamos un equipo que combina profesionalidad, dedicación y un toque de calma y armonía, para que en Xhala cada visita sea un espacio donde cuerpo y mente se reconectan.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
};

export default Team;
