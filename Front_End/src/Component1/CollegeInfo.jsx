import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollegeInfo = () => {
  const collegeData = {
    tier1: {
      meaning: "Top-ranked colleges with global recognition and high-quality education.",
      advantages: [
        "World-class faculty",
        "Excellent infrastructure",
        "High placement rates",
        "Global networking opportunities",
        "Top-notch research facilities"
      ],
      companies: [
        "Google",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Apple"
      ]
    },
    tier2: {
      meaning: "Well-regarded colleges with good regional recognition and strong academic programs.",
      advantages: [
        "Good faculty",
        "Decent infrastructure",
        "Strong placement support",
        "Networking opportunities",
        "Moderate research facilities"
      ],
      companies: [
        "IBM",
        "Oracle",
        "SAP",
        "Accenture",
        "Cisco"
      ]
    },
    tier3: {
      meaning: "Colleges with regional recognition and good academic programs but limited global outreach.",
      advantages: [
        "Affordable education",
        "Good faculty",
        "Strong local industry connections",
        "Moderate placement rates",
        "Basic infrastructure"
      ],
      companies: [
        "Tech Mahindra",
        "Wipro",
        "TCS",
        "HCL",
        "Capgemini"
      ]
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-dark fw-bold text-uppercase border-bottom border-primary pb-2">
  Tier College Information
</h2>

      <div className="row">
        {Object.keys(collegeData).map((tier) => (
          <div key={tier} className="col-md-4 mb-4">
            <div className="card border-primary shadow-sm">
              <div className="card-header text-center bg-primary text-white">
              <h4 className="fw-bold mb-0" style={{ marginRight: '10px' }}>
  {tier.charAt(0).toUpperCase() + tier.slice(1)}
</h4>

              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  <strong>Meaning:</strong> {collegeData[tier].meaning}
                </p>
                <p className="card-text text-center">
                  <strong>Advantages:</strong>
                  <ul className="list-unstyled mt-2">
                    {collegeData[tier].advantages.map((advantage, index) => (
                      <li key={index} className="d-flex align-items-center mb-1">
                        <i className="bi bi-check-circle text-success me-2"></i>{advantage}
                      </li>
                    ))}
                  </ul>
                </p>
                <p className="card-text">
                  <strong>Top Companies:</strong>
                  <ul className="list-unstyled mt-2">
                    {collegeData[tier].companies.map((company, index) => (
                      <li key={index} className="d-flex align-items-center mb-1">
                        <i className="bi bi-building text-primary me-2"></i>{company}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeInfo;
