import React from 'react';
import './HRDCTeam.css';

const HRDCTeam = () => {
  const teamMembers = [
    {
      "id": 1,
      "image": "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-1/450859350_122154560270100414_503596456121750934_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHr43qYWfx-Nw7VYiCjL7HoctHysEBHf65y0fKwQEd_rgONYzn8UyMDIeVDGF7YTv7SgnWIDVfRrxS7GtoNZaVs&_nc_ohc=Y-JLq4tj81IQ7kNvgEsFuMp&_nc_oc=AdkOsfYMQkoINgOiV6to5kwY5oWvSRQeNdysrSZXWsZGMnSHwnrD8_LHd1bLsCaBdQ0&_nc_zt=24&_nc_ht=scontent.fktm6-1.fna&_nc_gid=8CxJL91vVcmrmAjbMtDQ_Q&oh=00_AYF3eYiAjbckLP1UzI9McUvKus34yelCHEHFTVNU0a8OTg&oe=67F1AB64",
      "name": "Homraj KC",
      "role": "Supervisor, HRDC Karnali Province",
      "message": "Dedicated to ensuring smooth operations and high-quality service at HRDC Karnali Province.",
      "title": "Message from Supervisor"
  },
  {
      "id": 2,
      "image": "https://th.bing.com/th/id/OIP.AoYHZqseObi6OsNzWKXEZAHaG1?w=1920&h=1773&rs=1&pid=ImgDetMain",
      "name": "Salina Basnet",
      "role": "Receptionist/Accountant, HRDC Karnali Province",
      "message": "Ensuring efficient communication and financial management at HRDC Karnali Province.",
      "title": "Message from Receptionist/Accountant"
  },
  {
      "id": 3,
      "image": "https://th.bing.com/th/id/OIP.AoYHZqseObi6OsNzWKXEZAHaG1?w=1920&h=1773&rs=1&pid=ImgDetMain",
      "name": "Durga Khadka",
      "role": "Physiotherapist, HRDC Karnali Province",
      "message": "Providing expert physiotherapy care to improve children's mobility and quality of life.",
      "title": "Message from Physiotherapist"
  }
  ];

  return (
    <section className="hrdc-team-section">
      <div className="section-header">
        <h2>The HRDC Team</h2>
        <p>About HRDC Karnali team</p>
      </div>
      
      <div className="team-container">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="team-image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-image"
              />
            </div>
            <div className="team-content">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-message">
                <h4>{member.title}</h4>
                <p>{member.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HRDCTeam;