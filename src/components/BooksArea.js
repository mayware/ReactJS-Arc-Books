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
    const [bookFilter, setBookFilter] = useState('partial');
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const genre = location.state.genre;
    const [searchUrl, setSearchUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);
    const { data: books, isPending, error } = useFetch(searchUrl);

    useEffect(() => {
        setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10`);
    }, [genre, bookFilter, currentPage]);

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
    function filterReadableBooks() {
        setBookFilter('full');
    }
    function filterAllBooks() {
        setBookFilter('partial');
    }

    function getSearchTerm() {
        setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm.toLowerCase()}&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);
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
                                <button className={`filter-btn ${bookFilter === 'partial' ? 'active' : ''}`} id="allFilterBtn" onClick={filterAllBooks}>
                                    <span className="material-symbols-outlined">library_books</span>
                                    <span className="filter-btn-text">Partial books</span>
                                </button>
                                <button className={`filter-btn ${bookFilter === 'full' ? 'active' : ''}`} onClick={filterReadableBooks}>
                                    <span className="material-symbols-outlined">auto_stories</span>
                                    <span className="filter-btn-text">Fully readable books</span>
                                </button>
                            </div>
                            <div className="search-box">
                                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-field" />
                                <button className="search-btn" onClick={getSearchTerm}>
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