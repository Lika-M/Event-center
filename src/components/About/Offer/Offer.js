import { Link } from 'react-router-dom';
import './Offer.css'

export const Offer = () => {
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
                            <Link to="#" className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/spaces.png" alt="" />
                                        <h3>Spaces and halls</h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to="#" className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/equipment.png" alt="" />
                                        <h3>Technical equipment</h3>
                                    </div>
                                </div>
                            </Link>
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
                            <Link to="#" className="organizer-link">
                                <div className="card">
                                    <div className="card-content">
                                        <img src="/images/services.png" alt="" />
                                        <h3>Additional services</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>
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