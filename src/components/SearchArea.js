import '../styles/search.css'
import useFetch from "../useFetch";
import { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import BooksList from "./BooksList";
import BookModal from "./BookModal";
import CartContext from '../context/CartContext';

const SearchArea = ({ paginPrev, paginNext, currentPage }) => {

    const { searchUrl } = useContext(CartContext);
    const { data: books, isPending, error } = useFetch(searchUrl);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showSnack, setShowSnack] = useState('');
    const { searchBooks } = useContext(CartContext);
    const location = useLocation();
    const [resultTitle, setResultTitle] = useState('');


    function showSnackBar() {
        setShowSnack('show');
        setTimeout(() => {
            setShowSnack('');
        }, 3000)
    }

    function modalBtn(book) {
        setSelectedBook(book);
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
        setSelectedBook(null);
    }
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const term = searchParams.get('q');
        setResultTitle(term);
        searchBooks(term);
    }, [location.search, currentPage]);

    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="search-results-area">
                <div className="search-store">
                    <div className="search-store-header">
                        Results for: {resultTitle}
                    </div>
                    {isPending && <div>Loading</div>}
                    {books && <BooksList books={books} modalBtn={modalBtn} showSnackBar={showSnackBar} />}
                </div>
                <div className="pagination">
                    <button
                        className="prev-btn"
                        onClick={paginPrev}
                        disabled={currentPage === 1}
                    >
                        <span className="material-symbols-outlined">navigate_before</span>
                    </button>
                    <button
                        className="next-btn"
                        onClick={paginNext}
                        disabled={!books || books.totalItems <= currentPage * 40}
                    >
                        <span className="material-symbols-outlined">navigate_next</span>
                    </button>
                </div>
            </div>
            <div className={`snackbar ${showSnack}`}> Added to the bookshelf</div>
        </div>
    );
}

export default SearchArea;