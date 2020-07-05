import React from 'react'

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
                    <li><a className="fa fa-behance fa-lg" target="_blank"></a></li>
                    <li><a className="fa fa-instagram fa-lg" target="_blank"></a></li>
                    <li><a className="fa fa-linkedin fa-lg" target="_blank"></a></li>
                </ul>
            </div>
            <div className="footer-right">
                <ul className="text">
                    <span className="soon"><strong>Coming soon</strong></span>
                    <li>more design, more art, more passion...</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer