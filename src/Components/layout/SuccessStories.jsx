import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      isMain: true,
      image: 'https://th.bing.com/th/id/R.99ff93ef37cf2fc077d50bea2550c10e?rik=s54CptkRgVDfhQ&pid=ImgRaw&r=0',
      name: 'Rohan Thapa',
      age: 8,
      condition: 'Congenital Clubfoot',
      story: 'Rohan came to HRDC unable to walk properly due to severe bilateral clubfoot. After a series of corrective surgeries and physiotherapy sessions at our center, he can now run and play like any other child. His parents wept tears of joy when he took his first proper steps.',
      quote: '"Now I can play football with my friends!"'
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.FIJIhVEEQFca75EP-k6vTAHaFj?rs=1&pid=ImgDetMain',
      name: 'Sita Pariyar',
      age: 6,
      condition: 'Cleft Lip/Palate',
      story: 'Sita faced difficulties eating and speaking due to her cleft condition. Our surgical team performed corrective surgery, and after speech therapy, she\'s now thriving in school with clear speech and a beautiful smile.'
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/R.3d04c849e04a25e39e7751ca57d1602c?rik=QnNhHiCDfk2pMQ&pid=ImgRaw&r=0',
      name: 'Amit Gurung',
      age: 10,
      condition: 'Severe Burn Contractures',
      story: 'Amit suffered severe burns that left his arm immobile. Our plastic surgery team performed multiple procedures to restore mobility, and he\'s now back to writing and drawing.'
    },
    {
      id: 4,
      image: 'https://th.bing.com/th/id/R.3d04c849e04a25e39e7751ca57d1602c?rik=QnNhHiCDfk2pMQ&pid=ImgRaw&r=0',
      name: 'Priya Tamang',
      age: 5,
      condition: 'Developmental Dysplasia of Hip',
      story: 'Priya was born with dislocated hips. Through early intervention with Pavlik harness and subsequent surgery, she now walks pain-free and enjoys dancing.'
    },
    {
      id: 5,
      image: 'https://th.bing.com/th/id/R.13dccded8543d01e73ae17b9591680c3?rik=6Ib0VNrNWK0akQ&pid=ImgRaw&r=0',
      name: 'Bimala Sunar',
      age: 7,
      condition: 'Post-Polio Deformity',
      story: 'Bimala struggled with leg deformities from polio. Our orthopedic team performed corrective surgery and provided braces. She now attends school regularly without difficulty.'
    }
  ];

  const mainStory = stories.find(story => story.isMain);
  const subStories = stories.filter(story => !story.isMain);

  return (
    <section className="success-stories">
      <div className="section-header">
        <h2>Children's Success Stories</h2>
        <p>Transforming lives through compassionate care</p>
      </div>

      <div className="main-story">
        <div className="story-content">
          <h3>{mainStory.name}'s Journey</h3>
          <p className="story-meta">{mainStory.age} years • {mainStory.condition}</p>
          <p className="story-text">{mainStory.story}</p>
          <blockquote className="story-quote">{mainStory.quote}</blockquote>
        </div>
        <div className="story-image">
          <img src={mainStory.image} alt={mainStory.name} />
        </div>
      </div>

      <div className="sub-stories">
        {subStories.map(story => (
          <div key={story.id} className="story-card">
            <div className="card-image">
              <img src={story.image} alt={story.name} />
            </div>
            <div className="card-content">
              <h4>{story.name}</h4>
              <p className="card-meta">{story.age} years • {story.condition}</p>
              <p className="card-text">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;