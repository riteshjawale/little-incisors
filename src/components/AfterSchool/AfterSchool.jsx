import React, { useState } from 'react';
import './AfterSchool.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { 
    FaBabyCarriage, FaChild, FaFirstAid, FaBook, 
    FaPalette, FaMusic, FaRunning, FaChess 
} from 'react-icons/fa';
import activityImg1 from '../../assets/Playing.jpg';
import activityImg2 from '../../assets/Teaching.jpg';
import activityImg3 from '../../assets/infastr.jpg';
import activityImg4 from '../../assets/infaf2.jpg';

const AfterSchool = () => {
    const [activeTab, setActiveTab] = useState('young');
    const [activeAccordion, setActiveAccordion] = useState(0);

    const schedule = {
        young: [
            { time: '1:00 PM', activity: 'Arrival & Lunch', icon: <FaChild />, color: '#FF6B6B' },
            { time: '2:00 PM', activity: 'Nap Time', icon: <FaBabyCarriage />, color: '#4ECDC4' },
            { time: '3:00 PM', activity: 'Creative Arts', icon: <FaPalette />, color: '#FFD93D' },
            { time: '4:00 PM', activity: 'Music & Movement', icon: <FaMusic />, color: '#6C5CE7' },
            { time: '5:00 PM', activity: 'Story Time', icon: <FaBook />, color: '#FF8B94' },
            { time: '6:00 PM', activity: 'Free Play', icon: <FaRunning />, color: '#A8E6CF' }
        ],
        older: [
            { time: '2:00 PM', activity: 'Homework Support', icon: <FaBook />, color: '#FF6B6B' },
            { time: '3:30 PM', activity: 'Sports & Games', icon: <FaRunning />, color: '#4ECDC4' },
            { time: '4:30 PM', activity: 'Chess/Strategy', icon: <FaChess />, color: '#FFD93D' },
            { time: '5:30 PM', activity: 'Creative Time', icon: <FaPalette />, color: '#6C5CE7' }
        ]
    };

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const faqs = [
        {
            question: "What is Little Incisors' After School Enrichment and Care Program?",
            answer: "Our program provides a structured, screen-free environment for children after school hours, focusing on homework support, enrichment activities, and holistic development through various engaging activities."
        },
        {
            question: "What is the age group of the afterschool program?",
            answer: "We cater to children aged 3-10 years, with specialized programs for different age groups."
        },
        {
            question: "Is homework support provided?",
            answer: "Yes, dedicated time and expert assistance are provided for homework completion and academic support."
        },
        {
            question: "How is food managed?",
            answer: "We provide nutritious snacks and meals prepared under strict hygiene standards, considering dietary restrictions and allergies."
        }
    ];

    return (
        <div className="afterschool-container">
            {/* Hero Section */}
            <div className="afterschool-hero">
                <h1>Screen Free Afterschool Engagement and Care</h1>
                <div className="care-types">
                    <div className="care-type">
                        <div className="icon-gradient">
                            <FaBabyCarriage className="care-icon" />
                        </div>
                        <h3>Full Daycare</h3>
                    </div>
                    <div className="care-type">
                        <div className="icon-gradient">
                            <FaChild className="care-icon" />
                        </div>
                        <h3>After School Care</h3>
                    </div>
                    <div className="care-type">
                        <div className="icon-gradient">
                            <FaFirstAid className="care-icon" />
                        </div>
                        <h3>Emergency Daycare</h3>
                    </div>
                </div>
                <p className="hero-text">
                    Our comprehensive daycare program caters to children aged 6 months to 10 years, 
                    featuring a well-equipped library, indoor and outdoor play areas, temperature-controlled 
                    rooms, and a balanced meal plan designed by nutrition experts.
                </p>
            </div>

            {/* Schedule Section */}
            <div className="schedule-section">
                <h2>Daily Schedule</h2>
                <div className="schedule-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'young' ? 'active' : ''}`}
                        onClick={() => setActiveTab('young')}
                    >
                        Ages 3-4 Years
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'older' ? 'active' : ''}`}
                        onClick={() => setActiveTab('older')}
                    >
                        Ages 4-10 Years
                    </button>
                </div>

                <div className="timeline-container">
                    {schedule[activeTab].map((item, index) => (
                        <div 
                            key={index} 
                            className="timeline-item"
                            style={{'--accent-color': item.color}}
                        >
                            <div className="timeline-icon">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <h3>{item.time}</h3>
                                <p>{item.activity}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion */}
                <div className="schedule-accordion">
                    {schedule[activeTab].map((item, index) => (
                        <div 
                            key={index}
                            className="accordion-item"
                            style={{'--accent-color': item.color}}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion-header">
                                <div className="accordion-icon">{item.icon}</div>
                                <h3>{item.time}</h3>
                                <span className="accordion-toggle">
                                    {activeAccordion === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                                <p>{item.activity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activities Grid */}
            <div className="activities-section">
                <h2>Enrichment Activities</h2>
                <div className="activities-grid">
                    <LazyLoadImage
                        src={activityImg1}
                        alt="Fitness Activities"
                        effect="blur"
                        className="activity-image"
                    />
                    <LazyLoadImage
                        src={activityImg2}
                        alt="Arts Activities"
                        effect="blur"
                        className="activity-image"
                    />
                    <LazyLoadImage
                        src={activityImg3}
                        alt="Creative Activities"
                        effect="blur"
                        className="activity-image"
                    />
                    <LazyLoadImage
                        src={activityImg4}
                        alt="Science Activities"
                        effect="blur"
                        className="activity-image"
                    />
                </div>
            </div>

            {/* Partners Section */}
            <div className="partners-section">
                <h2>Our Activity Partners</h2>
                <div className="partner-logos">
                    {/* Add partner logos here */}
                </div>
            </div>

            {/* FAQs Section */}
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

export default AfterSchool;