import React from 'react'

function DesktopNav() {

  type SectionId = 'home' | 'about' | 'service' | 'portfolio' | 'resume' | 'contact';


  const scrollToSection = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
    
  const lineItemClassName = "text-white px-10 hover:text-orange-500 transition-colors duration-300";
  return (
    <div className="flex bg-black justify-between rounded-full px-10 py-4 w-11/12 m-2">
        
    <ol className="flex ">
      <li>
        <a href="#home" onClick={() => scrollToSection('home')} className={lineItemClassName}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={() => scrollToSection('about')} className={lineItemClassName}>
          About
        </a>
      </li>
      <li>
        <a href="#service" onClick={() => scrollToSection('service')} className={lineItemClassName}>
          Services
        </a>
      </li>
    </ol>
    <div className="flex">
      <div className="bg-orange-600  rounded-full w-7 h-7"></div>
      <span className="text-white px-2 font-bold text-lg">Caleb</span>
    </div>
    <ol className="flex">
      <li>
        <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className={lineItemClassName}>
          Portfolio
        </a>
      </li>
      <li>
        <a href="#resume" onClick={() => scrollToSection('resume')} className={lineItemClassName}>
          Resume
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => scrollToSection('contact')}className={lineItemClassName}>
          Contact
        </a>
      </li>
    </ol>
    
  </div>
  )
}

export default DesktopNav