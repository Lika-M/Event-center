import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';

import './Header.css';

export const Header = () => {

  const { currentUser } = useContext(AuthContext);
  const [style, setStyle] = useState({})
  const [mark, setMark] = useState({})
  const [bar, setBar] = useState({})

  const userNav = (
    <>
      <li className="nav-link left"><NavLink to="/event/create">EVENT RESERVATION</NavLink></li>
      <li className="nav-link right" ><NavLink to="/logout" title="Contact">LOGOUT</NavLink></li>
    </>
  );

  const guestNav = (
    <>
      <li className="nav-link right"><NavLink to="/register" >REGISTER</NavLink></li>
      <li className="nav-link right"><NavLink to="/login" >LOGIN</NavLink></li>
    </>
  );


  function onToggle() {
    if (style.display === 'flex') {
      setStyle({ display: 'none' });
      setMark({ display: 'none' })
      setBar({ display: 'block' })
    } else {
      setStyle({ display: 'flex' });
      setMark({ display: 'block' })
      setBar({ display: 'none' })
    }
    console.log(style)
  }

  return (
    <section className="hero">
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

      <div className="menu">
        <button className="menu-nav mark" onClick={onToggle} style={mark}>
          <i className="fas fa-xmark"></i>
        </button>
        <button className="menu-nav bar" onClick={onToggle} style={bar}>
          <i className="fas fa-bars"></i>
        </button>

        <ul className="navigation" style={style}>
          <li className="nav-link left"><NavLink to="/">HOME</NavLink></li>
          <li className="nav-link left"><NavLink to="/about">ABOUT</NavLink>
            <ul>
              <li><NavLink to="/about/offer">What we offer</NavLink></li>
              <li><NavLink to="/about/content">Services</NavLink></li>
              <li><NavLink to="/about/spaces">Our space</NavLink></li>
            </ul>
          </li>
          <li className="nav-link left"><NavLink to="/calendar">CALENDAR</NavLink></li>
          <li className="nav-link left"><NavLink to="/gallery">GALLERY</NavLink></li>

          {currentUser ? userNav : guestNav}

          <div className="clear"></div>
        </ul>

      </div>

    </section>
  )
};

