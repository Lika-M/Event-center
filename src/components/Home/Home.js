import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext.js';
import './Home.css';

export const Home = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <section className="home">

                <div className="home img-wrapper">
                    <img src="/images/hall-1.jpg" alt="hall-1" />
                </div>
                <h1 className="title">
                    EVENT CENTER
                </h1>
                <p className="subtitle">
                    Modern Event space. Multifunctional halls.Combining art, design & technology.
                </p>
                {currentUser === null
                    ? <Link to="/login" className="header-btn">BOOKING REQUEST</Link>
                    : <Link to="/event/create" className="header-btn">EVENT RESERVATION</Link>}
            </section>

            <section className="grid">
                <div className="grid-text">
                    <h1>Activities and services</h1>
                    <p>Organizing and conducting various types of events:</p>
                    <ul className="grid-list">
                        <li>conferences, seminars, webinars, business forums, congresses, ceremonies, company celebrations, etc.;</li>
                        <li>conducting specialized exhibitions and presentations, including layout and construction of stands;</li>
                        <li>organizing and conducting trainings, career exchanges, student accelerators, etc.;</li>
                        <li>providing space for events of different scale and themes in the field of entrepreneurship, innovation, science and technology;</li>
                        <li>overall organization and logistics of your event, including advertising materials, information brochures, banners, invitation, event script, catering, etc.</li>
                    </ul>
                </div>
                <div className="grid-container">
                    <div className="horizontal">
                        <img src="/images/security-3.jpg" alt="Security" />
                    </div>
                    <div className="vertical">
                        <img src="/images/4-seasons.jpg" alt="Four seasons hall" />
                    </div>
                    <div>
                        <img src="/images/branding-3.jpg" alt="Branding" />
                    </div>
                    <div className="big">
                        <img src="/images/conference-hall.jpg" alt="Conference hall" />
                    </div>
                    <div className="vertical">
                        <img src="/images/open-space.jpg" alt="Open space" />
                    </div>
                    <div className="horizontal">
                        <img src="/images/branding-1.jpg" alt="Branding" />
                    </div>
                    <div>
                        <img src="/images/catering-1.jpg" alt="Catering" />
                    </div>
                    <div className="horizontal">
                        <img src="/images/library-hall.jpg" alt="Library hall" />
                    </div>
                    <div>
                        <img src="/images/branding-2.jpg" alt="Branding" />
                    </div>
                    <div>
                        <img src="/images/team.jpg" alt="Our Team" />
                    </div>
                </div>
            </section>
        </>
    )
}

