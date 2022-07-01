import React from 'react';
import CTA from './CTA'; // Call To Action
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hi, I'm</h5>
        <h1>Alec Dziwanowski</h1>
        <h5 className='text-light'>Full-Stack Developer</h5>
        <HeaderSocials />
        <CTA />
      </div>
    </header>
  )
}

export default Header;