import React, { useState } from 'react'
import { SocialMedia } from "../../components"

import { images } from "../../constants"
import { AppWrap, MotionWrap } from "../../wrapper"
import { client } from "../../client"
import "./Footer.scss";

const Footer = () => {
const [formData, setFormData] = useState({name: "", email: "", message: ""})
const [isFormSubmitted, setIsFormSubmitted] = useState(false)
const [loading, setLoading] = useState(false)


const {name, email, message} = formData;

const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
}

const handleSubmit = () => {
    setLoading(true);

    const kontakt = {
        _type: "kontakt",
        name: name,
        email: email,
        message: message
    }

    client.create(kontakt)
        .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        })
}

    return (
    <>
        <h2 className='app__headline-text'>Kontakt Oss</h2>
        <div className='app__footer-cards'>
            <div className='app__footer-card'> 
                <img src={images.email} alt="email" />
                <a href="mailto:ellefsen88@gmail.com" className='p-text'>ellefsen88@gmail.com</a>
            </div>
            <div className='app__footer-card'> 
                <img src={images.mobile} alt="mobile" />
                <a href="tel: +47 478 24 478" className='p-text'>+47 478 24 478</a>
            </div>
        </div>
        <SocialMedia />
    </>
)
}

export default AppWrap (
    MotionWrap(Footer, "app__footer"),
    "kontakt",
    "app__whitebg"
)

