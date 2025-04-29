import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HigherEducation = () => {
  const courses = [
    {
      name: 'Master of Computer Applications (MCA)',
      purpose: 'An advanced degree focusing on application development, programming, and software engineering.',
      learnings: 'In-depth knowledge of advanced programming, software engineering, database management, and web development.'
    },
    {
      name: 'Master of Science in Computer Science (MSc CS)',
      purpose: 'A research-oriented course that provides a strong foundation in computer science theories and applications.',
      learnings: 'Advanced concepts in algorithms, data structures, machine learning, and computer networks.'
    },
    {
      name: 'Master of Business Administration (MBA) in Information Technology',
      purpose: 'Combines business management skills with IT knowledge, preparing for leadership roles in tech companies.',
      learnings: 'Business strategy, project management, IT management, and leadership skills in the context of technology.'
    },
    {
      name: 'Post Graduate Diploma in Data Science',
      purpose: 'Focuses on data analysis, statistical methods, and machine learning to extract insights from large datasets.',
      learnings: 'Data manipulation, statistical analysis, machine learning algorithms, and data visualization techniques.'
    },
    {
      name: 'Post Graduate Diploma in Cybersecurity',
      purpose: 'Specializes in protecting networks, systems, and data from cyber threats and security breaches.',
      learnings: 'Network security, ethical hacking, risk management, and incident response.'
    },
    {
      name: 'Master of Technology (MTech) in Software Engineering',
      purpose: 'Provides advanced knowledge in software development methodologies and technologies.',
      learnings: 'Software development lifecycle, project management, software architecture, and advanced programming techniques.'
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary font-weight-bold text-uppercase border-bottom border-primary pb-2">
        Post-Graduate Courses for BCA Graduates
      </h2>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-primary h-100 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">{course.name}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Purpose</h6>
                <p className="card-text">{course.purpose}</p>
                <h6 className="card-subtitle mb-2 text-muted">What You Will Learn</h6>
                <p className="card-text">{course.learnings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HigherEducation;
