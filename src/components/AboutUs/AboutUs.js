import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            <div className="hero-area" style={{ backgroundImage: `url(./image/home-backdrop.jpg)` }}>
                <div className="banner">
                <p className="banner-txt">Start learning from home</p>
                <h2>Connect With Our Expert And Start Learning Today</h2>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                </div>
            </div>
            <Container>
            <div className="about-us">
                <h2 className="center">
                    About us
                </h2>
                <p>Thanks to the rapid advancement of technology, online learning is a part of many institutions' course offerings around the world. From certificates, PhDs, impactful online language learning and everything in between, learning online has never been so easy!
                Offered by some of the world's top-ranked institutions, online learning offers you all the perks of attending your dream university, with the added convenience of a learning experience tailored to your schedule.  With courses available in almost every subject, and flexible timetables to suit almost every lifestyle, students are increasingly turning to online learning as a viable alternative to on-campus study. It could allow you to study abroad remotely, at a university not in your home country!
                Advances in technology now allow students to study entirely online while still socializing with classmates, watching lectures and participating in subject-specific discussions.While some consider online learning to require a greater degree of self-motivation, institutions recognize that educational support is just as important as tutor feedback, and take great care to ensure that their students receive the same levels of support that they would receive on campus.</p>
            </div>
            </Container>
        </div>
    );
};

export default AboutUs;