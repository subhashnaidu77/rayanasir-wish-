import React from 'react';
import './Components.css';
import achievementsImg from '../assets/achievements.png';

const Achievements = () => {
    const achievementsList = [
        {
            icon: "🚀",
            title: "Empowering Thousands of Careers",
            description: "Successfully guided and trained over 10,000 engineering students across Telangana towards rewarding careers in deep tech and software development."
        },
        {
            icon: "🎤",
            title: "Renowned Keynote Speaker",
            description: "Sought-after speaker and chief guest at top-tier tech institutes, consistently delivering high-impact student orientation and placement drives."
        },
        {
            icon: "🏆",
            title: "Pioneering Industry-Academia Bridge",
            description: "Created a robust, scalable technical training ecosystem widely recognized and adopted by premier engineering colleges in the region."
        }
    ];

    return (
        <div className="component-container">
            <div className="component-image-wrapper">
                <img src={achievementsImg} alt="Awards and Recognition" className="component-hero-img" />
            </div>
            <ul className="achievement-list">
                {achievementsList.map((ach, idx) => (
                    <li key={idx} className="stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <span className="icon">{ach.icon}</span>
                        <div><strong>{ach.title}</strong><br />{ach.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Achievements;
