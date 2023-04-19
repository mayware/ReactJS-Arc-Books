import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";
import { useLocation } from 'react-router-dom';
import Select from 'react-select'
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
    const [genreTitle, setGenreTitle] = useState(genre);

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

    function getSearchTerm() {
        setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm.toLowerCase()}&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);
        console.log(searchUrl);
    }

    function switchGenre(option) {
        localStorage.setItem('selectedGenre', option);
        setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=subject:${option}&filter=${bookFilter}&startIndex=${(currentPage - 1) * 10}&maxResults=10`);
        setGenreTitle(option);
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
            width: 125,
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
        { value: 'history', label: 'History' },
        { value: 'novel', label: 'Novel' },
        { value: 'bibliography', label: 'Bibliography' },
        { value: 'psychology', label: 'Psychology' },
        { value: 'science-fiction', label: 'Science-fiction' },
        { value: 'essay', label: 'Essay' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'creative_nonfiction', label: 'Creative_nonfiction' },
        { value: 'drama', label: 'Drama' },
        { value: 'short_story', label: 'Short_story' },
        { value: 'legend', label: 'Legend' },
        { value: 'poem', label: 'Poem' },
        { value: 'prose', label: 'Prose' },
    ]

    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="library-area">
                <div className="book-store">
                    <div className="books-block">
                        <div className="books-block-header">
                            <div className="book-block-header-left">
                                <span className="genres-header-title">{genreTitle.toUpperCase()}</span>
                                <Select options={options} styles={selectStyles} onChange={(selectedGenre) => {
                                    switchGenre(selectedGenre.value);
                                }} />
                                <button className={`filter-btn ${bookFilter === 'partial' ? 'active' : ''}`} id="allFilterBtn" onClick={filterAllBooks}>
                                    <span className="material-symbols-outlined">library_books</span>
                                    <span className="filter-btn-text">Partial review</span>
                                </button>
                                <button className={`filter-btn ${bookFilter === 'full' ? 'active' : ''}`} onClick={filterReadableBooks}>
                                    <span className="material-symbols-outlined">auto_stories</span>
                                    <span className="filter-btn-text">Full review</span>
                                </button>
                            </div>
                            <div className="search-box">
                                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-field" placeholder="Search.." />
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