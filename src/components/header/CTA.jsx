import React from 'react';
import RESUME from '../../assets/AlecDziwanowski_Resume_2022.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download Resume</a>
        <a href='mailto:adziwanowski@gmail.com' className='btn btn-primary'>Email Me</a>
    </div>
  )
}

export default CTA;