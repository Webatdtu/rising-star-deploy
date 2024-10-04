import React from 'react'
import { FaTelegramPlane} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer  = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className='md:col-span-2'>
                        <h1 className='text-orange-500 text-3xl font-bold'>Rising Star Academy</h1>
                        <p className='text-gray-400 py-3'>Welcome to Rising Star Academy, We offer a balanced blend of academic excellence and 
                            character building, ensuring your child grows both mentally and emotionally.</p>
                        <div className="flex gap-2 py-2">
                        <a href="https://t.me/+Hc62vbhfneYzZDVK" className=""><FaTelegramPlane size={20} /></a>
                        <a href="https://rsaethiopia@gmail.com" target="_" className=""><MdEmail size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="text-sm text-gray-400">
                            <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="#school" className="hover:underline">Services</a></li>
                            <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
                            <li className="mb-2"><a href="#about" className="hover:underline">Blog</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h2 class="text-lg font-semibold mb-4">Contact Us</h2>
                        <ul class="text-sm text-gray-400">
                            <li class="mb-2">Email: rsaethiopia@gmail.com</li>
                            <li class="mb-2">Phone: +251-953-239-367</li>
                            <li class="mb-2">Address: Jacros - Salite Mehret Rd, Addis Ababa, Ethiopia</li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div class="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    © 2024 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Footer 