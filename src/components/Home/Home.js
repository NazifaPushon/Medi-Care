import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsTeam from '../DoctorsTeam/DoctorsTeam';
import Features from '../Features/Features';
import Services from '../Services/Services';

// this is the wrapper of home page
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Features/>
            <DoctorsTeam/>
        </div>
    );
};

export default Home;