import './About.css';
import { Routes, Route } from 'react-router-dom';
import { Content } from './Content/Content.js';
import { Offer } from './Offer/Offer.js';
import { Space } from './Spaces.js';

export const About = () => {
    return (
        <>
            <section className="perfect">
                <h2 className="perfect-title">WHAT WE OFFER</h2>
            
            </section>
            <Routes>
                <Route path='offer' element={<Offer />} />
                <Route path='content' element={<Content />} />
                <Route path='space' element={<Space />} />
            </Routes>
        </>
    )
}

