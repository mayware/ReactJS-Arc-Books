import '../styles/search.css'
import useFetch from "../useFetch";
import { useState, useEffect, useContext } from "react";
import BooksList from "./BooksList";
import BookModal from "./BookModal";
import CartContext from '../context/CartContext';

const SearchArea = () => {

    const { searchUrl } = useContext(CartContext);
    const { data: books, isPending, error } = useFetch(searchUrl);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showSnack, setShowSnack] = useState('');


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

    }, []);

    return (
        <div className="content">
            {showModal && <BookModal onClose={handleCloseModal} selectedBook={selectedBook} />}
            <div className="search-results-area">
                <div className="search-store">
                    <div className="search-store-header">
                        Search results
                    </div>
                    {isPending && <div>Loading</div>}
                    {books && <BooksList books={books} modalBtn={modalBtn} showSnackBar={showSnackBar} />}
                </div>
            </div>
            <div className={`snackbar ${showSnack}`}> Added to the bookshelf</div>
        </div>
    );
}

export default SearchArea;