import React from 'react'
import { AiFillMail,AiFillPhone,AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="min-h-screen ">
        <p className='text-3xl sticky top-20 z-10 bg-[#222831]'>Contact</p>
        <div className='mt-10 flex items-center space-x-4'>
                <AiFillMail className="text-2xl text-gray-600 sm:text-xl" />
                <p className='text-2xl sm:text-xl'> pray.methawee@gmail.com</p>
        </div>
        <div className='mt-10 flex items-center space-x-4'>
            <AiFillPhone className='text-2xl text-gray-600 sm:text-xl'/>
            <p className='text-2xl sm:text-xl'>095-947-8760</p>
        </div>
        <div className='mt-10 flex items-center space-x-4'>
            <AiFillGithub className='text-2xl text-gray-600 sm:text-xl'/>
            <a href="https://github.com/Methawee101" className='text-2xl sm:text-xl'>https://github.com/Methawee101</a>
        </div>
    </div>
  )
}

export default Contact

