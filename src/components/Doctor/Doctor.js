import React from 'react';
import { useHistory } from 'react-router';
import '../../App.css';
import { useAppointment } from '../../Context/AppointmentProvider';

//this component renders single doctor 
//it use useAppointment hook
const Doctor = ({ data }) => {
    const history = useHistory()
    const { handleAppointment } = useAppointment();

    //functions for button click
    const handleClick = () => {
        handleAppointment(data);
        history.push('/appoinments')
    }

    //data from teamDoctor 
    const { name, img, specialed, appoinmentCost } = data;
    return (
        <div className="my-shadow rounded-lg w-11/12 mx-auto ">
            <div className="text-xl">
                {/* image */}
                <div>
                    <img src={img} className="w-full h-68" alt="" />
                </div>
                {/* data */}
                <div className="p-5 col-span-2">
                    <h4>Name : <span className="text-red-950 font-semibold">{name}</span></h4>
                    <p>Specialized: {specialed}</p>
                    <p>Appoinment Cost : $ {appoinmentCost} </p>
                    <div className="text-center mt-10">
                        <button className=" px-3 py-2 text-center  text-red-500 border-2 border-red-500 hover:bg-red-950 hover:text-white rounded-full text-xl" onClick={handleClick}>Book Appoinment</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;