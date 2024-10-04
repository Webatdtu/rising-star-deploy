import React, { useState, useEffect } from 'react';

import p1 from '../assets/image/photo_1.jpg'
import p from '../assets/image/photo.jpg'
import p2 from '../assets/image/photo_2.jpg'
import p3 from '../assets/image/photo_3.jpg'
import p4 from '../assets/image/photo_4.jpg'
import p5 from '../assets/image/photo_5.jpg'
import p7 from '../assets/image/photo_7.jpg'
import p6 from '../assets/image/photo_6.jpg'
import p8 from '../assets/image/photo_8.jpg'
import p9 from '../assets/image/photo_9.jpg'
import p10 from '../assets/image/photo_10.jpg'
import p11 from '../assets/image/photo_11.jpg'
import p12 from '../assets/image/photo_12.jpg'
import p13 from '../assets/image/photo_13.jpg'
import p14 from '../assets/image/photo_14.jpg'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 9);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 15);
      }

    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden m-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pt-10 p-5 md:p-10" id='student'>
      <div className='relative'>
        <h2 className="absolute inset-0 text-3xl font-bold tracking-tight pb-16 text-center sm:text-4xl text-gray-400 font-serif">Our Student</h2>
        <h2 className="relative pl-6 pt-2 text-3xl font-bold tracking-tight pb-16 text-center sm:text-4xl text-white font-serif">Our Student</h2>
      </div>
      <div className="grid bg-white/30 backdrop-blur-sm py-16 p-4 md:p-8 shadow-lg rounded-2xl">
        <div className='text-white'>
          <h2 className="text-xl font-bold mb-3">Our Top Students!</h2>
          <p className="max-w-3x mx-auto text-lg mb-6 tracking-wide">
            Rising Star was founded with the belief that every child has the From humble beginnings,
            we have grown into a leading educational institution, known for our
            commitment to academic excellence, innovative teaching methods, and community involvement.
            Our journey is built on a foundation of passion, dedication, and the relentless pursuit
            of progress.
          </p>
          <p className="max-w-3x mx-auto  tracking-wide">

          </p>
          <div className='pl-4'>
            <div className='flex'>
              <p>-</p> <p className='pl-2'>Our Students show respect to their peers and teachers create a posetive learning environment for everyone.</p>
            </div>
            <div className='flex'>
              <p>-</p> <p className='pl-2'>Kindness and empathy towards others are key aspects of or strong students character.</p>
            </div>
            <div className='flex'>
              <p>-</p> <p className='pl-2'>Our students have responsibility, honesty, and a willingness to and learn. </p>
            </div>
            <div className='flex'>
              <p>-</p> <p className='pl-2'>A posetive attitude and active participation help our students build strong relationships.</p>
            </div>
          </div>
        </div>

      </div>
      <div
        className="flex transition-transform duration-1000 md:duration-1000 ease-in-out"
        style={(window.innerWidth >= 768) ? { transform: `translateX(-${currentIndex * 60}%)` } : { transform: `translateX(-${currentIndex * 108}%)` }}
      >
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9">
          <img src={p} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p1} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p2} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p3} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p4} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p5} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p6} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p7} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p8} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p9} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p10} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p11} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p12} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p13} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-shrink-0 flex flex-col items-center my-5 md:pt-9 ml-5">
          <img src={p14} alt="" className="w-[325px] h-[200px] md:w-[650px] md:h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;





