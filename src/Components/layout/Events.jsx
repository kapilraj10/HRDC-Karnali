import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.wKVexNma9glEEcF0Ts4HzAHaFj?rs=1&pid=ImgDetMain',
      caption: 'Pediatric Health Camp',
      date: 'June 15, 2023',
      description: 'Free health checkups for children under 12 years',
      story: 'Little Rohan got his first dental checkup and received a bravery certificate!'
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.ZT-6GJIPxGiCrtXnmqXXcwHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain',
      caption: 'Vaccination Drive',
      date: 'July 3, 2023',
      description: 'Immunization program for preventable diseases',
      story: 'Over 200 children vaccinated against measles and rubella'
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.65o7r9DgdKZ21HxflB-BSwHaE8?rs=1&pid=ImgDetMain',
      caption: 'Child Nutrition Workshop',
      date: 'August 10, 2023',
      description: 'Educating parents about balanced diets for children',
      story: 'Parents learned to make healthy snacks that kids actually love!'
    }
  ];

  return (
    <section className="latest-events">
      <h2 className="section-title">Our Latest Events</h2>
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.caption} 
                className="event-image"
              />
              <div className="event-date">{event.date}</div>
            </div>
            <div className="event-content">
              <h3 className="event-caption">{event.caption}</h3>
              <p className="event-description">{event.description}</p>
              <div className="children-story">
                <h4>Success Story:</h4>
                <p>{event.story}</p>
              </div>
              <button className="event-button">View Photos</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;