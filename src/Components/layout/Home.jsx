// src/layout/Home.jsx
import React from 'react';
import Carousel from "./Carousel";
import Events from "./Events";
import SuccessStories from "./SuccessStories";
import HRDCTeam from "./HRDCTeam";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="home-content">
      <Carousel />
      <Events />
      <SuccessStories />
      <HRDCTeam />
      <Gallery />
    </div>
  );
};

export default Home;