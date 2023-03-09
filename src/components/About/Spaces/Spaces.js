import { useState } from 'react';
import { Hall } from './halls/Hall';
import { halls } from './halls/halls.js';
import './Spaces.css'

export const Spaces = () => {
    const [hall, setHall] = useState(halls[0])

    const showHall = (ev) => {
        ev.preventDefault();

        if (ev.target.tagName === "BUTTON") {
            const chosen = halls.find(x => x.title === ev.target.textContent);
            setHall(chosen);

            halls.map(x => x !== chosen
                ? x.style = { backgroundColor: '#284167' }
                : x.style = { backgroundColor: '#5979a9' }
            );
        }
    }

    return (
        <>
            <h1 className="perfect-title">ABOUT/our spaces</h1>
            <article className="spaces">
                <div className=" spaces">
                    <div className="spaces-wrapper">
                        <div className="spaces-card">
                            <div className="spaces-card-container">
                                <img src="/images/capacity.png" alt="" />
                                <h3>Capacity</h3>
                                <p>Area 350 sq.m., 300 sq.m. exhibition area</p>
                            </div>
                        </div>
                        <div className="spaces-card">
                            <div className="spaces-card-container">
                                <img src="/images/service.png" alt="" />
                                <h3>Service</h3>
                                <p>Restaurants, cafes, banks</p>
                            </div>
                        </div>
                        <div className="spaces-card">
                            <div className="spaces-card-container">
                                <img src="/images/parking.png" alt="" />
                                <h3>Parking</h3>
                                <p>150 parking spaces</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spaces-nav" onClick={showHall}>
                    {halls.map(x =>
                        <button key={x._id} style={x.style}>
                            {x.title}
                        </button>)}
                </div>
            </article>
            <Hall hall={hall} />

        </>
    );
}