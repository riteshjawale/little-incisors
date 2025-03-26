import React, { useState, useEffect } from 'react';
import { FaBrain, FaUsers, FaStar, FaHeart, FaChild } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './FoundationalDevelopment.css';

import circleTimeImg from '../../assets/Playing.jpg';
import artActivitiesImg from '../../assets/Teaching.jpg';
import storyTimeImg from '../../assets/infastr.jpg';
import musicMovementImg from '../../assets/dance.jpg';
import roleDramaImg from '../../assets/Playing.jpg';
import groupTimeImg from '../../assets/Teaching.jpg';
import mealTimeImg from '../../assets/foodn.jpg';
import napTimeImg from '../../assets/infastr.jpg';
import freePlayImg from '../../assets/Playing.jpg';
import outdoorPlayImg from '../../assets/infaf2.jpg';
import cookingImg from '../../assets/foodn.jpg';
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
        { title: 'Music & Movement', image: musicMovementImg },
        { title: 'Role Play & Drama', image: roleDramaImg },
        { title: 'Group Time', image: groupTimeImg },
        { title: 'Meal Time', image: mealTimeImg },
        { title: 'Nap Time', image: napTimeImg },
        { title: 'Free Play', image: freePlayImg },
        { title: 'Outdoor Play', image: outdoorPlayImg },
        { title: 'Fireless Cooking', image: cookingImg }
    ];

    const agePrograms = [
        { title: 'Infant', age: '6 Months - 15 Months', image: circleTimeImg },
        { title: 'Junior Toddler', age: '15 Months - 2 Years', image: artActivitiesImg },
        { title: 'Senior Toddler', age: '2 Years - 3 Years', image: storyTimeImg },
        { title: 'Pre-K', age: '3 Years - 4 Years', image: musicMovementImg },
        { title: 'K1', age: '4 Years - 5 Years', image: roleDramaImg },
        { title: 'K2', age: '5 Years - 6 Years', image: groupTimeImg }
    ];

    const faqs = [
        {
            question: 'What is the Foundational Development Program?',
            answer: 'Our Foundational Development Program is a comprehensive early learning program designed to build strong foundations in children during their crucial early years.'
        },
        {
            question: 'What age groups does the program cater to?',
            answer: 'The program caters to children from 6 months to 6 years, with age-appropriate activities and curriculum for each stage of development.'
        },
        // Add more FAQs as needed
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="foundational-development">
            {/* Main Banner */}
            <div className="main-banner">
                <h1>Preparing them for the Future</h1>
                <div className="core-values">
                    {coreValues.map((value, index) => (
                        <div key={index} className="value-item">
                            {value.icon}
                            <span>{value.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Program Overview */}
            <section className="program-overview">
                <h2>Foundational Development Program</h2>
                <p>Supporting early childhood development through structured learning and play.</p>
                <div className="key-features">
                    {keyFeatures.map((feature, index) => (
                        <div key={index} className="feature-item">
                            {feature.icon}
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Architecture */}
            <section className="learning-architecture">
                <h2>Learning Architecture</h2>
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
                <div className="development-aspects">
                    {/* Add development aspects grid */}
                </div>
            </section>

            {/* Activities */}
            <section className="activities">
                <h2>Developmental Activities</h2>
                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <LazyLoadImage
                                src={activity.image}
                                alt={activity.title}
                                effect="blur"
                                className="activity-image"
                            />
                            <h3>{activity.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Age Programs */}
            <section className="age-programs">
                <h2>Age-wise Programs</h2>
                <div className="programs-grid">
                    {agePrograms.map((program, index) => (
                        <div key={index} className="program-card">
                            <LazyLoadImage
                                src={program.image}
                                alt={program.title}
                                effect="blur"
                                className="program-image"
                            />
                            <h3>{program.title}</h3>
                            <p>{program.age}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Early Years Matter */}
            <section className="early-years">
                <h2>Early Years Matter</h2>
                <div className="early-years-content">
                    <div className="text-content">
                        <p>Children come into this world ready to learn and develop. By the age of five, they have already formed 85 percent of their intelligence, personality, and abilities. The first few months and years of their lives lay the foundation for everything that follows. Their little brains make connections through everyday experiences with their mommies, daddies, and other caring adults. The amount of love, attention, and play they get in their early years’ decides which connections will last a lifetime. We’re here to give children the happy and loving experiences they need to get ready for school and life ahead.</p>
                    </div>
                    <LazyLoadImage
                        src={teacherImg}
                        alt="Child Learning"
                        effect="blur"
                        className="early-years-image"
                    />
                </div>
            </section>

            {/* Daily Schedule */}
            <section className="daily-schedule">
                <h2>A Day at Little Incisors</h2>
                <div className="schedule-content">
                    <div className="schedule-list">
                        <ul>
                            <li>Arrival / Individual or Small Group Play</li>
                            <li>Breakfast</li>
                            <li>Routine Circle Time</li>
                            <li>Development for Half Day Care children</li>
                            <li>Lunch</li>
                            <li>Nap Time</li>
                            <li>Freshen Up / Snack Time</li>
                            <li>Music & Movement</li>
                            <li>Story Time</li>
                            <li>Indoor / Outdoor Play</li>
                            <li>Free Play / Departure</li>
                        </ul>
                        <p className="schedule-note">*Routine applies to children above 15 months and is customized for infants.</p>
                    </div>
                    <LazyLoadImage
                        src={teacherImg}
                        alt="Teacher with Children"
                        effect="blur"
                        className="schedule-image"
                    />
                </div>
            </section>

            {/* Testimonial */}
            <section className="testimonial">
                <h2>I Choose Little Incisors Because...</h2>
                <div className="testimonial-content">
                    <div className="testimonial-text">
                        <p>"The program has been transformative for my child's development..."</p>
                        <div className="stars">★★★★★</div>
                        <p className="author">- Sarah Johnson, Mumbai</p>
                    </div>
                    <LazyLoadImage
                        src={parentChildImg}
                        alt="Parent and Child"
                        effect="blur"
                        className="testimonial-image"
                    />
                </div>
            </section>

            {/* FAQs */}
            <section className="faqs">
                <h2>FAQs</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {activeAccordion === index ? '-' : '+'}
                                </span>
                            </div>
                            <div className={`faq-answer ${activeAccordion === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FoundationalDevelopment;