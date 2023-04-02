import useFetch from "../useFetch";
import { useState } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";

const Home = () => {
    const { data: books, isPending, error } = useFetch('https://api.npoint.io/387ac13a260ef4783834');
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    function handleButtonClick(book) {
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
            <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div>
            <div className="library-area">
                <div className="genres">
                    <div className="genres-title">
                        <span className="genres-title-text">Filter by genres:</span>
                    </div>
                    <div className="genre-tab">
                        <button className="genre-btn">Fiction</button>
                        <button className="genre-btn">Horror</button>
                        <button className="genre-btn">Mistery</button>
                        <button className="genre-btn">Historical</button>
                        <button className="genre-btn">Fantasy</button>
                        <button className="genre-btn">Short stroies</button>
                        <button className="genre-btn">Romance</button>
                        <button className="genre-btn">Detective</button>
                    </div>
                </div>
                <div className="book-store">
                    {isPending && <div>Loading</div>}
                    {books && <BooksList books={books} handleButtonClick={handleButtonClick} />}
                </div>
            </div>
        </div>
    );
}

export default Home;