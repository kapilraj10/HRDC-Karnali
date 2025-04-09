import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const HRDCFooter = () => {
  return (
    <footer className="bg-light text-dark pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">HRDC Karnali</h5>
            <hr className="mb-3" style={{ width: '60px', height: '2px', backgroundColor: '#1a5f7a' }} />
            <p className="text-muted">
              Providing specialized orthopedic care and rehabilitation services to children in Karnali Province since 2005.
            </p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com/" className="text-dark me-2" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com/" className="text-dark me-2" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com/" className="text-dark me-2" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com/company/" className="text-dark me-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <hr className="mb-3" style={{ width: '60px', height: '2px', backgroundColor: '#1a5f7a' }} />
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-muted">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-muted">About Us</a></li>
              <li className="mb-2"><a href="/services" className="text-muted">Services</a></li>
              <li className="mb-2"><a href="/gallery" className="text-muted">Gallery</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
            <hr className="mb-3" style={{ width: '60px', height: '2px', backgroundColor: '#1a5f7a' }} />
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <FaMapMarkerAlt className="mt-1 me-2" />
                <span>Birendranagar, Surkhet, Karnali Province, Nepal</span>
              </li>
              <li className="mb-3 d-flex">
                <FaPhone className="mt-1 me-2" />
                <span>+977-83-520123</span>
              </li>
              <li className="mb-3 d-flex">
                <FaEnvelope className="mt-1 me-2" />
                <span>info@hrdckarnali.org.np</span>
              </li>
              <li className="mb-3 d-flex">
                <FaClock className="mt-1 me-2" />
                <span>Sun-Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Newsletter</h5>
            <hr className="mb-3" style={{ width: '60px', height: '2px', backgroundColor: '#1a5f7a' }} />
            <p className="text-muted">Subscribe to our newsletter for updates.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                aria-label="Your Email"
              />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-2 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-11 text-md-start mb-2 mb-md-0">
              <div className="footer-copyright text-center py-3 text-muted">
                <span>© {new Date().getFullYear()} HRDC Karnali. All rights reserved. | Developed by </span>
                <a
                  href="https://www.kapilrajkc.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none fw-medium"
                >
                  Kapilraj KC
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HRDCFooter;
