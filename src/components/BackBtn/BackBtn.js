import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

//this is a tiny component to redirect the user to the home page from any page
const BackBtn = () => {
    //initialize history
    const history = useHistory()

    //function for btn clicked
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div>
            <button className="btn-2 my-5" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
            Go Back 
        </button>
        </div>
    );
};

export default BackBtn;