export const metadata = {
  title: "Política de Privacidad | Protegemos tu Información",
  description: "Conocé nuestra política de privacidad y cómo protegemos y tratamos tu información personal. Informate sobre tus derechos, nuestras prácticas de recopilación de datos y cómo cuidamos tu privacidad.",
}

export default function Privacy() {
  return (
    <>
      <section className='mt-20 md:mt-20'>
        <link rel="canonical" href="https://www.hostingenie.com/privacy-policy" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative pt-32 pb-6 md:pt-40 md:pb-6">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4 mt-8 sm:mt-0">Política de Privacidad</h1>
            </div>

            <div className="mx-auto text-left pb-12 md:pb-20">
              <h2 className="h4 mb-4">Introducción</h2>
              <p className="text-xl text-gray-400 pb-10">
                Esta Política de Privacidad describe cómo Hostingenie <strong>("nosotros", "nuestro" o "nos")</strong> recopila, utiliza y divulga tu información personal cuando interactuás con chatbots creados por nosotros y desarrollados sobre las plataformas Voiceflow y Voiceglow (en conjunto, los “Chatbots”).
              </p>

              <h4 className="h4 mb-4">Consentimiento del Usuario</h4>
              <p className="text-xl text-gray-400 pb-10">
                Al utilizar nuestros servicios o interactuar con nuestros chatbots, otorgás tu consentimiento expreso para la recopilación, uso y tratamiento de tu información personal de acuerdo con lo establecido en esta Política de Privacidad. Si no estás de acuerdo con sus términos, por favor no utilices nuestros servicios ni interactúes con nuestros chatbots.
              </p>

              <h4 className="h4 mb-8">Información que Recopilamos</h4>
              <p className="text-xl text-gray-400">
                Recopilamos dos tipos de información de los usuarios que interactúan con nuestros Chatbots:
              </p>
              <ul className="list-disc pl-6 pb-10 text-xl text-gray-400">
                <li>
                  <strong>Información de correos de confirmación de reservas:</strong> recopilamos ciertos datos provenientes del correo de confirmación de la reserva, como la fecha de check-in, la fecha de check-out y el nombre. Esta información no es recopilada directamente por nosotros, sino por la plataforma de reservas utilizada.
                </li>
                <li>
                  <strong>Información que brindás al Chatbot:</strong> podés optar por proporcionar información personal adicional al Chatbot, como tu dirección de correo electrónico, número de teléfono, archivos adjuntos u otros datos de contacto. Esta información solo se recopila si decidís proporcionarla y se utiliza únicamente para los fines descritos a continuación.
                </li>
              </ul>

              <h4 className="h4 mb-8">Uso de la Información</h4>
              <p className="text-xl text-gray-400">
                Utilizamos la información recopilada para los siguientes fines:
              </p>
              <ul className="list-disc pl-6 pb-10 text-xl text-gray-400">
                <li>
                  <strong>Mejorar la atención al huésped:</strong> brindarte soporte durante tu estadía, responder consultas sobre el alojamiento, recomendaciones, transporte y resolver cualquier inconveniente.
                </li>
                <li>
                  <strong>Permitir que los anfitriones contacten a los huéspedes:</strong> los anfitriones pueden visualizar las conversaciones con el Chatbot para obtener contexto y contactarte directamente si fuese necesario.
                </li>
                <li>
                  <strong>Brindar feedback a los anfitriones:</strong> permitimos que los anfitriones revisen conversaciones para mejorar su experiencia como anfitriones.
                </li>
                <li>
                  <strong>Personalizar la experiencia del Chatbot:</strong> utilizamos cookies para detectar el idioma de tu navegador, mostrar el Chatbot en ese idioma y almacenar el historial de conversación para una experiencia fluida.
                </li>
              </ul>

              <h4 className="h4 mb-8">Conservación de los Datos</h4>
              <ul className="list-disc pl-6 pb-10 text-xl text-gray-400">
                <li>
                  <strong>Archivos adjuntos:</strong> los archivos enviados a través del Chatbot se eliminan luego de una hora.
                </li>
                <li>
                  <strong>Historial de conversación:</strong> el historial se almacena en tu dispositivo y puede ser accedido por el anfitrión o por quienes este autorice.
                </li>
              </ul>

              <h3 className="h4 mb-8">Seguridad de los Datos</h3>
              <p className="text-xl text-gray-400 pb-10">
                Tu información se almacena de forma segura en Voiceflow y Voiceglow, plataformas que cumplen con estrictas prácticas de seguridad y con la normativa vigente en materia de protección de datos. Para más información, podés consultar sus políticas de privacidad:{" "}
                <a
                  className="text-custom-blue underline hover:text-custom-dark visited:text-blue-500"
                  href="https://voiceglow.org/legal/privacy-policy"
                >
                  Política de Privacidad de Voiceglow
                </a>{" "}
                y{" "}
                <a
                  className="text-custom-blue underline hover:text-custom-dark visited:text-blue-500"
                  href="https://www.voiceflow.com/legal/privacy"
                >
                  Política de Privacidad de Voiceflow
                </a>.
              </p>

              <h3 className="h4 mb-8">Responsabilidades del Usuario</h3>
              <p className="text-xl text-gray-400 pb-10">
                Los usuarios son responsables de la veracidad y legalidad de la información que proporcionan al interactuar con nuestros chatbots. Esto incluye datos personales y archivos adjuntos. Se recomienda no compartir información sensible o confidencial salvo que sea estrictamente necesario y siempre cumpliendo con la legislación vigente.
              </p>

              <h3 className="h4 mb-8">Cookies</h3>
              <p className="text-xl text-gray-400">Utilizamos dos tipos de cookies:</p>
              <ul className="list-disc pl-6 text-xl text-gray-400">
                <li>
                  <strong>Idioma del navegador:</strong> determina el idioma preferido del navegador para mostrar el Chatbot en ese idioma.
                </li>
                <li>
                  <strong>Runtime local:</strong> almacena el historial de conversaciones en tu dispositivo.
                </li>
              </ul>
              <p className="text-xl text-gray-400 pb-10">
                Para más información sobre cookies, consultá nuestra{" "}
                <a href="/cookie-policy" className="underline text-custom-blue">
                  Política de Cookies
                </a>.
              </p>

              <h3 className="h4 mb-8">Google Analytics</h3>
              <p className="text-xl text-gray-400 pb-10">
                Utilizamos Google Analytics para analizar el comportamiento de los usuarios dentro del Chatbot con fines de mejora continua. Google Analytics puede recopilar información adicional sobre tu dispositivo y actividad de navegación. Para más información, visitá:{" "}
                <a href="https://policies.google.com/privacy" className="underline text-custom-blue">
                  https://policies.google.com/privacy
                </a>.
              </p>

              <h3 className="h4 mb-8">Privacidad de Menores</h3>
              <p className="text-xl text-gray-400 pb-10">
                No recopilamos conscientemente información personal de menores de 13 años. Si sos padre, madre o tutor y creés que un menor nos ha proporcionado información personal, contactanos a support@hostingenie.com y la eliminaremos de nuestros registros.
              </p>

              <h3 className="h4 mb-8">Tus Derechos</h3>
              <p className="text-xl text-gray-400">
                Tenés derechos sobre tu información personal, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-xl text-gray-400">
                <li>Acceder a tu información personal.</li>
                <li>Rectificar información incorrecta.</li>
                <li>Solicitar la eliminación de tus datos.</li>
                <li>Oponerte al tratamiento de tu información.</li>
                <li>Solicitar la limitación del tratamiento.</li>
              </ul>
              <p className="text-xl text-gray-400 pb-10">
                Para ejercer estos derechos, escribinos a support@hostingenie.com.
              </p>

              <h3 className="h4 mb-8">Actualizaciones de la Política</h3>
              <p className="text-xl text-gray-400 pb-10">
                Podemos actualizar esta Política de Privacidad periódicamente. Los cambios se publicarán en esta página.
                <br /><br />
                Última actualización: 7 de diciembre de 2025.
              </p>

              <h3 className="h4 mb-4">Contacto</h3>
              <p className="text-xl text-gray-400">
                Si tenés preguntas o sugerencias sobre nuestra Política de Privacidad, podés contactarnos en{" "}
                <strong>support@hostingenie.com</strong>.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
