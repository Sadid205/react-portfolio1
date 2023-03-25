import React from 'react';
import {home} from '../data/dummydata';
import Typewriter from "typewriter-effect"
const Hero = () => {
    return (
        <section className='hero'>
            {home.map((val, i) =>(
                <div className="heroContainer">
                    <h3 data-aos='fade-left'>{val.text}</h3>
                    <h1>
                        <Typewriter options={{strings:[`${val.name}`, `${val.post}`, `${val.design}`],
                    autoStart: true, loop: true}}/>
                    </h1>
                    <p>{val.desc}</p>
                    <button className='primaryBtn' data-aos="zoom-in-right">Download</button>
                </div>
            ))}
        </section>
    );
};

export default Hero;