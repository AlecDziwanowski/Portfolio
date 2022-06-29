import React from 'react';
import CTA from './CTA'; // Call To Action
import './header.css';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hi, I am</h5>
        <h1>Alec Dziwanowski</h1>
        <h5 className='text-light'>Full-Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div>
          <img src={ME} alt='Alec' className='me'/>
        </div>
        {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header;