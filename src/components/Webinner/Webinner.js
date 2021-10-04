import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Webinner.css'
const Webinner = () => {
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
            <div className="webinner">
                    <h2 className="center">
                        There is a webinner on October 15!
                    </h2>
                    <div className="webinner-card">
                        <img src="./image/home-backdrop.jpg" alt="" />
                        <div>
                            <h4>Web programming career guideline</h4>
                            <p>Modify existing programs written by other people. Reading code without having previous knowledge of it is a valuable skill - you can't debug without it --- and you don't get much practice with it when you're writing programs from scratch by yourself. If you reflect on what you've found hard to understand, it can also help you learn how to write maintainable code. </p>
                            <p><FontAwesomeIcon className="main-color" icon={faClock}/> 10.00 PM </p>
                        </div>
                    </div>
                    <div className="webinner-card">
                        <div>
                            <h4>Web dev for begainer career guideline</h4>
                            <p>Reading code without having previous knowledge of it is a valuable skill - you can't debug without it --- and you don't get much practice with it when you're writing programs from scratch by yourself. If you reflect on what you've found hard to understand, it can also help you learn how to write maintainable code. </p>
                            <p><FontAwesomeIcon className="main-color" icon={faClock}/> 10.00 PM </p>
                        </div>
                        <img src="./image/begainer.jpeg" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Webinner;