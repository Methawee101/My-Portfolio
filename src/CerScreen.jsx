import React from 'react'
import OSCer from './assets/OSCer.png';
import AIForThai from './assets/AIForThai.png';
import ResponsiveWebDesign from './assets/ResponsiveWebDesign.png';
import BasicHTMLAndCSS from './assets/BasicHTMLAndCSS.png';
import DiversityInTheWorkplace from './assets/DiversityInTheWorkplace.png';
import EffectivePresentationTechniques from './assets/EffectivePresentationTechniques.png';
import Set from './assets/Set.png';

function CerScreen() {
  return (
    <div className="min-h-screen ">
        <h1 className='text-3xl sticky top-25 z-10 bg-[#222831]'>My Certificate</h1>
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
            <div className='w-[450px]'>
                <img src={BasicHTMLAndCSS } alt="BasicHTML" className='h-[300px]' />
                <h2 className='text-center mt-2'>Basic create HTML and CSS</h2>
            </div>
            <div className='w-[450px]'>
                <img src={DiversityInTheWorkplace } alt="DiversityInTheWorkplace" className='h-[300px]' />
                <h2 className='text-center mt-2'>Diversity in the workplace</h2>
            </div>
            <div className='w-[450px]'>
                <img src={EffectivePresentationTechniques } alt="EffectivePresentationTechniques" className='h-[300px]' />
                <h2 className='text-center mt-2'>Effective Presentation Techniques</h2>
            </div>
            <div className='w-[450px]'>
                <img src={Set } alt="PreparingForWork" className='h-[300px]' />
                <h2 className='text-center mt-2'>Preparing for work</h2>
            </div>



        </div>
    </div>
  )
}

export default CerScreen;