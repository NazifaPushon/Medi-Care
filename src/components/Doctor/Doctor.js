import React from 'react';
import { useHistory } from 'react-router';
import '../../App.css';
import { useAppointment } from '../../Context/AppointmentProvider';
const Doctor = ({data}) => {
    const history = useHistory()
    const {handleAppointment} = useAppointment();
    const handleClick = () => {
        handleAppointment(data);
        history.push('/appoinments')
    }
    
    const {name,img,specialed,appoinmentCost} = data;
    return (
        <div className="my-shadow rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div>
                <img src={img} className="w-full h-full rounded-l-lg" alt="" />
            </div>
            <div className="p-5 col-span-2">
                <h4>Name : {name}</h4>
                <p>Specialized On : {specialed}</p>
                <p>Appoinment Cost : $ {appoinmentCost} </p>    
                <button className=" px-3 py-2 text-center  text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-full text-xl mt-10" onClick={handleClick}>Book Appoinment</button>
            </div>
            </div>
            
        </div>
    );
};

export default Doctor;