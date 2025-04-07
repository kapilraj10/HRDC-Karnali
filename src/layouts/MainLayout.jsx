import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/layout/Navbar';
import HRDCFooter from '../Components/layout/HRDCFooter';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <HRDCFooter />
    </div>
  );
};

export default MainLayout;

