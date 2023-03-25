import React from 'react';
import Hero from './Hero';
import About from '../pages/About';
import Services from './Services';
import Counter from '../pages/Counter';
import { Portfolio } from '../pages/Portfolio';
import Testimonials from '../pages/Testimonials';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Services/>
            <Counter/>
            <Portfolio/>
            <Testimonials/>
            <Blog/>
            <Contact/>
           
        </>
    );
};

export default Home;