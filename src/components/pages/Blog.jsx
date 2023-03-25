import React from 'react';
import Heading from '../common/Heading';
import { blog } from '../data/dummydata';
const Blog = () => {
    return (
        <section className='blog'>
            <div className='container'>
                <Heading title='Blog'/>
               <div className="content grid3">
               {
                    blog.map((item) => {
                        return(
                            <div className="box" data-aos="flip-left">
                                <div className="img" data-aos="flip-up">
                                    <img src={item.cover} alt="" data-aos="flip-down" />
                                </div>
                                <div className="text" data-aos="flip-right">
                                    <h3>{item.title}</h3>
                                    <label data-aos="flip-left">By {item.author}</label>
                                    <p data-aos="fade-up-right">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
               </div>
            </div>
        </section>
    );
};

export default Blog;