import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';

const GalleryP = () => {
  const sampleImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Pediatric Care Unit',
      category: 'Facilities'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Medical Team Consultation',
      category: 'Team'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Modern Hospital Facility',
      category: 'Facilities'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Child Patient Recovery',
      category: 'Patients'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Medical Equipment',
      category: 'Technology'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Nursing Care',
      category: 'Team'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Surgery Room',
      category: 'Facilities'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1581595218421-c6b0c6b53fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Patient Education',
      category: 'Community'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(sampleImages);

  const categories = ['All', ...new Set(sampleImages.map(img => img.category))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredImages(sampleImages);
    } else {
      setFilteredImages(sampleImages.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = sampleImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % sampleImages.length;
        setSelectedImage(sampleImages[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = sampleImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + sampleImages.length) % sampleImages.length;
        setSelectedImage(sampleImages[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <p>Moments from our healthcare journey</p>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="hrdc-gallery">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item ${index === 0 && activeFilter === 'All' ? 'featured' : ''}`}
            onClick={() => setSelectedImage(image)}
            tabIndex="0"
            aria-label={`Image: ${image.caption}`}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.caption}
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="image-caption">{image.caption}</div>
              <div className="image-category">{image.category}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              aria-label="Close image"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="modal-navigation">
              <button
                className="nav-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = sampleImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + sampleImages.length) % sampleImages.length;
                  setSelectedImage(sampleImages[prevIndex]);
                }}
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
              />

              <button
                className="nav-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = sampleImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % sampleImages.length;
                  setSelectedImage(sampleImages[nextIndex]);
                }}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
            <div className="modal-info">
              <p className="modal-caption">{selectedImage.caption}</p>
              <p className="modal-category">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryP;
