import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";
import { useLocation } from 'react-router-dom';
import Select from 'react-select'
// import Carousel from 'react-multi-carousel';

const BooksArea = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookFilter, setBookFilter] = useState('partial');
    const location = useLocation();
    const genre = location.state.genre;
    const [searchUrl, setSearchUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);
    const { data: books, isPending, error } = useFetch(searchUrl);
    const [genreTitle, setGenreTitle] = useState(genre);
    const [showSnack, setShowSnack] = useState('');

    useEffect(() => {
        const storedGenre = localStorage.getItem('selectedGenre');
        if (storedGenre) {
            setGenreTitle(storedGenre);
            setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=subject:${storedGenre}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10`);
        } else {
            setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10`);
            setGenreTitle(genre);
        }
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

    function switchGenre(option) {
        localStorage.setItem('selectedGenre', option);
        setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=subject:${option}&filter=${bookFilter}&startIndex=0&maxResults=10`);
        setCurrentPage(1);
        setGenreTitle(option);
    }

    function showSnackBar() {
        setShowSnack('show');
        setTimeout(() => {
            setShowSnack('');
        }, 3000)
    }

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted #ced4da',
            color: state.isSelected ? '#adb5bd' : '#adb5bd',
            backgroundColor: state.isSelected ? '#1d3557' : '#151515',
            padding: 10,
            cursor: 'pointer',
        }),
        control: () => ({
            width: 135,
            height: 30,
            marginRight: 7,
            border: '2px solid #343a40',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 100ms';
            return { ...provided, opacity, transition, color: '#adb5bd' };
        },
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#151515',
        }),
    };

    const options = [
        { value: 'fiction', label: 'Fiction' },
        { value: 'computers', label: 'Computers' },
        { value: 'games', label: 'Games' },
        { value: 'music', label: 'Music' },
        { value: 'psychology', label: 'Psychology' },
        { value: 'medical', label: 'Medical' },
        { value: 'essay', label: 'Essay' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'business & economics', label: 'Business & Economics' },
        { value: 'drama', label: 'Drama' },
        { value: 'astronomy', label: 'Astronomy' },
        { value: 'legend', label: 'Legend' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'education', label: 'Education' },
    ]

    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="library-area">
                <div className="book-store">
                    <div className="books-block">
                        <div className="books-block-header">
                            <div className="book-block-header-control">
                                <div className="genre-switch">
                                    <div className="genres-header-title">
                                        <span className="genres-header-title-text">Genre:</span>
                                        <div className="genres-switch-title">
                                            {genreTitle.toUpperCase()}
                                        </div>
                                    </div>
                                    <Select options={options} styles={selectStyles} onChange={(selectedGenre) => {
                                        switchGenre(selectedGenre.value);
                                    }} />
                                </div>
                                <div className="review-filter-btns">
                                    <button className={`filter-btn ${bookFilter === 'partial' ? 'active' : ''}`} id="allFilterBtn" onClick={filterAllBooks}>
                                        <span className="material-symbols-outlined">library_books</span>
                                        <span className="filter-btn-text">Partial</span>
                                    </button>
                                    <button className={`filter-btn ${bookFilter === 'full' ? 'active' : ''}`} onClick={filterReadableBooks}>
                                        <span className="material-symbols-outlined">auto_stories</span>
                                        <span className="filter-btn-text">Full review</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isPending && <div>Loading</div>}
                        {books && <BooksList books={books} modalBtn={modalBtn} showSnackBar={showSnackBar} />}
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
            <div className={`snackbar ${showSnack}`}> Added to the bookshelf</div>
        </div>
    );
}

export default BooksArea;