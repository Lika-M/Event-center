import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="before-header">
                <span className="before-header-contact"><i class="fas fa-phone-alt"></i>+359 555 555 555</span>
                <span className="before-header-contact"><i class="fas fa-envelope-open"></i>event-center@event.bg</span>
            </div>
            <div class="header">
                <article class="header-logo">
                    <img src="/images/logo.png" alt='logo' />
                    <span className="header-logo-text">EVENT CENTER</span>
                </article>
                <nav class="header-nav">
                    <ul className="header-nav-list">

                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">HOME</NavLink>
                        </li>

                        <li className="header-nav-list-item">
                            <NavLink to="/about" className="header-nav-list-item-link">ABOUT US</NavLink>
                        </li>

                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">LAST EVENTS</NavLink>
                        </li>
                        {/* <!-- Logged users --> */}
                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">CREATE EVENT</NavLink>
                        </li>
                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">SEARCH</NavLink>
                        </li>
                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">LOGOUT</NavLink>
                        </li>

                        {/* <!-- Guest users --> */}
                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">REGISTER</NavLink>
                        </li>
                        <li className="header-nav-list-item">
                            <NavLink to="/" className="header-nav-list-item-link">LOGIN</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header