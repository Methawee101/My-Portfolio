import React from 'react';
import Nodejs from "./assets/Skill/Nodejs.png";
import Python from "./assets/Skill/Python.png";
import ReactLogo from "./assets/Skill/ReactLogo.png";
import CSS3 from "./assets/Skill/CSS3.jpg";
import JavaScript from "./assets/Skill/JavaScript.png";
import Javabanner from "./assets/Skill/Javabanner.jpg";
import Figma from "./assets/Skill/figma.png"

function About() {
  return (
    <div class = 'mt-14  '>
        <p class='text-3xl mb-5 sticky top-25 z-10 bg-[#FFF2EB]'>Methawee Thayia</p>
        <div class= 'mb-10'>
        <p class='text-2xl'>
            Hi! I'm a fourth-year Computer Science student at the Faculty of Liberal Arts and Science, Kasetsart University, Kamphaeng Saen Campus.
I’m passionate about front-end and mobile application development, especially building clean, user-friendly interfaces.
I’ve been working on several personal and academic projects using technologies like React, React Native, and Expo, and I’m always eager to learn and improve my skills.
Currently, I’m looking for opportunities where I can contribute as a Front-end Developer or Mobile App Developer and grow as part of a dynamic tech team.
        </p>
        </div>

        <p class='text-3xl mb-5 sticky top-25 z-10 bg-[#FFF2EB]'>My Skills</p>
        <div class='flex  gap-20'>
            <div>
                <p class='text-2xl'>Languages</p>
                <div class='flex flex-col gap-3 text-xl my-3'>
                    <li>C</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </div>
            </div>

            <div>
                <p class='text-2xl'>Frontend Frameworks</p>
                <div class='flex flex-col gap-3 text-xl my-3'>
                    <li>React</li>
                    <li>React Native</li>
                </div>
            </div>

            <div>
                <p class='text-2xl'>Backend & Database</p>
                <div class='flex flex-col gap-3 text-xl my-3'>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                </div>
            </div>

            <div>
                <p class='text-2xl'>Design & Prototyping</p>
                <div class='flex flex-col gap-3 text-xl my-3'>
                    <li>Figma</li>
                    <li>Drow.io</li>
                </div>
            </div>
        </div>
        <div className='mt-7 flex gap-5'>
            <img src={Nodejs} alt="nodejs" className='w-24' />
            <img src={Python} alt="python" className='w-24' />
            <img src={ReactLogo} alt="react" className='w-24' />
            <img src={CSS3} alt="CSS3"className='w-24' />
            <img src={JavaScript} alt="js" className='w-24' />
            <img src={Javabanner} alt="java" className='w-24' />
            <img src={Figma} alt="figma" className='w-27' />
        </div>
    </div>
  )
}

export default About