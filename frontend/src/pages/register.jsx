import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = (props) => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const history = useNavigate();

    const onChange = (e) => {
        setUserData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        console.log(userData)
      };

    const onSubmit = async () => {
        try {
            const {username, email, password} = userData;
            const userInput = {
                username,
                email, 
                password
            }
            await axios.post("http://localhost:8082/api/register", userInput);
            props.setIsLoggedIn(true);
            history("/events");

        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-100 card bg-base-300 rounded-box place-items-center pt-6">
                        <p>Sign up for an account to access additional events!</p>
                        <input type="text" name="username" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" onChange={onChange}/>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" onChange={onChange}/>
                        <input type="text" name="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" onChange={onChange}/>
                    <div className="pt-6"/>
                    <button className="btn" onClick={onSubmit}>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default RegisterPage