import React,{useState} from "react";
import "./Register.css";
import { Link,useHistory } from 'react-router-dom'

function Form() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [mobile,setMobile] = useState('');
  const history = useHistory();

  const btnclick = () =>{
    localStorage.setItem("email", email);
    localStorage.setItem("password",password);
    localStorage.setItem("mobile", mobile);
    history.push("/Signin");


    // localStorage.clear()
  }

  return (
    <div>
      <div className="reg-container">
        <h1>Register</h1>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        ></input>
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password" value={password} onChange={e => setPassword(e.target.value)}
          placeholder="Enter Password"
          name="password"
          id="password"
          required
        ></input>

        <label htmlFor="mobile-num">
          <b>Mobile Number</b>
        </label>
        <input
          type="text" value={mobile} onChange={e => setMobile(e.target.value)}
          placeholder="Enter Mobile Number"
          name="mobile"
          id="mobile"
          required
        ></input>

        <p> By creating an account you agree to our terms and conditions</p>
        <button type="submit" className="registerbtn" onClick={btnclick} >
          Register
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <Link to="/Signin">Sign In</Link>
        </p>
      </div>
    </div>
    
  );
}
export default Form;
