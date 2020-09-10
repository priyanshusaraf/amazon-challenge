import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const login = (event) => {
    //stoping the refesh
    event.preventDefault();
    //do the login logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in successfully, redirect ...
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (event) => {
    //stoping the refesh
    event.preventDefault();
    //do the register logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in, redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://www.bkitchensupplies.com/wp-content/uploads/2017/05/amazon_logo_white_text.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Username</h5>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            required
          />
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            required
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="Password"
            required
          />
          <button type="submit" onClick={login} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Priyanshu's AMAZON CLONE's T&C, Cookies,
          and our Notice
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
