import React, {useState} from 'react'
import {SocialMedia} from "../../components"

import {images} from "../../constants"
import {AppWrap, MotionWrap} from "../../wrapper"
import {client} from "../../client"
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

    const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message
    }

    client.create(contact)
        .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        })
}

    return (
    <>
        <h2 className='app__headline-text'>I would love to work with you</h2>
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

    {!isFormSubmitted ? 
        <form className='app__footer-form app__flex'>
            <div className='app__flex app__footer--inputs'>
                <input
                    required
                    className='p-text app__footer--input' 
                    type="text"  
                    name='name' 
                    value={name} 
                    id="name"
                    onChange={handleChangeInput}/>
                <label htmlFor='name' className='app__footer--label'>Your Name</label>

            </div>
            <div className='app__flex app__footer--inputs'>
                <input
                    required
                    className='p-text app__footer--input' 
                    type="text" 
                    name='email' 
                    value={email} 
                    id="email"
                    onChange={handleChangeInput}/>
                <label htmlFor='email' className='app__footer--label'>Your Email</label>
            </div>
            <div className='app__footer--inputs'>
                <textarea
                    required
                    className='p-text app__footer--input' 
                    value={message}
                    name="message"
                    id="message"
                    onChange={handleChangeInput}
                />
                <label htmlFor='message' className='app__footer--label'>Your Message</label>
            </div>
            <button 
                type="button" 
                className='p-text' 
                onClick={handleSubmit}
            >{loading ? "Sending" : "Send Message"}</button>
        </form>
        : <div>
            <h3 className='app__footer-sub'>Thank you for getting in touch</h3>
        </div>}
        <SocialMedia />
    </>
)
}

export default AppWrap (
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
)

