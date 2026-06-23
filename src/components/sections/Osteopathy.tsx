'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { PainIcon } from '../icons/TargetIcon';

const Osteopathy = () => {
  return (
    <Section id="osteopatia" variant="default" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#96e3d8]/5 pointer-events-none" />
      
      <Container>
        <div className="max-w-5xl mx-auto relative z-10">
          <Heading level="h2" className="mb-16 text-center">
            Osteopatía en Xhala
          </Heading>
          
          <motion.div
            className="bg-white/90 backdrop-blur-xl p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-12">
              <div className="w-28 h-28 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-3xl flex items-center justify-center shadow-2xl">
                <PainIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                En Xhala la Osteopatía es un pilar esencial. Nuestros profesionales están altamente formados y cuentan con la experiencia necesaria para ofrecer un tratamiento seguro, preciso y adaptado a cada persona.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                La osteopatía entiende el cuerpo como un todo. Mediante técnicas manuales busca liberar tensiones, corregir desequilibrios y mejorar la movilidad, favoreciendo la capacidad natural del organismo para autorregularse y sanar.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                En el día a día, factores como el estrés, las malas posturas o el esfuerzo físico generan sobrecargas que afectan a la salud y al bienestar. La osteopatía no solo ayuda a aliviar estas molestias, sino que también previene futuras lesiones y mejora la calidad de vida.
              </p>
            </div>
            <motion.p
              className="text-4xl leading-relaxed mt-12 text-center max-w-4xl mx-auto font-caveat tracking-wide bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              En Xhala creemos que cuidar el cuerpo a través de la osteopatía es invertir en salud: vivir con menos dolor, más libertad de movimiento y mayor equilibrio.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Osteopathy;
