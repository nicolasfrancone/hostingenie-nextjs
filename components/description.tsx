"use client"
import { motion } from 'framer-motion';

export default function Description() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <h2 className="h2 mb-4">
              Chatbot avanzado de inteligencia artificial conversacional y sistema de automatización de tareas.
            </h2>
            <p className="text-xl text-gray-400">
              Donde la inteligencia artificial se une a la excelencia en hospitalidad. Simplificá la gestión de propiedades, deleitá a tus huéspedes y escalá tu negocio con Hostingenie.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
