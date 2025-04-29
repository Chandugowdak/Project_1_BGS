// Register.jsx
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const history = useHistory();

  // Three separate states
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handelregister = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    const data = { Name, Email, Password }; // Create the data object

    try {
      const resp = await axios.post("http://localhost:3000/api/register", data);

      if (resp.status === 201) {
        alert("Registration Successful");
        history.push("/login"); // useHistory for redirection
      } else {
        alert("Some Data Is Missing");
      }
    } catch (err) {
      alert("Server Error");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="register-box shadow-lg p-4 rounded">
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
          Code_For_Progress
        </h2>
        <form onSubmit={handelregister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
            />
          </div>
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
              className="btn btn-success animate__animated animate__pulse animate__infinite"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        {/* Login link */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account?{" "}
            <Link to="/" className="text-decoration-none fw-bold text-success">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
