import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="mainContainer">
        <div class="box">
          <div class="title-box">
            <button class="logIn" onclick="log()">
              Log in
            </button>
            <button class="register" onclick="reg()">
              Register
            </button>
          </div>
          <div class="icon">
            <img src="./pics/fb.png" alt="" />
            <img src="./pics/gp.png" alt="" />
            <img src="./pics/tw.png" alt="" />
          </div>

          <div class="input-field" id="login">
            <input class="input-text" type="text" placeholder="User ID" />
            <input
              class="input-text"
              type="password"
              placeholder="Enter password"
            />
            <input type="checkbox" id="log-checkbox" />
            <label for="log-checkbox">Remember Password</label>
            <button>Log In</button>
          </div>

          <div class="input-field" id="register">
            <input class="input-text" type="text" placeholder="User ID" />
            <input class="input-text" type="text" placeholder="Email ID" />

            <input
              class="input-text"
              type="password"
              placeholder="Enter password"
            />
            <input type="checkbox" id="regi-checkbox" />
            <label for="regi-checkbox">I agree to the term & conditions</label>
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
