import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useAppointment } from '../../Context/AppointmentProvider';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BackBtn from '../BackBtn/BackBtn';
import DetailCart from '../DetailCart/DetailCart';
import UnderLine from '../UnderLine/UnderLine';

//Appointment Components
//this is main and wrapper components appointments page
// it uses useAppointment hooks
//it gives data to AppointmentCard and DetailCart component

const Appointments = () => {
    const {appointment,removeAppointment} = useAppointment()
    let allPrice = 0;
    for(const singleAppointment of appointment){
        allPrice = allPrice + singleAppointment.appoinmentCost;
    }
    const subTotal = parseFloat(allPrice.toFixed(2));
    const tax = parseFloat((allPrice * (5/100)).toFixed(2));
    const total = parseFloat((subTotal + tax ).toFixed(2));

    //remove an appointment
    const handleDelete = (item) => {
        removeAppointment(item.id)
    }
    return (
        <div className="w-5/6 mx-auto my-10">
            <h2 className="text-4xl text-center">YOUR APPOINMENTS</h2>
            <UnderLine/>
            {appointment.length > 0 ? <div className=" grid grid-cols-1 md:grid-cols-3 my-10 gap-10 ">
                <div className="col-span-2">
                    {/* Single Appointment Goes here */}
                    {
                        appointment.map(item => <AppointmentCard data={item} key={item.id} handleClick={handleDelete}/>)
                    }
                </div>
                <div>
                    {/* Appointment Cart Goes Here */}
                    <DetailCart data={{subTotal,tax,total,count: appointment.length}}/>
                </div>
            </div> : <div className="my-10 text-center"><h2 className="text-center text-3xl text-red-500 font-medium text-red my-20">No Appoinment Booked !</h2>
            <HashLink to="/home#doctors">
                <button className="btn-1">Find Appointmens</button>
            </HashLink>
            </div>}
            <BackBtn/>
            
        </div>
    );
};

export default Appointments;