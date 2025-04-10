import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero1.jpg';

const Heroz = () => {
    return (
        <div className="heroz-container">
            <div 
                className="heroz-image"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="heroz-overlay">India's First Learncare Centre</div>
                <div className="heroz-animated-shapes heroz-curve1"></div>
                <div className="heroz-animated-shapes heroz-curve2"></div>
                <div className="heroz-animated-shapes heroz-curve3"></div>
            </div>
        </div>
    );
};

export default Heroz;