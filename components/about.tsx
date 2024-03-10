import ProfileImage from '@/public/images/IMG_0439-modified.png'
import Image from 'next/image'


export default function About() {
    return (
      <section id='about'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-12 border-t border-gray-800">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">About Us</h2>
              <p className="text-xl text-gray-400">Hostingenie was founded in 2024 by Nicolas Francone, a computer engineering student from Buenos Aires, Argentina. Our mission at Hostingenie is to revolutionize the hospitality industry by providing seamless communication and an enhanced lodging experience for both guests and property owners.</p>
            </div>
  
            <div className="mx-auto text-left">
              <h3 className="h3 mb-4">Our Vision</h3>
              <p className="text-xl text-gray-400 pb-10">As a passionate traveler and technology enthusiast, Nicolas Francone embarked on a journey around the world, experiencing diverse accommodation options. It was during these travels that he recognized the allure of staying in properties, offering a unique opportunity to immerse oneself in the local culture. However, he also recognized the challenges faced by property owners in efficiently managing vacation rentals.<br></br>Determined to make a difference, Nicolas sought to combine his love for travel with his expertise in technology to develop solutions that would support property owners in their endeavors, fostering a more seamless and enjoyable experience for both hosts and guests alike.</p>
            
              <h3 className="h3 mb-4">The Challenge</h3>
              <p className="text-xl text-gray-400 pb-10">Renting properties for vacation purposes often entails significant responsibilities for hosts, who may lack the necessary property management skills. From handling check-ins and check-outs to addressing guest inquiries and ensuring property upkeep, hosts face numerous challenges. This often leads to delays in response times, elevated stress levels, and an inability to provide the desired level of guest satisfaction.<br></br>As a result, finding effective solutions to streamline these processes and enhance the overall hosting experience becomes paramount.</p>
            
  
            
              <h3 className="h3 mb-4">Our Solution</h3>
              <p className="text-xl text-gray-400 pb-10">Hostingenie emerged as a solution to streamline communication between property owners and guests, utilizing artificial intelligence to alleviate the burden on hosts. By leveraging AI technology, Hostingenie empowers hosts to provide personalized attention to guests without the constant demand for customer support. This not only enables hosts to generate passive income with minimal time investment but also ensures guests receive exceptional service promptly.</p>
            
  
          
              <h3 className="h3 mb-4">How We Benefit Everyone</h3>
              <p className="text-xl text-gray-400 pb-10">With Hostingenie, everyone wins. Property owners gain access to a tailored Genie capable of managing all guest inquiries, while guests enjoy a personalized and seamless experience. By bridging the gap between hosts and guests, Hostingenie enhances the overall lodging experience and fosters mutual satisfaction.</p>
             
            {/* Meet Our Team */}
            <div className="mx-auto text-left pb-12 md:pb-10 flex flex-wrap items-center">
              <h3 className="h3 mb-4">Meet Our Team</h3>
              <p className="text-xl text-gray-400 pb-6">Behind Hostingenie is a dedicated team of professionals committed to revolutionizing the hospitality industry. Our diverse backgrounds and expertise converge to drive innovation and deliver exceptional service to our clients.</p>
              </div>

              <div className="mx-auto text-left flex flex-wrap pb-8 sm:pb-10 items-center">
              <div className="w-full md:w-1/2 md:pr-8">
              <p className="text-xl mb-2 font-bold">Nicolas Francone - Founder & CEO</p>
              <p className="text-lg text-gray-400 mb-4">Nicolas Francone's passion for travel and technology inspired the creation of Hostingenie. With a vision to simplify the vacation rental experience, Nicolas leads the team with enthusiasm and dedication.</p>
              <p className="text-xl  font-bold">Support Team</p>
              <p className="text-lg text-gray-400">Our support team works tirelessly to ensure seamless communication between hosts and guests. With a focus on efficiency and excellence, they strive to exceed expectations and deliver unparalleled service.</p>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 pt-7 pb-4 sm:pb-6">
              <div className="rounded-full overflow-hidden w-64 h-64 mx-auto md:mx-0">
                <Image src={ProfileImage} alt="Your Profile Picture" layout="responsive" width={300} height={300} />
              </div>
            </div>
          
          </div>

            <div className="text-left pb-12 md:pb-20">

            <h3 className="h3 mb-4">Current Phase</h3>
            <p className="text-xl text-gray-400 pb-10">Please note that Hostingenie is currently in a test phase, where we are refining our services to ensure optimal performance and user experience. We appreciate your patience and feedback during this phase as we work towards our official launch.</p>
              
            <h3 className="h3 mb-4">Special Offer for Early Adopters</h3>
            <p className="text-xl text-gray-400 pb-10">Our first customers who would like to work with us during this phase will have access to Hostingenie at <strong>COST PRICE</strong> for the initial months as a token of appreciation for trusting us. This special offer is our way of expressing gratitude to those who join us early on in our journey. We value your partnership and look forward to working closely with you to shape the future of Hostingenie.</p>
              
              <h3 className="h3 mb-4">Contact Us</h3>
              <p className="text-xl text-gray-400">Ready to experience the future of hospitality? Connect with us today to learn more about Hostingenie and how we can transform your lodging experience. If you have any questions, concerns, or inquiries, please don't hesitate to reach out to us at <strong>support@hostingenie.com</strong>. <br></br>Our dedicated support team is here to assist you and ensure that your experience with Hostingenie is seamless and satisfactory. We look forward to hearing from you!</p>
            </div>
  
          </div>
        </div>
        </div>
      </section>
    )
  }
  