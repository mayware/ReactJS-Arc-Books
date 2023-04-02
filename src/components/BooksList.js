import BookModal from "./BookModal";
const BooksList = ({ books, handleButtonClick }) => {
    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <div className="book-preview" key={book.id}>
                        <button className="book-btn" onClick={handleButtonClick}>
                            <div className="book-poster">
                                <img src={book.image} alt="book-poster" className="book-poster-img" />
                            </div>
                            <div className="book-info">
                                <div className="book-tile">{book.title}</div>
                                <div className="book-author">{book.price}</div>
                            </div>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default BooksList;