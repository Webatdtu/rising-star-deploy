import React, { useEffect, useRef, useState } from 'react';
import p1 from '../assets/pk1.jpg'
import p2 from '../assets/pk2.jpg'
import p3 from '../assets/pk3.jpg'
import pp1 from '../assets/pp1.jpg'
import pp2 from '../assets/pp2.jpg'
import pp3 from '../assets/pp3.jpg'

const Maps = () => {
  const [showMap, setShowMap] = useState(true);
  const [showMap2, setShowMap2] = useState(true);

  // Replace this with your Google Maps Embed URL
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5135632493066!2d38.823380810248935!3d9.01682698914274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b0016af668f%3A0x1790f771a983a8f7!2sRising%20Star%20Academy!5e0!3m2!1sen!2set!4v1726549018124!5m2!1sen!2set";

  return (
    <div className="flex flex-col gap-3 text-white items-center justify-center pt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" id='school'>
      <div className='md:pt-20'>
        <div className='relative'>
          <h2 className="absolute inset-0 text-3xl font-bold tracking-tight md:pb-16 text-center sm:text-4xl text-gray-400 font-serif">Our School</h2>
          <h2 className="relative pl-6 pt-2 text-3xl font-bold tracking-tight md:pb-16 text-center sm:text-4xl text-white font-serif">Our School</h2>
        </div>
        <p className='p-9 text-center font-serif'>Welcome to Rising Star Academy Where Brilliance Takes Root!</p>
      </div>
      {/* new */}
      <div className={`py-10 p-4 md:p-16 mx-5 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg
      `}>
        <div >
          <h2 className="text-xl font-semibold mb-3">Our Story</h2>
          <p className="max-w-3x mx-auto text-lg mb-6">
            Rising Star was founded with the belief that every child has the potential to shine. Since
            our inception, we have been dedicated to creating an inclusive, forward-thinking
            environment where students are encouraged to dream big and work hard to achieve their goals.
          </p>
          <p className="max-w-3x mx-auto text-lg">
            From humble beginnings, we have grown into a leading educational institution, known for our
            commitment to academic excellence, innovative teaching methods, and community involvement.
            Our journey is built on a foundation of passion, dedication, and the relentless pursuit
            of progress.
          </p>
        </div>
      </div>
      {/*     kindergarten     */}
      <div className={`flex flex-col items-center gap-2 md:gap-8 p-4 md:p-16 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mx-5`}>
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold italic'>Rising Star kindergarten school</h1>
          <p>A child’s early years lay foundation for all that is to come. At Rising Star
            Kindergarten, we nurture curiosity, creativity, and a love for learning that lasts a
            lifetime. At Rising Star Kindergarten, we cultivate an environment where young minds thrive,
            and every day is an opportunity to explore, grow, and imagine.</p>
          {/* Button to Show Google Map */}
          <span className='pt-3 text-green-300'><i>Address: Jacros - Salite Mehret Rd, Addis Ababa, Ethiopia</i></span>
          <button
            className="bg-red-300 text-white py-2 w-48 px-4 rounded hover:bg-red-700 transition duration-300"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? 'Show On Map' : 'Hide The Map'}
          </button>
        </div>
        {/*     mapp   1  */}
        <div>
          {showMap ?
            <></> : (
              <div className="mt-6 md:w-[1000px] md:h-80 h-64 rounded-lg">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 rounded-lg"
                  title="Company Location"
                ></iframe>
              </div>
            )}
        </div>
        {/*    images  1   */}
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={p1} alt="Placeholder 1"
              className="w-full h-44 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img src={p2} alt="Placeholder 2"
              className="w-full h-44 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img src={p3} alt="Placeholder 3"
              className="w-full h-44 md:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-col items-center gap-2 md:gap-8 p-4 md:p-16 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mx-5`}>
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold italic'>Rising Star Primary school</h1>
          <p>Through a balance of structured learning and creative play, our kindergarten program builds the
            social, emotional, and academic foundations for future success. At Rising Star Primary school, we cultivate an environment where young minds thrive, and
            every day is an opportunity to explore, grow, and imagine.</p>
          <span className='pt-3 text-green-300'><i>Address: 123 Addis Ababa Road, Addis Ababa, Ethiopia</i></span>
          {/* Button to Show Google Map */}
          <button
            className="bg-red-300 text-white py-2 w-48 px-4 rounded hover:bg-red-700 transition duration-300"
            onClick={() => setShowMap2(!showMap2)}
          >
            {showMap2 ? 'Show On Map' : 'Hide The Map'}
          </button>
        </div>
        <div>
          {showMap2 ?
            <> </> : (
              <div className="mt-5 md:w-[1000px] md:h-80 h-64 rounded-lg">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  title="Company Location"
                ></iframe>
              </div>
            )}
        </div>
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={pp1} alt="Placeholder 1"
              className="w-full h-44 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img src={pp2} alt="Placeholder 2"
              className="w-full h-44 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img src={pp3} alt="Placeholder 3"
              className="w-full h-44 md:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* Conditional Rendering of Google Map */}
      <div className="py-16 bg-gray- text-center px-8">
        <h2 className="text-3xl font-bold mb-8">What Our Parents & Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg">
            <p className="italic">"Rising Star has transformed my child's confidence and academic performance. The personalized attention is second to none!"</p>
            <p className="mt-4 font-bold">— Selam Belete., Parent</p>
          </div>
          <div className="p-6 shadow-lg">
            <p className="italic">"The teachers are incredible! I’ve learned to love studying, and I feel ready for whatever the future holds."</p>
            <p className="mt-4 font-bold">— Alex Tolosa., Student</p>
          </div>
          <div className="p-6 shadow-lg">
            <p className="italic">"The teachers are incredible! I’ve learned to love studying, and I feel ready for whatever the future holds."</p>
            <p className="mt-4 font-bold">— Nurhusen Jibril., Parent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
