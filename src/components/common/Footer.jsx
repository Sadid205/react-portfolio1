import React from 'react';
import { social } from '../data/dummydata';

const Footer = () => {
    return (
        <>
            <footer data-aos="fade-down-right">
                {social.map((item) => (
                    <>
                        <a target="_blank" href={item.url} rel="noreferrer">{item.icon}</a>
                    </>
                ))}
                <p>All Right Reserved 2023</p>
            </footer>
        </>
    );
};

export default Footer;