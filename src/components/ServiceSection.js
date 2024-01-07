// ServiceSection.js
import React from 'react';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <div id="services" className="service-container">
    <br/>
      <br/>
      <h2>Our Services</h2>
      <p>Discover what we offer</p>
      <div className="service-row">
        <div className="service-item">
          <i className="fas fa-globe fa-3x"></i>
          <h4>Travel Packages</h4>
          <p>List of ready all-inclusive trips for you to choose from</p>
        </div>
        <div className="service-item">
          <i className="fas fa-pencil-alt fa-3x"></i>
          <h4>Travel Organization</h4>
          <p>Let us help you design your dream travel</p>
        </div>
        <div className="service-item">
          <i className="fas fa-plane fa-3x"></i>
          <h4>Flight Radar</h4>
          <p>Tell us when you would like to go on holidays; we will find your destination</p>
        </div>
      </div>
      <div className="service-row">
        <div className="service-item">
          <i className="fas fa-hiking fa-3x"></i>
          <h4>Activities</h4>
          <p>Your trip is planned, but you're missing the best activities? Hit us up</p>
        </div>
        <div className="service-item">
          <i className="fas fa-chart-bar fa-3x"></i>
          <h4>Price Comparison</h4>
          <p>Multiple offers but don't know which one to choose? Our travel experts will help</p>
        </div>
        <div className="service-item">
          <i className="fas fa-medkit fa-3x"></i>
          <h4>Emergency Support</h4>
          <p>If you face any problems while traveling, we provide necessary help to save your holidays</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default ServiceSection;
