import React from 'react';
import './WhomWeServe.css';

const WhomWeServe = () => {
  return (
    <div className="whom-we-serve-section">
      <div className="container text-center">
        <h2 className="section-title">Crop Yield Predictor Uses</h2>
        <p className="section-subtitle">
          With a proven track record of objective crop forecast accuracy that anticipates market movements, Crop Yield Predictor provides a quantifiable edge for risk management and market decisions.
        </p>
        <div className="circle-container">
          <div className="circle">
            <ul className="circle-list">
              <li>Predicting Yield</li>
              <li>Improving Crop Management</li>
              <li>Enhancing Farmers' Happiness</li>
            </ul>
          </div>
          <div className="circle-title top">AgriBusiness</div>
          <div className="circle-title bottom">Risk Management</div>
          <div className="circle-title left">Farmers' Happiness</div>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}

export default WhomWeServe;
