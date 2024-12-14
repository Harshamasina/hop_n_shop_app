import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Inventory from '../Pages/Sinclair/Inventory';
import Contact from '../Pages/Contact';
import ChampsHome from '../Pages/Champs/ChampsHome';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import sinclair_logo from '../assets/sinclair_logo.PNG';
import Error404 from '../Pages/Error404';
import About_Us from '../Pages/About_Us';
import HuntsPizza from '../Pages/HuntsPizza';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [champsDropdown, setChampsDropdown] = useState(false);
    const [changeNavbar, setChangeNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const toggleServicesDropdown = () => setServicesDropdown(!servicesDropdown);
    const toggleChampsDropdown = () => setChampsDropdown(!champsDropdown);

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
                        Hop'n Shop & <img src={sinclair_logo} alt="Logo" />
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

                        {/* <li className='nav-item dropdown' onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services <FiChevronDown />
                            </Link>
                            {
                                servicesDropdown && (
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <Link to='/services' className='dropdown-link' onClick={closeMobileMenu}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to='/inventory' className='dropdown-link' onClick={closeMobileMenu}>Inventory</Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </li> */}

                        {/* <li className='nav-item dropdown'
                            onMouseEnter={() => setChampsDropdown(true)}
                            onMouseLeave={() => setChampsDropdown(false)}>
                            {
                                champsDropdown && (
                                    <ul className='dropdown-menu'>
                                        <li><a href='#about_champs' className='dropdown-link' onClick={closeMobileMenu}>About Champs Fried Chicken</a></li>
                                        <li><a href='#menu' className='dropdown-link' onClick={closeMobileMenu}>Chicken Menu</a></li>
                                    </ul>
                                )
                            }
                        </li> */}

                        <Link to='/champs_fried_chicken' className='nav-links' onClick={closeMobileMenu}>
                            Champs Fried Chicken 
                        </Link>

                        <Link to='/hunts_pizza' className='nav-links' onClick={closeMobileMenu}>
                            Hunt Brothers Pizza
                        </Link>

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
                    <Route path='/contact_us' element={<Contact />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </div>
        </>
    );
};

export default Navbar;