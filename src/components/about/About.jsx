import React from 'react';
import './about.css';
import { MdOutlineComputer } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>Me</h2>
      <div className='container about_container'>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <MdOutlineComputer className='about_icon' />
              <h5>Web Development</h5>
              <small>Co-developed and actively maintaining <a href='https://syncmylinks.com' target='_blank'>SyncMyLinks.com</a>.</small>
            </article>
            <article className='about_card'>
              <AiOutlineProject className='about_icon' />
              <h5>Project Management</h5>
              <small>Four Years of experience managing over 100 environmental consulting projects totaling approximately $750,000.</small>
            </article>
          </div>
          <p>
            I am a full-stack developer who specializes in JavaScript, namely the MERN stack. I am a former Certified Professional Geologist
            in the State of North Carolina with 5 years of environmental-consulting experience. I grew up in eastern North Carolina
            and my hobbies include: spending quality time with my wife and daughter, playing ice hockey, snowboarding, golfing, PC gaming,
            and following the NHL, namely, the Detroit Red Wings.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;