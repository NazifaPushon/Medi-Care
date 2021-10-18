import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <nav className="bg-red-500 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center w-5/6 mx-auto py-3 text-xl">
                <div>
                    <h1 className="text-3xl">MEDI CARE</h1>
                </div>
                <div className="col-span-3 flex justify-evenly items-center">
                    
                    <HashLink to="/home#services">
                        Services
                    </HashLink>
                    <HashLink to="/home#doctors">
                        Ousr Doctors
                    </HashLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    <NavLink to="/signUp">
                        <button className="px-3 py-2 bg-white text-red-600 rounded-full">Sign Up</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;