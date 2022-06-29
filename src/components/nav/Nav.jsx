import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {MdOutlineComputer} from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><BiUserCircle /></a>
      <a href="#experience"><MdOutlineComputer /></a>
      {/* <a href="#services"><FaHome /></a> */}
      {/* <a href="#contact"><FaHome /></a> */}
    </nav>
  )
}

export default Nav;