import React from 'react';
import CTA from './CTA'; // Call To Action
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h1>Alec Dziwanowski</h1>
        <h5 className='text-light'>Full-Stack Developer</h5>
        <CTA />
      </div>
      <HeaderSocials />
    </header>
  )
}

export default Header;