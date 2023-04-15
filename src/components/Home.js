

import { Link } from 'react-router-dom'
import '../styles/genres.css'


const Home = () => {

    return (
        <div className="content">
            <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div>
            <div className="genre-section">
                <div className="books-genres">
                    <Link to={{ pathname: "/books", state: { genre: "fiction" } }} className="genre-block-link" id='fictionBlock'>Fiction</Link>
                    <Link to={{ pathname: "/books", state: { genre: "history" } }} className="genre-block-link" id='historyBlock'>History</Link>
                    <Link to={{ pathname: "/books", state: { genre: "novel" } }} className="genre-block-link" id='novelBlock'>Novel</Link>
                    <Link to={{ pathname: "/books", state: { genre: "bibliography" } }} className="genre-block-link" id='nonFictionBlock'>Bibliography</Link>
                    <Link to={{ pathname: "/books", state: { genre: "psychology" } }} className="genre-block-link" id='psyBlock'>Psychology</Link>
                    <Link to={{ pathname: "/books", state: { genre: "science-fiction" } }} className="genre-block-link" id='sciFiBlock'>Science-Fiction</Link>
                    <Link to={{ pathname: "/books", state: { genre: "cyberpunk" } }} className="genre-block-link" id='cyberBlock'>Cyberpunk</Link>
                    <Link to={{ pathname: "/books", state: { genre: "fantasy" } }} className="genre-block-link" id='fantasyBlock'>Fantasy</Link>
                    <Link to={{ pathname: "/books", state: { genre: "horror" } }} className="genre-block-link" id='horrorBlock'>Horror</Link>
                    <Link to={{ pathname: "/books", state: { genre: "drama" } }} className="genre-block-link" id='dramaBlock'>Drama</Link>
                    <Link to={{ pathname: "/books", state: { genre: "short_story" } }} className="genre-block-link" id='westernBlock'>Short story</Link>
                    <Link to={{ pathname: "/books", state: { genre: "legend" } }} className="genre-block-link" id='legendBlock'>Legend</Link>
                    <Link to={{ pathname: "/books", state: { genre: "poem" } }} className="genre-block-link" id='poemBlock'>Poem</Link>
                    <Link to={{ pathname: "/books", state: { genre: "prose " } }} className="genre-block-link" id='comicsBlock'>Prose </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;