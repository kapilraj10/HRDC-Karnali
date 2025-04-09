import React from 'react';
import '../styles/Notice.css';

const Notice = () => {
  const importantNotices = [
    {
      id: 1,
      title: "Upcoming Free Health Camp in Jumla",
      date: "2023-11-15",
      category: "Health Camp",
      description: "HRDC Karnali will be conducting a free health camp in Jumla from November 25-30, 2023. Services include general health checkups, pediatric care, and basic lab tests.",
      isNew: true
    },
    {
      id: 2,
      title: "Change in OPD Hours During Festival Season",
      date: "2023-10-20",
      category: "Hospital Notice",
      description: "During the upcoming festival season (October 22-28), our OPD hours will be from 9:00 AM to 2:00 PM. Emergency services will remain available 24/7.",
      isNew: false
    }
  ];

  const generalNotices = [
    {
      id: 3,
      title: "Volunteer Recruitment for Rural Health Program",
      date: "2023-11-05",
      category: "Recruitment",
      description: "We're looking for medical volunteers for our December rural health outreach program in Humla district. Apply by November 20."
    },
    {
      id: 4,
      title: "New Telemedicine Service Available",
      date: "2023-10-15",
      category: "Service Update",
      description: "HRDC Karnali now offers telemedicine consultations for remote patients. Call 01-XXXXXXX to schedule an appointment."
    },
    {
      id: 5,
      title: "Blood Donation Camp Results",
      date: "2023-10-10",
      category: "Camp Report",
      description: "Our September blood donation camp collected 125 units of blood. Thank you to all donors and volunteers."
    }
  ];

  return (
    <div className="notice-container">
      <header className="notice-header">
        <h1>HRDC Karnali Notices</h1>
        <p>Important announcements and updates from HRDC Karnali</p>
      </header>

      <div className="notice-content">
        <section className="important-notices">
          <h2 className="section-title">
            <i className="fas fa-exclamation-circle"></i> Important Notices
          </h2>
          <div className="notice-list">
            {importantNotices.map(notice => (
              <div key={notice.id} className={`notice-card important ${notice.isNew ? 'new' : ''}`}>
                {notice.isNew && <span className="new-badge">New</span>}
                <div className="notice-card-header">
                  <h3>{notice.title}</h3>
                  <div className="notice-meta">
                    <span className="notice-date">
                      <i className="fas fa-calendar-alt"></i> {new Date(notice.date).toLocaleDateString()}
                    </span>
                    <span className="notice-category">
                      <i className="fas fa-tag"></i> {notice.category}
                    </span>
                  </div>
                </div>
                <div className="notice-card-body">
                  <p>{notice.description}</p>
                </div>
                <div className="notice-card-footer">
                  <button className="notice-btn">
                    <i className="fas fa-info-circle"></i> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="general-notices">
          <h2 className="section-title">
            <i className="fas fa-bullhorn"></i> General Notices
          </h2>
          <div className="notice-list">
            {generalNotices.map(notice => (
              <div key={notice.id} className="notice-card">
                <div className="notice-card-header">
                  <h3>{notice.title}</h3>
                  <div className="notice-meta">
                    <span className="notice-date">
                      <i className="fas fa-calendar-alt"></i> {new Date(notice.date).toLocaleDateString()}
                    </span>
                    <span className="notice-category">
                      <i className="fas fa-tag"></i> {notice.category}
                    </span>
                  </div>
                </div>
                <div className="notice-card-body">
                  <p>{notice.description}</p>
                </div>
                <div className="notice-card-footer">
                  <button className="notice-btn">
                    <i className="fas fa-info-circle"></i> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="notice-archive">
        <button className="archive-btn">
          <i className="fas fa-archive"></i> View Notice Archive
        </button>
      </div>
    </div>
  );
};

export default Notice;