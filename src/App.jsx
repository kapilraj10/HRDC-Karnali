import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Carousel from "./Components/layout/Carousel";
import Events from "./Components/layout/Events";
import HRDCTeam from "./Components/layout/HRDCTeam";
import Gallery from "./Components/layout/Gallery";
import SuccessStories from "./Components/layout/SuccessStories";
import HRDCFooter from "./Components/layout/HRDCFooter";
import Login from "./Pages/Login";
import Singup from "./Pages/Sigup";
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

      <Route path="/login" element={<Login />} />  
         <Route path="/signup" element={<Singup />} />  
      </Routes>

      <HRDCFooter />
    </>
  );
}

export default App;
