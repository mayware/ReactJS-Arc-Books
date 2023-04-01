const Home = () => {
    return (
        <div className="content">
            <div className="intro-banner">
                <h1>Welcome to ArcBoox</h1>
            </div>
            <div className="library-area">
                <div className="genre-tab">
                    <button className="genre-btn">Fiction</button>
                    <button className="genre-btn">Horror</button>
                    <button className="genre-btn">Mistery</button>
                    <button className="genre-btn">Historical</button>
                    <button className="genre-btn">Fantasy</button>
                    <button className="genre-btn">Short stroies</button>
                    <button className="genre-btn">Romance</button>
                    <button className="genre-btn">Detective</button>
                </div>
                <div className="book-store"></div>
            </div>
        </div>
    );
}

export default Home;