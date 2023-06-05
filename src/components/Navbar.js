import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from 'react-router-dom';
import CartContext from "../context/CartContext";
import '../styles/navbar.css'

const Navbar = ({ changeCurrentPage }) => {

    const { cartItems } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [counter, setCounter] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownBtnRef = useRef(null);
    const searchBoxRef = useRef();
    const history = useHistory();

    const disabledBtn = searchTerm.length < 4;

    function navbarSearch() {
        history.push(`/search?q=${searchTerm}`);
        setSearchTerm('');
        changeCurrentPage();
    }

    useEffect(() => {
        searchBoxRef.current.focus();
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !dropdownBtnRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        window.addEventListener('mouseup', handleOutsideClick);
        return () => {
            window.removeEventListener('mouseup', handleOutsideClick);
        };
    }, []);

    function dropdownBtn(event) {
        event.stopPropagation();
        setShowDropdown(!showDropdown);
    }
    const handleLoginLinkClick = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 100);
    }

    function onChanger(e) {
        setSearchTerm(e.target.value);
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
                        <input type="text" value={searchTerm} onChange={onChanger} ref={searchBoxRef} className="search-field" placeholder="Search.." />
                        <button disabled={disabledBtn} className="search-btn" onClick={() => { navbarSearch() }}>
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
                <button className="navbar-dropdown-btn" onClick={dropdownBtn} ref={dropdownBtnRef}>
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
                {showDropdown && (
                    <div className="dropdown-box" ref={dropdownRef}>
                        <ul className="dropdown-menu">
                            <li className="menu-item">
                                <NavLink
                                    to="/login"
                                    exact
                                    className="login-link"
                                    onClick={handleLoginLinkClick}
                                >
                                    <span className="drop-item-text">Log in</span>
                                    <span className="material-symbols-outlined">login</span>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink
                                    to="/login"
                                    exact className="login-link"
                                    onClick={handleLoginLinkClick}
                                >
                                    <span className="drop-item-text">Log out</span>
                                    <span className="material-symbols-outlined">logout</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
