import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

export const AppoinmentContext = createContext();

export const useAppoinment = () => {
    return useContext(AppoinmentContext)
}
const AppoinmentProvider = ({ children }) => {
    const [appoinment, setAppoinment] = useState([]);

    // add Appoinment function 
    const handleAppoinment = (newAppoinment) => {
        const isAdded = appoinment.find(app => app.id === newAppoinment.id)
        if (isAdded){
            Swal.fire({
                icon: 'error',
                title: `You already have booked ${newAppoinment.name}`,
              })
           return;
        }
        else{
            setAppoinment((prevValue) => {
                return [
                    ...prevValue,
                    newAppoinment, 
                ]
            })
        }
    }

    //remove Appoinment from cart 
    const removeAppoinment = (id) => {
        setAppoinment((prev) => {
            return prev.filter(item => {
                return item.id !== id
            })
        })
    }


    const value = {
        setAppoinment,
        appoinment,
        handleAppoinment,
        removeAppoinment
    }
    return (
        <AppoinmentContext.Provider value={value}>
            {children}
        </AppoinmentContext.Provider>
    )
}

export default AppoinmentProvider