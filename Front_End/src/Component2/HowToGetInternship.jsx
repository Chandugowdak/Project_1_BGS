import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const internshipSites = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
  { name: 'Indeed', url: 'https://www.indeed.com' },
  { name: 'Glassdoor', url: 'https://www.glassdoor.com' },
  { name: 'Internshala', url: 'https://www.internshala.com' },
  { name: 'SimplyHired', url: 'https://www.simplyhired.com' },
  { name: 'WayUp', url: 'https://www.wayup.com' },
  { name: 'AngelList', url: 'https://www.angel.co' },
  { name: 'Handshake', url: 'https://www.joinhandshake.com' },
  { name: 'CareerBuilder', url: 'https://www.careerbuilder.com' },
  { name: 'College Recruiter', url: 'https://www.collegerecruiter.com' }
];

const InternshipTips = () => {


  return (
    <div className="container mt-5">
      <div className="text-center mb-5 fw-bold  ">
        <h1 className="display-4 text-primary font-weight-bold m-3">Explore Your Internship Journey</h1>
        <div className="card bg-primary text-white text-center shadow-lg">
          <div className="card-body">
            <h3 className="mb-0">Top Internship Platforms</h3>
            <ul className="list-group list-group-flush text-center">
              {internshipSites.map(site => (
                <li 
                  key={site.name} 
                  className="list-group-item  text-dark d-flex justify-content-center align-items-center">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-bold text-dark">
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card shadow-lg border-0" style={{ height: '100%' }}>
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">For Service-Based Companies</h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Emphasize communication and teamwork skills.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Gain experience through internships and freelance work.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Learn about various technologies and frameworks.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Understand client requirements and project management.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Build a portfolio that showcases diverse projects.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card shadow-lg border-0" style={{ height: '100%' }}>
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">For Product-Based Companies</h3>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Focus on problem-solving and coding skills.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Participate in coding competitions and hackathons.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Build a strong GitHub profile with projects.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Get familiar with the company’s tech stack.</li>
                <li><i className="bi bi-arrow-right-circle-fill text-primary mr-2"></i>Practice data structures and algorithms regularly.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-lg border-0 mt-5">
        <div className="card-header bg-primary text-white text-center">
          <h3 className="mb-0">General Tips for Securing an Internship</h3>
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="bi bi-check-circle-fill text-primary mr-2"></i>
              <span className="font-weight-bold">Define your goals and interests.</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-check-circle-fill text-primary mr-2"></i>
              <span className="font-weight-bold">Prepare and update your resume and portfolio.</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-check-circle-fill text-primary mr-2"></i>
              <span className="font-weight-bold">Use online platforms to search for opportunities.</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-check-circle-fill text-primary mr-2"></i>
              <span className="font-weight-bold">Network with professionals and attend industry events.</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-check-circle-fill text-primary mr-2"></i>
              <span className="font-weight-bold">Tailor your applications and follow up on them.</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-check-circle-fill text-primary mr-2"></i>
              <span className="font-weight-bold">Prepare for interviews by practicing questions and problems.</span>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default InternshipTips;
