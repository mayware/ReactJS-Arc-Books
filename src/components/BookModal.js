import useFetch from "../useFetch";
import { useState, useEffect } from "react";

const BookModal = ({ onClose, selectedBook }) => {
    const { data: desc } = useFetch(`https://openlibrary.org/works/${selectedBook.key.split("/")[2]}.json`);

    useEffect(() => {
        if (desc) {
            console.log(desc.description);
        }
    }, [desc]);


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="modal-close-btn" onClick={onClose}>
                        <span className="material-symbols-outlined close">close</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="modal-book-cover">
                        <img src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_id}-M.jpg`}
                            alt="book-cover"
                            className="modal-book-cover-img" />
                    </div>
                    <div className="modal-book-info">
                        <span className="modal-book-title">{selectedBook.title}</span>
                        <span className="modal-book-author">{selectedBook.author}</span>
                        <span className="modal-book-year">{selectedBook.year}</span>
                        {/* <span className="modal-book-overview">{desc.description}</span> */}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="add-to-cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;