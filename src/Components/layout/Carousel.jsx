import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Modern Hospital Facility',
      caption: 'State-of-the-art Medical Equipment',
      shortDesc: 'Advanced technology for accurate diagnostics'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Friendly Medical Staff',
      caption: 'Caring Healthcare Professionals',
      shortDesc: 'Experienced doctors and nurses'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Comfortable Patient Room',
      caption: 'Patient-Centered Care',
      shortDesc: 'Comfortable recovery environment'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="full-width-carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {carouselItems.map((item) => (
          <div key={item.id} className="carousel-slide">
            <img src={item.image} alt={item.alt} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{item.caption}</h3>
              <p>{item.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={goToPrev}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        &gt;
      </button>

      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;