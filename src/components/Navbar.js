import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import CartContext from "../context/CartContext";
import '../styles/navbar.css'

const Navbar = () => {

    const { cartItems } = useContext(CartContext);
    const { searchBooks } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [counter, setCounter] = useState(null);
    const history = useHistory();


    function navbarSearch() {
        // window.location.href = '/search';
        // history.push('/search');
        searchBooks(searchTerm);
        // setSearchTerm('');
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
            </div>
            <div className="navbar-right">
                <div className="search-box">
                    <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-field" placeholder="Search.." />
                    <button className="search-btn" onClick={() => { navbarSearch() }}>
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
                <NavLink
                    to="/log"
                    exact
                    className="nav-link"
                    activeClassName="active"
                >
                    <span className="material-symbols-outlined navbar-link-icon">share</span>
                    <span className="navbar-link-span">Share</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
