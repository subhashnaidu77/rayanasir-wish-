import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import ceoImage from './assets/ceo_image.png';

function App() {
    const [typedText, setTypedText] = useState("");
    const fullText = "A true visionary, leading with wisdom and inspiring excellence.";

    useEffect(() => {
        // Initial Confetti
        setTimeout(fireInitialConfetti, 500);
        startContinuousConfetti();

        // Typewriter Effect
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(prev => prev + fullText.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
                document.documentElement.style.setProperty('--cursor-opacity', '0');
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    const fireInitialConfetti = () => {
        const end = Date.now() + (2 * 1000);
        const colors = ['#f43f5e', '#d946ef', '#8b5cf6', '#3b82f6'];

        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
            if (Date.now() < end) { requestAnimationFrame(frame); }
        }());
    };

    const startContinuousConfetti = () => {
        let skew = 1;
        (function frame() {
            skew = Math.max(0.8, skew - 0.001);
            confetti({
                particleCount: 1, startVelocity: 0, ticks: 200,
                origin: { x: Math.random(), y: (Math.random() * skew) - 0.2 },
                colors: ['#cbd5e1', '#f8fafc', '#e2e8f0'],
                shapes: ['circle'],
                gravity: Math.random() * 0.2 + 0.4,
                scalar: Math.random() * 0.6 + 0.4,
                drift: Math.random() * 0.8 - 0.4
            });
            requestAnimationFrame(frame);
        }());
    };

    const triggerConfettiBurst = () => {
        const count = 200;
        const defaults = { origin: { y: 0.7 }, zIndex: 100 };
        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, { particleCount: Math.floor(count * particleRatio) }));
        }
        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    };

    // 3D Tilt Hook
    useEffect(() => {
        const card = document.getElementById('glassCard');
        const container = document.getElementById('mainContainer');
        if (!card || !container) return;

        const handleMouseMove = (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        };

        const handleMouseEnter = () => card.style.transition = 'none';
        const handleMouseLeave = () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="app-wrapper">
            {/* Background Animated Orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            <div className="container" id="mainContainer">
                <div className="glass-card" id="glassCard">
                    <div className="badge">CCC Family</div>
                    <div className="portrait-container">
                        <img src={ceoImage} alt="Sri Nagveer Sir" className="ceo-portrait" />
                    </div>
                    
                    <h1 className="glow-text">Happy Birthday,<br /><span className="name-highlight">Sri Nagveer Sir!</span></h1>
                    <p className="subtitle typing-cursor">{typedText}</p>
                    
                    <div className="message-box">
                        <p>Wishing our esteemed CEO a truly magnificent birthday. Your unwavering vision and exceptional leadership have been the cornerstone of our continuous growth and success at CCC.</p>
                        <p>Thank you for setting the highest standards of excellence and for constantly inspiring us to innovate. May the year ahead be filled with profound achievements, exemplary health, and boundless happiness.</p>
                        <p className="sign-off">— With profound respect and warm regards,<br /> Rayana Venkata Siva Prasad Sir,<br /> Operations Head of CCC</p>
                    </div>

                    <div className="action-buttons">
                        <div style={{ width: '100%', textAlign: 'center', margin: '10px 0' }}>
                            <button className="celebrate-btn" onClick={triggerConfettiBurst}>Celebrate! 🎉</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
