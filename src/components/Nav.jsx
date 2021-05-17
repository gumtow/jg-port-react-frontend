import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {

    return (
        <Container>
            <Navbar className="" bg="none" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>Jesse Gumtow</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end mr-auto" id="basic-navbar-nav">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link href="#">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Other</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )

};

export default Navigation;