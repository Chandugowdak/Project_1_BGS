import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  // Array of course data
  const courses = [
    {
      name: 'Software Developer/Engineer',
      image: "https://bit.ly/46ka5hX",
      topics: {
        Skills: ['Problem-solving', 'Data Structures', 'Algorithms', 'OOP', 'Version Control (Git)']
      }
    },
    {
      name: 'Web Developer',
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",      topics: {
        Skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express']
      }
    },
    {
      name: 'Mobile App Developer',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-IrqichjuHd45DTK5cZYieaAJThmlw6Edw&s",
      topics: {
        Skills: ['Java', 'Kotlin', 'Swift', 'React Native', 'Flutter']
      }
    },
    {
      name: 'Data Scientist',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNB_XEHW2vqrN0dVyWpRop5sZ4fAT80PdvQ&s',
      topics: {
        Skills: ['Python', 'R', 'Machine Learning', 'Statistics', 'Data Visualization']
      }
    },
    {
      name: 'Data Analyst',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZAfaZKgMPMFPfy3U4E8U7Lz3K8WBERJe6Q&s",
      topics: {
        Skills: ['SQL', 'Excel', 'Tableau', 'Python', 'Data Cleaning']
      }
    },
    {
      name: 'Machine Learning Engineer',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-44MsP8GG_19Iu2JGFBMPI8nmzX_gfrSNYQ&s",
      topics: {
        Skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Machine Learning Algorithms']
      }
    },
    {
      name: 'AI Specialist',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzhoeMWYKeXzrQKg-lr-LUBSQkPRgBNjmDw&s",
      topics: {
        Skills: ['Python', 'Neural Networks', 'Deep Learning', 'Natural Language Processing']
      }
    },
    {
      name: 'Database Administrator',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8845m2OsokAqVHKKVbGVoMQmQSV6kAGmLQ&s',
      topics: {
        Skills: ['SQL', 'Database Design', 'Performance Tuning', 'Backup and Recovery']
      }
    },
    {
      name: 'Network Engineer',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXyo5hm6Qkj60TXhkieLEsmGC_K2OL7cXCg&s",
      topics: {
        Skills: ['Networking Protocols', 'Firewalls', 'Routers', 'Switches', 'Network Security']
      }
    },
    {
      name: 'Cybersecurity Analyst',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDySJVirOBFsjGs3AgmAukrsUN8AD-DlCQg&s',
      topics: {
        Skills: ['Risk Assessment', 'Penetration Testing', 'Incident Response', 'Network Security']
      }
    },
    {
      name: 'Cloud Architect',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv5s65rs6iE5HdbySl-YO23D6TqGnAPJF1lXwpJNsCQiyoCjbMcTrao6C9DmeXma9QN8&usqp=CAU',
      topics: {
        Skills: ['AWS', 'Azure', 'Google Cloud', 'Cloud Security', 'Infrastructure as Code']
      }
    },
    {
      name: 'System Administrator',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5mGsRbWa3VBkykXPJeQDBF4FVsvvGnOnGg&s',
      topics: {
        Skills: ['Linux', 'Windows Server', 'Networking', 'System Monitoring', 'Scripting']
      }
    },
    {
      name: 'IT Consultant',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplZMlBBbKgb7fEzkHAOwboj-kfFWOr7lk7Q&s',
      topics: {
        Skills: ['Business Analysis', 'Technical Expertise', 'Communication', 'Project Management']
      }
    },
    {
      name: 'UX/UI Designer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcJEBekxKVWclQem1UmHlIgbDngFb8FFsOAStVEkb6E3Q7kCawiLO6Fej8VDuwP9beQg&usqp=CAU',
      topics: {
        Skills: ['Wireframing', 'Prototyping', 'User Research', 'Adobe XD', 'Figma']
      }
    },
    {
      name: 'DevOps Engineer',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p8eAUGN1r3a1bk0uCMt3RoJt3CjAqPqwfQ&s",
      topics: {
        Skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Automation']
      }
    },
    {
      name: 'Blockchain Developer',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxenoW1DWGXtabdWZ11tYntMq1a_SUAO5EA&s",
      topics: {
        Skills: ['Blockchain Fundamentals', 'Smart Contracts', 'Solidity', 'Ethereum']
      }
    },
    {
      name: 'Game Developer',
      image: '  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3C6mcg90yCdvB0ytJZD9W3vVqNhd4BkLN1g&s',
      topics: {
        Skills: ['C++', 'C#', 'Unity', 'Unreal Engine', 'Game Design']
      }
    },
    
      {
        name: 'Automation Testing',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv0NODBdMnusJ3acjnwVNSl5GWzAmAPLE-zPqCqKd2CPd7JTWBvvuZjLyvmWy37-qfwo&usqp=CAU', // Replace with a relevant image URL
        topics: {
          Skills: ['Selenium', 'JUnit', 'TestNG', 'Continuous Integration', 'Bug Tracking Tools']
        }
      },
  
    {
      name: 'Research Scientist in Computer Science',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2bp04TnoUWI0rZE0DiLLABWc-hvEr96yjg&s',
      topics: {
        Skills: ['Research Methods', 'Mathematics', 'Machine Learning', 'Data Analysis']
      }
    },
    {
      name: 'IT Support Specialist',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gHVT-Z37k1px0G_ppGDRnEq64oNyL31E8g&s",
      topics: {
        Skills: ['Technical Support', 'Troubleshooting', 'Customer Service', 'Networking']
      }
    },
    {
      name: 'Power BI',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3LBV9NlmHjBV9FKAfKEAHQk2vE3CrtyRtg&s', // Replace with a relevant image URL
      topics: {
        Skills: ['Data Visualization', 'Dashboard Creation', 'Data Modeling', 'Power Query', 'DAX (Data Analysis Expressions)']
      }
    }
  ];

  return (
    <div className="container mt-5">
      {/* Heading section */}
      <div className="row">
        <div className="col-12">
          {/* Course section title */}
          <h2 className="text-center mb-4 text-primary font-weight-bold border-bottom border-primary pb-2">
            Different Opportunities
          </h2>
        </div>
      </div>
      {/* Courses grid */}
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              {/* Course image */}
              <img src={course.image} className="card-img-top" alt={course.name} />
              <div className="card-body">
                {/* Course name */}
                <h5 className="card-title text-center text-danger fw-bold fs-4">{course.name}</h5>
                {/* Skills section */}
                <div className="card-text">
                  <strong className='fw-bold fs-5 text-center d-block mb-2'>Skills Required:</strong>
                  <ul className="list-unstyled fs-6 text-primary">
                    {course.topics.Skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
