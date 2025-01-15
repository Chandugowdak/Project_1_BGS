import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projectData = {
  'C++': [
    'Bank Management System',
    'Library Management System',
    'Tic-Tac-Toe Game',
    'Student Database Management',
    'Inventory Management System'
  ],
  'Python': [
    'Web Scraper',
    'Chatbot',
    'Machine Learning Model',
    'Personal Finance Manager',
    'Data Visualization Dashboard'
  ],
  'Web Development': [
    'Portfolio Website',
    'E-commerce Store',
    'Blog Platform',
    'Social Media Dashboard',
    'Online Learning Platform'
  ],
  'JavaScript': [
    'To-Do List App',
    'Interactive Quiz',
    'Weather Forecast App',
    'Recipe Finder',
    'Memory Game'
  ],
  'Frontend Development': [
    'Responsive Portfolio',
    'Interactive Web Form',
    'Single Page Application',
    'Landing Page Design',
    'CSS Grid Layout Project'
  ],
  'Backend Development': [
    'REST API Development',
    'User Authentication System',
    'Database Management System',
    'Server-Side Scripting',
    'CRUD Application'
  ],
  'Full Stack Development': [
    'MERN Stack Application',
    'MEAN Stack Application',
    'LAMP Stack Application',
    'Serverless Architecture',
    'Real-Time Chat Application'
  ],
  'DevOps': [
    'CI/CD Pipeline Setup',
    'Containerization with Docker',
    'Automated Testing',
    'Infrastructure as Code',
    'Cloud Deployment'
  ],
  'Cloud Computing': [
    'Cloud Storage Solution',
    'Serverless Functions',
    'Cloud-based Web Application',
    'Scalable Database',
    'Disaster Recovery Planning'
  ],
  'Cyber Security': [
    'Penetration Testing Tool',
    'Encryption/Decryption Application',
    'Network Security Monitor',
    'Vulnerability Assessment Tool',
    'Secure Login System'
  ],
  'C#': [
    'Inventory Management System',
    'Employee Management System',
    'Chat Application',
    'Game Development',
    'School Management System'
  ],
  'Java': [
    'Library Management System',
    'Banking System',
    'Employee Payroll System',
    'E-commerce Platform',
    'Hospital Management System'
  ],
  'R Programming': [
    'Data Visualization Dashboard',
    'Statistical Analysis Tool',
    'Predictive Modeling Application',
    'Time Series Analysis',
    'Data Cleaning Tool'
  ],
  'DSA': [
    'Sorting Algorithms Visualizer',
    'Graph Algorithms Visualizer',
    'Dynamic Programming Problems',
    'Data Structures Implementations',
    'Algorithmic Challenges Platform'
  ],
  'C Programming': [
    'Simple Calculator',
    'File Handling System',
    'Student Management System',
    'Basic Encryption Tool',
    'Library System'
  ]
};

const icons = {
  'C++': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Python': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Web Development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'JavaScript': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Frontend Development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Backend Development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Full Stack Development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'DevOps': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Cloud Computing': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Cyber Security': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'C#': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'Java': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'R Programming': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'DSA': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  ),
  'C Programming': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
    </svg>
  )
};

const ProjectIdeas = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Top Project Ideas by Skill</h1>
      {Object.keys(projectData).map((category) => (
        <div key={category} className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <div className="me-3 fs-3 text-primary">
              {icons[category]}
            </div>
            <h2 className="text-primary mb-0">{category}</h2>
          </div>
          <div className="row gy-4">
            {projectData[category].map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="border rounded p-3 shadow-sm w-100 h-100">
                  <h3 className="text-dark mb-2">{project}</h3>
                  <p className="text-muted mb-0">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectIdeas;
