import React from "react";
import { Link } from "react-router-dom";

import HeroImage from "../images/three-hackers.png";

const HomePage = () => {
    return (
        <>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Hey Hackers!</h1>
                    <p className="py-6">Welcome to the 10th anniversary of Hack the North. Check out all the events you could
                    participate in and register to sign up for special events.</p>
                    <Link to="/events"><button className="btn btn-primary">Get Started!</button></Link>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default HomePage