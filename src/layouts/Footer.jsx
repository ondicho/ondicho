import React from 'react';
import '../assets/css/footer.css';
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'


const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="top-footer">
                    <div className="footer-menus">
                        <div className="footer-column">
                            <h4>CONTACT US</h4>
                            <ul>
                                <li><img className="footer-icon" src={instagram} alt="mail" /><p>ondicho53@gmail.com</p></li>

                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>EUMAKE</h4>
                            <ul>
                                <li><p className='footer-nav'>Home</p></li>
                                <li><p className='footer-nav'>Portfolio</p></li>
                                <li><p className='footer-nav'>Get in Touch</p></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>SOCIALS</h4>
                            <ul>
                                <li className='socials'><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="footer-icon" src={facebook} alt="facebook" /></a></li>
                                <li className='socials'><a href="https://www.twitter.com/Eumake_" target="_blank" rel="noopener noreferrer"><img className="footer-icon" src={twitter} alt="twitter" /></a></li>
                                <li className='socials'><a href='https://www.instagram.com/eumake_laboratories/' target="_blank" rel="noopener noreferrer"><img className="footer-icon" src={instagram} alt="instagram" /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="bottom-footer">
                    <p className="footer-text">Created by Ondicho 2024 (c) Designed by Reine</p>
                    <p className="footer-text">Terms and Conditions apply</p>
                    <p className="footer-text">Copyright</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
