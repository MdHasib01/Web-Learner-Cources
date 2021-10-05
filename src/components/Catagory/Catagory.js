import { faClock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Catagory.css'
const Catagory = (props) => {
    const {courseName, image, time, enrolled, fee} = props.catagory
    return (
        <div>
            <Col>
            <Card className="course-card">
        <Card.Img className="img-fluid" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text>
          <p><FontAwesomeIcon className="main-color" icon={faClock}/> {time}H  <FontAwesomeIcon className="main-color" icon={faUserAlt}></FontAwesomeIcon> {enrolled}</p>
           <p>Course Fee: ${fee}</p>
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </div>
    );
};

export default Catagory;