import React from "react";
import { Link } from "react-router-dom";
import image from "./image.jpeg";
import "./Linker.css";

const Linker = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light top-navbar">
        <div className="container-fluid">
          <Link to="/">
            <img className="img-fluid logo" src={image} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            {/* Left side links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link primary-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link primary-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link primary-link" to="/Sour">
                  Source
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link primary-link" to="/Comp">
                  Top-Companies
                </Link>
              </li>
            </ul>

       
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark secondary-navbar">
        <div className="container-fluid">
          <ul className="navbar-nav ml-auto flex-row flex-wrap">
            <li className="nav-item animated-item">
              <Link className="nav-link secondary-link" to="/trending-job">
                Trending Job
              </Link>
            </li>
            <li className="nav-item animated-item">
              <Link className="nav-link secondary-link" to="/trending-skill">
                Trending Skill
              </Link>
            </li>
            <li className="nav-item animated-item">
              <Link className="nav-link secondary-link" to="/higher-education">
                Higher Education
              </Link>
            </li>
            <li className="nav-item animated-item">
              <Link className="nav-link secondary-link" to="/CollegeInfo">
                Type of College
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Linker;
