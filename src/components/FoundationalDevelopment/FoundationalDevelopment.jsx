import React, { useState } from 'react';
import { FaBrain, FaUsers, FaStar, FaHeart,FaQuoteLeft, FaChild, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './FoundationalDevelopment.css';

import circleTimeImg from '../../assets/Playing.jpg';
import artActivitiesImg from '../../assets/Teaching.jpg';
import storyTimeImg from '../../assets/infastr.jpg';
import musicMovementImg from '../../assets/dance.jpg';
import teacherImg from '../../assets/Teaching.jpg';
import parentChildImg from '../../assets/Playing.jpg';

const FoundationalDevelopment = () => {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('young');
    const [activeAccordion, setActiveAccordion] = useState(null);

    const coreValues = [
        { icon: <FaBrain />, label: 'Curious' },
        { icon: <FaUsers />, label: 'Collaborative' },
        { icon: <FaStar />, label: 'Confident' },
        { icon: <FaHeart />, label: 'Empathetic' },
        { icon: <FaChild />, label: 'Independent' }
    ];

    const keyFeatures = [
        { icon: <FaChild />, text: 'Safe Environment' },
        { icon: <FaUsers />, text: 'Trained Caregivers' },
        { icon: <FaBrain />, text: 'Structured Engagement' },
        { icon: <FaHeart />, text: 'Nutritious Meals' },
        { icon: <FaStar />, text: 'Expert Learning Guidance' },
        { icon: <FaUsers />, text: 'Parent Community' }
    ];

    const activities = [
        { title: 'Circle Time', image: circleTimeImg },
        { title: 'Art Activities', image: artActivitiesImg },
        { title: 'Story Time', image: storyTimeImg },
        { title: 'Music & Movement', image: musicMovementImg }
    ];

    const agePrograms = [
        { title: 'Infant', age: '6 Months - 15 Months', image: circleTimeImg },
        { title: 'Junior Toddler', age: '15 Months - 2 Years', image: artActivitiesImg },
        { title: 'Senior Toddler', age: '2 Years - 3 Years', image: storyTimeImg },
        { title: 'Pre-K', age: '3 Years - 4 Years', image: musicMovementImg }
    ];

    const faqs = [
        {
            question: 'What is the Foundational Development Program?',
            answer: 'Our Foundational Development Program is a comprehensive early learning program designed to build strong foundations in children during their crucial early years.'
        },
        {
            question: 'What age groups does the program cater to?',
            answer: 'The program caters to children from 6 months to 6 years, with age-appropriate activities and curriculum for each stage of development.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="fd-container">
            {/* Hero Section */}
            <div className="fd-hero">
                <div className="hero-content">
                    <h1>Preparing Them for <span>the Future</span></h1>
                    <p className="hero-subtitle">BUILDING STRONG FOUNDATIONS FOR LIFELONG LEARNING</p>
                    
                    <div className="core-values">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    {value.icon}
                                </div>
                                <h3>{value.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Program Overview */}
            <div className="fd-section">
                <div className="section-title">
                    <h2>Foundational <span>Development</span> Program</h2>
                    <p>Supporting early childhood development through structured learning and play</p>
                </div>
                <div className="features-grid">
                    {keyFeatures.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.text}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Learning Architecture */}
            <div className="fd-section light-bg">
                <div className="section-title">
                    <h2>Learning <span>Architecture</span></h2>
                    <p>Tailored programs for different age groups</p>
                </div>
                <div className="age-group-selector">
                    <button
                        className={selectedAgeGroup === 'young' ? 'active' : ''}
                        onClick={() => setSelectedAgeGroup('young')}
                    >
                        6 Months to 4 Years
                    </button>
                    <button
                        className={selectedAgeGroup === 'older' ? 'active' : ''}
                        onClick={() => setSelectedAgeGroup('older')}
                    >
                        4 Years to 16 Years
                    </button>
                </div>
                <div className="development-grid">
                    <div className="development-card">
                        <h3>Cognitive Development</h3>
                        <p>Activities to enhance thinking and problem-solving skills</p>
                    </div>
                    <div className="development-card">
                        <h3>Social-Emotional Growth</h3>
                        <p>Building relationships and emotional intelligence</p>
                    </div>
                    <div className="development-card">
                        <h3>Physical Development</h3>
                        <p>Gross and fine motor skills activities</p>
                    </div>
                    <div className="development-card">
                        <h3>Language Skills</h3>
                        <p>Communication and literacy development</p>
                    </div>
                </div>
            </div>

            {/* Activities */}
            <div className="fd-section">
                <div className="section-title">
                    <h2>Developmental <span>Activities</span></h2>
                    <p>Engaging experiences for holistic growth</p>
                </div>
                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <LazyLoadImage
                                src={activity.image}
                                alt={activity.title}
                                effect="blur"
                                className="activity-image"
                            />
                            <div className="activity-content">
                                <h3>{activity.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Age Programs */}
            <div className="fd-section light-bg">
                <div className="section-title">
                    <h2>Age-wise <span>Programs</span></h2>
                    <p>Specialized curriculum for each developmental stage</p>
                </div>
                <div className="programs-grid">
                    {agePrograms.map((program, index) => (
                        <div key={index} className="program-card">
                            <LazyLoadImage
                                src={program.image}
                                alt={program.title}
                                effect="blur"
                                className="program-image"
                            />
                            <div className="program-content">
                                <h3>{program.title}</h3>
                                <p>{program.age}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Early Years Matter */}
            <div className="fd-section">
                <div className="section-content">
                    <div className="content-block">
                        <h2>Early Years <span>Matter</span></h2>
                        <p>
                            Children come into this world ready to learn and develop. By the age of five, they have already formed 85 percent of their intelligence, personality, and abilities. The first few months and years of their lives lay the foundation for everything that follows. Their little brains make connections through everyday experiences with their mommies, daddies, and other caring adults. The amount of love, attention, and play they get in their early years decides which connections will last a lifetime. We're here to give children the happy and loving experiences they need to get ready for school and life ahead.
                        </p>
                    </div>
                    <div className="section-image">
                        <LazyLoadImage
                            src={teacherImg}
                            alt="Child Learning"
                            effect="blur"
                        />
                    </div>
                </div>
            </div>

            {/* Daily Schedule */}
            <div className="fd-section light-bg">
                <div className="section-title">
                    <h2>A Day at <span>Little Incisors</span></h2>
                    <p>Structured routine for optimal learning and growth</p>
                </div>
                <div className="schedule-container">
                    <div className="schedule-list">
                        <div className="schedule-item">
                            <h3>Arrival / Individual or Small Group Play</h3>
                        </div>
                        <div className="schedule-item">
                            <h3>Breakfast</h3>
                        </div>
                        <div className="schedule-item">
                            <h3>Routine Circle Time</h3>
                        </div>
                        <div className="schedule-item">
                            <h3>Development Activities</h3>
                        </div>
                        <div className="schedule-item">
                            <h3>Lunch</h3>
                        </div>
                        <div className="schedule-item">
                            <h3>Nap Time</h3>
                        </div>
                        <div className="schedule-note">
                            *Routine applies to children above 15 months and is customized for infants.
                        </div>
                    </div>
                    <div className="schedule-image">
                        <LazyLoadImage
                            src={teacherImg}
                            alt="Teacher with Children"
                            effect="blur"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="fd-section testimonial-section">
                <div className="section-title">
                    <h2>I Choose <span>Little Incisors</span> Because...</h2>
                </div>
                <div className="testimonial-content">
                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        <p className="testimonial-text">
                            "The program has been transformative for my child's development. The personalized attention and expert care have helped them grow in ways we never imagined possible."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-image"></div>
                            <div className="author-info">
                                <h4>Sarah Johnson</h4>
                                <p>Parent at Mumbai Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="fd-section light-bg">
                <div className="section-title">
                    <h2>Frequently Asked <span>Questions</span></h2>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {activeAccordion === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            <div className={`faq-answer ${activeAccordion === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="fd-cta">
                <h2>Ready to <span>Begin</span> Your Child's Learning Journey?</h2>
                <p>Contact us to learn more about our Foundational Development Program</p>
                <button className="cta-button">Schedule a Visit</button>
            </div>
        </div>
    );
};

export default FoundationalDevelopment;