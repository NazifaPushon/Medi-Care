import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Team from '../Teams/Team';

const Home = () => {
    return (
        <div className="w-5/6 mx-auto ">
            <Banner/>
            <Services/>
            <Team/>
        </div>
    );
};

export default Home;