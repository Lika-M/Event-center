import './About.css';
import { Routes, Route } from 'react-router-dom';
import { Services } from './Services/Services.js';
import { Offer } from './Offer/Offer.js';
import { Spaces } from './Spaces/Spaces.js';
import { PageNotFound } from '../common/PageNotFound/PageNotFound.js';

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
                <Route path='services' element={<Services />} />
                <Route path='spaces' element={<Spaces />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

