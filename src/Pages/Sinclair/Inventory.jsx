import React from 'react';
import sinclair_inside_crop from "../../assets/sinclair_inside_crop.jpg";
import { Parallax } from 'react-parallax';

const Inventory = () => {
    return (
        <div>
            <Parallax bgImage={sinclair_inside_crop} strength={200} bgImageAlt="parallaximg" blur={2}>
                <div className='ParallaxContainer1'>
                    <div className="ParallaxDiv">
                        <div className='ParallaxPageContent'>
                            <h2>Our Inventory</h2>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
};

export default Inventory;