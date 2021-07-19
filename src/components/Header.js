import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap";
import {ConeStriped, HouseFill} from "react-bootstrap-icons";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Template</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home <HouseFill/></Nav.Link>
                    <Nav.Link as={Link} to="/404">404 <ConeStriped/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
