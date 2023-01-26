import React, {useState, useEffect} from "react";

import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

    

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState(
        {
            userName:"",
            password:"",
        }
    )
    const [userNameErr, setUserNameErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    
    useEffect(() =>{
        setUserNameErr("")
        setPasswordErr("")
    },[loginData])

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: value,
          };
        });
    }

    function handleLogin() {
        const {userName, password} = loginData;
        if(!userName || !password) {
          !userName && setUserNameErr("User name can't be Empty")
          !password && setPasswordErr("Password can't be Empty")
           // alert("Please fill all fields")
          return;
           
        }
        else if(userName && password) {
            let flag = false;
            let data = localStorage.getItem("user");
            if (!data) {
                let arr = [];
                let first_data = {userName:"foo",password:"bar"};
                arr.push(first_data)
                localStorage.setItem("user", JSON.stringify(arr));
                data = localStorage.getItem("user");
            }

            let temp = JSON.parse(data);
            temp.forEach((ele) => {
                if (ele.userName === loginData.userName && ele.password === loginData.password) {
                flag = true;
                
                navigate('/home')
                return;
                
                }
            });

            if (!flag) {
                alert("No such details found ")
            }

        }
            
                
    }

  return (
    <div id="login-div">
        <div className="login-container">
      <p className="welcome-text">Welcome !</p>
      <p className="sign-up-text">Sign in to</p>
      <p>My website</p>

      <div className="form-container">
        
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => {
            handleChange(e);
          }}
          name="userName"
          value={loginData.userName}
          
        />
        <span className="error">{userNameErr}</span>
        <label htmlFor="userName">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="password"
          value={loginData.password}
        />
        <span className="error">{passwordErr}</span>
        <div className="checkbox-div">
            <div className="checkbox-text">
            <input 
                type="checkbox" 
                id="check" 
                
                name="check"
            />
            <span>Remember me</span>
            </div>
            <p id="forgot-text" onClick={()=>{navigate('/register')}}>Forgot Password ?</p>
        </div>
        
        <button className="register-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className="bottom-text">
        Don'y have an Account ?<span className="login-text" onClick={()=>{navigate('/register')}}>Register</span>
      </p>
    </div>
    </div>
  );
}
