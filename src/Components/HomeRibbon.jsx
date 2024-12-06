import React from 'react'
import { Link } from 'react-router-dom';

const HomeRibbon = () => {
    return (
        <section className='home_ribbon'>
            <h2>Why choose us</h2>
            <p>We are offering exceptional quality service for 6 decades. We are building new gas station with more Fuel Pumps and more parking space.</p>
            <Link className='home_ribbon_link' to="/about_us">Discover More About Us</Link>
        </section>
    )
};

export default HomeRibbon;