import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";

const Home = () => {
    // const { data: books, isPending, error } = useFetch('https://api.npoint.io/387ac13a260ef4783834');
    const { data: books, isPending, error } = useFetch('https://openlibrary.org/subjects/horror.json');
    const [subjectBooks, setSubjectBooks] = useState(null);
    const [searchedBooks, setSearchedBooks] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [activeGenre, setActiveGenre] = useState('');
    const [storeHeader, setStoreHeader] = useState('Mixed genres');

    const [searchValue, setSearchValue] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const { data: srchBook } = useFetch(newUrl);

    const handleGenreClick = (genre) => {
        setActiveGenre(genre);
        setStoreHeader(genre);
    }

    function modalBtn(book) {
        setSelectedBook(book);
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
        setSelectedBook(null);
    }
    function searchBooks() {
        setNewUrl(`https://openlibrary.org/subjects/horror.json`);
    }
    useEffect(() => {
        if (books) {
            setSubjectBooks(books.works);
        }
    }, [books]);


    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div>
            <div className="library-area">
                <div className="sidenav">
                    <div className="search-box">
                        <input type="text" className="search-field" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        <button className="search-btn" onClick={searchBooks}>
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        {/* <form className="search-form">
                            
                        </form> */}
                    </div>
                    <div className="genres-header">
                        <span className="genres-header-title">Pick your favorite genre !</span>
                    </div>
                    <div className="genre-tab">
                        <button
                            className={`genre-btn ${activeGenre === 'Fiction' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Fiction')}
                        >
                            Fiction
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Horror' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Horror')}
                        >
                            Horror
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Mistery' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Mistery')}
                        >
                            Mistery
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Historical' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Historical')}
                        >
                            Historical
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Fantasy' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Fantasy')}
                        >
                            Fantasy
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Short stroies' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Short stroies')}
                        >
                            Short stroies
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Romance' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Romance')}
                        >
                            Romance
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Detective' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Detective')}
                        >
                            Detective
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Thriller' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Thriller')}
                        >
                            Thriller
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Non-fiction' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Non-fictionn')}
                        >
                            Non-fiction
                        </button>
                    </div>
                </div>
                <div className="book-store">
                    <div className="book-store-header">
                        <span className="genres-header-title">{storeHeader}</span>
                    </div>
                    {isPending && <div>Loading</div>}
                    {subjectBooks && <BooksList subjectBooks={subjectBooks} modalBtn={modalBtn} />}

                    {/* {isPending && <div>Loading</div>}
                    {searchedBooks && <BooksList books={searchedBooks} modalBtn={modalBtn} />}
                    {!searchedBooks && books && <BooksList books={books} modalBtn={modalBtn} />} */}
                </div>
            </div>
        </div>
    );
}

export default Home;