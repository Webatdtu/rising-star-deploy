import React from 'react'
import logo from '../assets/muna.jpg'

const About = () => {

    return (
        <div id='about' className=' bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
            <div className="py-10 sm:py-32">
                <div className='relative'>
                    <h2 className="absolute inset-0 text-3xl font-bold tracking-tight pb-16 text-center sm:text-4xl text-gray-400 font-serif">About us</h2>
                    <h2 className="relative pl-6 pt-3 text-3xl font-bold tracking-tight pb-16 text-center sm:text-4xl text-white font-serif">About us</h2>
                </div>
                <div className="mx-auto md:grid grid-cols-3 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
                    <div className="flex items-center p-5 gap-x-6">
                        <img className="h-28 w-28 rounded-full" src={logo} alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Momina Jibril</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-100">Principal</p>
                            
                        </div>
                    </div>
                    <div className="max-w-2xl pt-7 md:mr-3">
                        <h4 className="text-xl font-semibold my-2">Our Vision</h4>
                        <p className="mt-6 text-lg leading-8">At Rising Star, our vision is to cultivate
                            a generation of critical thinkers, innovators, and compassionate leaders. We are committed to
                            empowering students with the tools and mindset they need to excel in a rapidly changing world.</p>
                    </div>
                    <div className="max-w-2xl pt-7 md:mr-3">
                        <h4 className="text-xl font-semibold my-2">Our Mission</h4>
                        <p className="mt-6 text-lg leading-8">Our mission is to provide a safe and
                            stimulating environment where academic rigor meets creative exploration. We focus on nurturing
                            individuality while fostering a collaborative spirit within our diverse community.</p>
                    </div>
                </div>
                <div className="pt-16 px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Why Choose Rising Star?</h2>
                    <div className="md:flex gap-8">
                        <div className="p-6 shadow-lg">
                            <h3 className="text-xl text-slate-200 font-bold mb-4">Holistic Learning</h3>
                            <p>We offer a balanced blend of academic excellence and character building, ensuring your child grows both mentally and emotionally.</p>
                        </div>
                        <div className="p-6 shadow-lg">
                            <h3 className="text-xl text-slate-200 font-bold mb-4">State-of-the-Art Facilities</h3>
                            <p>Our campus is equipped with modern classrooms, science labs, and sports facilities, designed to provide the best learning environment.</p>
                        </div>
                        <div className="p-6 shadow-lg">
                            <h3 className="text-xl text-slate-200 font-bold mb-4">Experienced Faculty</h3>
                            <p>Our dedicated teachers are passionate, qualified, and committed to unlocking every student’s potential.</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
    )
}

export default About 