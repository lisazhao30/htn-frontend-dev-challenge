import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    const history = useNavigate();

    const {username, password} = userData;

    const onChange = (e) => {
        setUserData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    const onSubmit = async () => {
        try {
            const userInput = {
                username, 
                password
            }
            const response = await axios.post("http://localhost:8082/api/login", userInput);
            if (response){
                props.setIsLoggedIn(true);
                history("/events");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-100 card bg-base-300 rounded-box place-items-center pt-6">
                    <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" onChange={onChange}/>
                    <input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" onChange={onChange}/>
                <div className="pt-6"/>
                <button className="btn" onClick={onSubmit}>Login</button>
            </div>
        </div>
        </>
    )
}

export default LoginPage