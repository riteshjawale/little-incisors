import React, { useState } from 'react';
import { FaBookmark, FaPlay, FaEnvelope } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ParentThing.css';

// Import images
import familyImg from '../../assets/Playing.jpg';
import article1Img from '../../assets/Teaching.jpg';
import article2Img from '../../assets/infastr.jpg';
import article3Img from '../../assets/infaf2.jpg';
import expertImg from '../../assets/women1.jpg';

const ParentThing = () => {
    const [email, setEmail] = useState('');

    const featuredArticles = [
        {
            image: article1Img,
            title: "Understanding Your Child's Emotional Intelligence",
            intro: "Learn how to nurture emotional intelligence in your child's early years...",
            author: "Dr. Sarah Johnson",
            readTime: "5 min read"
        },
        {
            image: article2Img,
            title: "The Power of Play-Based Learning",
            intro: "Discover why unstructured play is crucial for cognitive development...",
            author: "Emily Parker",
            readTime: "4 min read"
        }
    ];

    const categories = [
        "Emotions & Behaviour",
        "Family Life",
        "Food & Nutrition",
        "Growth & Development",
        "Health & Safety",
        "News & Media"
    ];

    const additionalArticles = [
        {
            image: article3Img,
            title: "Creating Healthy Sleep Habits",
            excerpt: "Essential tips for establishing good sleep routines...",
            author: "Dr. Michael Brown",
            readTime: "6 min read"
        },
        {
            image: article1Img,
            title: "Nutrition Guide for Toddlers",
            excerpt: "Complete guide to balanced nutrition for growing children...",
            author: "Lisa Chen, Nutritionist",
            readTime: "7 min read"
        }
    ];

    const videoSessions = [
        {
            thumbnail: expertImg,
            title: "Managing Tantrums Effectively",
            date: "March 15, 2025"
        },
        {
            thumbnail: expertImg,
            title: "Screen Time Guidelines",
            date: "March 20, 2025"
        },
        {
            thumbnail: expertImg,
            title: "Building Social Skills",
            date: "March 25, 2025"
        }
    ];

    const ageCategories = [
        "Infants",
        "Preschoolers (3-6 years)",
        "Toddlers",
        "Tweens"
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle subscription logic
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <div className="parent-thing">
            {/* Hero Section */}
            <section className="hero-section">
                <LazyLoadImage
                    src={familyImg}
                    alt="Family holding hands"
                    effect="blur"
                    className="hero-image"
                />
                <div className="hero-content">
                    <h1>That Parent Thing</h1>
                    <p className="subtitle">Empowering parents with knowledge and insights</p>
                    <p className="description">
                        Join our community of parents and experts to discover valuable insights, 
                        practical tips, and research-based guidance for your parenting journey.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="main-content">
                <div className="content-wrapper">
                    {/* Left Column - Featured Articles */}
                    <div className="articles-section">
                        <h2>Your Favourite Reads</h2>
                        <div className="featured-articles">
                            {featuredArticles.map((article, index) => (
                                <div key={index} className="featured-article">
                                    <LazyLoadImage
                                        src={article.image}
                                        alt={article.title}
                                        effect="blur"
                                        className="article-image"
                                    />
                                    <div className="article-content">
                                        <h3>{article.title}</h3>
                                        <p>{article.intro}</p>
                                        <div className="article-meta">
                                            <span>{article.author}</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <button className="read-btn">Read</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Categories & Subscribe */}
                    <div className="sidebar">
                        <div className="categories-section">
                            <h3>Categories</h3>
                            <div className="categories-grid">
                                {categories.map((category, index) => (
                                    <button key={index} className="category-btn">
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="subscribe-section">
                            <h3>Fun Fact of the Day</h3>
                            <p>Did you know? Children laugh around 300 times a day!</p>
                            <form onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit">
                                    <FaEnvelope /> Subscribe for Tips
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Additional Articles */}
                <section className="additional-articles">
                    <h2>More Articles</h2>
                    <div className="articles-list">
                        {additionalArticles.map((article, index) => (
                            <div key={index} className="article-card">
                                <LazyLoadImage
                                    src={article.image}
                                    alt={article.title}
                                    effect="blur"
                                    className="article-thumbnail"
                                />
                                <div className="article-info">
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <div className="article-meta">
                                        <span>{article.author}</span>
                                        <span>{article.readTime}</span>
                                        <FaBookmark className="bookmark-icon" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Resources */}
                <section className="video-resources">
                    <h2>Expert Video Sessions</h2>
                    <div className="video-carousel">
                        {videoSessions.map((session, index) => (
                            <div key={index} className="video-card">
                                <div className="video-thumbnail">
                                    <LazyLoadImage
                                        src={session.thumbnail}
                                        alt={session.title}
                                        effect="blur"
                                    />
                                    <div className="play-button">
                                        <FaPlay />
                                    </div>
                                </div>
                                <h3>{session.title}</h3>
                                <p>{session.date}</p>
                            </div>
                        ))}
                    </div>
                    <button className="see-all-btn">See All Expert Sessions</button>
                </section>

                {/* Read More Section */}
                <section className="read-more">
                    <div className="age-categories">
                        <h2>Read More About</h2>
                        <ul>
                            {ageCategories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="featured-image">
                        <LazyLoadImage
                            src={article1Img}
                            alt="Children activities"
                            effect="blur"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ParentThing;