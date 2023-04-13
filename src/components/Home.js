import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [storeHeader, setStoreHeader] = useState('Horror');
    const { data: books, isPending, error } = useFetch(`https://openlibrary.org/subjects/${storeHeader.toLowerCase()}.json`);
    const [subjectBooks, setSubjectBooks] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const { data: srchBook } = useFetch(newUrl);

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
            console.log(books.works);
        }
    }, [books, storeHeader]);


    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            {/* <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div> */}
            <div className="library-area">
                <div className="book-store">
                    <div className="books-block">
                        <div className="book-block-header">
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
        </div>
    );
}

export default Home;