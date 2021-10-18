import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsTeam from '../DoctorsTeam/DoctorsTeam';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="w-5/6 mx-auto ">
            <Banner/>
            <Services/>
            <DoctorsTeam/>
        </div>
    );
};

export default Home;