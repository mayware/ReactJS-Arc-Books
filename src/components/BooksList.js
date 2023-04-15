import React from 'react';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const BooksList = ({ books, modalBtn }) => {
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //         slidesToSlide: 3,
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //         slidesToSlide: 2,
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1,
    //     },
    // };

    return (
        <div>
            <div className="books-track">
                {/* <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
            </Carousel> */}

                {books.items.map((book) => (
                    <button
                        className="book-btn"
                        onClick={() => modalBtn(book)}
                        title={book.volumeInfo.title + '\n' + book.volumeInfo.authors}
                        key={book.id}
                    >
                        <div className="book-cover">
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt="book-cover"
                                className="book-cover-img"
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BooksList;
