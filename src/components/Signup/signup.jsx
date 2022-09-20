import React, { useState } from "react";
import "../Signup/signup.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Signup() {
  const myHistory = useHistory();
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [address, setAddress] = useState("");
  let [checkState,setCheckstate]=useState("")

  const signup = () => {
    axios.post("http://localhost:9000/Signup", {
        username: user,
        password: pass,
        first_name: fname,
        last_name: lname,
        phone: phone,
        email: email,
        address: address,
      })
      .then((response) => {
        console.log("Check...",response);
        if (response){
          setCheckstate(response.data.message)
        }
        else(
          setCheckstate("Registration failed")
        )
      })
        setUser(" ");
        setPass(" ");
        setFname(" ");
        setLname(" ");
        setAddress(" ");
      
      
  };
  return (
    <div className="signMain">
      <div className="sign-container">
        <div className="sign-con">
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
            type="style"
            placeholder="Enter Password"
            name="psw"
            onChange={(e) => setPass(e.target.value)}
            id="psw"
            required
          ></input>
          <label htmlFor="f_name">
            <b>First Name</b>
          </label>
          <input
            type="style"
            placeholder="Enter First Name"
            name="fname"
            onChange={(e) => setFname(e.target.value)}
            id="fname"
            required
          ></input>
          <label htmlFor="l_name">
            <b>Last Name</b>
          </label>
          <input
            type="style"
            placeholder="Enter Last Name"
            name="lname"
            onChange={(e) => setLname(e.target.value)}
            id="lname"
            required
          ></input>
          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="style"
            placeholder="Enter Phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            required
          ></input>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="style"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
          ></input>
          <label htmlFor="address">
            <b>Address</b>
          </label>
          <input
            type="style"
            placeholder="Enter address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            required
          ></input>
          <button className="loginbtn" type="submit" onClick={signup}>
            Sign In
          </button>
        </div>
        <h3 className="regStatus">{checkState}</h3>
      </div>
     
    </div>
  );
}
export default Signup;
