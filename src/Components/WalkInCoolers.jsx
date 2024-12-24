import GS_1 from "../assets/GS_2.jpg"

const WalkInCoolers = () => {
    return (
        <div>
            <div className="img_box_heading">
                <h3>Full Size Walk in Coolers</h3>
            </div>
            <div className="img_box_card_container">
                <div className="img_box_card">
                    <div className="img_box">
                        <img src={GS_1} alt="Trenchless Repair" />
                    </div>
                    <div className="img_box_content">
                        <h3>We also have Full Size Walk in Coolers</h3>
                        <p>Grab and go chilled beverages and Beers without any hazzle.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WalkInCoolers;