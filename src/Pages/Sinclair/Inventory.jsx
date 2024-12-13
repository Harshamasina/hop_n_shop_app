import React, { useState } from 'react';
import sinclair_inside_crop from "../../assets/sinclair_inside_crop.jpg";
import { Parallax } from 'react-parallax';
import {inventory_products} from '../../Data/Inventory.json';

const Inventory = () => {
    const [expanded, setExpaded] = useState(null);

    const toggleExpand = (index) => {
        setExpaded(expanded === index ? null : index);
    }
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

            <section className='articles'>
                {
                    inventory_products && inventory_products.map((data, index) => (
                        <article key={index}>
                            <div className='article_wrapper'>
                                <figure>
                                    <img src={data.img_url} alt={data.name} />
                                </figure>
                                <div className='article-body'>
                                    <h3>{data.name}</h3>
                                    <p>{data.desc}</p>
                                    <span onClick={() => toggleExpand(index)}>
                                        {expanded === index ? '' : 'Click to view More'}
                                    </span>
                                    {
                                        expanded === index && (
                                            <div>
                                                <ul>
                                                    {
                                                        data.products.map((product, idx) => (
                                                            <li key={idx}>{product}</li>
                                                        ))
                                                    }
                                                </ul>
                                                <span onClick={() => toggleExpand(index)}>Minimize Products</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    )
};

export default Inventory;