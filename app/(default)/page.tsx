export const metadata = {
  title: 'Hostingenie',
  description: 'Hostingenie Landing Page',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Description from '@/components/description'
import About from '@/components/about'
import Benefits from '@/components/benefits'



export default function Home() {
  return (
    <>
    
      <Hero />
      <Description />
      <Features />
      <Zigzag />
      <Benefits />
      <Testimonials />
      <About />
    </>
  )
}
