import React from 'react';
import '../styles/CampaignCenter.css';

const CampaignCenter = () => {
  const ongoingCampaigns = [
    {
      id: 1,
      title: "Free Pediatric Surgery Camp",
      location: "Surkhet, Karnali",
      date: "June 15-30, 2023",
      description: "Providing free surgical interventions for children with congenital heart diseases and other pediatric conditions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      target: "200 children",
      progress: 75
    },
    {
      id: 2,
      title: "Maternal Health Awareness",
      location: "Jumla, Karnali",
      date: "July 1-15, 2023",
      description: "Educating mothers and expectant mothers about prenatal and postnatal care in remote regions.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      target: "500 women",
      progress: 40
    }
  ];

  const upcomingCampaigns = [
    {
      id: 3,
      title: "Mobile Eye Clinic",
      location: "Dolpa, Karnali",
      date: "August 10-25, 2023",
      description: "Providing eye examinations, glasses, and cataract surgeries in remote mountain regions.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Nutrition Support Program",
      location: "Kalikot, Karnali",
      date: "September 5-20, 2023",
      description: "Distributing nutritional supplements and education to combat malnutrition in children.",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const completedCampaigns = [
    {
      id: 5,
      title: "Winter Health Camp 2022",
      location: "Mugu, Karnali",
      date: "December 1-15, 2022",
      description: "Provided essential healthcare services to remote communities during winter season.",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beneficiaries: "1,200 people"
    },
    {
      id: 6,
      title: "School Health Program",
      location: "Humla, Karnali",
      date: "October 10-25, 2022",
      description: "Health checkups and deworming for school children in Humla district.",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beneficiaries: "850 students"
    }
  ];

  return (
    <div className="campaign-center">
      <header className="campaign-header">
        <div className="header-content">
          <h1>HRDC Karnali Campaign Center</h1>
          <p>Transforming lives through healthcare initiatives in Nepal's most remote regions</p>
        </div>
      </header>

      <div className="campaign-container">
        <section className="campaign-section">
          <h2 className="section-title">Ongoing Campaigns</h2>
          <div className="campaign-cards">
            {ongoingCampaigns.map(campaign => (
              <div key={campaign.id} className="campaign-card ongoing">
                <div className="card-image">
                  <img src={campaign.image} alt={campaign.title} />
                  <div className="card-badge">Ongoing</div>
                </div>
                <div className="card-content">
                  <h3>{campaign.title}</h3>
                  <div className="campaign-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {campaign.location}</span>
                    <span><i className="fas fa-calendar-alt"></i> {campaign.date}</span>
                  </div>
                  <p>{campaign.description}</p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${campaign.progress}%` }}></div>
                    </div>
                    <div className="progress-text">
                      <span>{campaign.progress}% completed</span>
                      <span>Target: {campaign.target}</span>
                    </div>
                  </div>
                  <button className="btn-support">Support This Campaign</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="campaign-section">
          <h2 className="section-title">Upcoming Campaigns</h2>
          <div className="campaign-cards">
            {upcomingCampaigns.map(campaign => (
              <div key={campaign.id} className="campaign-card upcoming">
                <div className="card-image">
                  <img src={campaign.image} alt={campaign.title} />
                  <div className="card-badge">Coming Soon</div>
                </div>
                <div className="card-content">
                  <h3>{campaign.title}</h3>
                  <div className="campaign-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {campaign.location}</span>
                    <span><i className="fas fa-calendar-alt"></i> {campaign.date}</span>
                  </div>
                  <p>{campaign.description}</p>
                  <button className="btn-volunteer">Register as Volunteer</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="campaign-section">
          <h2 className="section-title">Completed Campaigns</h2>
          <div className="campaign-cards">
            {completedCampaigns.map(campaign => (
              <div key={campaign.id} className="campaign-card completed">
                <div className="card-image">
                  <img src={campaign.image} alt={campaign.title} />
                  <div className="card-badge">Completed</div>
                </div>
                <div className="card-content">
                  <h3>{campaign.title}</h3>
                  <div className="campaign-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {campaign.location}</span>
                    <span><i className="fas fa-calendar-alt"></i> {campaign.date}</span>
                  </div>
                  <p>{campaign.description}</p>
                  <div className="campaign-result">
                    <span><i className="fas fa-users"></i> Beneficiaries: {campaign.beneficiaries}</span>
                  </div>
                  <button className="btn-details">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Want to organize a health campaign in Karnali?</h2>
          <p>Partner with HRDC to bring healthcare services to remote communities</p>
          <button className="btn-contact">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default CampaignCenter;