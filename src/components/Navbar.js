import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const [counter, setCounter] = useState(null);

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
