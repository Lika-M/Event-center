
import { Link } from 'react-router-dom';
import './Services.css';
export const Services = () => {


    return (
        <>
            <h1 className="perfect-title">ABOUT/services</h1>
            <section className="services">
                <article className="services-text">

                    <h1>
                        The event center services
                    </h1>
                    <p>
                        The center has a team of highly qualified professionals who are always ready to advise and assist in organizing and managing national and international conferences, seminars, business forums, exhibitions, trainings, presentations, ceremonies, company celebrations and more.
                    </p>
                    <p>
                        It works in constant collaboration with the best experts in the field of industry, high technology, science and innovation, as well as with various industry and non-governmental organizations and many foreign partners
                    </p>
                    <p>
                        The center has congress and seminar halls, areas for coffee breaks, cocktails, networking, specialized exhibitions, presentations; and open space part with the ability to follow in real time the events in the halls of the center.
                    </p>
                    <p>
                        We appreciate each project and we believe that each client is unique and deserves special attention!
                    </p>

                </article>
                <div>
                    <article className="services-image">
                        <div className="services-image-wrapper">

                            <img src="/images/entire-center.jpg" alt="Center img" />
                        </div>
                    </article>
                    <article className="icon">
                        <img src="/images/icon.png" alt="Icon" />
                        <span>EVENT CENTER</span>
                    </article>
                </div>
            </section>
            <section className="team">
                <h1>Event center team</h1>
                <div className="team-cards">
                    <article className="team-card">
                        <div className="team-card-image">
                            <img src="/images/team-manager.jpg" alt="Manager" />
                        </div>
                        <div className="team-card-content">
                            <h2>Vassilena Vassileva</h2>
                            <h3>Chief manager</h3>
                            <div className="team-card-buttons">
                                <a href="mailto:someone@events.com" className="team-card-btn">
                                    <i className="fas fa-phone"></i>
                                </a>
                                <a href="tel:+359888555555" className="team-card-btn">
                                    <i className="fas fa-envelope"></i>

                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="team-card">
                        <div className="team-card-image">
                            <img src="/images/team-branding.jpg" alt="Manager" />
                        </div>
                        <div className="team-card-content">
                            <h2>Evgeny Troyanov</h2>
                            <h3>Design and branding</h3>
                            <div className="team-card-buttons">
                                <a href="mailto:someone@events.com" className="team-card-btn">
                                    <i className="fas fa-phone"></i>
                                </a>
                                <a href="tel:+359888555555" className="team-card-btn">
                                    <i className="fas fa-envelope"></i>

                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="team-card">
                        <div className="team-card-image">
                            <img src="/images/team-pr.jpg" alt="Manager" />
                        </div>
                        <div className="team-card-content">
                            <h2>Mairiam Dobrovsky</h2>
                            <h3>Public relationships</h3>
                            <div className="team-card-buttons">
                                <a href="mailto:someone@events.com" className="team-card-btn">
                                    <i className="fas fa-phone"></i>
                                </a>
                                <a href="tel:+359888555555" className="team-card-btn">
                                    <i className="fas fa-envelope"></i>

                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="team-card">
                        <div className="team-card-image">
                            <img src="/images/team-catering.jpg" alt="Manager" />
                        </div>
                        <div className="team-card-content">
                            <h2>Aneta Ganeva</h2>
                            <h3>Catering</h3>
                            <div className="team-card-buttons">
                                <a href="mailto:someone@events.com" className="team-card-btn">
                                    <i className="fas fa-phone"></i>
                                </a>
                                <a href="tel:+359888555555" className="team-card-btn">
                                    <i className="fas fa-envelope"></i>

                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="team-card">
                        <div className="team-card-image">
                            <img src="/images/team-economics.jpg" alt="Manager" />
                        </div>
                        <div className="team-card-content">
                            <h2>Kiril Daskalov</h2>
                            <h3>Economic management</h3>
                            <div className="team-card-buttons">
                                <a href="mailto:someone@events.com" className="team-card-btn">
                                    <i className="fas fa-phone"></i>
                                </a>
                                <a href="tel:+359888555555" className="team-card-btn">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                   
                </div>
            </section>
        </>
    );
}