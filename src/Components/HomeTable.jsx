import { useEffect, useState } from "react";
import scheduleData from '../Data/scheduleData.json';

const HomeTable = () => {
    const [day, setDay] = useState("Monday");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(scheduleData.scheduleData);
    });

    return (
        <section className="schedule">
            <h3>Store <span>Schedule</span></h3>
            <p>View the operating hours for our locations below. Select a day to see specific timings.</p>
            <div className="links">
                {
                    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                    <>
                        <button
                            key={d}
                            className={day === d ? "active" : ""}
                            onClick={() => setDay(d)}
                        >
                            {d}
                        </button>
                        <span>/</span>
                    </>
                    ))
                }
            </div>
            
            <table className="schedule_table">
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Timings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((store, index) => (
                            <tr key={index}>
                                <td>{store.store}</td>
                                <td>{store.timings[day]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
};

export default HomeTable;