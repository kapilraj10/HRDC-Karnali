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


       
        {/* Authenticatio routes  */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

      <HRDCFooter />
    </>
  );
}

export default App;
