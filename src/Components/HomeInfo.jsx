import { Link } from "react-router-dom";
import { LuFuel } from "react-icons/lu";
import { MdOutlineGamepad } from "react-icons/md";
import { LuCandy } from "react-icons/lu";
import { LuBeer } from "react-icons/lu";
import { LuCigarette } from "react-icons/lu";
import { LuMilk } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { CiCoffeeCup } from "react-icons/ci";
import { GiChickenOven } from "react-icons/gi";
import { GiCigar } from "react-icons/gi";
import { HomeCards } from "../Data/HomeCards.json";

const HomeInfo = () => {
    const iconMap = {
        LuFuel: LuFuel,
        MdOutlineGamepad: MdOutlineGamepad,
        LuCandy: LuCandy,
        LuBeer: LuBeer,
        LuCigarette: LuCigarette,
        LuMilk: LuMilk,
        RiDrinks2Line: RiDrinks2Line,
        CiCoffeeCup: CiCoffeeCup,
        GiChickenOven: GiChickenOven,
        GiCigar: GiCigar,
    };
    
    return (
        <div>
            <div className='store_container'>
                <h2 className='store_title'>
                Hop'nShop & <span>Sinclair</span>
                </h2>
                <p className="store_subtitle">We sell all types of Fuel, Snacks, Alcohol, Cigarettes, Chews, Refreshments, Coffee</p>
                <div className="card_container">
                    {
                        HomeCards.map((items, index) => {
                            const IconComponent = iconMap[items.icon_name];
                            const linkPath = index === 8 ? "/champs_fried_chicken" : "/inventory";
                            return (
                                <div className="HomeInfo_card" key={index}>
                                    <span><IconComponent /></span>
                                    <div className="HomeInfo_cardInfo">
                                        <h4>{items.product_type}</h4>
                                        <p>{items.product_desc}</p>
                                        <Link className="homeInfo_link" to={linkPath}>Know More</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default HomeInfo;