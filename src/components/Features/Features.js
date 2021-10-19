import { faHandHoldingUsd, faProcedures, faUserFriends, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SingleFeatureCard from '../SingleFeatureCard/SingleFeatureCard';

//Features component
//This is a static component
//this function rendered just SingleAboutCart and gives data to it
const Features = () => {
    return (
        <section className="my-10 bg-blue-950 text-white text-center p-10">
            <h4 className="text-xl font-bold text-red-950">When We Are Giving</h4>
            <h1 className="text-5xl font-semibold my-5">Some main process and why choose us</h1>
            <p className="text-md text-gray-400 md:w-2/4 mx-auto">Why HounLare services is best all time since 1990. desires to obtain of itself, because it is pain,
            but because occasionally circumstance procure him some great deals.</p>
            <div className="md:w-5/6 md:mx-auto mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* ------cards start here------- */}
                <SingleFeatureCard data={{
                    icon:<FontAwesomeIcon icon={faUserNurse} className="text-5xl text-red-950 group-hover:text-white"/>,
                    heading:'Responsible Doctors',
                    text:"The main duties and responsibilities a Doctor must fulfill "
                }}/>
                <SingleFeatureCard data={{
                    icon:<FontAwesomeIcon icon={faProcedures} className="text-5xl text-red-950 group-hover:text-white"/>,
                    heading:'One-Time Work',
                    text:"Our One treatment is one time based and easy to handle"
                }}/>
                <SingleFeatureCard data={{
                    icon:<FontAwesomeIcon icon={faHandHoldingUsd} className="text-5xl text-red-950 group-hover:text-white"/>,
                    heading:'Satisfaction Price',
                    text:"Our all the services is under saticfactory pricc"
                }}/>
                <SingleFeatureCard data={{
                    icon:<FontAwesomeIcon icon={faUserFriends} className="text-5xl text-red-950 group-hover:text-white"/>,
                    heading:'Enjoy The Life',
                    text:"Qualitiful treatement make your life easy and enjoyable"
                }}/>
                {/* ------cards end here------- */}
            </div>
        </section>
    );
};

export default Features;