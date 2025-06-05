import React from 'react'
import OSCer from './assets/OSCer.png';
import AIForThai from './assets/AIForThai.png';
import ResponsiveWebDesign from './assets/ResponsiveWebDesign.png'

function CerScreen() {
  return (
    <div className="min-h-screen ">
        <h1 className='text-3xl sticky top-25 z-10 bg-black'>My Certificate</h1>
        <div className='flex flex-wrap justify-center mt-10 gap-10'>
            <div className='w-[450px]'>
                <img src={OSCer} alt="OSCer" className='h-[300px]' />
                <h2 className='text-center mt-2'>Operating Systems</h2>
            </div>
            <div className='w-[450px]'>
                <img src={AIForThai} alt="AICer" className='h-[300px]' />
                <h2 className='text-center mt-2'>AI For Thai</h2>
            </div>
            <div className='w-[450px]'>
                <img src={ResponsiveWebDesign} alt="AICer" className='h-[300px]' />
                <h2 className='text-center mt-2'>Responsive Web Design</h2>


            </div>

        </div>
    </div>
  )
}

export default CerScreen;