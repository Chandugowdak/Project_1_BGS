import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      {/* First Section */}
      <div className="section mt-0">
        <div className="row mb-4">
          <div className="col-12 text-center mb-4">
            <h2 className="section-title">Resources</h2>
          </div>
          <div className="col-sm-6 col-md-3 mb-4 ">
            <Link to="/project-ideas" className="card-link ">
              <div className="card card-primary">
                <div className="card-body text-center bg-primary">
                  <h5 className="card-title">Project Ideas</h5>
                  <p className="card-text">
                    Find inspiring project ideas to work on and build your
                    portfolio.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 mb-4">
            <Link to="/open-source" className="card-link">
              <div className="card card-success">
                <div className="card-body text-center 	bg-success">
                  <h5 className="card-title">Open Source</h5>
                  <p className="card-text">
                    Contribute to open source projects and gain valuable
                    experience.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 mb-4">
            <Link to="/how-to-get-internship" className="card-link">
              <div className="card card-warning">
                <div className="card-body text-center 	bg-warning">
                  <h5 className="card-title">How To Get Internship</h5>
                  <p className="card-text">
                    Learn tips and strategies for securing internships in the
                    tech industry.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 mb-4">
            <Link to="/coding-platforms" className="card-link">
              <div className="card card-danger">
                <div className="card-body text-center">
                  <h5 className="card-title">Coding Platforms</h5>
                  <p className="card-text">
                    Explore different coding platforms to practice and improve
                    your skills.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Motivational Section */}
      <div className="section mt-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="section-title text-danger">Motivational Words</h2>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card card-quote">
              <div className="card-body text-center">
                <blockquote className="blockquote mb-0">
                  <p>"The only way to do great work is to love what you do."</p>
                  <footer className="blockquote-footer">- Steve Jobs</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card card-quote">
              <div className="card-body text-center">
                <blockquote className="blockquote mb-0">
                  <p>
                    "Success is not the key to happiness. Happiness is the key
                    to success."
                  </p>
                  <footer className="blockquote-footer">
                    - Albert Schweitzer
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container">
          <h2 className="section-title text-dark">More Information</h2>
          <div className="d-flex flex-wrap justify-content-between">
            {/* IDEs */}
            <div className="footer-section">
              <h5 className="footer-title">IDE for Coding</h5>
              <ul>
                <li>
                  <a
                    href="https://code.visualstudio.com/"
                    className="footer-link"
                  >
                    Visual Studio Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jetbrains.com/idea/"
                    className="footer-link"
                  >
                    IntelliJ IDEA
                  </a>
                </li>
                <li>
                  <a href="https://atom.io/" className="footer-link">
                    Atom
                  </a>
                </li>
                <li>
                  <a href="https://www.eclipse.org/" className="footer-link">
                    Eclipse
                  </a>
                </li>
                <li>
                  <a href="https://www.brackets.io/" className="footer-link">
                    Brackets
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div className="footer-section">
              <h5 className="footer-title">Resources for Learning</h5>
              <ul>
                <li>
                  <a
                    href="https://www.freecodecamp.org/"
                    className="footer-link"
                  >
                    freeCodeCamp
                  </a>
                </li>
                <li>
                  <a href="https://www.codecademy.com/" className="footer-link">
                    Codecademy
                  </a>
                </li>
                <li>
                  <a href="https://www.udemy.com/" className="footer-link">
                    Udemy
                  </a>
                </li>
                <li>
                  <a href="https://www.edx.org/" className="footer-link">
                    edX
                  </a>
                </li>
                <li>
                  <a href="https://www.coursera.org/" className="footer-link">
                    Coursera
                  </a>
                </li>
              </ul>
            </div>
            {/* Languages */}
            <div className="footer-section">
              <h5 className="footer-title">Popular Coding Languages</h5>
              <ul>
                <li>
                  <a href="https://www.python.org/" className="footer-link">
                    Python
                  </a>
                </li>
                <li>
                  <a href="https://www.javascript.com/" className="footer-link">
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="https://www.java.com/" className="footer-link">
                    Java
                  </a>
                </li>
                <li>
                  <a href="https://www.ruby-lang.org/" className="footer-link">
                    Ruby
                  </a>
                </li>
                <li>
                  <a href="https://www.php.net/" className="footer-link">
                    PHP
                  </a>
                </li>
              </ul>
            </div>
            {/* Communities */}
            <div className="footer-section">
              <h5 className="footer-title">Tech Communities</h5>
              <ul>
                <li>
                  <a href="https://stackoverflow.com/" className="footer-link">
                    Stack Overflow
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" className="footer-link">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/" className="footer-link">
                    DEV Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/learnprogramming/"
                    className="footer-link"
                  >
                    Reddit - Learn Programming
                  </a>
                </li>
                <li>
                  <a href="https://www.hashnode.com/" className="footer-link">
                    Hashnode
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
