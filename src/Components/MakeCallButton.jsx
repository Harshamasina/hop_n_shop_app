import React from 'react';
import dino from '../assets/dino.svg';

const MakeCallButton = () => {
    return (
        <>
            <a href='tel:573-364-7400' aria-label='call us at 573-364-7400'>
                <span className='makeCall_icon'><img src={dino} alt='' /></span>
            </a>
        </>
    )
};

export default MakeCallButton;