"use client";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import StarIcon from '@mui/icons-material/Star';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './swiper.css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, EffectCube, Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Swipers() {
  return (
    <section id='testimonials'>
    <div className="max-w-6xl pb-18 mx-auto px-4 sm:px-20">
      <div className="py-12 md:py-12 border-t border-gray-800 pt-15"></div>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Don't take our word for it!</h2>
        <p className="text-xl text-gray-400">See what our hosts are saying after implementing Hostingenie for their properties.</p>
      </div>
      <Swiper
        pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          autoplay={{
            delay: 7000
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          spaceBetween={70}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          navigation={true}
          
      >
        <SwiperSlide>
          <div className="rounded-3xl p-5 bg-white relative" style={{background: "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);"}}>
            <div className='flex items-center'>
              <img
                src="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png"
                alt="Testimonial"
                className="w-24 h-24 mr-4 rounded-full"
              />
              <div className=''>
                <h3 className="text-xl font-bold weight-700 text-black">Nicolas Francone</h3>
                <span className=" italic" style={{ fontWeight: 600, color: "#447c96" }}>Founder and CEO</span>
              </div>
            </div>
            <div className='mx-7'>
                <p className="mt-4 text-lg text-black">&ldquo; What are you waiting for? Become our first testimonial on our page! Reach out today and begin your Hostingenie journey. 😎 &rdquo;</p>
                </div>
            
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} style={{color: "DAA520"}} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl p-5 bg-white relative" style={{background: "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);"}}>
            <div className='flex items-center'>
              <img
                src="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png"
                alt="Testimonial"
                className="w-24 h-24 mr-4 rounded-full"
              />
              <div className=''>
                <h3 className="text-xl font-bold weight-700 text-black">Nicolas Francone</h3>
                <span className=" italic" style={{ fontWeight: 600, color: "#447c96" }}>Founder and CEO</span>
              </div>
            </div>
            <div className='mx-7'>
                <p className="mt-4 text-lg text-black">&ldquo; What are you waiting for? Become our first testimonial on our page! Reach out today and begin your Hostingenie journey. 😎 &rdquo;</p>
                </div>
            
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} style={{color: "DAA520"}} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-3xl p-5 bg-white relative" style={{background: "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);"}}>
            <div className='flex items-center'>
              <img
                src="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png"
                alt="Testimonial"
                className="w-24 h-24 mr-4 rounded-full"
              />
              <div className=''>
                <h3 className="text-xl font-bold weight-700 text-black">Nicolas Francone</h3>
                <span className=" italic" style={{ fontWeight: 600, color: "#447c96" }}>Founder and CEO</span>
              </div>
            </div>
            <div className='mx-7'>
                <p className="mt-4 text-lg text-black">&ldquo; What are you waiting for? Become our first testimonial on our page! Reach out today and begin your Hostingenie journey. 😎 &rdquo;</p>
                </div>
            
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} style={{color: "#DAA520"}} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
  );
}
