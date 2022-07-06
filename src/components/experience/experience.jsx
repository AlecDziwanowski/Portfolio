import React from 'react';
import './experience.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
// import { FiPenTool } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My</h5>
      <h2>Skills</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>React.js</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>HTML5 / CSS3</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>Bootstrap / Tailwind</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>Handlebars</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>Node.js</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>Express.js</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>MongoDB</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>MySQL2</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>GraphQL</h4>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Auxillary Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>GIT / Version Control</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>Agile Development</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>C#</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>MatLab</h4>
            </article>
            <article className="experience_details">
              <AiOutlineCheckCircle />
              <h4>Microsoft Office</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;