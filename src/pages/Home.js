import React from 'react';
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import CreatePostForm from "../components/CreatePostForm";

const Home = () => {
    return (
        <div>
            <Header/>
            <Container className="bg-light p-4">
                <CreatePostForm/>
            </Container>
        </div>
    );
};

export default Home;
