'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import { MuscleIcon, YogaIcon, BarreIcon, PilatesIcon, PainIcon, BrainIcon, EnergyIcon, Mobility } from '../icons/TargetIcon';

const ServicesDetail = () => {
  return (
    <Section id="servicios-detallados" variant="light" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#96e3d8]/5 pointer-events-none" />

      <Container>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/salaPilatesMaquina.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <PilatesIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Pilates máquinas
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  El pilates máquinas es una disciplina muy completa que trabaja el cuerpo de forma global a través de ejercicios guiados en reformer, torre y wunda chair.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Permite mejorar la fuerza, el control, la postura, la movilidad y la estabilidad, adaptando el trabajo a cada persona y a cada momento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala utilizamos las máquinas como una herramienta para acompañar el movimiento, retar el cuerpo de forma segura y trabajar con mayor precisión, tanto si estás empezando como si ya tienes experiencia.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Qué beneficios tiene</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Mejora la postura y la alineación corporal</li>
                    <li>• Fortalece el core y la musculatura profunda</li>
                    <li>• Aumenta la movilidad, la flexibilidad y el control</li>
                    <li>• Ayuda a prevenir molestias y compensaciones</li>
                    <li>• Mejora el equilibrio, la coordinación y la conciencia corporal</li>
                    <li>• Permite adaptar el trabajo a diferentes niveles y necesidades</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Cómo son las clases en Xhala</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestras clases de pilates máquinas son en grupos reducidos y están siempre supervisadas por profesionales formados.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Esto nos permite observar, corregir y adaptar los ejercicios para que cada persona trabaje de forma segura, eficaz y acorde a su nivel.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Trabajamos desde la técnica, pero también desde la escucha del cuerpo, buscando que el movimiento sea consciente, bien ejecutado y útil para tu día a día.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Para quién lo recomendamos</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Personas que quieren ganar fuerza y tonificar</li>
                    <li>• Personas con dolor de espalda, rigidez o malas posturas</li>
                    <li>• Quienes buscan una actividad guiada y cuidada</li>
                    <li>• Personas que quieren retomar el ejercicio de forma segura</li>
                    <li>• Personas con necesidades específicas o patologías que requieran adaptación</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/salaPilates.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <YogaIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Pilates suelo
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  El pilates suelo es una disciplina basada en el control corporal, la respiración, la estabilidad y la fuerza profunda.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A través de ejercicios realizados en colchoneta, trabajamos la postura, la movilidad, el control del centro y la calidad del movimiento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala lo utilizamos como una forma de fortalecer el cuerpo desde dentro, mejorar la conciencia corporal y moverte con más control y equilibrio.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Qué trabajamos</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Activación del core</li>
                    <li>• Estabilidad y control postural</li>
                    <li>• Fuerza profunda</li>
                    <li>• Movilidad y flexibilidad</li>
                    <li>• Coordinación y conciencia corporal</li>
                    <li>• Respiración y control del movimiento</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Cómo son las clases</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Las clases son en grupos reducidos, con corrección y supervisión para adaptar el trabajo a cada persona.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    No buscamos hacer por hacer, sino que entiendas el movimiento, lo ejecutes bien y notes una mejora real en tu cuerpo.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Para quién es</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Personas que quieren fortalecer sin impacto</li>
                    <li>• Quienes quieren mejorar postura y estabilidad</li>
                    <li>• Personas con molestias, rigidez o descompensaciones</li>
                    <li>• Quienes buscan un trabajo consciente y técnico</li>
                    <li>• Personas que quieren complementar pilates máquinas, barre u osteopatía</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/sala1.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <BarreIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Barre
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Barre es una disciplina dinámica y elegante que combina ejercicios inspirados en la danza, el pilates y el trabajo funcional para fortalecer el cuerpo de forma intensa pero controlada.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala trabajamos el barre desde una mirada cuidada, prestando atención a la técnica, la postura y el control para que puedas disfrutar de una sesión retadora, divertida y efectiva.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Qué beneficios tiene</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Tonifica piernas, glúteos, brazos y abdomen</li>
                    <li>• Mejora la postura y la resistencia muscular</li>
                    <li>• Favorece la movilidad, el equilibrio y la coordinación</li>
                    <li>• Ayuda a ganar fuerza sin impacto</li>
                    <li>• Aporta energía, agilidad y control corporal</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Cómo son las clases</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestras clases de barre están pensadas para que trabajes fuerza, resistencia y control desde una propuesta dinámica y cuidada.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Siempre con supervisión, corrección y atención al movimiento para que entrenes con seguridad y calidad.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Para quién lo recomendamos</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Personas que quieren tonificar y fortalecer</li>
                    <li>• Quienes buscan una disciplina dinámica y diferente</li>
                    <li>• Personas que disfrutan del trabajo postural y de control</li>
                    <li>• Quienes quieren complementar pilates con una clase más activa</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/hall.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <PainIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Osteopatía
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Un enfoque global para entender y cuidar el cuerpo
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala entendemos la osteopatía como una terapia manual que no se centra solo en el lugar donde aparece el dolor, sino en cómo está funcionando el cuerpo en conjunto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Muchas veces una molestia no se origina exactamente en la zona donde se siente. Un dolor lumbar, una tensión cervical, una sobrecarga en la espalda o una sensación de bloqueo pueden estar relacionados con compensaciones, falta de movilidad, tensiones acumuladas, alteraciones posturales o desequilibrios en otras partes del cuerpo. Por eso, en osteopatía no se mira únicamente el síntoma: se busca entender qué está pasando en el cuerpo de forma global y cómo ayudarle a recuperar su equilibrio y su movilidad.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A través de un tratamiento manual y una valoración individual, la osteopatía nos permite acompañar al cuerpo de una forma respetuosa, buscando aliviar molestias, mejorar la movilidad y favorecer un mejor funcionamiento general.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Una mirada global del cuerpo</h4>
                  <p className="text-gray-700 leading-relaxed">
                    La osteopatía parte de la idea de que el cuerpo funciona como un todo y de que sus distintas estructuras están relacionadas entre sí.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Eso significa que, cuando aparece una molestia, no siempre basta con mirar solo la zona dolorida: muchas veces hay que observar cómo se mueve la persona, qué tensiones acumula, cómo está su postura, qué compensaciones ha ido generando o qué otras zonas pueden estar influyendo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    En Xhala esta forma de entender el cuerpo encaja completamente con nuestra filosofía, porque creemos que cuidarse no es solo "tratar un punto que duele", sino escuchar el cuerpo, comprenderlo mejor y acompañarlo desde una visión más completa.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">¿En qué se diferencia de la fisioterapia?</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Aunque ambas comparten el objetivo de mejorar el bienestar, aliviar molestias y ayudar al cuerpo a funcionar mejor, no son exactamente lo mismo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    La fisioterapia suele enfocarse de forma más directa en la lesión, el tejido o la zona concreta que necesita tratamiento o recuperación, utilizando diferentes herramientas y abordajes según cada caso.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    La osteopatía, por su parte, pone un énfasis especial en la relación entre las distintas partes del cuerpo y en cómo una alteración en una zona puede estar afectando a otra. Su enfoque es más global, buscando entender el origen de la molestia dentro del conjunto del cuerpo y no solo en el síntoma aislado.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    No se trata de enfrentarlas ni de decir que una sustituye a la otra, sino de entender que son formas de abordaje diferentes y muchas veces complementarias. En el caso de la osteopatía, esa visión global es precisamente una de sus grandes aportaciones.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">¿Cuándo puede ayudarte la osteopatía?</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">La osteopatía puede ser útil como acompañamiento en casos como:</p>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Dolor de espalda, cuello o zona lumbar</li>
                    <li>• Tensión muscular y sobrecargas</li>
                    <li>• Bloqueos o sensación de rigidez</li>
                    <li>• Molestias posturales</li>
                    <li>• Falta de movilidad</li>
                    <li>• Dolores recurrentes o compensaciones</li>
                    <li>• Etapas de estrés físico o tensión acumulada</li>
                    <li>• Embarazo y postparto, siempre valorando cada caso de forma individual</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">¿Cómo es una sesión en Xhala?</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cada sesión comienza con una valoración individual, porque no entendemos dos cuerpos iguales ni dos molestias iguales.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Nos interesa saber qué te pasa, desde cuándo, cómo se comporta esa molestia y qué puede estar influyendo en ella.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    A partir de ahí, el tratamiento se adapta a ti y a tu momento, con el objetivo de aliviar molestias, mejorar la movilidad, liberar tensiones y ayudar al cuerpo a recuperar equilibrio.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Nuestro enfoque no se queda solo en "tratar", sino en acompañarte de una forma más completa. Por eso, cuando tiene sentido, la osteopatía también puede complementarse con el trabajo de movimiento y ejercicio que hacemos en Xhala.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Osteopatía y movimiento: una combinación muy Xhala</h4>
                  <p className="text-gray-700 leading-relaxed">
                    En Xhala no entendemos el cuidado del cuerpo como algo aislado.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    A veces el cuerpo necesita tratamiento manual para aliviar, desbloquear o reorganizar; y otras veces necesita movimiento, fuerza, control y trabajo postural para sostener ese cambio en el tiempo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Por eso, integrar osteopatía y ejercicio dentro de un mismo espacio nos permite acompañarte de una forma más completa, más coherente y más adaptada a lo que necesitas en cada momento.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/salaPilates.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <BrainIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Pilates prenatal
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  El embarazo es una etapa de grandes cambios físicos, emocionales y posturales.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El pilates prenatal está pensado para acompañarte en ese proceso, ayudándote a mantenerte activa, cuidar tu cuerpo, aliviar molestias y prepararte para el parto de forma segura y adaptada.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala trabajamos el movimiento durante el embarazo desde el respeto, la escucha y la adaptación a cada trimestre y a cada mujer.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Qué buscamos en estas clases</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Mejorar la movilidad y la postura</li>
                    <li>• Fortalecer de forma segura el cuerpo durante el embarazo</li>
                    <li>• Trabajar respiración, control y conciencia corporal</li>
                    <li>• Aliviar tensiones, sobrecargas y molestias habituales</li>
                    <li>• Favorecer la conexión con el cuerpo y con esta etapa</li>
                    <li>• Preparar el cuerpo para el parto y el postparto</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Cómo son las clases</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Las clases son en grupos reducidos y adaptadas al momento de cada mujer.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Prestamos especial atención a la postura, la respiración, el control y el bienestar general, para que puedas moverte con confianza y sentirte acompañada.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Para quién está pensado</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Para mujeres embarazadas que quieren seguir cuidándose, mantenerse activas y vivir esta etapa con más fuerza, movilidad y bienestar.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/salaPilates.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <EnergyIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Mamás & bebés
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Movimiento y recuperación para cuidar tu cuerpo en el postparto
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El postparto es una etapa de adaptación, cambios y mucha exigencia para el cuerpo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala queremos acompañarte también ahí, con clases pensadas para ayudarte a recuperar fuerza, reconectar con tu cuerpo y cuidarte de forma respetuosa, pudiendo venir con tu bebé.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Este espacio está enfocado a la recuperación postparto, el trabajo de la postura, la respiración, la activación profunda y el bienestar general, siempre desde una mirada amable con el cuerpo y con el momento vital de cada mamá.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Qué trabajamos</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Recuperación progresiva del cuerpo tras el parto</li>
                    <li>• Activación de la musculatura profunda</li>
                    <li>• Postura, movilidad y control corporal</li>
                    <li>• Alivio de tensiones y sobrecargas</li>
                    <li>• Reconexión con el abdomen y el suelo pélvico dentro de un trabajo global</li>
                    <li>• Fuerza y estabilidad para el día a día con el bebé</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Cómo son las clases</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Son clases cuidadas, adaptadas y pensadas para que puedas venir con tu bebé, moverte con tranquilidad y regalarte un espacio para ti sin exigencia, pero con trabajo útil y bien guiado.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Nuestro objetivo</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Que el postparto no sea solo "recuperarse", sino sentirte acompañada, volver a confiar en tu cuerpo y cuidarte de verdad en una etapa en la que también lo necesitas.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/50 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#96e3d8]/20 to-[#7ac9be]/20">
                <div className="absolute inset-0 bg-[url('/salaPresoterapia.jpeg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] rounded-2xl flex items-center justify-center shadow-xl">
                      <Mobility className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <Heading level="h3" className="mb-0 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent font-caveat">
                    Presoterapia
                  </Heading>
                </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  La presoterapia es un tratamiento de compresión secuencial que ayuda a estimular el sistema circulatorio y linfático, favoreciendo el drenaje, la sensación de ligereza y el bienestar general.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Xhala la utilizamos como complemento para personas que quieren cuidar sus piernas, mejorar la sensación de pesadez, favorecer la recuperación o regalarse un momento de descanso y cuidado.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Qué beneficios puede aportar</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Mejora la sensación de piernas cansadas o pesadas</li>
                    <li>• Favorece la circulación y el drenaje</li>
                    <li>• Ayuda a reducir sensación de hinchazón</li>
                    <li>• Puede ser un buen complemento en procesos de recuperación y bienestar</li>
                    <li>• Aporta una sensación de descanso, ligereza y cuidado corporal</li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Cómo es una sesión</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Durante la sesión, se colocan unas botas o prendas específicas que realizan una compresión suave y secuencial.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Es un tratamiento cómodo, relajante y pensado para favorecer el drenaje y la circulación de forma no invasiva.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-black bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Para quién puede ser interesante</h4>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    <li>• Personas con sensación de piernas cansadas</li>
                    <li>• Personas que pasan muchas horas de pie o sentadas</li>
                    <li>• Quienes buscan un complemento de bienestar y recuperación</li>
                    <li>• Personas que quieren cuidar la circulación y la sensación de pesadez</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesDetail;
