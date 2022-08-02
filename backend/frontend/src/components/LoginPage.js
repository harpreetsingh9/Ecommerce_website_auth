import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import login from "../images/login.svg";
import "./RegisterPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const data = {
    email,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users/signin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="form_container">
          <div>
            <h1>Sign In</h1>
          </div>
          <div className="item_container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="input_container email">
                <label for="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Eamil"
                />
              </div>
              <div className="input_container name">
                <label for="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
              {error && <div className="error">{error}</div>}
              <button className="container_btn" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="not_user">
          <p>New User ?</p>
          <Link to="/register">
            <button className="btn" type="button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
