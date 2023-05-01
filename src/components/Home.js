import { Link } from 'react-router-dom'
import '../styles/home.css'
import { useEffect } from 'react';
import donwload from '../assets/download.png'
import share from '../assets/exchange.png'
import google from '../assets/google-symbol.png'
import api from '../assets/api.png'
import intro from '../assets/intro-img.jpg'


const Home = () => {
    useEffect(() => {
        localStorage.removeItem('selectedGenre');
    }, []);
    return (
        <div className="home-content">
            <div className="intro-banner">
                <span className='intro-banner-title'>Welcome to ArcBoox</span>
                <div className="intro-image">
                    <img src={intro} alt="intro-banner-img" className="intro-img" />
                </div>
            </div>
            <main className="main-section">
                <div className="app-instructions-section">
                    <div className="download-share-block">
                        <div className="info-section-illustration-1">
                            <div className="illustration-image">
                                <img src={donwload} alt="illustration" className="illustration-img" />
                            </div>
                            <div className="info-section-text">ArcBoox allows users to download free of charge available books both in PDF and/or EPUB formats simply clicking on the given buttons given in the popups screens. The possiblity to fully read books or preview them</div>
                        </div>
                        <div className="info-section-illustration-1">
                            <div className="illustration-image">
                                <img src={share} alt="illustration" className="illustration-img" />
                            </div>
                            <div className="info-section-text">Users can also share the books that they found by clicking on the appropriate button. The possiblity to share throughout the social networks like Facebook, Twitter and Instagram</div>
                        </div>
                    </div>
                </div>
                <div className="app-information-section">
                    <div className="info-section-illustration">
                        <div className="illustration-api-image">
                            <img src={google} alt="illustration" className="illustration-api-img" />
                            <img src={api} alt="illustration" className="illustration-api-img" />
                        </div>
                        <div className="info-section-text">We provide our website with books using popular free of charge Google Books API plan, which provide a huge variety of books, including magazines</div>
                    </div>
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
            </main>
        </div>
    );
}

export default Home;