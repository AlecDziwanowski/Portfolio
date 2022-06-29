import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {MdOutlineComputer} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><BiUserCircle /></a>
      <a href="#experience"><MdOutlineComputer /></a>
      <a href="#contact"><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav;