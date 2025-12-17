import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <Container>
          <h3 style={{ fontSize: '2rem', fontWeight: 'italic' }}>Welcome to</h3>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Hendrik de Lange</h1>
          <h3 style={{ fontSize: '1.5rem', marginTop: '20px' }}>Independent Financial Advisor</h3>
          
          <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
            Expert guidance in financial planning, investments, and wealth management.
          </p>
          <Button as={Link} to="/contact" variant="light" size="lg" style={{ marginRight: '10px' }}>
            Get in Touch
          </Button>
          <Button as={Link} to="/services" variant="outline-light" size="lg">
            Our Services
          </Button>
        </Container>
      </div>

      {/* About Preview */}
      <Container style={{ padding: '50px 0' }}>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Hendrik</h2>
            <p>
              With over 20 years of experience in the financial services industry, I bring a well-rounded and practical approach to helping clients protect, grow, and manage their finances with confidence.
            </p>
            <Button variant="primary" onClick={toggleShowMore}>
              {showMore ? 'Show Less' : 'Learn More'}
            </Button>
            {showMore && (
              <div style={{ marginTop: '20px' }}>
                <p>
                  My career began in banking, where I gained extensive experience across banking solutions, short-term insurance, and investments. Over the years, this foundation allowed me to develop a deep understanding of risk management, financial planning, and client-focused service.
                </p>
                <p>
                  Today, I specialize in comprehensive financial planning, investment strategies, insurance solutions, and business consulting to help individuals and families achieve their financial goals.
                </p>
              </div>
            )}
          </Col>
          <Col md={6}>
            <img
              src={`${process.env.PUBLIC_URL}/media/profile.jpg`}
              alt="Hendrik de Lange"
              style={{ width: '25%', borderRadius: '10px' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Services Carousel */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Services</h2>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Financial Planning</Card.Title>
                      <Card.Text>Personalized strategies for your financial future.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Investment Management</Card.Title>
                      <Card.Text>Diversified portfolios to grow your wealth.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Insurance Solutions</Card.Title>
                      <Card.Text>Comprehensive coverage for peace of mind.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Estate Planning</Card.Title>
                      <Card.Text>Secure your legacy with expert planning.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Business Consulting</Card.Title>
                      <Card.Text>Strategic advice for business success.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Education Planning</Card.Title>
                      <Card.Text>Plan for your children's future education.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button as={Link} to="/services" variant="primary">
              View All Services
            </Button>
          </div>
        </Container>
      </div>

      {/* Call to Action */}
      <Container style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Ready to Take Control of Your Finances?</h2>
        <p>Contact me today for a free consultation.</p>
        <Button as={Link} to="/contact" variant="success" size="lg">
          Contact Us Now
        </Button>
      </Container>
    </div>
  );
}

export default Home;
