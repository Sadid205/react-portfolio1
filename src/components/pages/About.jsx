import React from 'react';
import { about } from '../data/dummydata';
import Heading from '../common/Heading'; 
const About = () => {
    return (
        <section className='about'>
            <div className="container flex">
                {about.map((val, i) => (
                    <>
                        <div className='left'>
                            <img src={val.cover} alt="" data-aos="zoom-in-left" />
                        </div>
                        <div className='right' data-aos="zoom-out-right">
                            <Heading title = "About me" />
                            <p>{val.desc}</p>
                            <button className='primaryBtn'>Download CV</button>
                        </div>
                    </>
                ))}
            </div>
        </section>
    );
};

export default About;