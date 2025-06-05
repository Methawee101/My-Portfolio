import React from 'react'

function About() {
  return (
    <div class = 'mt-14  '>
        <p class='text-3xl mb-5 sticky top-25 z-10 bg-black'>Methawee Thayia</p>
        <div class= 'mb-10'>
        <p class='text-2xl'>
            Hi there! I'm a fourth-year Computer Science student at the Faculty of Liberal Arts and Science,
            Kasetsart University, Kamphaeng Saen Campus. I am interested in front-end and Mobile Application development.
        </p>
        </div>

        <p class='text-3xl mb-5 sticky top-25 z-10 bg-black'>My Skills</p>
        <div class='flex justify-between'>

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
    </div>
  )
}

export default About