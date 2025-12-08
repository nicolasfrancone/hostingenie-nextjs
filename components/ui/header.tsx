import NavMobile from './hamburger-mobile';
import Banner from '@/components/banner'
import Script from 'next/script'
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  image: 'https://hostingenie.com/favicon.ico',
  url: 'https://www.hostingenie.com',
};

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="absolute w-full z-30">
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Hostingenie" />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
        </Script>

        <div className="w-0 h-0" id="VG_OVERLAY_CONTAINER"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              <ul className="flex-grow flex justify-center items-center">
                <li>
                  <a
                    title="Sección Funciones"
                    href="/#features"
                    className="font-bold text-xl text-custom-blue hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                  >
                    Funciones
                  </a>
                </li>
                <li>
                  <a
                    title="Sección Demos"
                    href="/#demos"
                    className="font-bold text-xl text-custom-blue hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                  >
                    Demos
                  </a>
                </li>
                <li>
                  <a
                    title="Sección Beneficios"
                    href="/#benefits"
                    className="font-bold text-xl text-custom-blue hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    title="Sección Testimonios"
                    href="/#testimonials"
                    className="font-bold text-xl text-custom-blue hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    title="Sección Sobre Nosotros"
                    href="/#about"
                    className="font-bold text-xl text-custom-blue hover:text-gray-200 px-4 py-3 transition duration-150 ease-in-out"
                  >
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </nav>

            <NavMobile />

          </div>
        </div>
      </header>
    </>
  )
}
