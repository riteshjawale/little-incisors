import React, { useState, useEffect } from 'react';
import { FaBuilding, FaShieldAlt, FaGraduationCap, FaHandshake, FaGlobe, FaBalanceScale, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Corporates.css';

import returnToWorkImg from '../../assets/Playing.jpg';
import happyEmployeesImg from '../../assets/Teaching.jpg';
import womenLeadersImg from '../../assets/women1.jpg';
import testimonialImg1 from '../../assets/women2.jpg';
import testimonialImg2 from '../../assets/women1.jpg';
import testimonialImg3 from '../../assets/women3.jpg';

const Corporates = () => {
    const [activeTab, setActiveTab] = useState('near-site');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const benefits = [
        {
            image: returnToWorkImg,
            title: 'Return to Work',
            description: 'Little Incisors is focused on equipping working parents in India with quality daycare to allow them to return to their workplaces with them being given world-class care and home-like feel with our services.'
        },
        {
            image: happyEmployeesImg,
            title: 'Happy Employees',
            description: 'When employees are confident that their children are in good hands, they can focus more on their work and be more productive. We boost the morale of your workforce by letting them know that the company values them as individuals.'
        },
        {
            image: womenLeadersImg,
            title: 'Women as Leaders',
            description: 'Women often leave their jobs to take care of their children, particularly during early childhood. By providing a second home for their children, we open up opportunities for career advancement and leadership roles.'
        }
    ];

    const partnerBenefits = [
        { icon: <FaBuilding />, title: 'Infrastructure', description: 'High-quality childcare facilities with world-class amenities' },
        { icon: <FaShieldAlt />, title: 'Health & Safety', description: 'Strict safety protocols to ensure a secure environment' },
        { icon: <FaGraduationCap />, title: 'Foundational Development', description: 'Unique pedagogy aligned with National Education Policy' },
        { icon: <FaHandshake />, title: 'Trusted by Corporates', description: 'Over 450 corporates trust our childcare services' },
        { icon: <FaGlobe />, title: 'Pan-India Presence', description: 'Centers available in major cities for convenience' },
        { icon: <FaBalanceScale />, title: 'Work-Life Balance', description: 'Childcare solutions that help employees focus on work' }
    ];

    const testimonials = [
        {
            text: "The best thing about Little Incisors is that they focus on holistic development which is essential for a child's overall growth.",
            author: "Rohan Chowdhry",
            location: "Little Incisors Powai, Mumbai",
            rating: 5,
            image: testimonialImg1
        },
        {
            text: "As a working mother, Little Incisors has been a blessing. Their professional approach and caring environment give me peace of mind while at work.",
            author: "Priya Sharma",
            location: "Little Incisors Koramangala, Bangalore",
            rating: 5,
            image: testimonialImg2
        },
        {
            text: "The staff at Little Incisors is exceptional. They've created such a nurturing environment that my child looks forward to going there every day.",
            author: "Anjali Mehta",
            location: "Little Incisors Bandra, Mumbai",
            rating: 5,
            image: testimonialImg3
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="corporates-page">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>Thriving at Work and <span>Play is Just a Little Incisors Away!</span></h1>
                <p>At Little Incisors, we make the journey between work and home a little easier and a lot brighter. With safe, nurturing spaces and programs designed to help little ones blossom, we give parents the peace of mind to thrive at work while their children grow, learn, and laugh in a home away from home.</p>
            </div>

            {/* Benefits Section */}
            <section className="benefits-section">
                <h2>Why Employer <span>Sponsored Childcare</span></h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <LazyLoadImage
                                src={benefit.image}
                                alt={benefit.title}
                                effect="blur"
                                className="benefit-image"
                            />
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
                <div className="cta-container">
                    <p>To Know More About our Corporate Tie Ups</p>
                    <button className="cta-button">Partner with Us</button>
                </div>
            </section>

            {/* Partner Benefits Section */}
            <section className="partner-benefits">
                <h2>Why Choose <span>Little Incisors As Your Partner</span></h2>
                <div className="partner-grid">
                    {partnerBenefits.map((benefit, index) => (
                        <div key={index} className="partner-card">
                            <div className="icon-container">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section className="solutions-section">
                <h2>Our <span>Solutions</span></h2>
                <div className="solutions-tabs">
                    <button 
                        className={activeTab === 'onsite' ? 'active' : ''}
                        onClick={() => setActiveTab('onsite')}
                    >
                        Onsite
                    </button>
                    <button 
                        className={activeTab === 'near-site' ? 'active' : ''}
                        onClick={() => setActiveTab('near-site')}
                    >
                        Near-Site
                    </button>
                    <button 
                        className={activeTab === 'subsidised' ? 'active' : ''}
                        onClick={() => setActiveTab('subsidised')}
                    >
                        Subsidised
                    </button>
                    <button 
                        className={activeTab === 'nanny' ? 'active' : ''}
                        onClick={() => setActiveTab('nanny')}
                    >
                        Nanny at Home
                    </button>
                </div>
                <div className="solution-content">
                    <p>Shared world-class childcare centres are gaining popularity in tech parks and office spaces. These facilities feature top-notch amenities, ensuring children receive excellent care. The proximity of childcare fosters a more productive and family-friendly work atmosphere.</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="testimonial-slider">
                    <button className="slider-button prev" onClick={prevTestimonial}>
                        <FaChevronLeft />
                    </button>
                    <div className="testimonial-container">
                        <div className="testimonial-image">
                            <LazyLoadImage
                                src={testimonials[currentTestimonial].image}
                                alt="Happy Parent and Child"
                                effect="blur"
                            />
                        </div>
                        <div className="testimonial-content">
                            <h2>Happy Parents <span>Speak</span></h2>
                            <p>{testimonials[currentTestimonial].text}</p>
                            <div className="rating">
                                {'★'.repeat(testimonials[currentTestimonial].rating)}
                            </div>
                            <div className="author">
                                <p>{testimonials[currentTestimonial].author}</p>
                                <p>{testimonials[currentTestimonial].location}</p>
                            </div>
                        </div>
                    </div>
                    <button className="slider-button next" onClick={nextTestimonial}>
                        <FaChevronRight />
                    </button>
                    <div className="slider-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                onClick={() => setCurrentTestimonial(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Corporates;