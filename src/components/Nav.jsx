import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Container>
            <Navbar className={navbar ? 'active' : ''} fixed="top" bg="none" expand="lg">
                <Container id="main-nav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand>Jesse Gumtow</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end mr-auto" id="basic-navbar-nav">
                        <Nav >
                            <Nav.Item>
                                <Nav.Link href="#about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#projects">Work</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#links">Other</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button href="https://docs.google.com/document/d/1I2SgsvK3_ea_nXPFWGuWUSmGEhXUSzV_D_jknkqjALY/edit?usp=sharing" variant="outline-info">Resume</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )

};

export default Navigation;