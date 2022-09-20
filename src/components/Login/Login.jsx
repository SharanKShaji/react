import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../redux/login/loginaction";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login() {
  const myHistory = useHistory();
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  let [loginStatus,setLoginstatus]=useState("");

  const dispatch = useDispatch();
  const signupFun =()=>{
    myHistory.push("/signin")
  }
  const handleLogin = () => {
    axios.post("http://localhost:9000/Login",{
      username: user,
      password: pass
    })
    .then((response)=>{
      console.log("LOGIN",response.data.id);
      if(response.data.success){
            sessionStorage.setItem("user", user);
            localStorage.setItem("user_id",response.data.id)
            localStorage.setItem("cart_id",response.data.cart_id)
            myHistory.push("/home");
            localStorage.setItem("key",response.data.token)
            setLoginstatus(response.data.message)
          } else {
            setLoginstatus(response.data.message)
          }
    })
  };

  return (
    <div className="logMain">
    <div className="reg-container">
      <div className="log-con">
      <h3 className="loginStatus">{loginStatus}</h3>
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser(e.target.value)}
          required
        ></input>

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(e) => setPass(e.target.value)}
          id="psw"
          required
        ></input>
        <span className="loginfail"></span>

        <button className="loginbtn" type="submit" onClick={handleLogin}>
          Log In
        </button>
        <h4 className="signupClass" onClick={signupFun}>New customer?Signup</h4>
      </div>
    </div>
    </div>
  );
}
export default Login;
