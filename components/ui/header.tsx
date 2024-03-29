import NavMobile from './hamburger-mobile';
import Banner from '@/components/banner'
import Script from 'next/script'
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Hostingenie: AI-Powered Hospitality Management Solution',
  description: 'Where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with Hostingenie.',
  image: 'https://hostingenie.com/favicon.ico', // Replace with your image URL
  url: 'https://www.hostingenie.com', // Replace with your website URL
};

export default function Header() {
  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.hostingenie.com/" />
      </Head>
      <header className="absolute w-full z-30">
        <link rel="canonical" href="https://www.hostingenie.com/" />
        <meta name='title' content={metadata.title} />
        <meta name="description" content={metadata.description} />
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

        <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER"></div>

        <Banner />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">


            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop nav links */}
              <ul className="flex-grow flex justify-center items-center">
                <li>
                  <a href="/#features" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#demos" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    Demos
                  </a>
                </li>
                <li>
                  <a href="/#benefits" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="/#testimonials" className="font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/#about" className=" font-bold text-xl font-medium text-custom-blue hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    About
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
