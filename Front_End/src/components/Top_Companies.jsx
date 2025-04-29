import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Top_Companies = () => {
  
const serviceBasedCompanies = [
   
  { name: "Tata Consultancy Services (TCS)", location: "Mumbai, Maharashtra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkOxbEiRbfQ6xLPl5dpY0v4lENi8Ls69_xQ&s" },
  { name: "Infosys", location: "Bangalore, Karnataka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvFxcY0mmvXZIk_jZOkQm2P6MYV9Eu66RYg&s" },
  { name: "Wipro", location: "Bangalore, Karnataka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaanwPsIdMM_bdNK5fJHFarL9JPOL5itj2Q&s" },
  { name: "HCL Technologies", location: "Noida, Uttar Pradesh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftJUOhfwjY5DgFLbNysWe659yYSJ3io4PRg&s" },
  { name: "Tech Mahindra", location: "Pune, Maharashtra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTt7KisD4U99A3EXmhxrSm4cj4pxlgTQI8w&s" },
  { name: "Capgemini", location: "Paris, France", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMklzVUd2IFzNKi6QtncUCt-ukwZaUDbOhA&s" },
  { name: "Cognizant", location: "Teaneck, New Jersey, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgmKviZIDRkYAy-y2JnDQ3h4ZUelijnVZvQ&s" },
  { name: "IBM Global Services", location: "Armonk, New York, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfju0Jv_6ECBPIrdf1LOSDYzP_KwrSF2VLw&s" },
  { name: "DXC Technology", location: "Tysons, Virginia, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMGfNZiO3Tn3jSnoXzmOBvEwWy7jWLTIclw&s" },
  { name: "Larsen & Toubro Infotech (LTI)", location: "Mumbai, Maharashtra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvexTghkOJgdGlPAwJLNOG_VXSe40eIGg0hw&s" },
  { name: "Accenture", location: "Dublin, Ireland", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekWvkGXw1CBiLibx3rB-adtPoxSbsZtzfaw&s" },
  { name: "Atos", location: "Paris, France", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJ0ZrGYS_VXT0q6MRF6PaQT3XWh7osBi0bA&s" }
];



const productBasedCompanies = [
{ name: "Zoho Corporation", location: "Chennai, Tamil Nadu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIs6382iDs582tRJe19syzll_gDqqLK2R2sA&s" },
{ name: "Freshworks", location: "Chennai, Tamil Nadu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx7nJZJUXzrls5GDytTVDKBdXiJD-DTf1sA&s" },
{ name: "IIFL Securities", location: "Mumbai, Maharashtra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QFaDu964Jr2T6PKYkaGinCrTIQXeyF6OsA&s" },
{ name: "Paytm", location: "Noida, Uttar Pradesh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhtvNCZIaQACTG6Spcigxicxfrdi-vwxqDg&s" },
{ name: "CureMetrix", location: "Bangalore, Karnataka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0-4uufk-r0_1Q9EcjPaQJCw1C0ve_iOIZw&s" },
{ name: "Google", location: "Mountain View, California, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlkoLsvj2X3SudEvRDB-yaUAhT80xCJguaA&s" },
{ name: "Microsoft", location: "Redmond, Washington, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrofEhk78O4akQu3SEA0JV9RO-RjvO9ZS3A&s"},
{ name: "Apple", location: "Cupertino, California, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bbhf4lEt1GofdTNT8oqeAm8VSwgdo0OL5g&s" },
{ name: "Amazon", location: "Seattle, Washington, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_z6DAOsoCC2ovWN3W2Xxs9goevn2xrH8iw&s" },
{ name: "SAP", location: "Walldorf, Germany", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Abe0nE7nuWCbCDmA-mtX83KPrPU1Rntx7A&s" },
{ name: "Netflix", location: "Los Gatos, California, USA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsogdY6CiYWarNrJsoHhBqcBPv5F96gteoqg&s" },
{ name: "Spotify", location: "Stockholm, Sweden", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpD_XmIGT7CrckHbw1ZwvYovNvT4JgOECgKQ&s" }
];
  const cardStyle = {
    width: '100%',
    height: '200px', // Adjusted height for better layout
    objectFit: 'cover'
  };

  const quoteStyle = {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#555',
    borderLeft: '5px solid #007bff',
    paddingLeft: '20px',
    margin: '20px 0',
    lineHeight: '1.6'
  };

  return (
    <>
      <Router>
        <div className="container my-5">
          <h2 className="text-center mb-4 text-dark fw-bold text-uppercase border-bottom border-primary pb-2">
            Top Companies
          </h2>
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center flex-wrap">
              <Link
                to="/service-based"
                className="btn fw-bold text-primary-emphasis btn-info mx-2 btn-lg mb-2"
                style={{ minWidth: '200px' }}
              >
                Service-Based Companies
              </Link>
              <Link
                to="/product-based"
                className="btn fw-bold text-primary-emphasis btn-info mx-2 btn-lg mb-2"
                style={{ minWidth: '200px' }}
              >
                Product-Based Companies
              </Link>
            </div>
          </div>
          <Switch>
            <Route path="/service-based">
              <div className="row">
                {serviceBasedCompanies.map((company, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                      <img src={company.image} className="card-img-top" alt={company.name} style={cardStyle} />
                      <div className="card-body">
                        <h5 className="card-title fs-4 text-danger fw-bold text-center">{company.name}</h5>
                        <p className="card-text fs-5">Location: {company.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Route>
            <Route path="/product-based">
              <div className="row">
                {productBasedCompanies.map((company, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                      <img src={company.image} className="card-img-top" alt={company.name} style={cardStyle} />
                      <div className="card-body">
                        <h5 className="card-title fs-4 text-danger fw-bold text-center">{company.name}</h5>
                        <p className="card-text fs-5">Location: {company.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqlJk6oSAc_cORqQCDpspDQLebxqPnSMNQg&s"
          className="img-fluid mb-4"
          alt="Top Companies"
        />
        <h3 className="mb-4" style={{ fontSize: '2rem', fontWeight: '500' }}>
          Welcome to the Top Companies Overview
        </h3>
        <p className="lead">
          Discover some of the leading service-based and product-based companies that are shaping the industry.
          <br />
          Service-based companies offer services like consulting, IT solutions, and outsourcing. They focus on delivering specialized expertise to other businesses.
          <br />
          Product-based companies, on the other hand, create and sell products, ranging from software to consumer electronics. They aim to develop innovative solutions for end-users.
        </p>
        <div className="mt-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSvJa3euHKDj71yaG8U8srxvL-hM9tBiJMg&s"
            className="mb-3 rounded-circle"
            alt="Sundar Pichai"
          />
          <blockquote className="blockquote" style={quoteStyle}>
            <p className="mb-0">
              "Wear your failure as a badge of honor!"
              <br />
              "India has long been an exporter of talent to tech companies, but it is India that's now undergoing its own revolution."
            </p>
            <br />
            <br />
            <footer className="blockquote-footer">Sundar Pichai, CEO of Google</footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Top_Companies;

