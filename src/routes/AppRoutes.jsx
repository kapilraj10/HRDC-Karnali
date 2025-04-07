import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import AboutUs from '../Pages/About';
import Login from '../Pages/Login'
import Signup from '../Pages/Signup';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/about' element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            <Route path="/" element={<h1 className="text-center mt-5">Welcome to the Home Page</h1>} />
        </Routes>
    );
};

export default AppRoutes;
