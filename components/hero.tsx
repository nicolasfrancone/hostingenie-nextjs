"use client";
import { motion } from 'framer-motion';
import LogoImage from '@/public/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.webp';
import Image from 'next/image';

export default function Hero() {

  // Función directa para manejar el click
  // No necesitamos useEffect ni addEventListener
  const handleGetStarted = () => {
    const chatbox = document.getElementById('vg_chat_toggle');
    if (chatbox) {
      chatbox.click();
    } else {
      console.warn("El widget de chat no se encuentra en el DOM");
    }
  };

  return (
    <motion.section
      className='mt-14 md:mt-10 max-w-6xl mx-auto px-4 sm:px-2 relative pt-32 pb-6 md:pt-40'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center w-56 h-56 sm:w-60 sm:h-60 mx-auto pb-10">
        <Image 
            src={LogoImage} 
            alt="Logo de Hostingenie - Gestión Inteligente" 
            layout='responsive' 
            title='Hostingenie AI'
            priority // IMPORTANTE: Carga prioritaria para mejorar performance
        />
      </div>

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
        <motion.h1
          className="h2 sm:h1 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Título alineado con tu tesis: IA + Automatización */}
          Gestión de alquileres impulsada por <span className="text-custom-blue">Inteligencia Artificial y Automatización</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Propuesta de valor más fuerte: Autonomía y Atención 24/7 */}
          Hostingenie elimina la carga operativa manual y garantiza atención inmediata 24/7, transformando la experiencia de tus huéspedes y recuperando tu tiempo.
        </motion.p>

        <div className="pt-4 mb-8 lg:mb-8 sm:justify-center">
          <button 
            onClick={handleGetStarted} // Evento directo de React
            className="inline-flex justify-center items-center py-4 px-10 text-lg font-bold text-white bg-feature-item rounded-lg hover:bg-custom-dark2 focus:ring-4 focus:ring-custom-blue transition-all duration-300 transform hover:scale-105"
          >
            Comenzar
            <svg className="ml-2 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
}