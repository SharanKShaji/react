import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [val, setVal] = useState("");
  const clear = () => {
    alert("Thank You " + val + " for your submission,We will get back to you");
  };
  return (
    <div className="footer">
      <h1>Subscribe to get the latest updates about us</h1>
      <input
        type="text"
        placeholder="Subscribe"
        id="myInput"
        name="search"
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button onClick={clear}>Send</button>
    </div>
  );
}

export default Footer;
