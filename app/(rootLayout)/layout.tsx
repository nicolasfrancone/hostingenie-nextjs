import '../css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/ui/header'
import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export default function rootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">

          <Header />

          <main className="grow">
            <PageIllustration />
            {children}
          </main>

          <Footer />

        </div>

        <Script
          src="https://storage.googleapis.com/voiceglow-cdn/vg_live_build/vg_bundle.js"
        />
        <Script id="voiceglow">
          {`
            (function() {
              window.VG_CONFIG = {
                ID: "tuhorsi3y",
                region: 'na',
                render: 'popup',
                stylesheets: [
                  "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/styles.css",
                ],
              };
            })();
          `}
        </Script>
        <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
