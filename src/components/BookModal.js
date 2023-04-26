import '../styles/modal.css'

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
                    <div className="modal-book-cover">
                        {selectedBook.volumeInfo.imageLinks && <img src={selectedBook.volumeInfo.imageLinks.thumbnail}
                            alt="book-cover"
                            className="modal-book-cover-img" />}
                    </div>
                    <div className="modal-book-info">
                        <span className="modal-book-title">{selectedBook.volumeInfo.title}</span>
                        <div className="modal-book-author">
                            <span className="modal-info-seperator">Author:</span>
                            <span className="modal-info-text">{selectedBook.volumeInfo.authors}</span>
                        </div>
                        <div className="modal-book-year">
                            <span className="modal-info-seperator">Year:</span>
                            <span className="modal-info-text">{selectedBook.volumeInfo.publishedDate}</span>
                        </div>
                        <div className="modal-book-category">
                            <span className="modal-info-seperator">Category:</span>
                            <span className="modal-info-text">{selectedBook.volumeInfo.categories}</span>
                        </div>
                        <span className="modal-book-desc">{selectedBook.volumeInfo.description}</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href={selectedBook.volumeInfo.previewLink} className="read-book-link" target="_blank">
                        <span className="material-symbols-outlined btn-icon">local_library</span>
                        <span className="read-link-text">Read the paper</span>
                    </a>
                    {selectedBook.accessInfo.pdf.acsTokenLink && <a href={selectedBook.accessInfo.pdf.acsTokenLink} className="donwload-pdf-btn">
                        <span className="download-btn-text">Download PDF</span>
                        <span className="material-symbols-outlined">download</span>
                    </a>}
                    {selectedBook.accessInfo.epub.acsTokenLink && <a href={selectedBook.accessInfo.epub.acsTokenLink} className="donwload-epub-btn">
                        <span className="download-btn-text">Download EPUB</span>
                        <span className="material-symbols-outlined">download</span>
                    </a>}
                </div>
            </div>
        </div>
    );
}

export default BookModal;