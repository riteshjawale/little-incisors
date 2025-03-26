import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import AdmissionEnquiry from '../components/AdmissionEnquiry/AdmissionEnquiry';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleEnquiryOpen = () => {
        setIsEnquiryOpen(true);
    };

    const handleEnquiryClose = () => {
        setIsEnquiryOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <img src={Logo} alt="Logo" className={isScrolled ? 'scrolled-logo' : ''} />
                </div>

                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'}
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
                    <div className="middle-bar"></div>
                    <li><a href="/" className={isScrolled ? 'scrolled-link' : ''}>Admissions</a></li>
                    <div className="middle-bar"></div>
                    <li className="dropdown">
                        <a href="#" className={isScrolled ? 'scrolled-link' : ''}>Programs ▼</a>
                        <ul className="dropdown-menu">
                            <li><a href="/foundational-development">Foundational Development</a></li>
                            <li><a href="/daycare">Daycare</a></li>
                            <li><a href="/afterschool">Afterschool Enrichment</a></li>
                            <li><a href="/learning-advancement">Learning Advancement</a></li>
                            <li><a href="#">Nanny at Home</a></li>
                        </ul>
                    </li>
                    <div className="middle-bar"></div>
                    <li><a href="/corporates" className={isScrolled ? 'scrolled-link' : ''}>Corporates</a></li>
                    <div className="middle-bar"></div>
                    <li><a href="/foundational-development" className={isScrolled ? 'scrolled-link' : ''}>Curriculum</a></li>
                    <div className="middle-bar"></div>
                    <li className="dropdown">
                        <a href="#" className={isScrolled ? 'scrolled-link' : ''}>Resources ▼</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Training for Early Years</a></li>
                            <li><a href="/fee-structure">Fee Structure</a></li>
                            <li><a href="/safety">Safety at Little Incisors</a></li>
                            <li><a href="/parent-thing">That Parent Thing</a></li>
                            <li><a href="#">News and Media</a></li>
                            <li><a href="/events-webinar">Events and Webinar</a></li>
                        </ul>
                    </li>
                    <div className="middle-bar"></div>
                    <li className="mobile-cta">
                        <button 
                            className={`cta-button ${isScrolled ? 'scrolled-button' : ''}`}
                            onClick={handleEnquiryOpen}
                        >
                            Enroll Now &#9658;
                        </button>
                    </li>
                </ul>

                <button 
                    className={`cta-button desktop-cta ${isScrolled ? 'scrolled-button' : ''}`}
                    onClick={handleEnquiryOpen}
                >
                    Enroll Now &#9658;
                </button>
            </nav>

            <AdmissionEnquiry isOpen={isEnquiryOpen} onClose={handleEnquiryClose} />
        </>
    );
};

export default Navbar;