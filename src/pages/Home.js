import React from 'react';
import Header from "../components/Header";
import { Github, House, Stopwatch } from "react-bootstrap-icons";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">Home page <House/> </h1>
                    <p className="col-md-8 fs-4">Save time <Stopwatch/> with the ready-to-use React template!</p>
                    <a href="https://github.com/vassilidev/react-template" className="btn btn-primary btn-lg">
                        <Github/> Git repo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
