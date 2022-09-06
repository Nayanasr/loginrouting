import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    
    let navigate = useNavigate(); 

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginData.email === "" || loginData.password === "" ) {
            alert("eneter the data");   
        } else {
        console.log(loginData);
        }
    };

    const redirect = () => {
        navigate("/signup");
    }

  return (
    <div className = "container border mt-3">
        <form onSubmit = {handleSubmit}>

            <div className = "mb-3">
                <label htmlFor = "#" className = "form-label">Email Address</label>
                <input type = "email" name = "email" className = "form-control" onChange ={handleChange} value = {loginData.email}></input>
            </div>

            <div className = "mb-3">
                <label htmlFor = "#" className = "form-label">password</label>
                <input type = "password" name = "password" className = "form-control" onChange ={handleChange} value = {loginData.password}></input>
            </div>

            <button type = "submit">Submit</button>

            <h4 style = {{ cursor: "pointer" }} onClick = {redirect}>Don't have an account? Signup here</h4>
        </form>


    </div>
  );
};

export default Login;