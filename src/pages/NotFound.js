import React from 'react';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import {House} from "react-bootstrap-icons";
import {Button, Container} from "react-bootstrap";

const NotFound = () => {
    return (
        <div>
            <Header/>
            <div className="p-5 mb-4 bg-light rounded-3">
                <Container className="py-5">
                    <h1 className="display-5 fw-bold">404 Error</h1>
                    <p className="col-md-8 fs-4">Oops! This page Could Not Be Found!</p>
                    <p className="small">Sorry bit the page you are looking for does not exist, have been removed or
                        name changed.</p>
                    <Button as={Link} to="/" className="btn btn-primary btn-lg">
                        Back to home page <House/>
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default NotFound;
