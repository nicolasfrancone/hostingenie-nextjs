import Image from 'next/image'

import PageIllustration from '@/components/page-illustration'

import FeatImage01 from '@/public/images/IMG_3878-modified.png'
import FeatImage02 from '@/public/images/IMG_3877-modified.png'
import FeatImage03 from '@/public/images/IMG_3872-modified.png'
import FeatImage04 from '@/public/images/chat_yourself.png'
import FeatImage05 from '@/public/images/IMG_3881-modified.png'

export default function Zigzag() {
  return (
    <section id='demos'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <div className="inline-flex text-lg font-semibold py-3 px-6 m-2 text-green-600 bg-green-200 rounded-full mb-8">Unlock true passive income streams.</div>
            <h1 className="h2 mb-4">One Genie, unlimited Solutions</h1>
            <p className="text-xl text-gray-400">Say <strong>goodbye</strong> to the stress of guest inquiries, the hassle of managing calendars, and the constant reminders of pending tasks. With Hostingenie at your service, effortless hospitality is just a click away. We have your back.</p>
            <p className="text-xl text-gray-400 mt-8">Say <strong>hello</strong> to a world of positive reviews, elevated satisfaction, and unforgettable guest experiences. With Hostingenie at your side, welcome increased efficiency, more free time, and a hospitality journey like never before.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center pb-14 lg:pb-0" data-aos="fade-right">
          <div className="w-80 sm:mr-12 order-2 sm:order-none">
              <Image src={FeatImage01} alt="check-in and check-out Demo" layout="responsive" />
            </div>
            <div className="w-full sm:w-3/5 pr-30 sm:pr-30 mb-6 sm:mb-0 order-1 sm:order-none">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
              <h3 className="h3 mb-3">Efficient Check-In and Check-Out</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">Your Hostingenie will provide a clear and intuitive explanation of the check-in and check-out processes, enriched with images, videos, maps, or any other resources that can streamline the entry to your property. Achieve a hassle-free check-in and check-out experience.</p>
            </div>
            
          </div>

          <div className="flex flex-col sm:flex-row items-center pb-14 lg:pb-0" data-aos="fade-left">
            
            <div className="w-full sm:w-3/5 pr-30 sm:pr-30 mb-6 sm:mb-0 order-1 sm:order-none">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
              <h3 className="h3 mb-3">Rapid Issue Reporting</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">Guests can easily report problems, describe the issue, snap relevant photos, and have them sent directly via email. Your Hostingenie will efficiently manage and notify staff about equipment malfunctions, urgent maintenance needs, or other inconveniences, all without the need for direct interaction.</p>
            </div>
            <div className="w-80 sm:ml-12 order-2 sm:order-none">
              <Image src={FeatImage02} alt="Issue Reporting Demo" layout="responsive" />
            </div>
          </div>

          

          <div className="flex flex-col sm:flex-row items-center pb-14" data-aos="fade-left">
            
          <div className="w-80 order-2 sm:order-none mr-12">
              <Image src={FeatImage05} alt="Experience Personalization" layout="responsive" />
            </div>
            <div className="w-full sm:w-3/5 pr-30 sm:pr-30 mb-6 sm:mb-0 order-1 sm:order-none">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
              <h3 className="h3 mb-3">Experience Personalization</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">Our automated reminder system keeps you and your staff informed of every check-in and check-out, relieving you of the burden of remembering dates. We also integrate each reservation details into your Hostingenie, ensuring each guest receives a meticulously personalized and well-organized experience.</p>
            </div>
            
          
          </div>

          <div className="flex flex-col min-[1000px]:flex-row items-center" data-aos="fade-right">
            
          
            
            <div className="max-[1000px]:w-full w-2/5 pr-30 sm:pr-30 mb-6 sm:mb-0">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
              <h3 className="h3 mb-3">Customer Support Dashboard</h3>
              <p className="text-xl text-gray-400 mb-8 sm:mb-12">We provide owners and customer support teams with a powerful interactive dashboard offering detailed analytics, comprehensive conversation histories, and exclusive Hostingenie customization tools. With this solution, you can intervene in AI-managed conversations and take full control to deliver exceptionally personalized service.</p>
            </div>

            <div className="w-full min-[1000px]:ml-12">
              <Image src={FeatImage04} alt="Customer Support Dashboard" layout="responsive" />
            </div>
           
          </div>

        </div>
      </div>
    </section>
  )
}
