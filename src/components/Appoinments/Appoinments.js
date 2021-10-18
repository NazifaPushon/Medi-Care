import React from 'react';
import { useAppointment } from '../../Context/AppointmentProvider';
import BackBtn from '../BackBtn/BackBtn';
import UnderLine from '../UnderLine/UnderLine';
import AppointmentCard from './AppointmentCard';
import DetailCart from './DetailCart';

const Appointments = () => {
    const {appointment,removeAppointment} = useAppointment()

    let allPrice = 0;


    for(const singleAppointment of appointment){
        allPrice = allPrice + singleAppointment.appoinmentCost;
    }

    const subTotal = parseFloat(allPrice.toFixed(2));
    const tax = parseFloat((allPrice * (5/100)).toFixed(2));
    const total = parseFloat((subTotal + tax ).toFixed(2))

    console.log(tax)

    const handleDelete = (item) => {
        removeAppointment(item.id)
    }
    return (
        <div className="w-5/6 mx-auto my-10">
            <h2 className="text-4xl text-center">YOUR APPOINMENTS</h2>
            <UnderLine/>
            {appointment.length > 0 ? <div className=" grid grid-cols-1 md:grid-cols-3 my-10 gap-10 ">
                <div className="col-span-2">
                    
                    {
                        appointment.map(item => <AppointmentCard data={item} key={item.id} handleClick={handleDelete}/>)
                    }
                </div>
                <div>
                    <DetailCart data={{subTotal,tax,total,count: appointment.length}}/>
                </div>
            </div> : <h2 className="text-center text-3xl text-red-500 font-medium text-red my-20">No Appoinment Booked !</h2>}
            <BackBtn/>
            
        </div>
    );
};

export default Appointments;