import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="container">
    {/* First Section */}
<div className="container mt-0">
  <div className="row mb-4">
    <div className="col-12 text-center mb-4">
      <h2 className="fw-bold text-dark">Resources</h2>
    </div>
    <div className="col-sm-6 col-md-3 mb-4">
      <Link to="/project-ideas" className="text-decoration-none">
        <div className="card bg-primary text-white h-100 shadow-lg border-0 rounded-lg">
          <div className="card-body text-center d-flex flex-column justify-content-center">
            <h5 className="card-title mb-3 fs-4">Project Ideas</h5>
            <p className="card-text fs-6">Find inspiring project ideas to work on and build your portfolio.</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-md-3 mb-4">
      <Link to="/open-source" className="text-decoration-none">
        <div className="card bg-success text-white h-100 shadow-lg border-0 rounded-lg">
          <div className="card-body text-center d-flex flex-column justify-content-center">
            <h5 className="card-title mb-3 fs-4">Open Source</h5>
            <p className="card-text fs-6">Contribute to open source projects and gain valuable experience.</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-md-3 mb-4">
      <Link to="/how-to-get-internship" className="text-decoration-none">
        <div className="card bg-warning text-dark h-100 shadow-lg border-0 rounded-lg">
          <div className="card-body text-center d-flex flex-column justify-content-center">
            <h5 className="card-title mb-3 fs-4">How To Get Internship</h5>
            <p className="card-text fs-6">Learn tips and strategies for securing internships in the tech industry.</p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-sm-6 col-md-3 mb-4">
      <Link to="/coding-platforms" className="text-decoration-none">
        <div className="card bg-danger text-white h-100 shadow-lg border-0 rounded-lg">
          <div className="card-body text-center d-flex flex-column justify-content-center">
            <h5 className="card-title mb-3 fs-4">Coding Platforms</h5>
            <p className="card-text fs-6">Explore different coding platforms to practice and improve your skills.</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>

      {/* Second Section */}
      <div className="container mt-5">
  <div className="row mb-5">
    <div className="col-12 text-center mb-4">
      <h2 className="fw-bold text-danger">Motivational Words</h2>
    </div>
    <div className="col-md-6 mb-4">
      <div className="card border-light shadow-sm h-100">
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0 fs-4">
            <p className="mb-4">"The only way to do great work is to love what you do."</p>
            <footer className="blockquote-footer text-primary">- Steve Jobs</footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div className="col-md-6 mb-4">
      <div className="card border-light shadow-sm h-100">
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0 fs-4">
            <p className="mb-4">"Success is not the key to happiness. Happiness is the key to success."</p>
            <footer className="blockquote-footer text-primary">- Albert Schweitzer</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Third Section: Footer */}
      <footer className="mt-5  bg-secondary-subtle text-white py-5">
  <div className="container">
    <h2 className="text-center mb-4 fw-bold text-dark">More Information</h2>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="mb-4 flex-fill">
        <h5 className='fw-bold text-dark'>IDE for Coding</h5>
        <ul className="list-unstyled">
          <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Visual Studio Code</a></li>
          <li><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" className="text-primary">IntelliJ IDEA</a></li>
          <li><a href="https://atom.io/" target="_blank" rel="noopener noreferrer" className="text-primary">Atom</a></li>
          <li><a href="https://www.eclipse.org/" target="_blank" rel="noopener noreferrer" className="text-primary">Eclipse</a></li>
          <li><a href="https://www.brackets.io/" target="_blank" rel="noopener noreferrer" className="text-primary">Brackets</a></li>
        </ul>
      </div>
      <div className="mb-4 flex-fill">
        <h5 className='fw-bold text-dark'>Good Compilers</h5>
        <ul className="list-unstyled">
          <li><a href="https://www.gnu.org/software/gcc/" target="_blank" rel="noopener noreferrer" className="text-primary">GCC</a></li>
          <li><a href="https://clang.llvm.org/" target="_blank" rel="noopener noreferrer" className="text-primary">Clang</a></li>
          <li><a href="https://www.microsoft.com/en-us/download/details.aspx?id=5834" target="_blank" rel="noopener noreferrer" className="text-primary">MSVC</a></li>
          <li><a href="https://www.tinycc.org/" target="_blank" rel="noopener noreferrer" className="text-primary">TinyCC</a></li>
          <li><a href="https://www.llvm.org/" target="_blank" rel="noopener noreferrer" className="text-primary">LLVM</a></li>
        </ul>
      </div>
      <div className="mb-4 flex-fill">
        <h5 className='fw-bold text-dark'>Free IT Course Certification</h5>
        <ul className="list-unstyled">
          <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-primary">freeCodeCamp</a></li>
          <li><a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Codecademy</a></li>
          <li><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Udemy</a></li>
          <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-primary">Coursera</a></li>
          <li><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="text-primary">edX</a></li>
        </ul>
      </div>
      <div className="mb-4 flex-fill">
        <h5 className='fw-bold text-dark'>Resume Builders</h5>
        <ul className="list-unstyled">
          <li><a href="https://www.resume.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Resume.com</a></li>
          <li><a href="https://www.canva.com/resumes/templates/" target="_blank" rel="noopener noreferrer" className="text-primary">Canva Resume Builder</a></li>
          <li><a href="https://www.zety.com/resume-builder" target="_blank" rel="noopener noreferrer" className="text-primary">Zety</a></li>
          <li><a href="https://novoresume.com/" target="_blank" rel="noopener noreferrer" className="text-primary">NovoResume</a></li>
          <li><a href="https://www.livecareer.com/resume-builder" target="_blank" rel="noopener noreferrer" className="text-primary">LiveCareer</a></li>
        </ul>
      </div>
      <div className="mb-4 flex-fill">
        <h5 className='fw-bold text-dark'>Paid IT Courses</h5>
        <ul className="list-unstyled">
          <li><a href="https://www.geeksforgeeks.org/courses/" target="_blank" rel="noopener noreferrer" className="text-primary">GeeksforGeeks</a></li>
          <li><a href="https://www.codingninjas.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Coding Ninjas</a></li>
          <li><a href="https://www.scaler.com/topics/courses/" target="_blank" rel="noopener noreferrer" className="text-primary">scaler</a></li>
          <li><a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Udacity</a></li>
          <li><a href="https://lp.pwskills.com/Full-Stack-Web-Development?utm_source=google&utm_medium=cpc&utm_campaign=pw_skills_brand_full_stack_dev-india-google-skills-lead-search-cpl-keywords-na-na-18-jan-2024&utm_source=google&utm_medium=cpc&utm_campaign=PW_Skills_Brand_Full_Stack_Dev-India-Google-Skills-Lead-Search-CPL-Keywords-NA-NA-18-Jan-2024&gad_source=1&gclid=Cj0KCQjwn9y1BhC2ARIsAG5IY-7l8PgNZfgVXLTEGUdzW4raboA1UQVtsaU5-BSJ5ps-KadFk9p6Kg4aAspZEALw_wcB" target="_blank" rel="noopener noreferrer" className="text-primary">PW Skills</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
}

export default Home;
