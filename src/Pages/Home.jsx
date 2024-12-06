import React from 'react';
import gas_pumping from '../assets/gas_pumping.mp4';
import HomeInfo from '../Components/HomeInfo';
import HomeRibbon from '../Components/HomeRibbon';
import HomeTable from '../Components/HomeTable';

const Home = () => {
    return (
        <div>
            <section className='main'>
                <div className='overlay'></div>
                <div className='info'>
                    <p>Fill up your life!</p>
                    <h1>Welcome to Hop'nShop & <span>Sinclair</span></h1>
                    <button className='home_btn'>Visit Us Today</button>
                </div>
                <video className='video-bg' autoPlay muted loop>
                    <source src={gas_pumping} type='video/mp4' />
                </video>
            </section>
            
            <HomeInfo />
            <HomeRibbon />
            <HomeTable />
        </div>
    )
};

export default Home;