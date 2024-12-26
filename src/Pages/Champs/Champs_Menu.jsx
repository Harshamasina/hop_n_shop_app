import React, { useState } from 'react';
import { Button } from 'bootstrap';

const Champs_Menu = () => {
    const [menu, setMenu] = useState("chicken_menu");

    const menuInfo = {
        chicken_menu: {
            title: "Champs Chicken Menu",
            info: "Champ's Chicken offers a variety of chicken meals, including tenders and dippers. You can choose from different box sizes with sides like battered fries, potato wedges, mac & cheese, mashed potatoes, and more. Upgrade your meal with a biscuit and an extra side for just $3!",
            img: "https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/champs_menu_1.jpg"
        },
        seafood_menu: {
            title: "Champs Seafood Menu",
            info: "Champ's Chicken offers a variety of seafood and chicken meals. You can choose from fish, shrimp, and bone-in chicken tenders. Some options include sides like mashed potatoes, corn, and gravy. Family packs are also available for larger groups!",
            img: "https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/champs_menu_2.jpg"
        },
        breakfast_menu: {
            title: "Champs Breakfast Menu",
            info: "Champ's Chicken offers a variety of breakfast options, including biscuits and croissants with sausage, bacon, ham, or egg and cheese. You can also enjoy biscuits and gravy, loaded burritos, chicken tender biscuits, and loaded bowls with potatoes, sausage gravy, and eggs.",
            img: "https://hopnshop-sinclair.s3.us-east-1.amazonaws.com/champs_menu_3.jpg"
        }
    };

    return (
        <div>
            <section className='champs_menu'>
                <div className='champs_menu_h3'>
                    <h3>Our Delicious Menu</h3>
                </div>

                <div className='menu_container'>
                    <div className='links_container'>
                        {
                            Object.keys(menuInfo).map((key) => (
                                <button
                                    key={key}
                                    className={menu === key ? "active" : ""}
                                    onClick={() => setMenu(key)}
                                >
                                    {menuInfo[key].title}
                                </button>
                            ))
                        }
                        
                        <a href='https://champschicken.com/' target='_blank'>Know More About Champ's</a>
                    </div>

                    <div className='menu_results'>
                        <div className='menu_output'>
                            <img src={menuInfo[menu].img} alt={menuInfo[menu].title} />
                            <h4>{menuInfo[menu].title}</h4>
                            <p>{menuInfo[menu].info}</p>
                            <a href='https://pfsbrands.com/champs-chicken/' target='_blank'>Know More about Menu</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Champs_Menu;