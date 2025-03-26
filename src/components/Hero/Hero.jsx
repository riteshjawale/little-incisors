import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/hero2.png';
import img2 from '../../assets/hero-vertical.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            backgroundImage: img1, // Horizontal image
            mobileBackgroundImage: img2, // Vertical image for mobile
            overlayText: "India's First Learncare Centre",
        },
        {
            backgroundImage: img1,
            mobileBackgroundImage: img2,
            overlayText: "Innovative Learning for Kids",
        },
        {
            backgroundImage: img1,
            mobileBackgroundImage: img2,
            overlayText: "Unlocking Potential of Your Child",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{
                        backgroundImage: `url(${
                            window.innerWidth <= 768
                                ? slide.mobileBackgroundImage
                                : slide.backgroundImage
                        })`,
                    }}
                >
                    <div className="overlay">{slide.overlayText}</div>
                    <div className="animated-shapes curve1"></div>
                    <div className="animated-shapes curve2"></div>
                    <div className="animated-shapes curve3"></div>
                </div>
            ))}

            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => changeSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;