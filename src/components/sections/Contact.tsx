'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ContactForm } from '@/types';
import { siteConfig } from '@/config/site';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contacto" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#96e3d8]/5 pointer-events-none" />
      
      <Container>
        <div className="text-center mb-16 relative z-10">
          <Heading level="h2" className="mb-4">
            Contacta con Nosotros
          </Heading>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Estamos aquí para ayudarte. Cuéntanos tus objetivos y te contactaremos 
            para diseñar el plan perfecto para ti.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-white/50 h-full">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] bg-clip-text text-transparent">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#96e3d8] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Dirección</h4>
                    <p className="text-gray-600">Calle de Mariano González, 14, 28600 Navalcarnero<br />Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#96e3d8] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Teléfono</h4>
                    <p className="text-gray-600">630 60 97 81</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#96e3d8] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Email</h4>
                    <p className="text-gray-600">info@xhalapilates.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#96e3d8] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Horario</h4>
                    <p className="text-gray-600">Lunes - Viernes: 9:00 - 20:00<br />Sábado: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-[#96e3d8]/20">
                <h4 className="font-semibold mb-6 text-lg">Síguenos</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/xhalapilates/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.002 21.041c-2.46 0-2.75-.013-3.71-.055a6.583 6.583 0 0 1-2.185-.45a4.619 4.619 0 0 1-2.63-2.631a6.591 6.591 0 0 1-.419-2.187c-.056-.958-.056-1.272-.056-3.713c0-2.467.013-2.755.056-3.71a6.59 6.59 0 0 1 .419-2.184A4.61 4.61 0 0 1 6.11 3.479a6.533 6.533 0 0 1 2.184-.42c.955-.054 1.269-.054 3.708-.054c2.48 0 2.765.013 3.71.054c.748.014 1.49.156 2.19.42a4.615 4.615 0 0 1 2.633 2.632c.267.71.41 1.46.421 2.217c.056.958.056 1.271.056 3.711s-.014 2.76-.056 3.707a6.603 6.603 0 0 1-.42 2.189a4.624 4.624 0 0 1-2.634 2.632c-.7.262-1.439.404-2.186.419c-.955.055-1.268.055-3.714.055Zm-.034-16.453c-2.446 0-2.7.012-3.655.055a4.99 4.99 0 0 0-1.67.311a2.99 2.99 0 0 0-1.718 1.712c-.2.54-.305 1.111-.311 1.687c-.053.969-.053 1.223-.053 3.652c0 2.4.009 2.691.053 3.654c.009.57.114 1.135.311 1.67c.306.787.93 1.409 1.719 1.711a4.92 4.92 0 0 0 1.669.311c.968.056 1.223.056 3.655.056c2.453 0 2.707-.012 3.654-.056a4.962 4.962 0 0 0 1.67-.311a3 3 0 0 0 1.71-1.709c.2-.54.305-1.112.311-1.688h.011c.043-.956.043-1.211.043-3.654c0-2.443-.011-2.7-.054-3.655a5.06 5.06 0 0 0-.311-1.668a3 3 0 0 0-1.71-1.712a4.94 4.94 0 0 0-1.67-.311c-.967-.055-1.22-.055-3.654-.055Zm.034 12.036A4.623 4.623 0 1 1 16.622 12a4.63 4.63 0 0 1-4.62 4.624Zm0-7.626a3 3 0 1 0 3 3a3.007 3.007 0 0 0-3-3Zm4.8-.713a1.078 1.078 0 1 1 .008-2.156a1.078 1.078 0 0 1-.008 2.156Z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#96e3d8] to-[#7ac9be] text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1a8 8 0 0 0 8-7.93a8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15l-2.49.66l.66-2.43l-.16-.25a6.6 6.6 0 0 1 10.25-8.17a6.65 6.65 0 0 1 2 4.66a6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05a8.9 8.9 0 0 0 3.39 3a3.85 3.85 0 0 0 2.38.5a2 2 0 0 0 1.33-.94a1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Nombre completo <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="name-error"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#96e3d8] focus:ring-2 focus:ring-[#96e3d8]/20 outline-none transition-all bg-white/50 backdrop-blur-sm focus:outline-none"
                    placeholder="Tu nombre"
                  />
                  <span id="name-error" className="sr-only" role="alert"></span>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="email-error"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#96e3d8] focus:ring-2 focus:ring-[#96e3d8]/20 outline-none transition-all bg-white/50 backdrop-blur-sm focus:outline-none"
                    placeholder="tu@email.com"
                  />
                  <span id="email-error" className="sr-only" role="alert"></span>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-describedby="phone-hint"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#96e3d8] focus:ring-2 focus:ring-[#96e3d8]/20 outline-none transition-all bg-white/50 backdrop-blur-sm focus:outline-none"
                    placeholder="+34 600 000 000"
                  />
                  <span id="phone-hint" className="sr-only">Opcional: formato +34 seguido de 9 dígitos</span>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-describedby="service-hint"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#96e3d8] focus:ring-2 focus:ring-[#96e3d8]/20 outline-none transition-all bg-white/50 backdrop-blur-sm focus:outline-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="pilates-maquina">Pilates Máquina</option>
                    <option value="pilates-suelo">Pilates en Suelo</option>
                    <option value="osteopatia">Osteopatía</option>
                    <option value="barre">Barre</option>
                    <option value="otro">Otro</option>
                  </select>
                  <span id="service-hint" className="sr-only">Selecciona el servicio que te interesa</span>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Mensaje <span className="text-red-500" aria-label="obligatorio">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="message-error"
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#96e3d8] focus:ring-2 focus:ring-[#96e3d8]/20 outline-none transition-all resize-none bg-white/50 backdrop-blur-sm focus:outline-none"
                    placeholder="Cuéntanos tus objetivos o cualquier duda que tengas..."
                  />
                  <span id="message-error" className="sr-only" role="alert"></span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#96e3d8] to-[#7ac9be] hover:from-[#7ac9be] hover:to-[#96e3d8] shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-6 py-4 rounded-2xl text-center border border-green-200"
                  >
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
