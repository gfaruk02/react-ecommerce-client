import './Footer.css'
import logo from '../Assets/logo.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
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
                <img src={whatsapp} alt="" />
            </div>
            <div className="footer-icon-container"> 
                <img src={pintester} alt="" />
            </div>
            <div className="footer-icon-container"> 
                <img src={instagram} alt="" />
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