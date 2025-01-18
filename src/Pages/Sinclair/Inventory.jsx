import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import {inventory_products} from '../../Data/Inventory.json';
import { BsPatchCheck } from "react-icons/bs";
import { Helmet } from 'react-helmet';

const Inventory = () => {
    const [expanded, setExpaded] = useState(null);
    const img = "https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/sinclair_inside_crop.jpg";

    const toggleExpand = (index) => {
        setExpaded(expanded === index ? null : index);
    }

    return (
        <div>
            <Helmet>
                <title>Inventory | Hop'n Shop #32 & Sinclair</title>
                <meta name="description" content="We have all types of items in our convenience store with premium grade fuel." />
                <meta name='keywords' content="fuel, cigarettes, Beer, Alcohol, Snacks and Candies" />
                <link rel="canonical" href="https://sinclairrolla.com/inventory" />
            </Helmet>

            <Parallax bgImage={img} strength={200} bgImageAlt="parallaximg" blur={2}>
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
                                                            <div className='products_list'>
                                                                <span><BsPatchCheck /></span>
                                                                <li key={idx}>{product}</li>
                                                            </div>
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