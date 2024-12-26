import React from 'react';
import { Parallax } from 'react-parallax';
import AboutInfo from '../Components/AboutInfo';
import { Helmet } from 'react-helmet';

const About_Us = () => {
    const img ="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/restored_sinclair.jpeg"
  return (
    <div>
        <Helmet>
            <title>About Us | Hop'n Shop #32 & Sinclair</title>
            <meta name="description" content="Know more about Hop'n Shop #32 & Sinclair" />
            <meta name='keywords' content="Hop'n Shop #32 & Sinclair" />
        </Helmet>

        <Parallax bgImage={img} strength={200} bgImageAlt="parallaximg" blur={1}>
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