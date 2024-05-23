import React, { useState } from 'react';
import { Col, Form, Container, Row, Button } from 'react-bootstrap';

// Contact form component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update form data when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend
    console.log('Form data submitted:', formData);
  };
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8">
              <br />
              <h2>Contact Me</h2>
              {/* Handles user submission for their name */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                {/* Handles user submission for their email */}
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </Form.Group>

                {/* Handles user submission for their message */}
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>

                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

      </div>
        );
};

        export default ContactForm;

  