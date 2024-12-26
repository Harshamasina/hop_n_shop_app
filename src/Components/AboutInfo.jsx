import React from 'react';
import Landing_page from '../assets/Landing_page.jpg';

const AboutInfo = () => {
    return (
        <div className='about_info_container'>
            <div className='about_info_img'>
                <img src="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/Landing_page.jpg" alt='landing_page' />
            </div>

            <div className='about_info'>
                <h3>Know about Us</h3>
                <p>Sinclair Oil is a century-old energy company fueling America's road trips and everyday journeys with over 1,600 independent Sinclair-branded stations across more than 30 states. </p>
                <p>We're built on integrity and loyalty, treating our customers and co-workers the way we want to be treated like family.</p>
                <p>Our Gas Station in Rolla, Missouri is serving customers since 1960's. Our brand new gas station has more parkings space and pumps. We also introducing Champs Chicken and Hunt Brothers Pizza in our store. </p>
                <a href='https://www.sinclairoil.com/' target='_blank'>know more about Sinclair Oil</a>
            </div>
        </div>
    )
};

export default AboutInfo;