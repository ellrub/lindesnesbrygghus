import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaFacebookF, FaInstagram} from "react-icons/fa"

const SocialMedia = () => {
    return (
    <div className='app__social'>
        <div className='app__social--icon'>
            <a href="https://www.instagram.com/lindesnesbrygghus/" target="_blank" ><FaInstagram /></a>
        </div>
        <div className='app__social--icon'>
            <a href="https://www.facebook.com/www.lindesnesbrygghus.no" target="_blank"><FaFacebookF /></a>
        </div>
    </div>
)
}

export default SocialMedia