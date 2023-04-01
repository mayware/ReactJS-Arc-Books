import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <div className="header-brand-name">
                    <Link to="/" className="brand-name-link">ArcBoox</Link>
                </div>
                <div className="header-left-links">
                    <Link to="/reader" className="reader-link">Reader</Link>
                </div>
            </div>
            <div className="navbar-right">
                <Link to="cart" className="cart-link">Books cart</Link>
                <Link to="log" className="log-link">Log out</Link>
            </div>
        </header>
    );
}

export default Navbar;
