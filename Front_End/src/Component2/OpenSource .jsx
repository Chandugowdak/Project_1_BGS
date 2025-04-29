import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const openSourcePlatforms = [
  { name: 'GitHub', link: 'https://github.com' },
  { name: 'GitLab', link: 'https://gitlab.com' },
  { name: 'Bitbucket', link: 'https://bitbucket.org' },
  { name: 'SourceForge', link: 'https://sourceforge.net' },
  { name: 'Stack Overflow', link: 'https://stackoverflow.com' },
  { name: 'Reddit', link: 'https://www.reddit.com/r/programming/' },
  { name: 'Open Source Initiative', link: 'https://opensource.org' },
  { name: 'Apache Software Foundation', link: 'https://www.apache.org' },
  { name: 'Free Software Foundation', link: 'https://www.fsf.org' },
  { name: 'GNU Project', link: 'https://www.gnu.org' }
];

const OpenSource = () => {
  return (
    <div className="p-4 bg-light">
      <h1 className="mb-4 text-center text-dark">Top 10 Open Source Platforms</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {openSourcePlatforms.map((platform, index) => (
          <div key={index} className="card m-2" style={{ width: '18rem', border: '1px solid #dee2e6', borderRadius: '0.25rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary">{platform.name}</h5>
              <p className="card-text">
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none">
                  {platform.link}
                </a>
              </p>
              <a href={platform.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenSource;
