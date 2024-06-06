"use client";
import { motion } from 'framer-motion';
import LogoImage from '@/public/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.webp';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const openChatbox = () => {
      const chatbox = document.getElementById('vg_chat_toggle');
      if (chatbox) {
        chatbox.click();
      }
    };

    const getStartedButton = document.getElementById('get-started-button');
    if (getStartedButton) {
      getStartedButton.addEventListener('click', openChatbox);
    }

    return () => {
      if (getStartedButton) {
        getStartedButton.removeEventListener('click', openChatbox);
      }
    };
  }, []);


  return (
    <motion.section
      className='mt-28 md:mt-20 max-w-6xl mx-auto px-4 sm:px-6 relative pt-32 pb-6 md:pt-40 md:pb-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center w-64 h-64 mx-auto pb-10">
        <Image src={LogoImage} alt="Hostingenie Logo" layout='responsive' title='Hostingenie Logo' />
      </div>

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <motion.h1
          className="h1 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI-Powered Rental Management Solution.
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with Hostingenie.
        </motion.p>
        <div className="pt-4 mb-8 lg:mb-16 sm:justify-center">
  <button 
    id='get-started-button'
    className="inline-flex justify-center items-center py-4 px-20 text-lg font-bold text-white bg-custom-dark rounded-lg hover:bg-custom-dark1 focus:ring-4 focus:ring-custom-blue"
  >
    
    Get Started
    <svg className="ml-2 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
    </svg>
  </button>
</div>

      </div>
    </motion.section>
  );
}
