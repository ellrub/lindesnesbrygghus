import React from 'react'
import { motion } from "framer-motion"
import { AppWrap } from "../../wrapper"

import { images } from "../../constants"
import "./Header.scss";

const Header = () => {
    return (
    <div className='app__header app__flex'>
        <video 
            autoPlay="autopaly" 
            loop="loop" 
            muted 
            width="100%"
            >
            <source src={images.beer} type="video/mp4" />
            Your browser does not support HTML5 videos.
        </video>
        <motion.h1
        whileInView={{y: [180, 0], opacity: [0, 1]}}
        transition={{duration: 0.8}}
        >
            Når tiden skal nytes
        </motion.h1>
        <motion.p
        whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition={{duration: 0.8}}
        >
            Lidenskap, entusiasme og glede over godt øl er det som driver oss fremover og
            vi tester hele tiden grenser for å skape nye smaker
        </motion.p>
    </div>
)
}

export default AppWrap(Header, "hjem");
