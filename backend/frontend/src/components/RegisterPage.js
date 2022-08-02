import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name,
    email,
    password,
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users/register";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      // navigate("/login");
      console.log(res.message);
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
            <h1>Create an account</h1>
          </div>
          <div className="item_container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="input_container name">
                <label for="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Your Name"
                />
              </div>
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
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="not_user">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="btn" type="button">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
