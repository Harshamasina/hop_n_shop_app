import React from 'react';
import restored_sinclair from '../assets/restored_sinclair.jpeg';
import { Parallax } from 'react-parallax';
import AboutInfo from '../Components/AboutInfo';

const About_Us = () => {
  return (
    <div>
        <Parallax bgImage={restored_sinclair} strength={200} bgImageAlt="parallaximg" blur={1}>
            <div className='ParallaxContainer1'>
                <div className="ParallaxDiv">
                    <div className='ParallaxPageContent'>
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
        </Parallax>
        <AboutInfo />
    </div>
  )
}

export default About_Us;