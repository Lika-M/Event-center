import './Header.css'
const Header = () => {
return (

    <header class="header">
    <article class="header-logo">
        <img src="/images/logo.png" alt='logo'/>
        <span className="header-logo-text">EVENT CENTER</span>
    </article>
    <nav class="header-nav">
        <ul className="header-nav-list">

            <li className="header-nav-list-item active">
                <a href="#/" className="header-nav-list-item-link active">HOME</a>
            </li>

            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">ABOUT US</a>
            </li>

            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">LAST EVENTS</a>
            </li>
            {/* <!-- Logged users --> */}
            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">CREATE EVENT</a>
            </li>
            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">SEARCH</a>
            </li>
            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">LOGOUT</a>
            </li>

            {/* <!-- Guest users --> */}
            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">REGISTER</a>
            </li>
            <li className="header-nav-list-item">
                <a href="#/" className="header-nav-list-item-link">LOGIN</a>
            </li>
        </ul>
    </nav>
</header>
)};

export default Header