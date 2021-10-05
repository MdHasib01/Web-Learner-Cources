import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory} from 'react-router';
import Catagory from '../Catagory/Catagory';
import './Home.css'
const Home = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(()=>{
        fetch('./homeDb.json')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    },[])
    const history = useHistory()
    const handleMore = ()=>{
        history.push('/courses')
    }
    return (
        <div>
            <div className="hero-area" style={{ backgroundImage: `url(./image/home-backdrop.jpg)` }}>
                <div className="banner">
                <p className="banner-txt">Start learning from home</p>
                <h2>Connect With Our Expert And Start Learning Today</h2>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                </div>
                <Button className="banner-btn" onClick={handleMore} variant="warning">Our Courses</Button>
            </div>
            <div className="catagory">
                <Container>
                <Row xs={1} md={4} className="g-4">
                {
                    catagories.map(catagory=><Catagory catagory={catagory}></Catagory>)
                }
                </Row>
            <p className="see-more"><Button onClick={handleMore} variant="warning">Show more</Button></p>
            </Container>
            </div>
        </div>
    );
};

export default Home;