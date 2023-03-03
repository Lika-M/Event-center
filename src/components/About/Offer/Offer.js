import { Link } from 'react-router-dom';
import './Offer.css'

export const Offer = () => {
    return (
        <>
            <h2 className="perfect-title">ABOUT/offer</h2>
            <section className="offer">
                <article className="offer-for-organizers">
                    <div className="offer-container-title">
                        <h1>For event organizers</h1>
                    </div>
                    <div className="offer-container">
                        <Link  to="#" className="offer-stack">
                            <div className="card">
                                <div className="card-content">
                                    <img src="/images/spaces.png" alt="" />
                                    <h3>Spaces and halls</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="offer-stack">
                            <div className="card">
                                <div className="card-content">
                                    <img src="/images/equipment.png" alt="" />
                                    <h3>Technical equipment</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/calendar" className="offer-stack">
                            <div className="card">
                                <div className="card-content">
                                    <img src="/images/events.png" alt="" />
                                    <h3>Events</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="offer-stack">
                            <div className="card">
                                <div className="card-content">
                                    <img src="/images/services.png" alt="" />
                                    <h3>Additional services</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </article>
                <article className="offer-for-visitors">
                    
                </article>
            </section>
        </>
    );
}