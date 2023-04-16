import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";
import { useLocation } from 'react-router-dom';
// AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c

const BooksArea = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookFilter, setBookFilter] = useState('partial')
    const location = useLocation();
    const genre = location.state.genre;

    const { data: books, isPending, error } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);

    function modalBtn(book) {
        setSelectedBook(book);
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
        setSelectedBook(null);
    }

    function handlePrevPage() {
        setCurrentPage((prevPage) => prevPage - 1);
    }

    function handleNextPage() {
        setCurrentPage((prevPage) => prevPage + 1);
    }
    function filterBooks() {
        setBookFilter('full')
    }

    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="library-area">
                <div className="book-store">
                    <div className="books-block">
                        <div className="books-block-header">
                            <div className="book-block-header-left">
                                <span className="genres-header-title">{genre.toUpperCase()}</span>
                                <button className="filter-btn" onClick={filterBooks}>
                                    <span class="material-symbols-outlined">menu_book</span>
                                    <span className="filter-btn-text">Readable books</span>
                                </button>
                            </div>
                            <div className="search-box">
                                <input type="text" className="search-field" placeholder="Search by title" />
                                <button className="search-btn">
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                            </div>
                        </div>
                        {isPending && <div>Loading</div>}
                        {books && <BooksList books={books} modalBtn={modalBtn} />}
                        <div className="pagination">
                            <button
                                className="prev-btn"
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                <span className="material-symbols-outlined">navigate_before</span>
                            </button>
                            <button
                                className="next-btn"
                                onClick={handleNextPage}
                                disabled={!books || books.totalItems <= currentPage * 40}
                            >
                                <span className="material-symbols-outlined">navigate_next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksArea;