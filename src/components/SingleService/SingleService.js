import React from 'react';
import { useHistory } from 'react-router';
import '../../App.css';

// this is the components used by services components
// this componenet render single Service
const SingleService = ({service}) => {
    const history = useHistory()
    const {img,service : serviceName,des,id} = service;
    const handleClick = () => {
        history.push(`/services/${id}`)
    }
    return (
        <div className="transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105 my-shadow ">
           <div>
           <img src={img} className="w-full h-60 " alt="" />
           </div>
            <div className="my-5 text-center p-5 ">
                <h2 className="text-3xl font-medium">{serviceName}</h2>
                <p>{des.slice(0,100)}</p>
                <button className="btn-1 my-5" onClick={handleClick}>Learn More</button>
            </div>
        </div>
    );
};

export default SingleService;