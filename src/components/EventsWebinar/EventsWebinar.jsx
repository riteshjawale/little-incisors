import React, { useState } from 'react';
import './EventsWebinar.css';
import tiredWoman from '../../assets/women1.jpg';
import doctor from '../../assets/women2.jpg';
import stressedWoman from '../../assets/women3.jpg';

const EventsWebinar = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        captcha: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="webinar-container">
            {/* Hero Section */}
            <div className="webinar-hero">
                <div className="hero-content">
                    <div className="hero-image">
                        <img src={tiredWoman} alt="Tired Woman" />
                    </div>
                    <div className="hero-text">
                        <h1>Feeling Drained? Let's Talk About It!</h1>
                        <p>
                            Join us for an insightful session on understanding and managing 
                            fatigue and mood swings naturally.
                        </p>
                    </div>
                </div>
                <div className="registration-section">
                    <form onSubmit={handleSubmit} className="registration-form">
                        <h3>Register for the Webinar</h3>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <input
                            type="tel"
                            placeholder="Contact Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        <div className="captcha-box">
                            <input
                                type="checkbox"
                                checked={formData.captcha}
                                onChange={(e) => setFormData({...formData, captcha: e.target.checked})}
                            />
                            <label>I'm not a robot</label>
                        </div>
                        <button type="submit">Register Now</button>
                    </form>
                    <div className="speaker-card">
                        <img src={doctor} alt="Dr. Anvitha Shetty" />
                        <div className="speaker-info">
                            <h4>Dr. Anvitha Shetty</h4>
                            <p>CMC Vellore, Apollo Clinic</p>
                            <div className="event-details">
                                <p>📅 22nd March, 12:00 PM</p>
                                <p>🎯 Topic: How hormones impact energy and what to do about it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="info-banner">
                <h2>Struggling with Fatigue?</h2>
                <h3>Understand How Hormones Impact Your Energy and What Could Help</h3>
                <p>
                    Join this exclusive session to gain expert insights on hormonal balance 
                    and discover practical ways to enhance your well-being.
                </p>
                <button className="cta-button">SIGN UP NOW!</button>
            </div>

            {/* Takeaways Section */}
            <div className="takeaways-section">
                <div className="takeaways-image">
                    <img src={stressedWoman} alt="Stressed Woman" />
                </div>
                <div className="takeaways-content">
                    <h2>What You'll Gain from This Session</h2>
                    <p>
                        This session is specially designed for women juggling work, family, 
                        and self-care responsibilities.
                    </p>
                    <ul className="benefits-list">
                        <li>Decoding the link between hormones and fatigue</li>
                        <li>Understanding common hormonal imbalances (PCOS, thyroid issues, stress)</li>
                        <li>Simple lifestyle changes to boost energy and well-being</li>
                        <li>Expert insights from a gynecologist</li>
                    </ul>
                    <button className="cta-button">SIGN UP FOR FREE</button>
                </div>
            </div>
        </div>
    );
};

export default EventsWebinar;