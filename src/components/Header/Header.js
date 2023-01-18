import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';

import './Header.css';

export const Header = () => {

  const { currentUser } = useContext(AuthContext);

  const userNav = (
    <>
      <li><NavLink to="#" className="navigation-link" title="Contact">CREATE EVENT</NavLink></li>
      <li><NavLink to="#" className="navigation-link" title="Contact">SEARCH</NavLink></li>
      <li><NavLink to="/logout" className="navigation-link" title="Contact">LOGOUT</NavLink></li>
    </>
  );

  const guestNav = (
    <>
      <li><NavLink to="/register" className="navigation-link" title="Contact">REGISTER</NavLink></li>
      <li><NavLink to="/login" className="navigation-link" title="Contact">LOGIN</NavLink></li>
    </>
  );


  return (
    <section>
      <div className="top">
        <div className="navigation-logo">
          <img src="/images/logo.png" alt='logo' />
          <span className="navigation-logo-text">EVENT CENTER</span>
        </div>
        <div className="top-contact">
          <span><i className="fas fa-phone-alt"></i>+359 555 555 555</span>
          <span ><i className="fas fa-envelope-open"></i>event-center@event.bg</span>
        </div>
      </div>
      <ul className="navigation">

        <li><NavLink to="/" className="navigation-link" title="Home">HOME</NavLink></li>
        <li><NavLink to="/about" className="navigation-link" title="About us">ABOUT</NavLink>
          <ul>
            <li><NavLink to="#">What we offer</NavLink></li>
            <li><NavLink to="#">Our space</NavLink></li>
            <li><NavLink to="#">About us</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/calendar" className="navigation-link">CALENDAR</NavLink></li>
        <li><NavLink to="/create" className="navigation-link">ADD EVENT</NavLink></li>

        {currentUser ? userNav : guestNav}

        <div className="clear"></div>
      </ul>

    </section>
  )
};

