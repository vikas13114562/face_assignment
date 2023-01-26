import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./register.css";

export default function RegisterForm() {

  
    

    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailErr, setEmailErr] = useState("");
  const [userErr, setUserErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  useEffect(() => {
    setConfirmPasswordErr("")
    setEmailErr("")
    setUserErr("")
    setPasswordErr("")
  },[formData])

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    const { email, userName, password, confirmPassword } = formData;
    
    if (!email || !userName || !password || !confirmPassword) {
      !email && setEmailErr("Email can't be Empty")
      !userName && setUserErr("User name can't be Empty")
      !password && setPasswordErr("Password can't be Empty")
      !confirmPassword && setConfirmPasswordErr("Confirm password can't be Empty")
      return;
      // alert("Please fill all the field");
    } else if (password && confirmPassword && password !== confirmPassword) {
        setConfirmPasswordErr("Password and Confirm password should be same")
        // alert("Password and Confirm password should be same");
        return;
    } else if(email && userName && password && confirmPassword) {
      let flag = false;
      let data = localStorage.getItem("user");
      if (!data) {
        let arr = [];
        localStorage.setItem("user", JSON.stringify(arr));
        data = localStorage.getItem("user");
      }

      let temp = JSON.parse(data);
      temp.forEach((ele) => {
        if (ele.email === formData.email) {
          flag = true;
          setEmailErr("Email already exist please login")
          // alert("Email already exist please login");
          return;
          
        }
      });

      if (!flag) {
        let date = new Date()
        
        let dataWithDate = {...formData,date:date}
        temp.push(dataWithDate);
        localStorage.setItem("user", JSON.stringify(temp));
        // navigate('/dashboard')
      }

      
    }
  }

  return (
    <div className="sign-up-container">
      <p className="welcome-text">Welcome !</p>
      <p className="sign-up-text">Sign up to</p>
      <p>My website</p>

      <div className="form-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => {
            handleChange(e);
          }}
          name="email"
          value={formData.email}
        />
        <span className = "error">{emailErr}</span>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => {
            handleChange(e);
          }}
          name="userName"
          value={formData.userName}
         
        />
        <span className = "error">{userErr}</span>
        <label htmlFor="userName">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="password"
          value={formData.password}
        />
        <span className = "error">{passwordErr}</span>
        <label htmlFor="Password">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="confirmPassword"
          value={formData.confirmPassword}
        />
        <span className = "error">{confirmPasswordErr}</span>
        <button className="register-btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
      <p className="bottom-text">
        Already have an Account ?<span className="login-text" onClick={() => {navigate('/')}}>Login</span>
      </p>
    </div>
  );
}
