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
                    <li><strong>Leandry Pauquer</strong></li>
                    <li>Graphic Designer</li>
                </ul>
            </div>
            <div className="footer-center">
                <ul>
                    <li><a aria-label="behance" target="_blank" rel="noreferrer noopener" href="https://www.behance.net/pauquer"><FontAwesomeIcon icon={['fab', 'behance']} color="white" size="lg" /></a></li>
                    <li><a aria-label="instagram" target="_blank" rel="noreferrer noopener" href="http://instagram.com/pauquer_"><FontAwesomeIcon icon={['fab', 'instagram']} color="white" size="lg" /></a></li>
                    <li><a aria-label="linkedin" target="_blank" rel="noreferrer noopener" href="http://linkedin.com/in/pauquer/"><FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="lg" /></a></li>
                </ul>
            </div>
            <div className="footer-right">
                <ul className="text">
                    <li className="soon"><strong>Coming soon</strong></li>
                    <li  >more design, more art, <strong>more passion...</strong></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer