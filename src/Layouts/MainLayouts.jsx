import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div className='lg:w-[1200px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;