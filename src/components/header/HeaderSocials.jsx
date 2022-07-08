import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/alecdziwanowski/' target='_blank' rel='noreferrer'><BsLinkedin size={28} /></a>
            <a href='https://github.com/AlecDziwanowski' target='_blank' rel='noreferrer'><BsGithub size={28} /></a>
        </div>
    )
}

export default HeaderSocials;