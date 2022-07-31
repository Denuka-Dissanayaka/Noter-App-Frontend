import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from 'react'

import './signin.css';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        const user = { username, password };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/api/v1/users/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                console.log("User logged in");
                const token = res.data.token;
                localStorage.setItem("token", token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert("Authentication failed");
                setUsername("");
                setPassword("");
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const user = { username, password };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/api/v1/users`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                console.log("New User created");
                localStorage.setItem("token", res.data.token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert(err);
                setUsername("");
                setPassword("");
            });
    };

  return (
    <div className="Signin">
      <h1 className="SigninHead">Noter</h1>
      <div className="SigninForm">
        <form>
            <div className="FormUsername">
                <span className="FormLabel">Username</span>
                <input type="text" className="FormInput" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="FormPassword">
                <span className="FormLabel">Password</span>
                <input type="password" className="FormInput" required value={password} onChange={(e) => { setPassword(e.target.value);}}/>
            </div>
            <div className="FormBtns">
                <button className="Btns" onClick={handleSignin}>Sign In</button>
                <button className="Btns registerBtn" onClick={handleRegister}>Create Account</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
