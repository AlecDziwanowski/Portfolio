import React from 'react';
// Call To Action
import CTA from './CTA';
import './header.css';
// import headShot from './<photo>'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi, I am</h5>
        <h1>Alec Dziwanowski</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div>
          {/* <img src={headShot} alt="photo of Alec" /> */}
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;