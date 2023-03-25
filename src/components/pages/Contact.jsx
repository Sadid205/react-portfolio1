import React from 'react';
import Heading from '../common/Heading';
import { contact } from '../data/dummydata';

const Contact = () => {
    return (
       <>
        <div className="contact">
            <div className="container">
                <Heading title= 'Keep In Touch'/>
                <div className="content flexSb" data-aos="zoom-in-down">
                    <div className="right">
                        <from>
                            <div className="flex">
                                <input type="text" placeholder='Name' data-aos="zoom-in-up" />
                                <input type="email" placeholder='Email' data-aos="zoom-in-down"/>
                            </div>
                            <input type="email" placeholder='Subject' data-aos="zoom-in"/>
                            <textarea name="" id="" cols="30" rows="10" data-aos="zoom-in-up"></textarea>
                            <button data-aos="zoom-in-down">Submit</button>
                        </from>
                    </div>
                    <div className="left">
                        {contact.map((item)=> (
                            <div className='box' data-aos="zoom-in-down">
                                <i>{item.icon}</i>
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
       </>
    );
};

export default Contact;