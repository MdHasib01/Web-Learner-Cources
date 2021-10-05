import { faBookOpen, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, Button} from 'react-bootstrap';
import { useHistory} from 'react-router';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const history = useHistory();
    const handleClick = ()=>{
        history.push('/')
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand onClick={handleClick} className="logo">
                    <FontAwesomeIcon className="main-color" icon={faBookOpen} /> Web<span className="main-color">Learner</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>

                        {/* navigation links with bootstrap and router style  */}

                        <Nav.Link>
                            <NavLink className="nav-links" to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "orange",
                                textDecoration: "none"
                            }}>
                            Home
                        </NavLink></Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-links" to="/courses"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "orange",
                                textDecoration: "none"
                            }}>
                            Courses
                        </NavLink></Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-links" to="/webinner"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "orange",
                                textDecoration: "none"
                            }}>
                            Webinner
                        </NavLink></Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-links" to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "orange",
                                textDecoration: "none"
                            }}>
                            About us
                        </NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
</Navbar>
        </div>
    );
};

export default Header;