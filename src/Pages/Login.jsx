import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './Login.css';

const Login = () => { // Component name should be capitalized
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <div className='p-4 border rounded shadow'>
                        <h2 className='text-center mb-4'>Welcome Back</h2>
                        <Form onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-label="Email address"
                                />
                                <Form.Text className='text-muted'>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            {/* Password Input */}
                            <Form.Group className="mb-4" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    aria-label="Password"
                                />
                            </Form.Group>

                            {/* Remember Me & Forgot Password */}
                            <Row className='mb-4'>
                                <Col xs={12} md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        id="rememberMe"
                                        label="Remember Me"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
                                    <a href="#!" className="text-decoration-none">
                                        Forgot password?
                                    </a>
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <div className="d-grid mb-4">
                                <Button variant="primary" type="submit" size="lg">
                                    Sign in
                                </Button>
                            </div>

                            {/* Social Login */}
                            <div className="text-center">
                                <p className="mb-3">Or continue with</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <Button
                                        variant="outline-primary"
                                        className="rounded-circle"
                                        style={{ width: '3rem', height: '3rem' }}
                                    >
                                        <FaFacebook size={20} />
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        className="rounded-circle"
                                        style={{ width: '3rem', height: '3rem' }}
                                    >
                                        <FaGoogle size={20} />
                                    </Button>
                                </div>
                            </div>

                            {/* Register Link */}
                            <div className="text-center mt-4">
                                <p>
                                    Not a member?{' '}
                                    <Link to="/signup" className="text-decoration-none">
                                        Register now
                                    </Link>
                                </p>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login; 
