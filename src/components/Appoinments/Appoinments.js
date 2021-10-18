import React from 'react';
import { useAppoinment } from '../../Context/AppoinmentProvider';
import BackBtn from '../BackBtn/BackBtn';
import UnderLine from '../UnderLine/UnderLine';
import AppoinmentCard from './AppoinmentCard';
import Detail from './Detail';
const Appoinments = () => {
    const {appoinment,removeAppoinment} = useAppoinment()

    let allPrice = 0;


    for(const singleAppointment of appoinment){
        allPrice = allPrice + singleAppointment.appoinmentCost;
    }

    const subTotal = parseFloat(allPrice.toFixed(2));
    const tax = parseFloat((allPrice % 5).toFixed(2));
    const total = parseFloat((subTotal + tax ).toFixed(2))

    const handleDelete = (item) => {
        removeAppoinment(item.id)
    }
    return (
        <div className="w-5/6 mx-auto my-10">
            <h2 className="text-4xl text-center">YOUR APPOINMENTS</h2>
            <UnderLine/>
            {appoinment.length > 0 ? <div className=" grid grid-cols-1 md:grid-cols-3 my-10 gap-10 ">
                <div className="col-span-2">
                    
                    {
                        appoinment.map(item => <AppoinmentCard data={item} key={item.id} handleClick={handleDelete}/>)
                    }
                </div>
                <div>
                    <Detail data={{subTotal,tax,total,count: appoinment.length}}/>
                </div>
            </div> : <h2 className="text-center text-3xl text-red-500 font-medium text-red my-20">No Appoinment Booked !</h2>}
            <BackBtn/>
            
        </div>
    );
};

export default Appoinments;