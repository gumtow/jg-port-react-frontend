import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navigation = () => {

    return (
        <Container>
            <Navbar fixed="top" bg="none" expand="lg">
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
                            <Button variant="outline-info">Resume</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )

};

export default Navigation;