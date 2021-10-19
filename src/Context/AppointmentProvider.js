import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

//initialize Context
export const AppointmentContext = createContext();

// hook part
export const useAppointment = () => {
    return useContext(AppointmentContext)
}

//Functionality Part
const AppointmentProvider = ({ children }) => {
    const [appointment, setAppointment] = useState([]);

    // add Appointment function 
    const handleAppointment = (newAppointment) => {
        const isAdded = appointment.find(app => app.id === newAppointment.id)
        if (isAdded){
            Swal.fire({
                icon: 'warning',
                title: `You already have booked ${newAppointment.name}`,
              })
           return;
        }
        else{
            setAppointment((prevValue) => {
                return [
                    ...prevValue,
                    newAppointment, 
                ]
            })
        }
    }

    //remove Appointment from cart 
    const removeAppointment = (id) => {
        setAppointment((prev) => {
            return prev.filter(item => {
                return item.id !== id
            })
        })
    }


    const value = {
        setAppointment,
        appointment,
        handleAppointment,
        removeAppointment
    }
    return (
        <AppointmentContext.Provider value={value}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentProvider