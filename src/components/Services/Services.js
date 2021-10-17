import React from 'react';
import useFetch from '../../hooks/useFetch';
import SingleService from '../SingleService/SingleService';
import UnderLine from '../UnderLine/UnderLine';

const Services = () => {
    const {data} = useFetch('/services.json')
    return (
        <div className="mb-5 mt-10">
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