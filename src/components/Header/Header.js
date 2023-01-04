import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>

      <div class="top">
        <div className="navigation-logo">
          <img src="/images/logo.png" alt='logo' />
          <span className="navigation-logo-text">EVENT CENTER</span>
        </div>
        <div className="top-contact">
          <span><i className="fas fa-phone-alt"></i>+359 555 555 555</span>
          <span ><i className="fas fa-envelope-open"></i>event-center@event.bg</span>
        </div>
      </div>
      <ul class="navigation">

        <li><NavLink to="/" className="navigation-link" title="Home">HOME</NavLink></li>
        <li><NavLink to="/about" className="navigation-link" title="About us">ABOUT</NavLink>
          <ul>
            <li><NavLink to="#">What we offer</NavLink></li>
            <li><NavLink to="#">Our space</NavLink></li>
            <li><NavLink to="#">About us</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/calendar" className="navigation-link">CALENDAR</NavLink></li>

        {/* <!-- Logged users --> */}
        <li><NavLink to="#" className="navigation-link" title="Contact">CREATE EVENT</NavLink></li>
        <li><NavLink to="#" className="navigation-link" title="Contact">SEARCH</NavLink></li>
        <li><NavLink to="#" className="navigation-link" title="Contact">LOGOUT</NavLink></li>

        {/* <!-- Guest users --> */}
        <li><NavLink to="/register" className="navigation-link" title="Contact">REGISTER</NavLink></li>
        <li><NavLink to="/login" className="navigation-link" title="Contact">LOGIN</NavLink></li>
        <div className="clear"></div>
      </ul>


    </>
    // <header>
    //   <div className="before-header">
    //     <span className="before-header-contact"><i className="fas fa-phone-alt"></i>+359 555 555 555</span>
    //     <span className="before-header-contact"><i className="fas fa-envelope-open"></i>event-center@event.bg</span>
    //   </div>
    //   <nav className="header">
    //     <article className="header-logo">
    //       <img src="/images/logo.png" alt='logo' />
    //       <span className="header-logo-text">EVENT CENTER</span>
    //     </article>
    //     <article className="header-nav">

    //       <label for="drop" class="toggle">MENU</label>
    //       <input type="checkbox" id="drop" />

    //       <ul class="menu">
    //         <li className="header-nav-list-item"><NavLink to="/">HOME</NavLink></li>
    //         <li className="header-nav-list-item">

    //           <label for="drop-1" className="toggle">ABOUT</label>
    //           <NavLink to="/">ABOUT</NavLink>
    //           <input type="checkbox" id="drop-1" />
    //           <ul className="header-nav-list">
    //             <li><NavLink to="#">Our Space</NavLink></li>
    //             <li><NavLink to="#">Our Story</NavLink></li>
    //             <li><NavLink to="#">What we offer</NavLink></li>
    //           </ul>

    //         </li>

    //         <li className="header-nav-list-item">
    //           <NavLink to="/">LAST EVENTS</NavLink>
    //         </li>
    //         {/* <!-- Logged users --> */}
    //         <li className="header-nav-list-item">
    //           <NavLink to="/">CREATE EVENT</NavLink>
    //         </li>
    //         <li className="header-nav-list-item">
    //           <NavLink to="/">SEARCH</NavLink>
    //         </li>
    //         <li className="header-nav-list-item">
    //           <NavLink to="/">LOGOUT</NavLink>
    //         </li>

    //         {/* <!-- Guest users --> */}
    //         <li className="header-nav-list-item">
    //           <NavLink to="/">REGISTER</NavLink>
    //         </li>
    //         <li className="header-nav-list-item">
    //           <NavLink to="/">LOGIN</NavLink>
    //         </li>
    //       </ul>
    //     </article>

    //   </nav>
    // </header>
  )
};

