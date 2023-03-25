import { FormatQuote } from '@mui/icons-material';
import React from 'react';
import { testimonials } from '../data/dummydata';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <section className="testimonials hero">
                <div className='container'>
                <Slider {...settings}>
                    {testimonials.map((val) => (
                        <div className="box" data-aos="zoom-in-up">
                                <i data-aos="zoom-out-up">
                                <FormatQuote/>
                                </i>
                                <p data-aos="zoom-out-down">{val.text}</p>
                                <div className='img'>
                                    <img src={val.image} alt="" data-aos="zoom-out-right"/>
                                </div>
                                <h3 data-aos="zoom-in">{val.name}</h3>
                                <label data-aos="zoom-in-left">{val.post}</label>
                            
                        </div>
                    ))}
                     </Slider>
                </div>
            </section>
        </>
    );
};

export default Testimonials;