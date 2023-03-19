import { useState } from 'react';
import { Link } from 'react-router-dom';
import { OfferCard } from './OfferCard/OfferCard.js';
import { Search } from './Search/Search.js';
import { service, equipment } from './offers.js'
import './Offer.css'

export const Offer = () => {
    const [isShown, setIsShown] = useState(false);
    const [content, setContent] = useState({});

    const clickHandler = (ev) => {
        if (ev.currentTarget.tagName === 'BUTTON') {
            setIsShown(true);
            if (ev.currentTarget.children[0].children[0].children[1].textContent === 'Technical equipment') {
                setContent(equipment)
            } else if (ev.currentTarget.children[0].children[0].children[1].textContent === 'Additional services') {
                setContent(service)
            }
        } else {
            setIsShown(false)
        }
    }

    const onClose = (state) => {
        setIsShown(state);
    }

    return (
        <>
            <h1 className="perfect-title">ABOUT/offer</h1>
            <section className="offer">
                <article className="offer-for-organizers">
                    <div>
                        <h2 className="offer-container-title">For event organizers</h2>
                    </div>
                    <div className="offer-container">
                        <div>
                            <Link to="/about/spaces" className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/spaces.png" alt="Spaces" />
                                        <h3>Spaces and halls</h3>
                                    </div>
                                </div>
                            </Link>
                            <button onClick={clickHandler} className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/equipment.png" alt="" />
                                        <h3>Technical equipment</h3>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <Link to="/event/create" className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/events.png" alt="" />
                                        <h3>Event reservation</h3>
                                    </div>
                                </div>
                            </Link>
                            <button onClick={clickHandler} className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/services.png" alt="" />
                                        <h3>Additional services</h3>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </article>

                {isShown && <OfferCard content={content} onClose={onClose} />}

                <article className="offer-for-visitors">
                    <h2 className="offer-container-title">For visitors</h2>
                    <Search />
                    <Link to="/calendar" className="visitor-btn">See all events</Link>
                    
                </article>

            </section>
        </>
    );
}