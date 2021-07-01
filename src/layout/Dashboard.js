import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderComponent from '../components/Header/index';

const Dashboard = props => {

    const {children} = props;

    return (
        <main className='dashboard-container my-dark-theme'>
            <HeaderComponent></HeaderComponent>
            <div id="main-content" className='main-contain'>
                <Sidebar/>
                {children}
            </div>
        </main>
    );
}

export default Dashboard;