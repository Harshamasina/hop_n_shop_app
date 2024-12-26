import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Inventory from '../Pages/Sinclair/Inventory';
import ChampsHome from '../Pages/Champs/ChampsHome';
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import Error404 from '../Pages/Error404';
import About_Us from '../Pages/About_Us';
import HuntsPizza from '../Pages/HuntsPizza';
import Gallery from '../Pages/Gallery';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [changeNavbar, setChangeNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setChangeNavbar(true);
        }else{
            setChangeNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <div>
                <nav className={changeNavbar ? 'navbar_color' : 'navbar'}>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Hop'n Shop & <img src="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/sinclair_logo.png" alt="Logo" />
                    </Link>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FiXCircle /> : <FiAlignRight />}
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/about_us' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/inventory' className='nav-links' onClick={closeMobileMenu}>Inventory</Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='/champs_fried_chicken' className='nav-links' onClick={closeMobileMenu}>
                                Champs Fried Chicken 
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/hunts_pizza' className='nav-links' onClick={closeMobileMenu}>
                                Hunt Brothers Pizza
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <a href='#contact' className='nav-links-btn' onClick={closeMobileMenu}>Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about_us' element={<About_Us />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/champs_fried_chicken' element={<ChampsHome />} />
                    <Route path='/hunts_pizza' element={<HuntsPizza />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </div>
        </>
    );
};

export default Navbar;