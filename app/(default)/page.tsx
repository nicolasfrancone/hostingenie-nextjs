export const metadata = {
  title: 'Hostingenie: AI-Powered Hospitality Management Solution',
  description: 'Where Artificial Intelligence meets hospitality excellence. Simplify property management, delight guests, and unlock passive income streams with Hostingenie.',
  keywords: 'property management, rental management software, property management system, property manager, short term rentals, vacation rental software, rental software for landlords, airbnb host, vacation rental property management, small property management, vacation property management, airbnb host management, airbnb management service, airbnb manager, property management software for small landlords, vacation property management services, vacation rental management company, rentals management, improving rental property, short term rental management company, airbnb management company, airbnb management software, managing airbnb remotely, airbnb co-hosts, short term rental property management, vrbo rental management, Property Management Software, Chatbot for Hospitality, Multilingual customer support, property management virtual assistant, airbnb agent, airbnb live chat support, airbnb automation tools, property management chatbot, airbnb automated, short term rental management software, rental property automation, Airbnb host assistance, Property Management Software with AI, Seamless Guest Communication, automation for properties, management solutions for property owners, Automating guest communication for vacation rentals, Manage Airbnb listings, virtual assistant for hosts, admin for my rental'
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
    <link rel="canonical" href="https://www.hostingenie.com/" />
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
