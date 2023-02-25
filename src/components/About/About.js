import './About.css';
import { Routes, Route } from 'react-router-dom';
import { Content } from './Content/Content.js';
import { Offer } from './Offer/Offer.js';
import { Space } from './Spaces.js';

export const About = () => {
    return (
        <>
            <section className="perfect">
                <div className="perfect img-wrapper">
                    <img src="/images/team.jpg" alt="Team" />
                </div>
            </section>
            
            <Routes>
                <Route path='offer' element={<Offer />} />
                <Route path='content' element={<Content />} />
                <Route path='space' element={<Space />} />
            </Routes>
        </>
    )
}

