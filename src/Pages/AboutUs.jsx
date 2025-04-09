import React from "react";
import { FaHeartbeat, FaUsers, FaHandHoldingHeart, FaClinicMedical, FaWheelchair } from "react-icons/fa";
import "../styles/About.css";

const AboutUs = () => {
  const stats = [
    { value: "1,200+", label: "Children Helped" },
    { value: "50+", label: "Communities Reached" },
    { value: "30+", label: "Medical Professionals" },
    { value: "8", label: "Years of Service" }
  ];

  const values = [
    { icon: <FaHeartbeat />, title: "Compassionate Care", description: "We treat every child with dignity and respect" },
    { icon: <FaClinicMedical />, title: "Medical Excellence", description: "Specialized orthopedic and rehabilitation services" },
    { icon: <FaUsers />, title: "Community Focus", description: "Empowering families and local networks" },
    { icon: <FaWheelchair />, title: "Inclusive Approach", description: "Accessible services for all children" },
    { icon: <FaHandHoldingHeart />, title: "Sustainable Impact", description: "Creating lasting change in Karnali" }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>Transforming Lives in Karnali Province</h1>
          <p>Comprehensive healthcare and rehabilitation for children with disabilities</p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-container">
          <div className="about-intro">
            <h2 className="about-title">About HRDC Karnali Province</h2>
            <p className="about-lead">
              The Hospital and Rehabilitation Center for Disabled Children (HRDC) Karnali Province is committed to
              providing comprehensive healthcare and rehabilitation services to children with disabilities across
              Nepal's most remote regions.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3><FaHeartbeat className="icon" /> Our Mission</h3>
              <p>
                To ensure no child is deprived of medical care due to disability, regardless of their family's
                financial situation or geographical location in Karnali Province.
              </p>
            </div>

            <div className="about-card">
              <h3><FaClinicMedical className="icon" /> Our Vision</h3>
              <p>
                A society where children with disabilities have equal opportunities to live with dignity,
                independence, and full participation in their communities.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-services">
            <h2>Our Services</h2>
            <ul className="services-list">
              <li><FaWheelchair /> Orthopedic surgical interventions</li>
              <li><FaHeartbeat /> Physical therapy and rehabilitation</li>
              <li><FaClinicMedical /> Prosthetic and orthotic services</li>
              <li><FaUsers /> Community-based rehabilitation programs</li>
              <li><FaHandHoldingHeart /> Disability awareness campaigns</li>
              <li><FaUsers /> Healthcare professional training</li>
            </ul>
          </div>

          <div className="about-cta">
            <h2>Join Our Mission</h2>
            <p>Your support helps us reach more children in need across Karnali Province</p>
            <button className="about-btn">Support Our Work</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
