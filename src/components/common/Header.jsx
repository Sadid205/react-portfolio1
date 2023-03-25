import React, { useState } from 'react';
import logo from '../data/images/logo.png';
import {navlink} from "../data/dummydata";
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
const Header = () => {
   const [responsive, setResponsive ] = useState(false)
    return (
        <header>
            <div className='container flexSb'>
                <div className='logo'>
                    <img src={logo}alt="" data-aos='zoom-in-up' />
                </div>
                <div className= {responsive ? "hideMenu" : "nav"}>
                    {navlink.map((link, i) => (
                        <Link to={link.url} key={i} data-aos='zoom-in-left'>{link.text}</Link>
                    ) )}
                </div>
                <button className='toggle' onClick={() =>setResponsive(!responsive)}>
                    <Menu className='icon'></Menu>
                </button>
            </div>
        </header>
    );
};

export default Header;