import React from 'react';
import './Components.css';
import seminarsImg from '../assets/seminars.png';

const Seminars = () => {
    const seminarsList = [
        {
            title: "Data Analytics Masterclasses for CSE",
            description: "Conducted high-impact seminars demystifying Data Analytics, AI, and Machine Learning for budding engineering students."
        },
        {
            title: "FAANG Placement Preparation Bootcamp",
            description: "Led intensive, multi-week sessions focusing heavily on Data Structures, Algorithms, and interview strategies to crack giants like Amazon and Microsoft."
        },
        {
            title: "Emerging Technologies Hands-on Workshops",
            description: "Driving critical awareness and upskilling in startup engineering, academic research, paid internships, and full-stack project development."
        }
    ];

    return (
        <div className="component-container">
            <div className="component-image-wrapper">
                <img src={seminarsImg} alt="Technical Seminars" className="component-hero-img" />
            </div>
            <div className="timeline">
                {seminarsList.map((sem, idx) => (
                    <div key={idx} className="timeline-item stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <h3>{sem.title}</h3>
                        <p>{sem.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seminars;
