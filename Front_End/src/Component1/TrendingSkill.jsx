import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrendingSkill.css'; // Custom CSS file for additional styling

const TrendingSkill = () => {
  const skills = [
    { title: 'Artificial Intelligence (AI)', reason: 'AI is used to enhance automation, improve decision-making, and drive innovations across various industries.' },
    { title: 'Machine Learning', reason: 'Machine learning helps systems learn from data and make predictions or decisions without explicit programming.' },
    { title: 'Data Science', reason: 'Data Science involves analyzing and interpreting complex data to help organizations make informed decisions.' },
    { title: 'Cybersecurity', reason: 'Cybersecurity is essential for protecting systems, networks, and data from security breaches and cyber-attacks.' },
    { title: 'Cloud Computing', reason: 'Cloud computing provides scalable and flexible computing resources and services over the internet, supporting modern business needs.' },
    { title: 'Blockchain Technology', reason: 'Blockchain offers secure and transparent transaction records, which is crucial for financial services and other sectors.' },
    { title: 'DevOps', reason: 'DevOps practices streamline and automate the software development and deployment process, enhancing collaboration and efficiency.' },
    { title: 'Front-End Development', reason: 'Front-End Development focuses on creating engaging and interactive user interfaces for web applications and websites.' },
    { title: 'Back-End Development', reason: 'Back-End Development involves server-side logic, databases, and application functionality, essential for powering web applications.' },
    { title: 'Power BI', reason: 'Power BI is used for business analytics, providing interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.' },
    { title: 'Internet of Things (IoT)', reason: 'IoT connects physical devices to the internet, enabling smarter homes, cities, and industrial systems through data collection and analysis.' },
    { title: 'Augmented Reality (AR) and Virtual Reality (VR)', reason: 'AR and VR create immersive and interactive experiences for applications in gaming, education, and training.' }
  ];

  return (
    <div className="container my-5 p-4 bg-light rounded shadow-lg">
      <h2 className="text-center mb-4 text-primary font-weight-bold heading-custom">Top 12 IT Skills in Demand</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-info h-100 shadow-sm">
              <div className="card-header bg-info text-white">
                <h5 className="card-title mb-0">{skill.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{skill.reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingSkill;
