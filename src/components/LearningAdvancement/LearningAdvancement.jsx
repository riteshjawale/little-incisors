import React, { useState } from 'react';
import './LearningAdvancement.css';
import { FaLeaf, FaUsers, FaHandsHelping } from 'react-icons/fa';
import environmentImg from '../../assets/Playing.jpg';
import facilitationImg from '../../assets/Teaching.jpg';
import galleryImg1 from '../../assets/infastr.jpg';
import galleryImg2 from '../../assets/infaf2.jpg';
import galleryImg3 from '../../assets/infaf3.jpg';

const LearningAdvancement = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const faqs = [
        {
            question: "What is the Learning Advancement Plan (LAP)?",
            answer: "The LAP is our comprehensive program designed to support children with diverse learning needs. It combines specialized instruction, therapeutic support, and inclusive practices to ensure every child reaches their full potential."
        },
        {
            question: "How do you assess a child's needs?",
            answer: "We conduct thorough assessments through observation, interaction, and consultation with parents and specialists to create personalized learning plans."
        },
        {
            question: "What qualifications do your staff members have?",
            answer: "Our team consists of certified special educators, therapists, and trained caregivers with extensive experience in early childhood education and special needs support."
        },
        {
            question: "How do you maintain communication with parents?",
            answer: "We provide daily updates, weekly progress reports, and monthly parent-teacher meetings to ensure transparent communication about your child's development."
        }
    ];

    return (
        <div className="lap-container">
            {/* Header Section */}
            <div className="lap-header">
                <div className="header-content">
                    <h1>Learning Advancement Plan</h1>
                    <p className="tagline">WHERE EVERY CHILD'S JOURNEY IS VALUED</p>
                    <p className="intro-text">
                        Our Learning Advancement Plan is designed to create an inclusive environment 
                        that nurtures every child's unique abilities while celebrating their differences.
                    </p>
                </div>
                <div className="age-box">
                    <h3>Age Group</h3>
                    <p>3 - 8 years</p>
                </div>
            </div>

            {/* Core Principles */}
            <div className="core-principles">
                <div className="principle-card">
                    <FaLeaf className="principle-icon" />
                    <h3>The Environment</h3>
                    <p>Creating nurturing spaces that support diverse learning needs</p>
                </div>
                <div className="principle-card">
                    <FaUsers className="principle-icon" />
                    <h3>Learning and Care Facilitation</h3>
                    <p>Expert guidance for personalized development</p>
                </div>
                <div className="principle-card">
                    <FaHandsHelping className="principle-icon" />
                    <h3>Collaborative Support</h3>
                    <p>Working together with families and specialists</p>
                </div>
            </div>

            {/* Environment Section */}
            <div className="environment-section">
                <div className="content-block">
                    <h2>The Environment</h2>
                    <p>
                        We've carefully crafted spaces that inspire learning, creativity, and growth. 
                        Our environment is designed to be both stimulating and comforting, ensuring 
                        every child feels secure and motivated to explore.
                    </p>
                    <ul className="feature-list">
                        <li>Access to a variety of learning opportunities</li>
                        <li>A safe and welcoming space</li>
                        <li>Child-friendly sensory zones</li>
                        <li>Areas promoting self-expression, creativity, and social interaction</li>
                    </ul>
                </div>
                <div className="section-image">
                    <img src={environmentImg} alt="Learning Environment" />
                </div>
            </div>

            {/* Facilitation Section */}
            <div className="facilitation-section">
                <div className="section-image">
                    <img src={facilitationImg} alt="Learning Facilitation" />
                </div>
                <div className="content-block">
                    <h2>Learning and Care Facilitation</h2>
                    <p>
                        Our trained facilitators ensure smooth inclusion and personalized attention 
                        for every child. They create an atmosphere of understanding and support 
                        while maintaining professional excellence.
                    </p>
                    <ul className="feature-list">
                        <li>Support from trained caregivers</li>
                        <li>Personalized learning plans</li>
                        <li>Social-emotional development</li>
                        <li>Favorable adult-child ratios</li>
                    </ul>
                </div>
            </div>

            {/* Collaborative Support */}
            <div className="collaborative-section">
                <h2>Collaborative Support</h2>
                <p>
                    Success comes through partnership. We work closely with families, specialists, 
                    and administrators to ensure comprehensive support for each child's development.
                </p>
                <ul className="feature-list centered">
                    <li>Access to clinical psychologists</li>
                    <li>Dedicated inclusion experts</li>
                    <li>Program adjustments based on feedback</li>
                    <li>Group therapy sessions</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>We're Here to Help Your Child Thrive, No Matter What</h2>
                <p>
                    Our program adapts to meet your child's unique needs, ensuring they receive 
                    the support and guidance necessary for their growth and development.
                </p>
            </div>

            {/* Gallery */}
            <div className="lap-gallery">
                <h2>Walk Through of the LAP Zone</h2>
                <div className="gallery-grid">
                    <img src={galleryImg1} alt="LAP Facility 1" />
                    <img src={galleryImg2} alt="LAP Facility 2" />
                    <img src={galleryImg3} alt="LAP Facility 3" />
                </div>
            </div>

            {/* Schedule */}
            <div className="schedule-section">
                <h2>Your Little One's Day at the Learning Advancement Plan</h2>
                <div className="schedule-container">
                    <div className="schedule-list">
                        <div className="schedule-item">
                            <h3>Morning Arrival</h3>
                            <p>Warm welcome and settling in activities</p>
                        </div>
                        <div className="schedule-item">
                            <h3>Learning Sessions</h3>
                            <p>Personalized instruction and group activities</p>
                        </div>
                        <div className="schedule-item">
                            <h3>Therapy Time</h3>
                            <p>Specialized support as per individual needs</p>
                        </div>
                        <div className="schedule-item">
                            <h3>Creative Expression</h3>
                            <p>Art, music, and movement activities</p>
                        </div>
                    </div>
                    <div className="schedule-image">
                        <img src={facilitationImg} alt="Daily Activities" />
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="testimonial-section">
                <div className="testimonial-box">
                    <p>
                        "The Learning Advancement Plan has been transformative for my child. 
                        The personalized attention and expert care have helped them grow in 
                        ways we never imagined possible."
                    </p>
                    <div className="testimonial-author">
                        <p>- Sarah Johnson</p>
                        <p>Parent at Pune Center</p>
                    </div>
                </div>
            </div>

            {/* Locations */}
            <div className="locations-section">
                <h2>Available at These Locations</h2>
                <div className="location-grid">
                    <div className="location-card">
                        <h3>Pune Center</h3>
                        <p>Koregaon Park</p>
                    </div>
                    <div className="location-card">
                        <h3>Mumbai Center</h3>
                        <p>Bandra West</p>
                    </div>
                    <div className="location-card">
                        <h3>Bangalore Center</h3>
                        <p>Indiranagar</p>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">{activeAccordion === index ? '-' : '+'}</span>
                            </div>
                            <div className={`faq-answer ${activeAccordion === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningAdvancement;