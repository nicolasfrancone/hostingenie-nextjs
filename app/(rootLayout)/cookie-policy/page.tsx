export const metadata = {
  title: "Política de Cookies | Conocé la Política de Cookies de Hostingenie",
  description: "Conocé la política de cookies de Hostingenie y cómo utilizamos cookies para mejorar tu experiencia de uso. Descubrí qué tipos de cookies usamos y cómo podés gestionar tus preferencias.",
}

export default function Cookie() {
  return (
    <>
      <section className='mt-20 md:mt-20'>
        <link rel="canonical" href="https://www.hostingenie.com/cookie-policy" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative pt-32 pb-6 md:pt-40 md:pb-6">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4 mt-8 sm:mt-0">Política de Cookies</h1>
            </div>

            <div className="mx-auto text-left pb-12 md:pb-20">
              <h2 className="h4 mb-4">Introducción</h2>
              <p className="text-xl text-gray-400 pb-10">
                Bienvenido a la Política de Cookies de Hostingenie. Esta política describe cómo Hostingenie utiliza cookies y tecnologías similares de seguimiento cuando interactuás con nuestros chatbots conversacionales basados en inteligencia artificial, desarrollados mediante plataformas de terceros como Voiceflow y Voiceglow. Al utilizar los servicios de Hostingenie, aceptás el uso de cookies conforme a lo descrito en esta política.
              </p>

              <h3 className="h4 mb-8">¿Qué son las cookies?</h3>
              <p className="text-xl text-gray-400 pb-10">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web o utilizás un servicio en línea. Se utilizan comúnmente para mejorar el funcionamiento de los sitios web y proporcionar información a los propietarios del sitio.
              </p>

              <h3 className="h4 mb-8">Tipos de cookies utilizadas</h3>
              <p className="text-xl text-gray-400">
                Hostingenie utiliza los siguientes tipos de cookies:
              </p>
              <ul className="list-disc pl-6 text-xl text-gray-400 pb-10">
                <li>
                  <strong>Cookie de idioma del navegador:</strong> determina el idioma preferido de tu navegador y se utiliza para mostrar el chatbot en el idioma elegido por el usuario.
                </li>
                <li>
                  <strong>Cookie local de ejecución (runtime local):</strong> almacena el historial de conversación del chatbot en tu dispositivo para ofrecer una experiencia continua y fluida.
                </li>
              </ul>

              <h3 className="h4 mb-8">Google Analytics</h3>
              <p className="text-xl text-gray-400 pb-10">
                Utilizamos Google Analytics para analizar el comportamiento de los usuarios dentro del chatbot con fines de mejora continua. Google Analytics puede recopilar información adicional sobre tu dispositivo y actividad de navegación. Podés obtener más información sobre las prácticas de privacidad de Google Analytics aquí:{" "}
                <a
                  className="text-custom-blue underline hover:text-custom-dark visited:text-blue-500"
                  href="https://policies.google.com/privacy"
                >
                  https://policies.google.com/privacy
                </a>.
              </p>

              <h3 className="h4 mb-8">Finalidad del uso de cookies</h3>
              <ul className="list-disc pl-6 text-xl text-gray-400 pb-10">
                <li>
                  <strong>Mejora de la experiencia del usuario:</strong> las cookies nos permiten personalizar tu experiencia mostrando el chatbot en tu idioma preferido y conservando el historial de conversación.
                </li>
                <li>
                  <strong>Análisis:</strong> Hostingenie utiliza Google Analytics para analizar el uso del chatbot y optimizar su funcionamiento.
                </li>
              </ul>

              <h3 className="h4 mb-8">Datos recopilados mediante cookies</h3>
              <p className="text-xl text-gray-400 pb-10">
                Las cookies utilizadas por Hostingenie no recopilan información personal de forma directa. Sin embargo, pueden almacenar ciertos datos relacionados con tus interacciones con los chatbots, como el historial de conversaciones guardado en la cookie “runtime local”.
              </p>

              <h3 className="h4 mb-8">Gestión de cookies</h3>
              <p className="text-xl text-gray-400 pb-10">
                Podés gestionar tus preferencias de cookies a través de la configuración de tu navegador. La mayoría de los navegadores permiten controlar el uso de cookies, incluyendo su aceptación o eliminación. Tené en cuenta que deshabilitar las cookies puede afectar el funcionamiento de los servicios de Hostingenie.
              </p>

              <h3 className="h4 mb-8">Actualizaciones de la política</h3>
              <p className="text-xl text-gray-400 pb-10">
                Hostingenie puede actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestras prácticas o por motivos operativos, legales o regulatorios. Te recomendamos revisar esta política regularmente.
                <br /><br />
                Esta Política de Cookies fue actualizada por última vez el 27 de febrero de 2024.
              </p>

              <h3 className="h4 mb-8">Contacto</h3>
              <p className="text-xl text-gray-400">
                Si tenés preguntas o inquietudes sobre la Política de Cookies de Hostingenie, podés contactarnos a través del correo electrónico support@hostingenie.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
