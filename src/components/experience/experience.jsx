import React from 'react';
import './experience.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPenTool } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id='experience'>
      <article className='about_card'>
        <FiPenTool className='about_icon' />
        <h5>Skills</h5>
        <div className='flex'>
          <div className='flex flex-col'>
            <small><AiOutlineCheckCircle /> JavaScript</small>
            <small><AiOutlineCheckCircle /> Node.js</small>
            <small><AiOutlineCheckCircle /> React.js</small>
            <small><AiOutlineCheckCircle /> Express.js</small>
            <small><AiOutlineCheckCircle /> MongoDB</small>
            <small><AiOutlineCheckCircle /> MERN Stack</small>
            <small><AiOutlineCheckCircle /> MySQL2</small>
            <small><AiOutlineCheckCircle /> GraphQL</small>
          </div>
          <div className='flex flex-col'>
            <small><AiOutlineCheckCircle /> Handlebars</small>
            <small><AiOutlineCheckCircle /> GIT / Version Control</small>
            <small><AiOutlineCheckCircle /> Agile Development</small>
            <small><AiOutlineCheckCircle /> HTML5 / CSS3</small>
            <small><AiOutlineCheckCircle /> Bootstrap / Tailwind</small>
            <small><AiOutlineCheckCircle /> C#</small>
            <small><AiOutlineCheckCircle /> MatLab</small>
            <small><AiOutlineCheckCircle /> Microsoft Office</small>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Experience;