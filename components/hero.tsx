"use client";
import { motion } from 'framer-motion';
import LogoImage from '@/public/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      className='mt-28 md:mt-20 max-w-6xl mx-auto px-4 sm:px-6 relative pt-32 pb-6 md:pt-40 md:pb-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center w-64 h-64 mx-auto pb-10">
        <Image src={LogoImage} alt="Hostingenie Logo" layout='responsive' />
      </div>

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <motion.h1
          className="h1 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hostingenie.
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Where Artificial Intelligence and Hospitality come together to redefine the ideal stay: simplifying property management, creating unforgettable experiences.
        </motion.p>
      </div>
    </motion.section>
  );
}
