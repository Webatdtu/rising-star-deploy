import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import back from '../assets/back.jpg'

import { CiCircleChevUp } from 'react-icons/ci';
const Home = () => {
    //scroll up
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <div id='home'>
            {isVisible?
            <button className="fixed z-10 bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><CiCircleChevUp size={30}/></button>:<></>}
             
            <div className="relative h-screen bg-cover bg-no-repeat" id='hom'>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
                {/* Overlay */}
                <Navbar />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-2xl md:text-6xl font-serif font-bold mb-4 animate-slide-in">
                        Welcome to Rising Star
                    </h1>
                    <p className="font-serif md:text-2xl mb-6 animate-slide-in">
                        Education for human greatness!
                    </p>
                    <a
                        href="#about"
                        className="bg-blue-500 hover:bg-blue-700 text-white animate-slide-in font-bol py-3 px-6 rounded-full transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home