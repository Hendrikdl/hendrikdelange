import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    contactNumber: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'service_js5rzy6';
    const templateId = 'template_9zug8cd';
    const userId = 'nIsRqBq4ln1m3FC_E';

    console.log('Sending email with data:', formData);

    emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          surname: '',
          contactNumber: '',
          email: '',
          serviceType: '',
          message: ''
        });
      }, (error) => {
        console.error('Email send failed:', error);
        alert('Failed to send message. Please check console for details.');
      });
  };

  return (
    <Container style={{ padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type of Service Required</Form.Label>
          <Form.Select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="financial-planning">Financial Planning</option>
            <option value="investment-management">Investment Management</option>
            <option value="insurance-solutions">Insurance Solutions</option>
            <option value="estate-planning">Estate Planning</option>
            <option value="business-consulting">Business Consulting</option>
            <option value="education-planning">Education Planning</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
