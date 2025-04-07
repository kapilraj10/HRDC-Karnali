import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(formData.email, formData.password);
            navigate('/');
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <Container className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1 className="welcome-title">Welcome to HRDC Karnali</h1>
                    <p className="welcome-subtitle">Please sign in to continue</p>
                </div>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Group className="mb-4">
                        <Form.Label className="form-label">Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Enter your email"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Enter your password"
                        />
                    </Form.Group>
                    
                    <div className="d-grid mb-3">
                        <Button 
                            type="submit" 
                            variant="primary" 
                            className="login-button"
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </Button>
                    </div>
                    
                    <div className="text-center mb-3">
                        <Link to="/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>
                    
                    <div className="login-footer">
                        <p className="register-text">
                            Don't have an account?{' '}
                            <Link to="/signup" className="register-link">Create Account</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Login;