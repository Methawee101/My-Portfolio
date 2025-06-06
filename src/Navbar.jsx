import React from 'react';

function Navbar() {
  return (
    <nav class ="w-full fixed bg-[#FFD6BA] z-50">
        <div class = "flex flex-wrap items-center justify-between p-4">
          <a class = "p-4 text-4xl self-center">My Portfolio</a>
          
          <div  id = "navbar-default">
            <ul class = "flex text-2xl  ">
              <li>
                <a href="#home" class ="bg-transparent p-4 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" class ="bg-transparent  p-4">About</a>
              </li>
              <li>
                <a href="#project" class ="bg-transparent  p-4">Project</a>
              </li>
              <li>
                <a href="#certificate" class ="bg-transparent p-4">Certificate</a>
              </li>
              <li>
                <a href="#contact" class ="bg-transparent  p-4">Contact</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>

  )
}

export default Navbar