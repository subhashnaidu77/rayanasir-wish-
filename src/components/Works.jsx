import React from 'react';
import './Components.css'; // Shared CSS for new components
import worksImg from '../assets/works.png';

const Works = () => {
    const worksList = [
        {
            title: "College to Campus Connect (CCC)",
            description: "Spearheading the core mission of bridging the gap between academia and the IT industry through innovative partnerships and structured curriculum alignment."
        },
        {
            title: "Statewide Technical Training Programs",
            description: "Organizing massive campus training sessions for B.Tech & CSE students across Telangana. Ensuring secure, efficient, and highly effective knowledge transfer."
        },
        {
            title: "Intensive Placement Preparation Seminars",
            description: "Leading transformative, hands-on sessions at premier institutes (e.g., JITS and PVP Siddhartha Institute) that directly help students crack top-tier product companies."
        }
    ];

    return (
        <div className="component-container">
            <div className="component-image-wrapper">
                <img src={worksImg} alt="Campus Connect Initiatives" className="component-hero-img" />
            </div>
            <div className="timeline">
                {worksList.map((work, idx) => (
                    <div key={idx} className="timeline-item stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
