import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Footer = () => {
    return (
        <footer>
            <div className="mobile-only">
                <span><strong>Coming soon</strong></span>
            </div>
            <div className="footer-left">
                <ul className="text">
                    <span><strong>Leandry Pauquer</strong></span>
                    <li>Graphic Designer</li>
                </ul>
            </div>
            <div className="footer-center">
                <ul>
                    <li><a target="_blank" href="https://www.behance.net/pauquer"><FontAwesomeIcon icon={['fab', 'behance']} color="white" size="lg" /></a></li>
                    <li><a target="_blank" href="http://instagram.com/pauquer_"><FontAwesomeIcon icon={['fab', 'instagram']} color="white" size="lg" /></a></li>
                    <li><a target="_blank" href="http://linkedin.com/in/pauquer/"><FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="lg" /></a></li>
                </ul>
            </div>
            <div className="footer-right">
                <ul className="text">
                    <span className="soon"><strong>Coming soon</strong></span>
                    <li>more design, more art, <strong>more passion...</strong></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer