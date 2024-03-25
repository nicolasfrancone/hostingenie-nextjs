import { Metadata } from 'next';

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Hostingenie: AI-Powered Hospitality Management Solution',
  description: 'Where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with an advanced AI chatbot and task automation system.'
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <>
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}
