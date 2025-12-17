import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Services() {
  return (
    <Container style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>My Services</h1>
      <Row>
        <Col md={4} className="mb-4">
          <div className="p-3 bg-primary text-white rounded">
            <h3>Financial Planning</h3>
            <ul>
              <li>Personalized financial strategies</li>
              <li>Retirement planning</li>
              <li>Tax optimization</li>
            </ul>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-3 bg-success text-white rounded">
            <h3>Investment Management</h3>
            <ul>
              <li>Portfolio diversification</li>
              <li>Risk assessment</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-3 bg-info text-white rounded">
            <h3>Insurance Solutions</h3>
            <ul>
              <li>Life insurance</li>
              <li>Health insurance</li>
              <li>Property insurance</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <div className="p-3 bg-warning text-dark rounded">
            <h3>Estate Planning</h3>
            <ul>
              <li>Will preparation</li>
              <li>Trust management</li>
              <li>Estate tax planning</li>
            </ul>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-3 bg-danger text-white rounded">
            <h3>Business Consulting</h3>
            <ul>
              <li>Business valuation</li>
              <li>Cash flow analysis</li>
              <li>Succession planning</li>
            </ul>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-3 bg-secondary text-white rounded">
            <h3>Education Planning</h3>
            <ul>
              <li>College savings plans</li>
              <li>Scholarship guidance</li>
              <li>Educational funding</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
