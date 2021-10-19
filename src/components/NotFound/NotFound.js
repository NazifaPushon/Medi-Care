import React from 'react';
import BackBtn from '../BackBtn/BackBtn';

//NotFound Componet Component
//use for undefiend pages
const NotFound = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center">
                <img src="https://i.ibb.co/Q68jqTj/404-error-abstract-concept-illustration-335657-2243.jpg" alt="" className="w-1/3"/>
            </div>
            <BackBtn/>
        </div>
    );
};

export default NotFound;