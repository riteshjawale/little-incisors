import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Corporates.css';

// Import images
import backgroundImage from '../../assets/Playing.jpg';
import img1 from '../../assets/women2.jpg';
import img2 from '../../assets/women2.jpg';
import img3 from '../../assets/women2.jpg';

const CorporatePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedSolution, setSelectedSolution] = useState('Onsite');

  const solutions = {
    'Onsite': {
      text: 'Onsite childcare solutions provide facilities at the workplace, ensuring employees have their children nearby for convenience and peace of mind.',
      bgClass: 'blue-bg',
      descClass: 'white'
    },
    'Near-Site': {
      text: 'Near-site childcare centers are located close to the workplace, offering flexibility for working parents while ensuring high-quality care.',
      bgClass: 'green-bg',
      descClass: 'white'
    },
    'Subsidized': {
      text: 'Subsidized childcare solutions help companies support employees by covering part of the childcare costs, making quality care more accessible.',
      bgClass: 'yellow-bg',
      descClass: 'yellow'
    },
    'Nanny at Home': {
      text: "Nanny at home services provide professional childcare assistance directly at home, ensuring personalized care tailored to each child's needs.",
      bgClass: 'red-bg',
      descClass: 'white'
    }
  };

  const features = [
    {
      icon: "🏠",
      title: "Infrastructure",
      description: "We create for your children a 'home away from home', a place where they feel loved and happy.",
      gradient: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
    },
    {
      icon: "🔒",
      title: "Health & Safety",
      description: "We follow the highest standards of hygiene, security, and nutrition to ensure well-being.",
      gradient: "linear-gradient(135deg, #D4FC79, #96E6A1)",
    },
    {
      icon: "📜",
      title: "Foundational Development",
      description: "Our pedagogy aligns with the National Education Policy to encourage children's exploration.",
      gradient: "linear-gradient(135deg, #A1C4FD, #C2E9FB)",
    },
    {
      icon: "🤝",
      title: "Trusted by Corporates",
      description: "Over 450 corporates trust us for world-class childcare facilities and professional nanny services.",
      gradient: "linear-gradient(135deg, #FDCB82, #F8A170)",
    },
    {
      icon: "🌎",
      title: "Pan-India Presence",
      description: "With centers in Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, and Chennai, we are everywhere.",
      gradient: "linear-gradient(135deg, #F6D365, #FDA085)",
    },
  ];

  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section className="corporate-hero">
        <img src={backgroundImage} alt="Background" className="hero-background" />
        
        <div className="hero-contact-form">
          <h2 className="hero-form-title">Corporate Relations Team</h2>
          <p className="hero-form-subtitle">To Get In Touch With You</p>
          <input type="text" placeholder="Name *" required className="hero-form-input" />
          <input type="text" placeholder="+91 Phone Number *" required className="hero-form-input" />
          <input type="email" placeholder="Email ID *" required className="hero-form-input" />
          <select required className="hero-form-select">
            <option value="">Select I am *</option>
            <option value="Parent">Parent</option>
            <option value="Corporate">Corporate</option>
          </select>
          <input type="text" placeholder="Company *" required className="hero-form-input" />
          <button type="submit" className="hero-form-button">Connect Now</button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <motion.h2 
          className="why-choose-heading"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Why Choose <span>Little Incisors</span>
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              style={{ background: feature.gradient }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              data-aos="fade-up"
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Employer Section */}
      <section className="why-employer-section">
        <h2 className="why-employer-heading">
          Why Employer <span>Sponsored Childcare</span>
        </h2>
        <div className="employer-cards">
          <div className="employer-card">
            <img src={img1} alt="Return to Work" className="employer-card-image" />
            <div className="employer-card-content">
              <h3 className="employer-card-title">Return to Work</h3>
              <p className="employer-card-text">
                We are focused on equipping working parents in India with quality daycare 
                to allow them to return to their workplaces.
              </p>
            </div>
          </div>

          <div className="employer-card">
            <img src={img2} alt="Happy Employees" className="employer-card-image" />
            <div className="employer-card-content">
              <h3 className="employer-card-title">Happy Employees</h3>
              <p className="employer-card-text">
                When employees are confident that their children are in good hands, 
                they can focus more on their work and be more productive.
              </p>
            </div>
          </div>

          <div className="employer-card">
            <img src={img3} alt="Women as Leaders" className="employer-card-image" />
            <div className="employer-card-content">
              <h3 className="employer-card-title">Women as Leaders</h3>
              <p className="employer-card-text">
                Women often leave their jobs to take care of their children. 
                Be the leader in your industry by providing a second home for their children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={`solutions-section ${solutions[selectedSolution].bgClass}`}>
        <div className="solutions-container">
          <h2 className="solutions-heading" data-aos="fade-up">
            Our Solutions
          </h2>

          <div className="solutions-options">
            {Object.keys(solutions).map((solution, index) => (
              <div
                key={index}
                className={`solution-option ${selectedSolution === solution ? 'selected-solution' : ''}`}
                data-aos="fade-up"
                onClick={() => setSelectedSolution(solution)}
              >
                <h3 className="solution-name">{solution}</h3>
              </div>
            ))}
          </div>

          <motion.div
            key={selectedSolution}
            className={`solution-detail ${solutions[selectedSolution].descClass}`}
            data-aos="zoom-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="solution-detail-title">{selectedSolution}</h3>
            <p className="solution-detail-text">{solutions[selectedSolution].text}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="corporate-cta">
        <div className="cta-container">
          <h2 className="cta-heading" data-aos="fade-up">
            Ready to Transform Your Workplace?
          </h2>
          <p className="cta-text" data-aos="fade-up" data-aos-delay="100">
            Partner with us to create a family-friendly workplace that attracts and retains top talent.
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Request a Proposal
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;