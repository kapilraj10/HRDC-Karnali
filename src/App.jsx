import { Routes, Route } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Navbar from "./Components/layout/Navbar";
import Carousel from "./Components/layout/Carousel";
import Events from "./Components/layout/Events";
import HRDCTeam from "./Components/layout/HRDCTeam";
import Gallery from "./Components/layout/Gallery";
import SuccessStories from "./Components/layout/SuccessStories";
import HRDCFooter from "./Components/layout/HRDCFooter";
//pages
import AboutUs from "./Pages/AboutUs";
import OurImpact from "./Pages/Our-impact";
import GalleryP from "./Pages/Galleryp";
import CampaignCenter from "./Pages/CampaignCenter";
import Notice from "./Pages/Notic";
import Login from "./Pages/Login";
import Signup from "./Pages/Sigup";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Events />
              <SuccessStories />
              <HRDCTeam />
              <Gallery />
            </>
          }
        />


<Route path="/about" element={<AboutUs />} /> 
        <Route path="/impact" element={<OurImpact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/campaigns-center" element={<CampaignCenter />} />
        <Route path="/notice" element={<Notice />} />
        {/* Authenticatio routes  */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

      <HRDCFooter />
    </>
  );
}

export default App;
