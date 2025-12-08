"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import 'swiper/css/pagination';
import StarIcon from '@mui/icons-material/Star';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const testimonialsData = [
  {
    name: 'Nicolas Francone',
    position: 'Fundador y CEO',
    testimonial:
      "¿Qué estás esperando? ¡Convertite en nuestro primer testimonio en la página! Contactanos hoy mismo y comenzá tu camino con Hostingenie. 😎",
  },
];

export default function Swipers() {
  return (
    <section id='testimonials'>
      <div className="max-w-6xl mx-auto px-4 sm:px-20">
        <div className="py-12 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">¡No te quedes solo con nuestra palabra!</h2>
            <p className="text-xl text-gray-400">
              Mirá lo que dicen nuestros anfitriones luego de implementar Hostingenie en sus propiedades.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            spaceBetween={70}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{ dynamicBullets: true, clickable: true }}
            autoplay={{ delay: 7000 }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-3xl p-5 bg-white relative custom-background">
                  <div className='flex items-center'>
                    <img
                      title="Perfil del testimonio"
                      loading="lazy"
                      src="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.webp"
                      alt="Testimonio"
                      className="w-24 h-24 mr-4 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold weight-700 text-black">
                        {testimonial.name}
                      </h3>
                      <span className="italic custom-text">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>

                  <div className='mx-7'>
                    <p className="mt-4 text-lg text-black">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} className="star-icon" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
