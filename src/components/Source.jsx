import React from 'react';
import './Source.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = {
  'Programming Language': {
    'C++ Language': {
      'YouTube Channels': ['The Cherno', 'freeCodeCamp.org', 'ProgrammingKnowledge'],
      'Books': [
        '"The C++ Programming Language" by Bjarne Stroustrup',
        '"Effective C++" by Scott Meyers',
        '"C++ Primer" by Stanley B. Lippman, Josée Lajoie, and Barbara E. Moo',
        '"Accelerated C++: Practical Programming by Example" by Andrew Koenig and Barbara E. Moo',
      ],
      'Websites': ['GeeksforGeeks', 'LearnCpp.com', 'CPlusPlus.com', 'Codecademy', 'Udemy'],
    },
    'Python Language': {
      'YouTube Channels': ['Corey Schafer', 'freeCodeCamp.org', 'Tech With Tim', 'Programming with Mosh'],
      'Books': [
        '"Automate the Boring Stuff with Python" by Al Sweigart',
        '"Python Crash Course" by Eric Matthes',
        '"Learning Python" by Mark Lutz',
        '"Fluent Python" by Luciano Ramalho',
      ],
      'Websites': ['Real Python', 'Python.org', 'GeeksforGeeks', 'W3Schools', 'Codecademy', 'LeetCode'],
    },
    'JAVA Language': {
      'YouTube Channels': ['freeCodeCamp.org', 'Programming with Mosh', 'Java Brains', 'Telusko'],
      'Books': [
        '"Effective Java" by Joshua Bloch',
        '"Java: The Complete Reference" by Herbert Schildt',
        '"Head First Java" by Kathy Sierra and Bert Bates',
        '"Core Java Volume I - Fundamentals" by Cay S. Horstmann',
      ],
      'Websites': ['Oracle Java Tutorials', 'GeeksforGeeks', 'TutorialsPoint', 'JavaTpoint', 'Codecademy'],
    },
    'JavaScript': {
      'YouTube Channels': ['Traversy Media', 'The Net Ninja', 'Academind', 'Programming with Mosh', 'freeCodeCamp.org'],
      'Books': [
        '"JavaScript: The Good Parts" by Douglas Crockford',
        '"Eloquent JavaScript" by Marijn Haverbeke',
        '"You Don’t Know JS" (series) by Kyle Simpson',
        '"JavaScript: The Definitive Guide" by David Flanagan',
      ],
      'Websites': ['Mozilla Developer Network (MDN)', 'W3Schools', 'JavaScript.info', 'freeCodeCamp', 'Codecademy'],
    },
    'HTML Language': {
      'YouTube Channels': ['Traversy Media', 'Academind', 'freeCodeCamp.org', 'The Net Ninja'],
      'Books': [
        '"HTML and CSS: Design and Build Websites" by Jon Duckett',
        '"Learning Web Design" by Jennifer Robbins',
        '"HTML5: Up and Running" by Mark Pilgrim',
        '"HTML5 and CSS3 All-in-One For Dummies" by Andy Harris',
      ],
      'Websites': ['W3Schools', 'MDN Web Docs', 'freeCodeCamp', 'Codecademy', 'HTML Dog'],
    },
    
    'Cascading Style Sheet': {
      'YouTube Channels': ['Traversy Media', 'The Net Ninja', 'Academind', 'DesignCourse', 'freeCodeCamp.org'],
      'Books': [
        '"CSS: The Definitive Guide" by Eric A. Meyer and Estelle Weyl',
        '"Learning Web Design" by Jennifer Robbins',
        '"CSS Secrets: Better Solutions to Everyday Web Design Problems" by Lea Verou',
        '"HTML & CSS: Design and Build Websites" by Jon Duckett',
      ],
      'Websites': ['MDN Web Docs', 'W3Schools', 'CSS-Tricks', 'freeCodeCamp', 'Codecademy'],
    },
    'Kotlin Language': {
      'YouTube Channels': ['Kotlin by JetBrains', 'Philipp Lackner', 'Coding in Flow', 'Tech With Tim', 'Stevdza-San'],
      'Books': [
        '"Kotlin in Action" by Dmitry Jemerov and Svetlana Isakova',
        '"Head First Kotlin" by Dawn Griffiths and David Griffiths',
        '"Kotlin Programming: The Big Nerd Ranch Guide" by Josh Skeen and David Greenhalgh',
        '"Kotlin for Android Developers" by Antonio Leiva',
        '"Programming Kotlin" by Venkat Subramaniam',
      ],
      'Websites': ['Kotlin Official Website', 'JetBrains Academy', 'Exercism', 'Coursera', 'Udacity'],
    }, 'C Language': {
      'YouTube Channels': [
        'mycodeschool',
        'freeCodeCamp.org',
        'Neso Academy'
      ],
      'Books': [
        'The C Programming Language by Brian W. Kernighan and Dennis M. Ritchie',
        'C Programming: A Modern Approach by K.N. King',
        'Head First C by David Griffiths and Dawn Griffiths'
      ],
      'Websites': [
        'GeeksforGeeks',
        'TutorialsPoint',
        'Learn-C.org',
        'Programiz'
      ]
    },
    'C# Language': {
      'YouTube Channels': [
        'Brackeys',
        'Academind',
        'Programming with Mosh',
        'freeCodeCamp.org'
      ],
      'Books': [
        'C# 8.0 and .NET Core 3.0 – Modern Cross-Platform Development by Mark J. Price',
        'Head First C# by Andrew Stellman and Jennifer Greene',
        'C# in Depth by Jon Skeet',
        'Pro C# 8 with .NET Core by Andrew Troelsen and Philip Japikse'
      ],
      'Websites': [
        'Microsoft Learn',
        'C# Corner',
        'GeeksforGeeks',
        'TutorialsPoint',
        'Codecademy'
      ]
    },
    'R Language': {
      'YouTube Channels': [
        'StatQuest with Josh Starmer',
        'Data School',
        'R Programming 101',
        'freeCodeCamp.org'
      ],
      'Books': [
        'R for Data Science by Hadley Wickham and Garrett Grolemund',
        'The Art of R Programming by Norman Matloff',
        'Advanced R by Hadley Wickham',
        'R in Action by Robert Kabacoff'
      ],
      'Websites': [
        'RStudio',
        'DataCamp',
        'Coursera',
        'Kaggle',
        'Tidyverse'
      ]
    },
    'Swift Language': {
      'YouTube Channels': ['CodeWithChris', 'Sean Allen', 'Lets Build That App', 'The Swift Developer', 'iOS Academy'],
      'Books': [
        '"Swift Programming: The Big Nerd Ranch Guide" by Matthew Mathias and John Gallagher',
        '"Swift in Depth" by Tjeerd in \'t Veen',
        '"Hacking with Swift" by Paul Hudson',
        '"iOS Programming: The Big Nerd Ranch Guide" by Christian Keur and Aaron Hillegass',
        '"Swift for Beginners: Develop and Design" by Boisy G. Pitre',
      ],
      'Websites': ['Apple Developer Documentation', 'Ray Wenderlich', 'Hacking with Swift', 'Udacity', 'Coursera'],
    },
    'Unity Language': {
      'YouTube Channels': ['Brackeys', 'Code Monkey', 'Sebastian Lague', 'GamesPlusJames'],
      'Books': [
        '"Unity in Action: Multiplatform Game Development in C# with Unity 5" by Joe Hocking',
        '"Learning C# by Developing Games with Unity" by Harrison Ferrone',
        '"Unity 3D Game Development by Example" by Ryan Henson Creighton',
        '"Mastering Unity 2D Game Development" by Simon Jackson',
        '"Unity Game Development Cookbook: Essentials for Every Game" by Paris Buttfield-Addison, Jon Manning, and Tim Nugent',
      ],
      'Websites': ['Unity Learn', 'Udemy', 'Coursera', 'Ray Wenderlich', 'GameDev.tv'],
    },
  },
  'Frameworks': {
    'Bootstrap': {
      'YouTube Channels': ['Traversy Media', 'The Net Ninja', 'Academind', 'freeCodeCamp.org', 'CodeAcademy'],
      'Books': [
        '"Bootstrap 5 By Example" by Silvio Moreto',
        '"Bootstrap 4 Quick Start" by Jake Spurlock',
        '"Learning Bootstrap" by Packt Publishing',
        '"Mastering Bootstrap" by David Cochran',
        '"Bootstrap 4 Cookbook" by Packt Publishing',
      ],
      'Websites': ['Bootstrap Official Documentation', 'W3Schools', 'MDN Web Docs', 'Bootstrap Examples', 'TutorialsPoint'],
    },
    'Tailwind': {
      'YouTube Channels': ['Tailwind Labs', 'Traversy Media', 'The Net Ninja', 'Academind', 'CodeAcademy'],
      'Books': [
        '"Refactoring UI: The Book" by Adam Wathan and Steve Schoger',
        '"Tailwind CSS: From Zero to Production" by Tailwind Labs',
        '"Building Interfaces with Tailwind CSS" by Adam Wathan',
        '"Tailwind CSS Cheat Sheet" by Matt Stauffer',
        '"Pragmatic Tailwind CSS" by Alex Fedorov',
      ],
      'Websites': ['Tailwind CSS Official Documentation', 'Tailwind CSS Play', 'Tailwind UI', 'Scrimba', 'W3Schools'],
    },
    'Django': {
      'YouTube Channels': ['Corey Schafer', 'Traversy Media', 'Programming with Mosh', 'Academind', 'Tech with Tim'],
      'Books': [
        '"Django for Beginners: Build websites with Python and Django" by William S. Vincent',
        '"Django for APIs: Build web APIs with Python and Django" by William S. Vincent',
        '"Two Scoops of Django 3.x" by Daniel Roy Greenfeld and Audrey Roy Greenfeld',
        '"Django 3 By Example: Build powerful and reliable Python web applications from scratch" by Antonio Mele',
        '"Mastering Django: Core Concepts" by Nigel George',
      ],
      'Websites': ['Django Official Documentation', 'Django Girls Tutorial', 'Real Python', 'Simple is Better Than Complex', 'MDN Web Docs'],
    },
    'Express': {
      'YouTube Channels': ['Traversy Media', 'Academind', 'The Net Ninja', 'Programming with Mosh', 'CodeAcademy'],
      'Books': [
        '"Express.js Guide: The Comprehensive Book on Express.js" by Azat Mardan',
        '"Mastering Node.js: A Practical Guide to Express.js" by Sandro Pasquali',
        '"Node.js Design Patterns" by Mario Casciaro',
        '"Express in Action: Writing, testing, and maintaining Node.js applications" by Evan Hahn',
        '"Pro Express.js: Master Express.js with Node.js" by Azat Mardan',
      ],
      'Websites': ['Express.js Official Documentation', 'MDN Web Docs', 'TutorialsPoint', 'W3Schools', 'Scotch.io'],
    },
    'React Native': {
      'YouTube Channels': ['Academind', 'Traversy Media', 'The Net Ninja', 'Programming with Mosh', 'CodeAcademy'],
      'Books': [
        '"React Native in Action" by Nader Dabit',
        '"Learning React Native: Building Native Mobile Apps with JavaScript" by Bonnie Eisenman',
        '"React Native Cookbook: Building Mobile Apps with React Native" by Jonathan Lebensold',
        '"Fullstack React Native: Create stunning mobile apps with JavaScript and React Native" by Houssein Djirdeh, Anthony Accomazzo, and others',
        '"Pro React Native: A Practical Guide to Mobile App Development" by Stephen Grider',
      ],
      'Websites': ['React Native Official Documentation', 'Expo Documentation', 'React Native Express', 'freeCodeCamp', 'Medium'],
    },
    'Crow': {
      'YouTube Channels': ['TheCherno', 'CppCon', 'ProgrammingKnowledge'],
      'Books': [
        '"Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14" by Scott Meyers',
        '"C++ Primer" by Stanley B. Lippman, Josée Lajoie, and Barbara E. Moo',
        '"C++ Concurrency in Action" by Anthony Williams',
      ],
      'Websites': ['Crow Official Documentation', 'Crow GitHub Repository', 'TutorialsPoint', 'Stack Overflow', 'cppreference.com'],
    },
    'Flutter': {
      'YouTube Channels': ['The Net Ninja', 'Traversy Media', 'Academind', 'Flutter', 'Reso Coder'],
      'Books': [
        '"Flutter Complete Reference" by Alberto Miola',
        '"Flutter in Action" by Eric Windmill',
        '"Beginning App Development with Flutter: Create Cross-Platform Apps" by Rap Payne',
        '"Pragmatic Flutter" by Pragmatic Bookshelf',
        '"Flutter for Beginners: An introductory guide to building cross-platform mobile applications with Flutter" by Alessandro Biessek',
      ],
      'Websites': ['Flutter Official Documentation', 'Flutter Codelabs', 'Medium', 'DartPad', 'Ray Wenderlich'],
    },
  },
  'SQL Database': {
  'SQL': {
    'YouTube Channels': [
      'Kudvenkat',
      'Traversy Media',
      'Programming with Mosh',
      'The Net Ninja',
      'freeCodeCamp.org'
    ],
    'Books': [
      'SQL for Data Analytics by Upom Malik, Matt Goldwasser, and Benjamin Johnston',
      'SQL in 10 Minutes, Sams Teach Yourself by Ben Forta',
      'Learning SQL by Alan Beaulieu',
      'SQL Cookbook by Anthony Molinaro',
      'Head First SQL: Your Brain on SQL -- A Learner\'s Guide by Lynn Beighley'
    ],
    'Websites': [
      'W3Schools',
      'Khan Academy',
      'Codecademy',
      'SQLZoo',
      'LeetCode'
    ]
  },
  'Mongo DB': {
    'YouTube Channels': [
      'Traversy Media',
      'Academind',
      'MongoDB',
      'The Net Ninja',
      'Tech with Tim'
    ],
    'Books': [
      'MongoDB: The Definitive Guide by Kristina Chodorow',
      'Learning MongoDB by Doug Bierer',
      'MongoDB in Action by Kyle Banker',
      'MongoDB Applied Design Patterns by Rick Copeland',
      'Mastering MongoDB 4.x by Alex Giamas and Karan Bhatia'
    ],
    'Websites': [
      'MongoDB Official Documentation',
      'MongoDB University',
      'W3Schools',
      'Codecademy',
      'FreeCodeCamp'
    ]
  },
  'DBMS': {
    'YouTube Channels': [
      'Khan Academy',
      'Traversy Media',
      'Academind',
      'ProgrammingKnowledge',
      'Tech with Tim'
    ],
    'Books': [
      'Database System Concepts by Abraham Silberschatz, Henry Korth, and S. Sudarshan',
      'Database Management Systems by Raghu Ramakrishnan and Johannes Gehrke',
      'Fundamentals of Database Systems by Ramez Elmasri and Shamkant B. Navathe',
      'SQL and Relational Theory: How to Write Accurate SQL Code by C.J. Date',
      'The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling by Ralph Kimball and Margy Ross'
    ],
    'Websites': [
      'W3Schools',
      'GeeksforGeeks',
      'TutorialsPoint',
      'Coursera',
      'Khan Academy'
    ]
  },
  'RDBMS': {
    'YouTube Channels': [
      'Traversy Media',
      'Khan Academy',
      'The Net Ninja',
      'Academind',
      'ProgrammingKnowledge'
    ],
    'Books': [
      'Database System Concepts by Abraham Silberschatz, Henry Korth, and S. Sudarshan',
      'Fundamentals of Database Systems by Ramez Elmasri and Shamkant B. Navathe',
      'SQL in 10 Minutes, Sams Teach Yourself by Ben Forta',
      'SQL for Data Scientists: A Beginner’s Guide for Building Datasets for Analysis by Renee M. P. Teate',
      'Learning SQL by Alan Beaulieu'
    ],
    'Websites': [
      'W3Schools',
      'GeeksforGeeks',
      'TutorialsPoint',
      'Khan Academy',
      'Coursera'
    ]
  },
  'PostgreSQL': {
    'YouTube Channels': [
      'PostgreSQL Official Channel',
      'Traversy Media',
      'Tech With Tim',
      'Academind',
      'CodeAcademy'
    ],
    'Books': [
      'PostgreSQL: Up and Running by Regina O. Schwartz and Hannah W. B. Hall',
      'PostgreSQL: Introduction and Concepts by Bruce Momjian',
      'Mastering PostgreSQL in Application Development by Dimitri Fontaine',
      'PostgreSQL Administration Cookbook by Simon Riggs and Gianni Ciolli',
      'The Art of PostgreSQL by Dimitri Fontaine'
    ],
    'Websites': [
      'PostgreSQL Official Documentation',
      'PostgreSQL Tutorials',
      'GeeksforGeeks',
      'TutorialsPoint',
      'DigitalOcean Community'
    ]
  }
},'Operating System': {
  'Linux Kernel': {
    'YouTube Channels': [
      'The Linux Foundation',
      'Linux Academy (now part of A Cloud Guru)',
      'TuxDriver',
      'ExplainingComputers',
      'Linux for Developers'
    ],
    'Books': [
      'Linux Kernel Development by Robert Love',
      'Understanding the Linux Kernel by Daniel P. Bovet and Marco Cesati',
      'Professional Linux Kernel Architecture by Wolfgang Mauerer',
      'Linux Device Drivers by Jonathan Corbet, Alessandro Rubini, and Greg Kroah-Hartman',
      'Linux System Programming by Robert Love'
    ],
    'Websites': [
      'The Linux Kernel Archives',
      'Linux Kernel Newbies',
      'LWN.net (Linux Weekly News)',
      'Linux Foundation Training',
      'The Linux Documentation Project'
    ]
  },
  'Kali Linux': {
    'YouTube Channels': [
      'Kali Linux Official Channel',
      'HackerSploit',
      'IppSec',
      'Professor Messer',
      'NetworkChuck'
    ],
    'Books': [
      'Kali Linux Revealed: Mastering the Penetration Testing Distribution by Raphaël Hertzog and Jim O’Gorman',
      'Kali Linux Cookbook by Willie Pritchett and David De Smet',
      'Mastering Kali Linux for Advanced Penetration Testing by Vijay Kumar Velu',
      'Kali Linux Network Scanning Cookbook by Justin Hutchens',
      'Kali Linux – An Ethical Hacker’s Cookbook by Joshua Wright and Johnny Long'
    ],
    'Websites': [
      'Kali Linux Official Website',
      'Kali Linux Documentation',
      'Offensive Security',
      'Null Byte (WonderHowTo)',
      'Hack The Box'
    ]
  },
  'Windows': {
    'YouTube Channels': [
      'Microsoft Learn',
      'Windows Insider Program',
      'TechTalks by Microsoft',
      'Eli the Computer Guy',
      'Computer Repair Tutor'
    ],
    'Books': [
      'Windows 10 Inside Out by Ed Bott, Carl Siechert, and Craig Stinson',
      'Windows Internals by Mark Russinovich, David Solomon, and Alex Ionescu',
      'Mastering Windows Server 2019 by Jordan Krause',
      'Windows 11 For Dummies by Andy Rathbone',
      'Pro Windows Server 2019 by John Savill'
    ],
    'Websites': [
      'Microsoft Support',
      'Microsoft Learn',
      'How-To Geek',
      'TechNet',
      'Windows Central'
    ]
  },
  'Ubuntu': {
    'YouTube Channels': [
      'Ubuntu Official Channel',
      'Chris Titus Tech',
      'Linux Scoop',
      'The Linux Channel',
      'LearnLinuxTV'
    ],
    'Books': [
      'Ubuntu Unleashed 2021 Edition by Matthew Helmke',
      'The Official Ubuntu Book by Benjamin Mako Hill, Jono Bacon, and others',
      'Ubuntu: Up and Running by Robin Nixon',
      'Mastering Ubuntu Server by Jay LaCroix',
      'Ubuntu 20.04 LTS Desktop Guide by R. K. B'
    ],
    'Websites': [
      'Ubuntu Official Website',
      'Ubuntu Documentation',
      'Ask Ubuntu',
      'Ubuntu Forums',
      'How-To Geek'
    ]
  }
}


};

const Source = () => {
  return (
    <div className="container mt-4">
     
      {Object.keys(data).map((section) => (
        <div className="section mb-5" key={section}>
          <h2 className="display-4 text-primary fw-bold text-center mb-4">{section}</h2>
          {Object.keys(data[section]).map((language) => (
            <div className="language-section  mb-4" key={language}>
              <h3 className="text-center mb-4">{language}</h3>
              <div className="row">
                {Object.keys(data[section][language]).map((category) => (
                  <div className="col-sm-12 col-md-6 mb-4" key={category}>
                    <div className="box h-100 p-3 bg-light border rounded shadow-sm">
                      <h4 className="mb-3">{category}</h4>
                      <ul className="list-unstyled">
                        {data[section][language][category].map((item, index) => (
                          <li className="mb-2" key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Source;
