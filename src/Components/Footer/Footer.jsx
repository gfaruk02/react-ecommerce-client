import './Footer.css'
import logo from '../Assets/logo.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo"> 
                <img src={logo} alt="" />
                <p>Curate</p>
            </div>
            <ul className="footer-links"> 
            <li> Company</li>
            <li> Products</li>
            <li> Offices</li>
            <li> About</li>
            <li> Contact</li>
            </ul>
            <div className="footer-social-icon"> 
            <div className="footer-icon-container"> 
                <img src={facebook} alt="" />
            </div>
            <div className="footer-icon-container"> 
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icon-container"> 
                <img src={twitter} alt="" />
            </div>
            </div>
            <div className="footer-copyright"> 
                <hr />
                <p> Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;