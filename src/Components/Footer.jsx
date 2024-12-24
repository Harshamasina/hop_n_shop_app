import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import sinclair_logo from '../assets/sinclair_logo.png';
import GoToTopAnimation from './GoToTopAnimation';

const Footer = () => {
    return (
        <div>
            <section className='contact' id='contact'>
                <div className='container'>
                    <div className='mapouter'>
                        <iframe
                            id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6291.177003233966!2d-91.76861612354419!3d37.96339320127154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87da54b2e2855a37%3A0x73659a01a1c1ebd2!2sSinclair!5e0!3m2!1sen!2sus!4v1731954641079!5m2!1sen!2sus"
                            width="600" height="450" allowfullscreen="" loading="lazy"
                        />
                    </div>

                    <div className='formContainer'>
                        <form>
                            <input type="text" placeholder="First Name*" />
                            <input type="text" placeholder="Last Name*" />
                            <input type="text" placeholder="Email*" />
                            <input type="number" placeholder="Phone Number*" />
                            <input type="text" placeholder="Subject" />
                            <textarea cols="30" rows="10" placeholder="Message"></textarea>
                            <a href="#/" className="btn">SEND MESSAGE</a>
                        </form>
                    </div>
                </div>
                
                <div className="container-fluid justify-content-center">
                    <footer>
                        <div className="row justify-content-around mb-0 pt-5 pb-0 ">
                            <div className=" col-11">
                                <div className="row justify-content-center"> 
                                    <div className="col-md-3 col-12 font-italic align-items-center  mt-md-3 mt-4">
                                        <h5>
                                            Hop'n Shop &
                                            <span> <img src={sinclair_logo} className="img-fluid mb-1 "  /></span>
                                        </h5>
                                        <p className="social mt-md-3 mt-2"> 
                                            <span><FaFacebookF className='fa' /></span>  
                                            <span><FaInstagram className='fa'  /></span>  
                                            <span><FaXTwitter className='fa' /></span> 
                                        </p>
                                        <small className="copy-rights cursor-pointer">&#9400; 2025 Hop'nShop #32 & Sinclair</small><br />
                                        <small>Copyright.All Rights Resered. </small>
                                    </div>

                                    <div className="col-md-3 col-12  my-sm-0 mt-5">
                                        <ul className="list-unstyled">
                                            <li className="mt-md-3 mt-4">Useful Links</li>
                                            <li><Link className='footer_links' to="/home">Home</Link></li>
                                            <li><Link className='footer_links' to="/services">Services</Link></li>
                                            <li><Link className='footer_links' to="/services">About Us</Link></li>
                                            <li><Link className='footer_links' to="/inventory">Inventory</Link></li>
                                            <li><Link className='footer_links' to="/champs_fried_chicken">Champs Fried Chicken</Link></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-3 col-12 my-sm-0 mt-5">
                                        <ul className="list-unstyled">
                                            <li className="mt-md-3 mt-4">Address</li>
                                            <li className='footer_info'>2003 N Bishop Ave</li>
                                            <li className='footer_info'>Rolla,</li>
                                            <li className='footer_info'>Missouri,</li>
                                            <li className='footer_info'>65401</li>
                                        </ul>
                                    </div>

                                    <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                        <ul className="list-unstyled">
                                            <li className="footer_headings mt-md-3 mt-4">Contact Details</li>
                                            <li className='footer_info'>Pramod Situala</li>
                                            <li className='footer_info'>Pathwaymo2003@gmail.com</li>
                                            <li className='footer_info'><a>+1 (573)-364-7400</a></li>
                                        </ul>
                                    </div>
                                </div>  
                            </div>
                        </div> 
                    </footer>
                </div>
            </section>
            <GoToTopAnimation />
        </div>
    )
};

export default Footer;
