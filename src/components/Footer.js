import '../styles/footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">

            <div className='footer-left'>
                <NavLink to="/" exact className="footer-brand-name-link">
                    ArcBooks
                </NavLink>
            </div>
            <div className="footer-middle">
                <span className="copyright-title">
                    &copy; {new Date().getFullYear()} Tofig. All rights reserved.
                </span>
            </div>
            <div className="footer-right">
                <a href="https://www.facebook.com/" className="soc-link"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.facebook.com/" className="soc-link"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/" className="soc-link"><i class="fa-brands fa-pinterest"></i></a>
                <a href="https://www.facebook.com/" className="soc-link"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    );
}

export default Footer;