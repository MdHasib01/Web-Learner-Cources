import { faBookOpen, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
        <div className="footer-container">
            <div>
                <h3><FontAwesomeIcon className="main-color" icon={faBookOpen}/> Web<span className="main-color">Learner</span>
                </h3>
                <p>we are providing high-quality online courses for about ten years.</p>
                <p>Follow us</p>
            </div>

            <div>
                <h3 className="main-color">Catagories</h3>
                <ul>
                    <li>- Web design</li>
                    <li>- Web development</li>
                    <li>- SEO</li>
                    <li>- Theme development</li>
                </ul>
            </div>

            <div>
                <h3 className="main-color">Contact us</h3>
                <ul>
                    <li><FontAwesomeIcon className="main-color" icon={faMapMarkedAlt}/> 250/A Oval Street, Mount View, London, United Kingdom</li>
                    <li><FontAwesomeIcon className="main-color" icon={faEnvelope}/> support@weblearner.com</li>
                    <li><FontAwesomeIcon className="main-color" icon={faPhone}/> +98 12345 67890</li>
                </ul>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Footer;