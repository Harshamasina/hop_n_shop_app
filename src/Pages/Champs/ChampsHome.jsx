import Champs_Menu from './Champs_Menu';
import ChampsRibbon from './ChampsRibbon';
import { Helmet } from 'react-helmet';

const champsHome = () => {
    const vid ="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/fried_chicken_1.mp4";
    return (
        <div>
            <Helmet>
                <title>Champs Chicken | Hop'n Shop #32 & Sinclair</title>
                <meta name="description" content="We also have Champs Fried Chicken in our gas station" />
                <meta name='keywords' content='Chicken Sandwich, Chicken Strips, Sliders, Biscuits Etc.' />
                <link rel="canonical" href="https://sinclairrolla.com/champs_fried_chicken" />
            </Helmet>
            
            <section className='champs_main'>
                <div className='champs_overlay'></div>
                <div className='champs_info'>
                    <p>Be a Mealtime HERO.</p>
                    <h1>CHAMPS <span>CHICKEN</span></h1>
                    {/* <a href='#menu' className='champs_home_btn'>See our Menu</a> */}
                </div>
                <video className='champs_video-bg' autoPlay muted loop>
                    <source src={vid} type='video/mp4' />
                </video>
            </section>

            <div className='champs_home_info' id="about_champs" >
                <div className='champs_home_info_img'>
                    <img src="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/champs_pic.jpeg" alt='champs_food' />
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