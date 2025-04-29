import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ onLogin }) => {
  const history = useHistory();

  // Use PascalCase for state variables (Email, Password)
  const [Email, setEmail] = useState(""); // Renamed to Email
  const [Password, setPassword] = useState(""); // Renamed to Password
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const formData = { Email, Password };

    try {
      const resp = await axios.post(
        "http://localhost:3000/api/login",
        formData
      );

      if (resp.status === 200) {
        // Successfully logged in
        alert("Login Successful!");
        localStorage.setItem("token", resp.data.token); // Store token in local storage

        onLogin(); // Call onLogin function passed as a prop to update login state
        history.replace("/home"); // Use replace to redirect without pushing to history
      } else {
        alert("Invalid Email or Password");
      }
    } catch (err) {
      alert("Server Error");
    } finally {
      setLoading(false); // Set loading state back to false after request
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-box shadow-lg p-4 rounded">
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
          Code_For_Progress
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn btn-primary animate__animated animate__pulse animate__infinite"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        {/* Registration link */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none fw-bold text-primary"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
