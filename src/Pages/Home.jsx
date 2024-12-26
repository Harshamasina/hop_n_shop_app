import React from 'react';
import HomeInfo from '../Components/HomeInfo';
import HomeRibbon from '../Components/HomeRibbon';
import HomeTable from '../Components/HomeTable';
import { Helmet } from 'react-helmet';
import WalkInCoolers from '../Components/WalkInCoolers';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Hop'n Shop #32 & Sinclair</title>
                <meta name="description" content="Welcome to Hop'n Shop #32 & Sinclair. Know more about Us" />
                <meta name='keywords' content="Hop'n Shop #32 & Sinclair" />
            </Helmet>

            <section className='main'>
                <div className='overlay'></div>
                <div className='info'>
                    <p>Fill up your life!</p>
                    <h1>Welcome to Hop'N Shop #32 & <span>Sinclair</span></h1>
                    <a href='https://maps.app.goo.gl/SMeUTZq3tQ1Swyth7' target='_blank'><button className='home_btn'>Visit Us Today</button></a>
                </div> 
                <video className='video-bg' autoPlay muted loop>
                    <source src="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/gas_pumping.mp4" type='video/mp4' />
                </video>
            </section>
            
            <HomeInfo />
            <HomeRibbon />
            <HomeTable />
            <WalkInCoolers />
        </div>
    )
};

export default Home;