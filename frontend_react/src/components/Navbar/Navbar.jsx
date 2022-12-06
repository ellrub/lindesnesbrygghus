import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants"

const Navbar = () => {
const [toggle, setToggle] = useState(false)

    return (
    <nav className='app__navbar'>
        <motion.div 
            whileInView={{x: [-100, 0], opacity: [0, 1]}}
            transition={{duration: 0.8}}
            className='app__navbar-logo'>
            <img src={images.logo} alt="Lindesnes logo" />
            <div className='app__navbar-logotext'>
                <p>lindesnes</p>
                <p>brygghus</p>
            </div>
        </motion.div>
        <motion.ul 
            whileInView={{y: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.8}}
            className='app__navbar-links'>
            {["hjem", "produkter", "artikler", "kontakt"].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </motion.ul>
        <div className='app__navbar-menu'>
            <HiMenu onClick={() => setToggle(true)} />

            {toggle && (
                <motion.div
                    whileInView={{x: [200, 0]}}
                    transition={{duration: 0.85, ease: "easeOut"}}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {["hjem", "produkter", "artikler", "kontakt"].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
)}

export default Navbar;