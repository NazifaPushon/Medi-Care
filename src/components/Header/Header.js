import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const history = useHistory()
    const { user , logOut} = useAuth()
    return (
        <nav className="bg-red-500 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center w-5/6 mx-auto py-3 text-xl">
                <div className="block md:flex items-center">
                    <h1 className="text-3xl">MEDI CARE  <FontAwesomeIcon icon={faBriefcaseMedical}/></h1>
                    
                </div>
                <div className="col-span-3 flex justify-evenly items-center">

                    <HashLink to="/home#services">
                        Services
                    </HashLink>
                    <HashLink to="/home#doctors">
                        Our Doctors
                    </HashLink>
                    {user.email  ? <>
                    <h1>{user.displayName}</h1>
                    <button className="px-3 py-2 bg-white text-red-600 rounded-full" onClick={() => {
                        logOut();
                        history.push("/")
                    }}>Log Out</button> 
                    </>: <>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        <NavLink to="/signUp">
                            <button className="px-3 py-2 bg-white text-red-600 rounded-full">Sign Up</button>
                        </NavLink>
                    </>}

                </div>
            </div>
        </nav>
    );
};

export default Header;