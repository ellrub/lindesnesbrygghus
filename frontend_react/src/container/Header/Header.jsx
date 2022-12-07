import React from 'react'
import { motion } from "framer-motion"
import { AppWrap } from "../../wrapper"

import { images } from "../../constants"
import "./Header.scss";

const Header = () => {
    return (
    <div className='app__header'>
        <video 
            autoPlay="autopaly" 
            loop="loop" 
            muted 
            >
            <source src={images.beer} type="video/mp4" />
            Your browser does not support HTML5 videos.
        </video>
        <motion.div 
            className='app__header-div'
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.8}}

            >
            <motion.h1
            whileInView={{y: [70, 0]}}
            transition={{duration: 0.8}}
            >
                Når tiden skal nytes
            </motion.h1>
            <motion.p
            whileInView={{y: [30, 0]}}
            transition={{duration: 0.8}}
            >
                Lidenskap, entusiasme og glede over godt øl er det som driver oss fremover og
                vi tester hele tiden grenser for å skape nye smaker
            </motion.p>
            <div className='app__header-div--link'>
                <a href="#produkter">Våre Produkter</a>
            </div>
            <div className='app__header-div--link'>
                <a href="#produkter">Kontakt Oss</a>
            </div>
        </motion.div>
    </div>
)
}

export default AppWrap(Header, "hjem");
