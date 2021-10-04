import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('./courseDb.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="courses">
            <h2 className="center">
                Our courses
            </h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
            {
             courses.map(course=><Course course={course}></Course>)
             
             }
      </Row>
        </Container>
        </div>
    );
};

export default Courses;