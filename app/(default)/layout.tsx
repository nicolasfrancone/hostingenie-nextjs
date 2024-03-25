import { Metadata } from 'next';

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Hostingenie: AI-Powered Hospitality Management Solution',
  description: 'Discover Hostingenie, where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with our advanced AI chatbot and task automation system. Find out more about our features, benefits, and how Hostingenie can transform your hosting experience.'
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
