import React from "react";
import "../styles/Our-impact.css"; 
const OurImpact = () => {
  const impactStats = [
    { id: 1, number: "5,000+", label: "Children Treated", icon: "child-icon" },
    { id: 2, number: "1,200+", label: "Surgeries Performed", icon: "surgery-icon" },
    { id: 3, number: "45+", label: "Remote Communities Reached", icon: "community-icon" },
    { id: 4, number: "300+", label: "Healthcare Workers Trained", icon: "training-icon" },
  ];

  const impactStories = [
    {
      id: 1,
      title: "Mobile Clinics in Remote Villages",
      description:
        "Our mobile clinics have reached 45 remote villages in Karnali Province, providing essential healthcare services to children who would otherwise have no access to medical care.",
      image: "https://hrdcnepal.org/Assets/Images/Gallery/c44c9d58-0dbe-4209-b6fb-ddf41a3da8d9.jpg",
      achievements: [
        "12 mobile clinics conducted in 2024",
        "450+ children screened",
        "120 referrals for specialized care",
      ],
    },
    {
      id: 2,
      title: "Disability Prevention Program",
      description:
        "Through early intervention and community education, our disability prevention program has reduced the incidence of preventable disabilities by 35% in target communities.",
      image: "https://hrdcnepal.org/Assets/Images/Gallery/c44c9d58-0dbe-4209-b6fb-ddf41a3da8d9.jpg",
      achievements: ["35% reduction in preventable disabilities", "25 community workshops", "1,500+ families educated"],
    },
    {
      id: 3,
      title: "Rehabilitation and Reintegration",
      description:
        "Our comprehensive rehabilitation program ensures children not only receive medical treatment but also support for reintegration into their communities and schools.",
      image: "https://hrdcnepal.org/Assets/Images/Gallery/c44c9d58-0dbe-4209-b6fb-ddf41a3da8d9.jpg",
      achievements: [
        "800+ children rehabilitated",
        "90% successful school reintegration",
        "45 schools made accessible",
      ],
    },
  ];

  return (
    <div className="our-impact">
      <div className="impact-hero">
        <div className="overlay">
          <h1>Our Impact</h1>
          <p>Transforming lives and communities through healthcare and rehabilitation</p>
        </div>
      </div>

      <section className="impact-stats">
        <h2>Our Reach and Impact</h2>
        <div className="stats-grid">
          {impactStats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className={`icon ${stat.icon}`}></div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission in Action</h2>
        <p>
          At HRDC Karnali Province, we believe every child deserves access to quality healthcare regardless of their
          economic status or geographical location.
        </p>
        <p>
          Through medical interventions, rehab services, and community programs, we're building a more inclusive society.
        </p>
      </section>

      <section className="impact-stories">
        <h2>Impact Stories</h2>
        <div className="stories">
          {impactStories.map((story) => (
            <div className="story-card" key={story.id}>
              <img src={story.image} alt={story.title} />
              <div className="story-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <ul>
                  {story.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          "The work that HRDC Karnali Province is doing has transformed not just my child's life, but our entire
          community's understanding of disability."
        </blockquote>
        <cite>— Parent of a child treated at HRDC</cite>
      </section>

      <section className="support-call">
        <h2>Support Our Mission</h2>
        <p>
          Your support helps us bring life-changing care to Nepal’s most remote regions. Join us in creating a future of
          opportunity and inclusion.
        </p>
        <div className="actions">
          <button className="btn btn-primary">Donate Now</button>
          <button className="btn btn-secondary">Become a Volunteer</button>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;