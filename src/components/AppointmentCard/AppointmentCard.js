import { faClock, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../App.css';

//AppointmentCard Components
// this is used when a new appointmen has booked
const AppointmentCard = ({data, handleClick}) => {
    //initialize a date
    const date = new Date() 
    
    // data is given by appoinments components
    const {name,img,specialed,appoinmentCost} = data;
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 items-center my-10  p-5 rounded-lg my-shadow">
            <div>
                <img src={img} alt="" className="w-40 rounded-full mx-auto" />
            </div>
            <div className="col-span-2">
               
                 <h1 className="text-3xl font-medium text-red-500 my-3">{name}  </h1>
                    <p className="text-gray-500">{specialed}</p>
                    <p className="font-bold text-3xl">$ {appoinmentCost}</p>
            </div>
                <div className="text-center">
                   <button onClick={() => handleClick(data)} className=" text-2xl text-red-500">
                       <FontAwesomeIcon icon={faTrashAlt}/>
                   </button>
                   <div className="mt-5  py-3 bg-red-200 text-red-950 rounded-full">
                       <FontAwesomeIcon icon={faClock} className="mr-1"/>
                        {date.toLocaleDateString('en-US')}
                   </div>
               </div>
        </div>
    );
};

export default AppointmentCard;