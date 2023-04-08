const Categories = () => {
    const [activeGenre, setActiveGenre] = useState('');

    const handleGenreClick = (genre) => {
        setActiveGenre(genre);
        setStoreHeader(genre);
    }

    return (
        <div className="content">
            {/* <div className="sidenav">
                    <div className="search-box">
                        <input type="text" className="search-field" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." />
                        <button className="search-btn" onClick={searchBooks}>
                            <span className="material-symbols-outlined">search</span>
                        </button>

                        <form className="search-form">

                        </form>
                    </div>
                    <div className="genres-header">
                        <span className="genres-header-title">Genres</span>
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
                            className={`genre-btn ${activeGenre === 'History' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('History')}
                        >
                            History
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Fantasy' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Fantasy')}
                        >
                            Fantasy
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Design' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Design')}
                        >
                            Design
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
                            className={`genre-btn ${activeGenre === 'Mathematics' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Mathematics')}
                        >
                            Mathematics
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Magic' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Magic')}
                        >
                            Magic
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Programming' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Programming')}
                        >
                            Programming
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Poetry' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Poetry')}
                        >
                            Poetry
                        </button>
                        <button
                            className={`genre-btn ${activeGenre === 'Humor' ? 'active' : ''}`}
                            onClick={() => handleGenreClick('Humor')}
                        >
                            Humor
                        </button>
                    </div>
                </div> */}
        </div>
    );
}

export default Categories;