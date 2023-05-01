import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import CartContext from "../context/CartContext";
import '../styles/navbar.css'

const Navbar = ({ changeCurrentPage }) => {

    const { cartItems } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [counter, setCounter] = useState(null);
    const history = useHistory();

    function navbarSearch() {
        history.push(`/search?q=${searchTerm}`);
        setSearchTerm('');
        changeCurrentPage();
    }

    useEffect(() => {
        setCounter(cartItems.length);
    }, [cartItems]);

    return (
        <header className="navbar">
            <div className="navbar-left">
                <div className="header-brand-name">
                    <NavLink to="/" exact className="brand-name-link">
                        ArcBoox
                    </NavLink>
                </div>
                <div className="header-left-links">
                    <div className="search-box">
                        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-field" placeholder="Search.." />
                        <button className="search-btn" onClick={() => { navbarSearch() }}>
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <NavLink
                    to="/cart"
                    exact
                    className="nav-link"
                    activeClassName="active"
                >
                    <span className="material-symbols-outlined navbar-link-icon">
                        shelves
                    </span>
                    {counter > 0 && <div className="cart-indicator">
                        <span className="cart-indicator-counter">{counter}</span>
                    </div>}
                    <span className="navbar-link-span">Bookshelf</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
