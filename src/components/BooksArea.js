import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";
import { useLocation } from 'react-router-dom';
// AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c

const BooksArea = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const location = useLocation();
    const genre = location.state.genre;

    const { data: books, isPending, error } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&filter=full&maxResults=10&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);

    function modalBtn(book) {
        setSelectedBook(book);
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
        setSelectedBook(null);
    }
    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="library-area">
                <div className="book-store">
                    <div className="books-block">
                        <div className="books-block-header">
                            <span className="genres-header-title">{genre.toUpperCase()}</span>
                            <div className="search-box">
                                <input type="text" className="search-field" placeholder="Search by title" />
                                <button className="search-btn">
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                            </div>
                        </div>
                        {isPending && <div>Loading</div>}
                        {books && <BooksList books={books} modalBtn={modalBtn} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksArea;