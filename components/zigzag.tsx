"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import FeatImage01 from '@/public/images/IMG_8944-modified.png'
import FeatImage02 from '@/public/images/IMG_8949-modified.png'
import FeatImage04 from '@/public/images/tesis-3-modified.png'
import FeatImage05 from '@/public/images/IMG_8948-modified.png'

export default function Zigzag() {
  return (
    <section id='demos'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <motion.div
            className="max-w-3xl mx-auto text-center pb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex text-lg font-semibold py-3 px-2 sm:px-6 m-2 text-green-800 bg-green-200 rounded-full mb-8">
              Desbloqueá verdaderas fuentes de ingresos pasivos.
            </div>
            <h2 className="h2 mb-4">Un Genie, Soluciones Ilimitadas</h2>
            <p className="text-xl text-gray-400">
              Decile <strong>adiós</strong> al estrés por las consultas de los huéspedes, a la complejidad de gestionar calendarios, a los malentendidos y a los recordatorios constantes de tareas pendientes. La hospitalidad sin esfuerzo está a un solo clic de distancia. Estamos para ayudarte.
            </p>
            <p className="text-xl text-gray-400 mt-8">
              Decile <strong>hola</strong> a un mundo de reseñas positivas, mayor satisfacción y experiencias inolvidables para tus huéspedes. Con Hostingenie a tu lado, disfrutá de mayor eficiencia, más tiempo libre y una experiencia en hospitalidad como nunca antes.
            </p>
          </motion.div>

          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row items-center pb-14 lg:pb-0">
            <motion.div
              className="w-80 sm:mr-12 order-2 sm:order-none"
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
               <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={FeatImage01}
                alt="Demostración de check-in y check-out"
                layout="responsive"
                title="Check-in y Check-out"
              />
              </div>
            </motion.div>

            <div className="w-full sm:w-3/5 pr-30 sm:pr-30 mb-6 sm:mb-0 order-1 sm:order-none">
              <div className="font-architects-daughter text-xl text-blue-600 mb-2">
                Más rapidez. Menos costos
              </div>
              <h3 className="h3 mb-3">Check-In y Check-Out Eficientes</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">
                Tu Hostingenie brinda una explicación clara e intuitiva de los procesos de check-in y check-out, enriquecida con imágenes, videos, mapas u otros recursos que facilitan el acceso a tu propiedad. Lográ una experiencia simple, ordenada y sin complicaciones.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row items-center pb-14 lg:pb-0">
            <div className="w-full sm:w-3/5 pr-30 sm:pr-30 mb-6 sm:mb-0 order-1 sm:order-none">
              <div className="font-architects-daughter text-xl text-blue-600 mb-2">
                Más rapidez. Menos costos
              </div>
              <h3 className="h3 mb-3">Reporte Rápido de Incidentes</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">
                Los huéspedes pueden reportar fácilmente problemas, describir la situación, adjuntar fotos relevantes y enviarlo todo directamente por e-mail. Hostingenie gestiona la notificación al personal ante fallas, mantenimientos urgentes o inconvenientes, sin necesidad de interacción directa.
              </p>
            </div>

            <motion.div
              className="w-80 sm:ml-12 order-2 sm:order-none"
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <Image
                src={FeatImage02}
                alt="Reporte rápido de incidentes"
                layout="responsive"
                title="Reporte rápido de incidentes"
              />
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row items-center pb-14">
            <motion.div
              className="w-80 sm:mr-12 order-2 sm:order-none"
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <Image
                src={FeatImage05}
                alt="Ejemplos de automatización de correos"
                layout="responsive"
                title="Automatización de e-mails"
              />
            </motion.div>

            <div className="w-full sm:w-3/5 pr-30 sm:pr-30 mb-6 sm:mb-0 order-1 sm:order-none">
              <div className="font-architects-daughter text-xl text-blue-600 mb-2">
                Más rapidez. Menos costos
              </div>
              <h3 className="h3 mb-3">Personalización de la Experiencia</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">
                Nuestro sistema de recordatorios automáticos mantiene informados a vos y a tu equipo sobre cada check-in y check-out, eliminando la necesidad de recordar fechas importantes. Además, integramos los datos de cada reserva en Hostingenie para brindar a cada huésped una experiencia totalmente personalizada y organizada.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col min-[1000px]:flex-row items-center">
            <div className="max-[1000px]:w-full w-2/5 pr-30 sm:pr-30 mb-6 sm:mb-0">
              <div className="font-architects-daughter text-xl text-blue-600 mb-2">
                Más rapidez. Menos costos
              </div>
              <h3 className="h3 mb-3">Panel de Soporte al Cliente</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">
                Brindamos a propietarios y equipos de atención al cliente un potente panel interactivo con analíticas detalladas, historial completo de conversaciones y herramientas exclusivas de personalización de Hostingenie. Esta solución permite intervenir en conversaciones gestionadas por IA y tomar control total para ofrecer un servicio altamente personalizado.
              </p>
            </div>

            <motion.div
              className="w-full sm:w-2/3 md:w-1/2 min-[1000px]:ml-12"
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <Image
                src={FeatImage04}
                alt="Panel de soporte al cliente"
                layout="responsive"
                title="Panel de soporte al cliente"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
