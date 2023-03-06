import { useState } from 'react';
import { ConferenceHall } from './halls/ConferenceHall';
import { LibraryHall } from './halls/LibraryHall';
import { FourSeasonsHall } from './halls/FourSeasonsHall';
import { OpenSpaceHall } from './halls/OpenSpaceHall';
import './Spaces.css'

export const Spaces = () => {
    const [hall, setHall] = useState({ chosen: 'conference' });
    let isChecked = true;

    const showContent = (ev) => {
        ev.preventDefault();
        isChecked = false;

        if (ev.target.tagName === 'BUTTON') {
            isChecked = true;
            setHall({});
            if (ev.target.textContent === 'Conference Hall') {
                setHall({ chosen: 'conference' })
            } else if (ev.target.textContent === 'Library Hall') {
                setHall({ chosen: 'library' })
            } else if (ev.target.textContent === 'Four seasons hall') {
                setHall({ chosen: 'fourSeasons' })
            } else if (ev.target.textContent === 'Open Space Zone') {
                setHall({ chosen: 'openSpace' })
            }
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
                <div className="spaces-nav" onClick={showContent}>
                    <button style={{ backgroundColor: hall.chosen === 'conference' ? '#5979a9': ''}}>Conference Hall</button>
                    <button style={{ backgroundColor: hall.chosen === 'library' ? '#5979a9': '#284167' }}>Library Hall</button>
                    <button style={{ backgroundColor: hall.chosen === 'fourSeasons' ? '#5979a9': '#284167' }}>Four seasons hall</button>
                    <button style={{ backgroundColor: hall.chosen === 'openSpace' ? '#5979a9': '#284167' }}>Open Space Zone</button>
                </div>
            </article>

            {(isChecked && hall.chosen === 'conference') ? <ConferenceHall /> : null}
            {(isChecked && hall.chosen === 'library') ? <LibraryHall /> : null}
            {(isChecked && hall.chosen === 'openSpace') ? <OpenSpaceHall /> : null}
            {(isChecked && hall.chosen === 'fourSeasons') ? <FourSeasonsHall /> : null}


        </>
    );
}