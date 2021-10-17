import React from 'react';
import { useHistory } from 'react-router';

const SingleService = ({service}) => {
    const history = useHistory()
    const {img,service : serviceName,des,id} = service;
    const handleClick = () => {
        history.push(`/services/${id}`)
    }
    return (
        <div className="transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105 shadow-lg p-5 rounded-2xl ">
            <img src={img} className="w-full h-60 rounded-2xl" alt="" />
            <div className="my-5 text-center">
                <h2 className="text-3xl">{serviceName}</h2>
                <p>{des.slice(0,100)}</p>
                <button className="btn-1 my-5" onClick={handleClick}>Learn More</button>
            </div>
        </div>
    );
};

export default SingleService;