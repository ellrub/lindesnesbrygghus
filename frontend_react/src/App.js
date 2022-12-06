import React from 'react';

import { Produkter, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
    return (
    <div className='app'>
        <Navbar />
        <Header />
        {/* <Produkter />
        <Work />
        <Skills />
        <Testimonial />
        <Footer /> */}
    </div>
    );
}

export default App;