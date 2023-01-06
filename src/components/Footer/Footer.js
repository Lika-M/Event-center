import { Link } from 'react-router-dom';
import './Footer.css';


export const Footer = () => {
    return (
        <footer className="footer">

            <article className="footer-cards">
                <article className="card">
                    <Link to="/" >
                        <div className="footer-logo">
                            <img src="/images/logo.png" alt='logo' />
                            <span className="card-title">EVENT CENTER</span>
                        </div>
                        <p className="card-text">
                            The Event Center has halls, area for coffee breaks, networking and an open space part with the ability to follow in real time the events in the halls of the center.
                        </p>
                    </Link>
                </article>

                <article className="card card-contacts">
                    <h4 className="card-title">
                        LINKS
                    </h4>
                    <Link to="#" className="link"><i className="fab fa-facebook-square"></i></Link>
                    <Link to="#" className="link"><i className="fab fa-instagram-square"></i></Link>
                    <Link to="#" className="link"><i className="fab fa-linkedin"></i></Link>

                </article>
                <article className="card card-contacts">
                    <h4 className="card-title">
                        CONTACTS
                    </h4>
                    <p className="card-text">
                        <span><i className="fas fa-map-marker-alt"></i>ul. "Svilenitsa" 555А, 1463 Sofia Center, Sofia</span>
                    </p>
                    <p className="card-text">
                        <span><i className="fas fa-phone-alt"></i>+359 555 555 555</span>
                    </p>
                    <p className="card-text">
                        <span><i className="fas fa-envelope-open"></i>event-center@event.bg</span>
                    </p>

                </article>

            </article>

            <article className="rights">&copy; designed by Lika-M 2022</article>

        </footer>
    )
}

