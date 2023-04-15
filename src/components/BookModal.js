import useFetch from "../useFetch";
import { useState, useEffect } from "react";

const BookModal = ({ onClose, selectedBook }) => {


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
                        <img src={selectedBook.volumeInfo.imageLinks.thumbnail}
                            alt="book-cover"
                            className="modal-book-cover-img" />
                    </div>
                    <div className="modal-book-info">
                        <span className="modal-book-title">{selectedBook.volumeInfo.title}</span>
                        <span className="modal-book-author">
                            <span className="author-seperator">by</span>
                            <span className="author-text">{selectedBook.volumeInfo.authors}</span>
                        </span>
                        <span className="modal-book-year">{selectedBook.volumeInfo.publishedDate}</span>
                        <span className="modal-book-desc">{selectedBook.volumeInfo.description}</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="add-to-cart-btn">Add to bookshelf</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;