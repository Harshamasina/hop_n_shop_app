import React from 'react';
import fried_chicken from '../../assets/fried_chicken.mp4';
import champs_sandwich from '../../assets/champs_sandwich.png';
import Champs_Menu from './Champs_Menu';
import ChampsRibbon from './ChampsRibbon';

const champsHome = () => {
    return (
        <div>
            <section className='champs_main'>
                <div className='champs_overlay'></div>
                <div className='champs_info'>
                    <p>Be a Mealtime HERO.</p>
                    <h1>CHAMPS <span>CHICKEN</span></h1>
                    {/* <a href='#menu' className='champs_home_btn'>See our Menu</a> */}
                </div>
                <video className='champs_video-bg' autoPlay muted loop>
                    <source src={fried_chicken} type='video/mp4' />
                </video>
            </section>

            <div className='champs_home_info' id="about_champs" >
                <div className='champs_home_info_img'>
                    <img src={champs_sandwich} alt='' />
                </div>

                <div className='champs_home_info_p'>
                    <p>Making the <span>best</span> chicken in the World.</p>
                    <p>While redefining <span>quality</span> and <span>convenience</span> to help you get through your day.</p>
                    <p>Now delicious  <span>Champs Chicken</span> is available in Hop'n Shop - Sinclair gas Station, Rolla, MO</p>
                </div>
            </div>
            <Champs_Menu id='menu' />
            <ChampsRibbon />
        </div>
    )
};

export default champsHome;