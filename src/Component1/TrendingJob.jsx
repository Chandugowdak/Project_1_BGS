import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendingJob = () => {
  // Define the job data with updated salary ranges
  const jobs = [
    { title: 'Software Developer', salary: '₹10,00,000', type: 'Service-Based' },
    { title: 'Data Scientist', salary: '₹12,00,000', type: 'Service-Based' },
    { title: 'DevOps Engineer', salary: '₹11,00,000', type: 'Service-Based' },
    { title: 'Cyber Security Analyst', salary: '₹9,00,000', type: 'Service-Based' },
    { title: 'Machine Learning Engineer', salary: '₹11,50,000', type: 'Service-Based' },
    { title: 'Frontend Developer', salary: '₹15,00,000', type: 'Product-Based' },
    { title: 'Backend Developer', salary: '₹16,00,000', type: 'Product-Based' },
    { title: 'Cloud Architect', salary: '₹18,00,000', type: 'Product-Based' },
    { title: 'AI Engineer', salary: '₹20,00,000', type: 'Product-Based' },
    { title: 'Product Manager', salary: '₹22,00,000', type: 'Product-Based' },
    { title: 'Database Administrator', salary: '₹14,00,000', type: 'Product-Based' }, // Added job
    { title: 'UX Designer', salary: '₹13,00,000', type: 'Product-Based' } // Added job
  ];

  // Calculate minimum and maximum salaries for each type
  const calculateSalaries = (type) => {
    const filteredJobs = jobs.filter(job => job.type === type);
    const salaries = filteredJobs.map(job => parseInt(job.salary.replace(/₹|,/g, '')));
    return {
      min: Math.min(...salaries),
      max: Math.max(...salaries)
    };
  };

  const serviceBasedSalaries = calculateSalaries('Service-Based');
  const productBasedSalaries = calculateSalaries('Product-Based');

  return (
    <div className="container my-5 p-4 bg-light rounded shadow-lg">
      <h2 className="text-center mb-4 text-primary">Top IT Job Salaries</h2>
      
      <div className="mb-4">
        <h4 className="text-center text-secondary">Salary Overview</h4>
        <div className="row text-center">
          <div className="col-12 col-md-6 mb-3">
            <div className="card border-success h-100">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">Service-Based Companies</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Min Salary: <span className="badge bg-danger text-light rounded-pill">{`₹${(serviceBasedSalaries.min / 100000).toFixed(0)}L`}</span></p>
                <p className="card-text">Max Salary: <span className="badge bg-danger text-light rounded-pill">{`₹${(serviceBasedSalaries.max / 100000).toFixed(0)}L`}</span></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="card border-info h-100">
              <div className="card-header bg-info text-white">
                <h5 className="card-title mb-0">Product-Based Companies</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Min Salary: <span className="badge bg-warning text-dark rounded-pill">{`₹${(productBasedSalaries.min / 100000).toFixed(0)}L`}</span></p>
                <p className="card-text">Max Salary: <span className="badge bg-warning text-dark rounded-pill">{`₹${(productBasedSalaries.max / 100000).toFixed(0)}L`}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {jobs.map((job, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card border-primary h-100">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">{job.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Average Salary:</p>
                <span className="badge bg-success text-light rounded-pill">{job.salary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingJob;
