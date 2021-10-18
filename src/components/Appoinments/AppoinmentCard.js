import { faClock, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AppoinmentCard = ({data, handleClick}) => {
    const date = new Date()
    
    
    const {name,img,specialed,appoinmentCost} = data;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center my-10  p-5 rounded-lg shadow-lg">
            <div>
                <img src={img} alt="" className="w-40 rounded-full mx-auto" />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-4 items-center col-span-2">
               <div className="col-span-3">
                <h1 className="text-3xl font-medium text-red-500 my-3">{name}</h1>
                <p className="text-gray-500">{specialed}</p>
                <p className="font-bold text-3xl">$ {appoinmentCost}</p>
               </div>
               <div className="text-center">
                   <button onClick={() => handleClick(data)} className=" text-2xl text-red-500">
                       <FontAwesomeIcon icon={faTrashAlt}/>
                   </button>
                   <div>
                       <FontAwesomeIcon icon={faClock}/>
                        {date.toLocaleDateString('en-US')}
                   </div>
               </div>
            </div>
        </div>
    );
};

export default AppoinmentCard;