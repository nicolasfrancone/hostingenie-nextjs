import ProfileImage from '@/public/images/IMG_0439-modified.webp'
import Image from 'next/image'

export default function About() {
    return (
      <section id='about'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-12 border-t border-gray-800">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Sobre Nosotros</h2>
              <p className="text-xl text-gray-400">
                Hostingenie fue fundada en 2025 por Nicolás Francone, en el marco de un proyecto de innovación en Ingeniería Informática en Buenos Aires, Argentina. Nuestra misión es revolucionar la industria de la hospitalidad fusionando la gestión operativa con soluciones de Inteligencia Artificial para brindar una experiencia superior a huéspedes y propietarios.
              </p>
            </div>
  
            <div className="mx-auto text-left">
              <h3 className="h3 mb-4">Nuestra Visión</h3>
              <p className="text-xl text-gray-400 pb-10">
                Como anfitrión activo y entusiasta de la tecnología, Nicolás identificó una contradicción fundamental en el mercado: la búsqueda de rentabilidad sostenible frente a la realidad de una guardia operativa constante. Durante su experiencia gestionando propiedades, notó que la falta de herramientas adecuadas impedía escalar el negocio sin sacrificar calidad de vida.
                <br /><br />
                Decidido a generar un cambio, buscó combinar su formación en ingeniería con su experiencia en plataformas como Airbnb y Booking para desarrollar un ecosistema donde la tecnología elimine la fricción operativa y potencie la hospitalidad.
              </p>
            
              <h3 className="h3 mb-4">El Desafío</h3>
              <p className="text-xl text-gray-400 pb-10">
                La gestión de alquileres temporales conlleva una carga oculta significativa. Nuestros estudios revelan que para el 77% de los anfitriones, la comunicación constante es la principal fuente de agotamiento. Coordinar check-ins, responder consultas repetitivas y gestionar incidencias manualmente se vuelve insostenible al escalar.
                <br /><br />
                Esta sobrecarga deriva en demoras en las respuestas y estrés operativo. Resulta fundamental implementar soluciones que no solo asistan, sino que automaticen estos procesos para garantizar estándares de calidad consistentes.
              </p>
              
              <h3 className="h3 mb-4">Nuestra Solución</h3>
              <p className="text-xl text-gray-400 pb-10">
                Hostingenie propone una solución integral basada en Inteligencia Artificial Conversacional y Automatización de Procesos. Implementamos un "Agente Inteligente" capaz de filtrar y resolver más del 80% de las consultas rutinarias de forma autónoma.
                <br /><br />
                Gracias a esta tecnología, los anfitriones pueden minimizar su carga operativa y dependencia manual, mientras que los huéspedes reciben respuestas inmediatas las 24 horas, garantizando una atención de primer nivel sin intervención humana constante.
              </p>
          
              <h3 className="h3 mb-4">Cómo Beneficiamos a Todos</h3>
              <p className="text-xl text-gray-400 pb-10">
                Con Hostingenie, la ecuación es simple. Los propietarios logran escalabilidad y recuperan el control de su tiempo mediante la automatización de tareas críticas. Los huéspedes, por su parte, disfrutan de autonomía y asistencia instantánea personalizada.
                <br /><br />
                Al optimizar la eficiencia y la comunicación, Hostingenie eleva la reputación de las propiedades y fomenta una satisfacción mutua duradera.
              </p>
             
            {/* Meet Our Team */}
            <div className="mx-auto text-left pb-8 flex flex-wrap items-center">
              <h3 className="h3 mb-4">Nuestro Equipo</h3>
              <p className="text-xl text-gray-400 w-full">
                Detrás de Hostingenie hay una arquitectura técnica robusta y una visión clara de ingeniería aplicada al negocio.
              </p>
            </div>

            <div className="mx-auto text-left flex flex-wrap pb-8 sm:pb-10 items-center">
              <div className="w-full md:w-1/2 md:pr-8">
                <p className="text-xl mb-2 font-bold">Nicolas Francone – Fundador</p>
                <p className="text-xl text-gray-400 mb-4">
                  Estudiante de Ingeniería en Informática y emprendedor. Nicolás fusionó su experiencia técnica en desarrollo con su trayectoria real en la administración de propiedades para diseñar la arquitectura de Hostingenie.
                </p>
  <p className="text-xl font-bold">Equipo de Soporte</p>
                <p className="text-xl text-gray-400">
                 Nuestro equipo de soporte trabaja constantemente para garantizar una comunicación fluida entre anfitriones y huéspedes. Con un enfoque en la eficiencia y la excelencia, buscan superar expectativas y ofrecer un servicio de primer nivel.</p>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 pt-7 pb-4 sm:pb-6">
                <div className="rounded-full overflow-hidden w-64 h-64 mx-auto md:mx-0 border-4 border-gray-800">
                  <Image
                    src={ProfileImage}
                    alt="Foto de perfil de Nicolas"
                    layout="responsive"
                    width={300}
                    height={300}
                    title="Perfil de Nicolas"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-left pb-12 md:pb-20">
            <h3 className="h3 mb-4">Fase Actual</h3>
            <p className="text-xl text-gray-400 pb-10">
              Actualmente, Hostingenie se encuentra en una fase final pre lanzamiento, en la cual estamos perfeccionando nuestros servicios para garantizar un rendimiento óptimo y una excelente experiencia de uso. Agradecemos tu paciencia y feedback mientras avanzamos hacia nuestro lanzamiento oficial.</p>
              
            <h3 className="h3 mb-4">Contacto</h3>
            <p className="text-xl text-gray-400">
              ¿Listo para experimentar el futuro de la gestión de alquileres? Contactanos hoy mismo para conocer cómo la automatización puede transformar tu negocio.
              <br /><br />
              Si tenés consultas técnicas o comerciales, no dudes en escribirnos por e-mail haciendo clic <a title='E-mail de Hostingenie' className="underline hover:text-blue-400 transition-colors" href='mailto:support@hostingenie.com'><strong>aquí</strong></a>.
              <br /><br />
              Estamos listos para ayudarte a profesionalizar tu gestión. ¡Esperamos tu mensaje!
            </p>
          </div>
          </div>
        </div>
      </section>
    )
}