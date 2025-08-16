import React from 'react';
import image1 from './assets/image1.jpg'

function HomeScreen() {
  return (
    <div className='flex min-h-screen  w-full' >
        <div className='w-1/2 h-screen'>
          <img src={image1} alt="Profile" className=' h-full w-full object-cover'/>
        </div>
        <div className = 'w-1/2 flex flex-col text-3xl items-center justify-center'>
            <p className='mb-7 text-5xl'>Hi!</p>
            <p className='mb-7 text-4xl'>I'm Praii</p>
            <p className = 'text-3xl'>Methawee Thayai</p>
        </div>
    </div>
  )
}

export default HomeScreen