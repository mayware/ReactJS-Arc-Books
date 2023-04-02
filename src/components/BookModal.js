const BookModal = ({ onClose, selectedBook }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="modal-close-btn" onClick={onClose}>
                        <span className="material-symbols-outlined close">close</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="modal-book-poster">
                        <img src={selectedBook.image} alt="book-poster" className="book-poster-img" />
                    </div>
                    <div className="modal-book-info">
                        <span className="modal-book-title">{selectedBook.title}</span>
                        <span className="modal-book-author">{selectedBook.author}</span>
                        <span className="modal-book-year">{selectedBook.year}</span>
                        <span className="modal-book-overview">{selectedBook.overview}</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="add-to-cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;