export const metadata = {
  title: 'Hostingenie: AI-Powered Hospitality Management Solution',
  description: 'Where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with an advanced AI chatbot and task automation system.',
  keywords: 'AI chatbot, property management, hospitality AI, guest experience, task automation, multilingual support, problem management, transportation assistance, live customer support, lost & found assistance, customizable features, guest relations, vacation rental management, property management software, hospitality industry, passive income streams, AI chatbot for property management, Automated guest support system, Hospitality AI solutions, Property management AI software, Conversational AI for hotels, Automated check-in/check-out system, Multilingual guest support, Task automation for vacation rentals, Local recommendations for Airbnb, Problem management solutions for hosts, Transportation assistance for guests, Live customer support integration for rentals, Customizable features for property hosts, Guest experience optimization tools, Hospitality industry AI innovations, Efficient property management solutions, AI-driven guest relations, Streamlined vacation rental management, Property management software with AI, airbnb hosts, booking hosts'
}


import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Description from '@/components/description'
import About from '@/components/about'
import Benefits from '@/components/benefits'
import Swipers from '@/components/swiper'



export default function Home() {
  return (
    <>
    
      <Hero />
      <Description />
      <Features />
      <Zigzag />
      <Benefits />
      <Swipers />
      <About />
    </>
  )
}
