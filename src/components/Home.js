import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";
// AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [storeHeader, setStoreHeader] = useState('Horror');
    const { data: books, isPending, error } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=subject:history&filter=full&maxResults=10&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);

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
            {/* <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div> */}
            <div className="library-area">
                <div className="book-store">
                    <div className="books-block">
                        <div className="books-block-header">
                            <span className="genres-header-title">{storeHeader}</span>
                        </div>
                        {isPending && <div>Loading</div>}
                        {books && <BooksList books={books} modalBtn={modalBtn} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;