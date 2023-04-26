import { Link } from 'react-router-dom'
import '../styles/home.css'
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        localStorage.removeItem('selectedGenre');
    }, []);
    return (
        <div className="content">
            <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div>
            <div className="genre-section">
                <div className="books-genres">
                    <Link to={{ pathname: "/books", state: { genre: "computers" } }} className="genre-block-link" id='compBlock'>Computers</Link>
                    <Link to={{ pathname: "/books", state: { genre: "fiction" } }} className="genre-block-link" id='fictionBlock'>Fiction</Link>
                    <Link to={{ pathname: "/books", state: { genre: "games" } }} className="genre-block-link" id='gamesBlock'>Games</Link>
                    <Link to={{ pathname: "/books", state: { genre: "history" } }} className="genre-block-link" id='historyBlock'>History</Link>
                    <Link to={{ pathname: "/books", state: { genre: "psychology" } }} className="genre-block-link" id='psyBlock'>Psychology</Link>
                    <Link to={{ pathname: "/books", state: { genre: "music" } }} className="genre-block-link" id='musicBlock'>Music</Link>
                    <Link to={{ pathname: "/books", state: { genre: "essay" } }} className="genre-block-link" id='essayBlock'>Essay </Link>
                    <Link to={{ pathname: "/books", state: { genre: "fantasy" } }} className="genre-block-link" id='fantasyBlock'>Fantasy</Link>
                    <Link to={{ pathname: "/books", state: { genre: "medical" } }} className="genre-block-link" id='medicalBlock'>Medical</Link>
                    <Link to={{ pathname: "/books", state: { genre: "drama" } }} className="genre-block-link" id='dramaBlock'>Drama</Link>
                    <Link to={{ pathname: "/books", state: { genre: "business & economics" } }} className="genre-block-link" id='businessBlock'>Business & Economics</Link>
                    <Link to={{ pathname: "/books", state: { genre: "astronomy" } }} className="genre-block-link" id='astronomyBlock'>Astronomy</Link>
                    <Link to={{ pathname: "/books", state: { genre: "legend" } }} className="genre-block-link" id='legendBlock'>Legend</Link>
                    <Link to={{ pathname: "/books", state: { genre: "transportation" } }} className="genre-block-link" id='transportationBlock'>Transportation </Link>
                    <Link to={{ pathname: "/books", state: { genre: "education" } }} className="genre-block-link" id='educationBlock'>Education</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;