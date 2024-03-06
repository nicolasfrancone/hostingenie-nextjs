import LogoImage from '@/public/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='mt-20 md:mt-20'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative pt-32 pb-6 md:pt-40 md:pb-6">
          {/* Container to center the image and heading */}
          <div className="flex flex-col items-center justify-center w-64 h-64 mx-auto pb-10">
          <Image src={LogoImage} alt="Hostingenie Logo" layout='responsive'/>
          </div>

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">Hostingenie.</h1>
              <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Where Artificial Intelligence and Hospitality come together to redfine the ideal stay: simplifying property management, creating unforgettable experiences.</p>
            </div>
          
        </div>
      </div>
    </section>
  )
}
