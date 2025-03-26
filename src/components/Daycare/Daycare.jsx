import React from 'react';
import './Daycare.css';
import { FaBabyCarriage, FaChild, FaFirstAid } from 'react-icons/fa';
import caregiverImg from '../../assets/Teaching.jpg';
import nannyImg from '../../assets/Playing.jpg';

const Daycare = () => {
    return (
        <div className="daycare-container">
            {/* Hero Section */}
            <div className="daycare-hero">
                <h1>Little Incisors Day Care Program Details</h1>
                <div className="care-types">
                    <div className="care-type">
                        <FaBabyCarriage className="care-icon" />
                        <h3>Full Daycare</h3>
                    </div>
                    <div className="care-type">
                        <FaChild className="care-icon" />
                        <h3>After School Care</h3>
                    </div>
                    <div className="care-type">
                        <FaFirstAid className="care-icon" />
                        <h3>Emergency Daycare</h3>
                    </div>
                </div>
                <p className="hero-text">
                    Our comprehensive daycare program caters to children aged 6 months to 10 years. 
                    Featuring a well-equipped library, indoor and outdoor play areas, temperature-controlled 
                    rooms, and a balanced meal plan designed by nutrition experts.
                </p>
            </div>

            {/* Empowering Section */}
            <div className="empowering-section">
                <div className="empowering-content">
                    <h2>Empowering Families, Nurturing Futures</h2>
                    <p>
                        We provide a structured learning environment that focuses on socialization 
                        and early childhood education. Our program allows parents to pursue their 
                        careers with peace of mind, knowing their children are in capable hands.
                    </p>
                </div>
                <div className="empowering-image">
                    <img src={caregiverImg} alt="Caregivers with children" />
                </div>
            </div>

            {/* Services Grid */}
            <div className="services-section">
                <h2>Child Care At Its Best</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Health & Safety</h3>
                        <p>
                            Following stringent safety protocols based on global standards. 
                            Our trained safety team ensures a secure environment for your child.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>Parent Communication</h3>
                        <p>
                            Stay connected with live CCTV access, regular newsletters, 
                            and detailed tracking of your child's milestones.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>Trained Caregivers</h3>
                        <p>
                            Our staff undergoes extensive training to provide the highest 
                            quality of care and early childhood education.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>Corporate Tie-Ups</h3>
                        <p>
                            Partnerships with leading companies to provide comprehensive 
                            childcare support for working parents.
                        </p>
                    </div>
                </div>
            </div>

            {/* Nanny Service Section */}
            <div className="nanny-section">
                <div className="nanny-image">
                    <img src={nannyImg} alt="Nanny with child" />
                </div>
                <div className="nanny-content">
                    <h2>Bringing Care to Your Doorstep</h2>
                    <p>
                        Our Nanny At Home service provides personalized childcare in the comfort 
                        of your home. Each nanny is thoroughly vetted and trained to ensure your 
                        child receives the best care possible.
                    </p>
                </div>
            </div>

            {/* Enquiry Section */}
            <div className="enquiry-section">
                <h2>Fill Up The Enquiry Form To Know More About The Program</h2>
                <button className="enquiry-button">Enquire Now</button>
            </div>
        </div>
    );
};

export default Daycare;