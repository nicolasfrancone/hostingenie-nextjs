"use client";
import { motion } from "framer-motion";

export default function Benefits() {
    const benefits = [
        "Resolución automática de más del 80% de las consultas", // Coherente con tu defensa
        "Disponibilidad 24/7 sin intervención humana",
        "Optimización inteligente de Check-in y Check-out",
        "Reducción drástica de la carga administrativa",
        "Experiencia centrada en la autonomía del huésped",
        "Mejora orgánica en reputación y reseñas",
        "Interacción fluida, intuitiva y multilingüe",
        "Reducción de costos operativos",
        "Gestión centralizada de incidencias",
        "Escalabilidad para gestionar múltiples propiedades" // Reemplaza al "Y mucho más"
    ];

    return (
        <section id="benefits">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    
                    <div className="max-w-3xl mx-auto text-center pb-10">
                        <h2 className="h2 mb-4">Beneficios</h2>
                    </div>
                    <motion.div 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                        initial={{ opacity: 0, y: 20 }} 
                        viewport={{ once: true }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                    >
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center">
                                <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span className="text-lg text-gray-400">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
