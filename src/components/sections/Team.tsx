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
          <Heading level="h2" className="mb-6 text-center">
            Nuestro Equipo
          </Heading>

          <motion.p
            className="text-2xl text-gray-700 leading-relaxed mb-8 text-center font-light bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Profesionales que te acompañan de cerca
          </motion.p>

          <motion.p
            className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            En Xhala creemos en una forma de trabajar cercana, cuidada y consciente.
            Detrás de cada clase, cada sesión y cada detalle del estudio hay un equipo que comparte una misma manera de entender el cuerpo: desde el movimiento, la técnica, la escucha y una visión global del bienestar.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nos gusta que quien entra en Xhala se sienta acompañado desde el primer momento, tanto en una clase como en una sesión de osteopatía o al resolver cualquier duda sobre qué disciplina puede encajar mejor en su caso.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Por eso, más allá de enseñar o tratar, nuestro trabajo consiste en observar, adaptar, guiar y cuidar.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-10">
                <div className="mb-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] rounded-full mb-4" />
                  <h3 className="text-4xl font-light mb-2 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Paula</h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Dirección, osteopatía e instrucción</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Paula forma parte del corazón de Xhala y de la visión con la que nace el estudio: un espacio en el que el cuerpo se cuide desde una mirada global, combinando movimiento, control, fuerza y tratamiento manual.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Su trabajo dentro de Xhala une la parte de osteopatía con la instrucción de las distintas disciplinas, siempre desde una atención cercana y personalizada. Su forma de acompañar busca que cada persona entienda mejor su cuerpo, se mueva con seguridad y encuentre un trabajo adaptado a su momento, sus necesidades y sus objetivos.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Dentro del estudio, Paula aporta especialmente esa mirada que conecta el ejercicio con el cuidado terapéutico, entendiendo que muchas veces el bienestar no pasa solo por entrenar, sino también por tratar, prevenir, corregir y acompañar el cuerpo de forma más completa.
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
              <div className="p-10">
                <div className="mb-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] rounded-full mb-4" />
                  <h3 className="text-4xl font-light mb-2 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Eva</h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Instructora y atención en recepción</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Eva es una parte fundamental del día a día de Xhala, tanto dentro de las clases como en la acogida y la atención del estudio.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Eva es instructora de las distintas disciplinas de Xhala y además está presente en la recepción, acompañando a las alumnas también desde ese primer contacto tan importante.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Su forma de trabajar destaca por la cercanía, la energía y la atención a cada persona, buscando que cada clase sea un espacio cuidado, bien guiado y adaptado al nivel y las necesidades de quien la recibe.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Además de impartir clases, Eva forma parte de esa experiencia de estudio que hace que Xhala no sea solo un lugar donde venir a entrenar, sino también un espacio donde sentirte bienvenida, orientada y acompañada.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-10">
                <div className="mb-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] rounded-full mb-4" />
                  <h3 className="text-4xl font-light mb-2 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Mario</h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Instructor de pilates máquinas y funcional</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Mario forma parte del equipo de Xhala como instructor de pilates máquinas y entrenamiento funcional, acompañando a cada persona desde un trabajo guiado, técnico y bien adaptado.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Su enfoque está centrado en ayudar a mejorar la fuerza, el control corporal, la movilidad y la estabilidad a través de sesiones cuidadas, eficaces y ajustadas al nivel de cada alumno. Tanto en pilates de máquinas como en funcional, busca que el movimiento tenga sentido, que se trabaje con buena base y que cada persona pueda avanzar de forma segura y progresiva.
                </p>
                <p className="text-gray-700 leading-relaxed text-base font-light mt-4">
                  Su presencia en el equipo suma una mirada dinámica al trabajo del estudio, complementando el enfoque global de Xhala con sesiones bien estructuradas, supervisadas y enfocadas a que el cuerpo gane fuerza, control y confianza.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20 backdrop-blur-xl p-12 rounded-3xl border border-[#96e3d8]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-black text-center bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">Una misma forma de entender el cuidado del cuerpo</h3>
            <p className="text-gray-700 leading-relaxed text-xl text-center max-w-3xl mx-auto">
              Aunque cada profesional aporta su propia mirada y su especialidad, en Xhala compartimos una misma base: trabajar desde la cercanía, la atención al detalle y el respeto por cada cuerpo y cada proceso.
            </p>
            <p className="text-gray-700 leading-relaxed text-xl text-center max-w-3xl mx-auto mt-4">
              Queremos que cada persona que entra en el estudio sienta que está en un espacio donde se la escucha, se la guía y se la cuida de verdad, ya sea en una clase, en una sesión de osteopatía o simplemente buscando orientación para empezar.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Team;
