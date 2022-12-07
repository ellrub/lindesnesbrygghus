import React from 'react'
import { SocialMedia } from "../../components"

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Footer.scss";

const Footer = () => {
    return (
    <footer>
        <h2 className='app__footer-head'>Kontakt Oss</h2>
        <div className='app__footer-cards'>
            <div className='app__footer-card'> 
                <a href="mailto:ellefsen88@gmail.com" className='p-text'>email: post@lindesnesbrygghus.no</a>
            </div>
            <div className='app__footer-card'> 
                <a href="tel: +47 478 24 478" className='p-text'>tlf: +47 919 19 949</a>
            </div>
        </div>
        <SocialMedia />
    </footer>
)
}

export default AppWrap (
    MotionWrap(Footer, "app__footer"),
    "kontakt",
    "app__whitebg"
)

