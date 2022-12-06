import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Produkter.scss";
import { urlFor, client } from "../../client";

const Produkter = () => {
    const [produkter, setProdukter] = useState([])
    const [activeFilter, setActiveFilter] = useState("All")
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
    const [filterProdukter, setFilterProdukter] = useState([])

    useEffect(() => {
        const query = '*[_type == "produkter"]'

        client.fetch(query)
            .then((data) => {
            setProdukter(data)
            setFilterProdukter(data);
        })
    }, [])

    const handleProdukterFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{y: 100, opacity: 0}])

        setTimeout(() => {
            setAnimateCard([{y: 0, opacity: 1}])

            if(item === "Alle") {
                setFilterProdukter(produkter);
            } else {
                setFilterProdukter(produkter.filter((produkter) => produkter.tags.includes(item)))
            }

        }, 500);
    }
    
    return (
        <>
            <h2 className='app__produkter-head'>Produkter</h2>
            <div className='app__produkter-filter'>
                {["Juleøl", "Alle"].map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => handleProdukterFilter(item)}
                    className={`app__produkter-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren:0.5}}
                className="app__produkter-portfolio"
                // whileHover={{scale: 1.04}}
            >
                {filterProdukter.map((produkter, index) => (
                    <div className='app__produkter-item app__flex' key={index}>
                        <div className='app__produkter-img app__flex'>
                            <img src={urlFor(produkter.imgUrl)} alt={produkter.name} />
                        </div>
                        <div className='app__produkter-content app__flex'>
                            <h4 className='bold-text'>{produkter.title}</h4>
                            <p style={{marginTop: 10}}>{produkter.description}</p>
                            <div className='app__produkter-tag app__flex'>
                                <p>{produkter.tags[0]}</p>
    
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
)}

export default AppWrap(
    MotionWrap(Produkter, "app__produkter"), 
    "produkter",
    "app__whitebg"
    )