import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';


import './App.css';
import Source from './components/Source';
import Top_Companies from './components/Top_Companies';
import TrendingJob from './Component1/TrendingJob'; 
import TrendingSkill from './Component1/TrendingSkill';
import CollegeInfo from './Component1/CollegeInfo';

import HigherEducation from './Component1/HigherEducation';
import ProjectIdeas from './Component2/ProjectIdeas';
import OpenSource from './Component2/OpenSource '; // Fixed typo
import HowToGetInternship from './Component2/HowToGetInternship';
import CodingPlatforms from './Component2/CodingPlatforms';
import image from './image.jpeg';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light top-navbar">
          <div className="container-fluid">
            <img className="img-fluid  rounded-3 logo " src={image} alt="Logo" />
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Sour">Source</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Comp">Top-Companies</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light secondary-navbar">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/trending-job">Trending Job</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trending-skill">Trending Skill</Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/HigherEducation">Higher Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CollegeInfo">Type of College</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/courses" component={Courses} />
           
            <Route path="/Sour" component={Source} />
            <Route path="/Comp" component={Top_Companies} />
            <Route path="/trending-job" component={TrendingJob} />
            <Route path="/trending-skill" component={TrendingSkill} />
            <Route path="/CollegeInfo" component={CollegeInfo} />
            
            <Route path="/HigherEducation" component={HigherEducation} />
            <Route path="/project-ideas" component={ProjectIdeas} />
            <Route path="/open-source" component={OpenSource} />
            <Route path="/how-to-get-internship" component={HowToGetInternship} />
            <Route path="/coding-platforms" component={CodingPlatforms} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
