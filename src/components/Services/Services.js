import React from 'react';
import useFetch from '../../hooks/useFetch';
import SingleService from '../SingleService/SingleService';
import UnderLine from '../UnderLine/UnderLine';

// it is the parent component for single Service
//it uses data from services.json file by useFetch hook

const Services = () => {
    const {data} = useFetch('/services.json')
    return (
        <div className="mb-5 mt-10 md:w-5/6 md:mx-auto mx-5" id="services">
            <h1 className="text-5xl text-center">Our Services</h1>
            <UnderLine/>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {
                data.map(item => <SingleService key={item.id} service={item}/>)
            }
            </div>
        </div>
    );
};

export default Services;