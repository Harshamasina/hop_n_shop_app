import pizza_cutting from "../assets/pizza_cutting.mp4";
import Hunts_Pizza_Menu from "../Components/Hunts_Pizza_Menu";

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

            <Hunts_Pizza_Menu />
        </div>
    )
};

export default HuntsPizza;