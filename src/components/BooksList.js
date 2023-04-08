const BooksList = ({ subjectBooks, modalBtn }) => {
    return (
        <div className="book-list">
            {subjectBooks.map((book) => {
                return (
                    <div className="book-preview" key={book.key}>
                        <button className="book-btn" onClick={() => modalBtn(book)} title={book.title}>
                            <div className="book-cover">
                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} alt="book-cover" className="book-cover-img" />
                            </div>
                            <div className="book-info">
                                <div className="book-tile">{book.title}</div>
                                <div className="book-author">{book.authors[0].name}</div>
                            </div>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default BooksList;