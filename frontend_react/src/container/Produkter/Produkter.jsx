import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Produkter.scss";
import { urlFor, client } from "../../client";

const Produkter = () => {
    const [produkter, setProdukter] = useState([])

    useEffect(() => {
        const query = '*[_type == "produkter"]'

        client.fetch(query)
            .then((data) => setProdukter(data))
    }, [])
    

    return (
    <>
        <h2 className='app__headline-text'>Produkter</h2>
        <div className='app__profiles'>
            {produkter.map((produkter, index) => (
                <motion.div
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, type: "tween"}}
                    className="app__profile-item"
                    key={produkter.title + index}
                >
                    <img src={urlFor(produkter.imgUrl)} alt={produkter.title} />
                    <h2 className='app__produkter-item-h2' style={{marginTop: 20}}>{produkter.title}</h2>
                    <p className='app__produkter-item-p' style={{marginTop: 10}}>{produkter.description}</p>
                </motion.div>
            ))}
        </div>
    </>
)}

export default AppWrap(
    MotionWrap(Produkter, "app__produkter"), 
    "produkter",
    "app__whitebg"
    )