import { useState } from "react";
const BookModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="modal-close-btn" onClick={onClose}>
                        <span className="material-symbols-outlined close">close</span>
                    </button>
                </div>

                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div className="modal-footer">
                    <button className="add-to-cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;