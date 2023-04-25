import React, { useContext } from "react";
import CartContext from "../context/CartContext";
const Cart = () => {

    const { cartItems, addToCart } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);

    const handleDelete = (item) => {
        removeItem(item);
    }

    return (
        <div className="content-bookshelf">
            {cartItems.length > 0 ?
                <div className="bookshelf">
                    <div className="bookshelf-header">
                        <h1 className="bookshelf-header-title">Your bookshelf</h1>
                    </div>
                    <div className="book-shelves">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-book">
                                    <button className="remove-item-btn" onClick={() => handleDelete(item)}>
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                    <div className="cart-book-cover">
                                        <img src={item.volumeInfo.imageLinks.thumbnail}
                                            alt="book-cover"
                                            className="cart-book-cover-img" />
                                    </div>
                                    <span className="cart-book-title">{item.volumeInfo.title}</span>
                                    <button className="cart-read-btn">Read this book</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> :
                <div className="bookshelf-info">No books in on your shelf</div>
            }
        </div>
    );
}

export default Cart;
