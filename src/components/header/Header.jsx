import React from 'react';
// Call To Action
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header>
      <div class="container header_container">
        <h5>Hi, I am</h5>
        <h1>Alec Dziwanowski</h1>
        <h5 class="text-light">Fullstack Developer</h5>
        <CTA />
        <div>

        </div>
      </div>
    </header>
  )
}

export default Header;