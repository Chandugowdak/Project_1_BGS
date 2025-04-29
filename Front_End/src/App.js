import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Linker from "./Pages/Linker";

// Other imports for your pages
import Home from "./components/Home";
import Courses from "./components/Courses";
import Source from "./components/Source";
import Top_Companies from "./components/Top_Companies";
import TrendingJob from "./Component1/TrendingJob";
import TrendingSkill from "./Component1/TrendingSkill";
import CollegeInfo from "./Component1/CollegeInfo";
import HigherEducation from "./Component1/HigherEducation";
import ProjectIdeas from "./Component2/ProjectIdeas";
import OpenSource from "./Component2/OpenSource ";
import HowToGetInternship from "./Component2/HowToGetInternship";
import CodingPlatforms from "./Component2/CodingPlatforms";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login state change
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {!isLoggedIn ? (
        // Show login and registration screens if not logged in
        <Switch>
          <Route exact path="/">
            <Login onLogin={handleLogin} /> {/* Login handler passed */}
          </Route>
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      ) : (
        // Show main content if logged in
        <>
          <Linker /> {/* Display navigation bar */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/Sour" component={Source} />
            <Route path="/Comp" component={Top_Companies} />
            <Route path="/trending-job" component={TrendingJob} />
            <Route path="/trending-skill" component={TrendingSkill} />
            <Route path="/CollegeInfo" component={CollegeInfo} />
            <Route path="/higher-education" component={HigherEducation} />
            <Route path="/project-ideas" component={ProjectIdeas} />
              <Route path="/open-source" component={OpenSource} />
            
            <Route
              path="/how-to-get-internship"
              component={HowToGetInternship}
            />
            <Route path="/coding-platforms" component={CodingPlatforms} />
            <Redirect to="/" />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;
