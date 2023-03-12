import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Offer.css'
import { OfferCard } from './OfferCard/OfferCard.js';

export const Offer = () => {
    const [isShown, setIsShown] = useState(false);
    const [content, setContent] = useState({})


    const clickHandler = (ev) => {
        if (ev.currentTarget.tagName === 'BUTTON') {
            setIsShown(true);
            if (ev.currentTarget.children[0].children[0].children[1].textContent === 'Technical equipment') {
                setContent({
                    title: 'Technical equipment',
                    description: 'The latest high tech solutions in the field of communication equipment for maximum security of your event',
                    subtitle: 'Our team will provide you with full technical support according to the concept of each event. All activities related to sound, lighting, projection, translation or technical specification will be realized thanks to the team of professionals of The Innovative Event Center.',
                    images: ["/public/images/entire-center.jpg", "/public/images/conference-hal.jpg"]
                })
            } else if (ev.currentTarget.children[0].children[0].children[1].textContent === 'Additional services') {
                setContent({
                    title: 'Services',
                    images: []
                })
            }
        } else {
            setIsShown(false)
        }
    }

    const onClose = (state) => {
        console.log(state)
        setIsShown(state);
    }


    return (
        <>
            <h1 className="perfect-title">ABOUT/offer</h1>
            <section className="offer">
                <article className="offer-for-organizers">
                    <div className="offer-container-title">
                        <h2>For event organizers</h2>
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
                                        <h3>Events</h3>
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

                {isShown && <OfferCard content={content} onClose={onClose}/>}

                <article className="offer-for-visitors">
                    <div className="offer-container-title">
                        <h2>For visitors</h2>
                    </div>
                    <div className="offer-container-visitors">
                        <Link to="/calendar" className="visitor-btn">All events</Link>
                    </div>
                </article>

            </section>
        </>
    );
}