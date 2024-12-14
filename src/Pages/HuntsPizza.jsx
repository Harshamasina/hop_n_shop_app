import pizza_cutting from "../assets/pizza_cutting.mp4";
import Hunts_Pizza_Menu from "../Components/Hunts_Pizza_Menu";
import hunts_pizza from "../assets/hunts_pizza.jpg";

const HuntsPizza = () => {
    return (
        <div>
            <section className='champs_main'>
                <div className='champs_overlay'></div>
                <div className='hunts_info'>
                    <p>Italian Trio Pizza</p>
                    <h1>HUNT <span>BROTHERS</span> PIZZA</h1>
                </div>
                
                <video className='champs_video-bg' autoPlay muted loop>
                    <source src={pizza_cutting} type='video/mp4' />
                </video>
            </section>

            <section className="hunts_pizza_container">
                <div className="hunts_pizza_img">
                    <img src={hunts_pizza} alt="hunts_pizza" />
                </div>

                <div className="hunts_pizza_p">
                    <p><span>Hunt Brothers Pizza</span> represents a legacy of pizza in the convenience store industry. Each and every day, our team of pizza professionals come together to support our store partners in providing the best pizza in their town. </p>
                    <p>We stay committed to offering top quality ingredients and exceptional flavor that far exceed your expectations. We are able to offer the best pizza value in town at over 10,000 locations across 33 states</p>
                </div>
            </section>

            <Hunts_Pizza_Menu />

            <section className='hunts_ribbon'>
                <h4>All Toppings, No Extra Charge</h4>
                <p>Hunt Brothers doesn't actually have their own locations. They just take a little pizza stand and put it into our gas station.</p>
                <p>Visit Hop'n Shop Sinclair Gas Station in Rolla, Missouri and have some delicious pizza.</p>
                <a href='https://www.huntbrotherspizza.com/' target='_blank'>Discover More About Us</a>
            </section>
        </div>
    )
};

export default HuntsPizza;