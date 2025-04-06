import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  // Sample image data
  const sampleImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Pediatric Care Unit'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Medical Team Consultation'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Modern Hospital Facility'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Child Patient Recovery'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Medical Equipment'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      caption: 'Nursing Care'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>HRDC Karnali Gallery</h1>
        <p>Moments from our healthcare journey</p>
      </header>

      <div className="hrdc-gallery">
        {sampleImages.map((image, index) => (
          <div 
            key={image.id}
            className={`gallery-item ${index === 0 ? 'featured' : ''}`}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.url} 
              alt={image.caption}
              loading="lazy"
            />
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption}
            />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;