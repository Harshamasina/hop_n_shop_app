import { Parallax } from 'react-parallax';
import { Helmet } from 'react-helmet';
import {gallery} from "../Data/Gallery.json";
import { useState } from 'react';
import { IoCloseCircleOutline  } from "react-icons/io5";

const Gallery = () => {
    const img ="https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/dino_close.jpg";
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    };

    return (
        <>
            <Helmet>
                <title>About Us | Hop'n Shop #32 & Sinclair</title>
                <meta name="description" content="Gallery of Hop'n Shop #32 & Sinclair" />
                <meta name='keywords' content="Hop'n Shop #32 & Sinclair Pictures" />
            </Helmet>

            <Parallax bgImage={img} strength={200} bgImageAlt="parallaximg" blur={1}>
                <div className='ParallaxContainer1'>
                    <div className="ParallaxDiv">
                        <div className='ParallaxPageContent'>
                            <h2>Gallery</h2>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className={modal? "model open" : "model"}>
                <img src={tempImgSrc} alt="LabPics" />
                <IoCloseCircleOutline  className="CloseLabIcon" onClick={() => setModal(false)} />
            </div>

            <div className="GalleryContaniner">
                {gallery && gallery.map((item, index) => {
                    return(
                        <div className="grid-images" key={index} onClick={() => getImg(item.imgUrl)}>
                            <img src={item.imgUrl} alt={index} style={{width: '100%'}} loading="lazy" />
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Gallery;