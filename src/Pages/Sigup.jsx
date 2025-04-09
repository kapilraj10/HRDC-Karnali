import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Sinup.css"; 

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(formData);
            navigate("/");
        } catch (err) {
            setError(err.message || "Failed to create an account");
            console.error(err);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <h1 className="welcome-title">Welcome to HRDC Karnali</h1>
                    <p className="welcome-subtitle">Create your account to get started</p>
                </div>
                
                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                
                <Form onSubmit={handleSubmit} className="mt-4">
                    <Form.Group className="mb-4">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="form-input"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="form-input"
                        />
                    </Form.Group>

                    <div className="d-grid mb-4">
                        <Button 
                            variant="primary"
                            type="submit" 
                            size="lg"
                            disabled={loading}
                            className="signup-button"
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </div>

                    <div className="text-center">
                        <p className="login-text">
                            Already have an account?{' '}
                            <Link to="/login" className="login-link">Login</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Signup;