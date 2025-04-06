import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Singup.css';

const signup = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Form submitted", formData);
        // Add your backend API logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <div className='p-4 border rounded shadow'>
                        <h2 className='text-center mb-4'>Create an Account</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <div className="d-grid mb-3">
                                <Button variant="success" type="submit" size="lg">
                                    Sign Up
                                </Button>
                            </div>

                            <div className="text-center">
                                <p>Already have an account? <a href="/login" className="text-decoration-none">Login</a></p>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default signup;
