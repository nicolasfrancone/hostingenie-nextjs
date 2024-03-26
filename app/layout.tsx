import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import Script from 'next/script'
import { Metadata } from 'next';

import Header from '@/components/ui/header'

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

export const metadata: Metadata = {
  title: 'Hostingenie: AI-Powered Hospitality Management Solution',
  description: 'Where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with an advanced AI chatbot and task automation system.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header 
          
          />
          {children}
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
      </body>
    </html>
  )
}


 