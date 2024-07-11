import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CropYieldPredictor.css';

const CropYieldPredictor = () => {
  return (
    <div className="crop-yield-predictor-section">
      <Container className="text-center">
        <Row>
          <Col md={6} className="section-content">
            <div className="text-left">
              <h2 className="section-title">Crop Yield Predictor Uses</h2>
              <p className="section-subtitle">
                With a proven track record of objective crop forecast accuracy that anticipates market movements, Crop Yield Predictor provides a quantifiable edge for risk management and market decisions.
              </p>
            </div>
            
          </Col>
          <Col md={6} className="text-left">
            <ul className="benefits-list">
              <li>State-of-the-art real-time and historical weather databases</li>
              <li>Tailored statistical learning methods</li>
              <li>Comprehensive out-of-sample performance testing</li>
              <li>Quantitative impacts of future weather</li>
              <li>Flexible visualization tools</li>
            </ul>
          </Col>
          <Button variant="light" className="learn-more-btn">Learn More</Button>
        </Row>
      </Container>
    </div>
  );
}

export default CropYieldPredictor;
