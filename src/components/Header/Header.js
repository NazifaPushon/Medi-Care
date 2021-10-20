import { faBriefcaseMedical, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

// this is the header or navigation compontents
//Navigate the user by NavLink and Hash Link on logging state

const Header = () => {
    const history = useHistory();
    const { user, logOut } = useAuth();
    return (
        <nav className="bg-red-950 text-white font-medium py-5 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center w-5/6 mx-auto text-xl">
                <div className="col-span-1">
                    <h1 className="text-3xl">
                        MEDI CARE <FontAwesomeIcon icon={faBriefcaseMedical} />
                    </h1>
                </div>
                <div className="col-span-3 block lg:flex justify-evenly items-center">
                    <div className="my-3 lg:my-0 p-3">
                        <NavLink to="/home">Home</NavLink>
                    </div>
                    <div className="my-3 lg:my-0 p-3">
                        <HashLink to="/home#services">Services</HashLink>
                    </div>
                    <div className="my-3 lg:my-0  p-3">
                        <NavLink to="/appoinments">Appoinments</NavLink>
                    </div>
                    <div className="my-3 lg:my-0 p-3">
                        <NavLink to="/care">Primary Care</NavLink>
                    </div>
                    {user.email ? (
                        <>
                            <div className="my-3 lg:my-0 p-3 flex items-center">
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        className="w-10 h-10 rounded-full"
                                        alt=""
                                    />
                                ) : (
                                    <FontAwesomeIcon icon={faUser} />
                                )}
                                <span className="ml-2"> {user.displayName}</span>
                            </div>
                            <div className="my-3 lg:my-0 p-3">
                                <button
                                    className="px-3 py-2 bg-white text-red-950 rounded-full"
                                    onClick={() => {
                                        logOut();
                                        history.push("/");
                                    }}
                                >
                                    Log Out
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="my-3 lg:my-0 p-3">
                                <NavLink to="/login">Login</NavLink>
                            </div>
                            <div className="my-3 lg:my-0 p-3">
                                <NavLink to="/signUp">
                                    <button className="px-3 py-2 bg-white text-red-950 rounded-full">
                                        Sign Up
                                    </button>
                                </NavLink>
                            </div>
                        </>
                    )}
                    
                </div>
            </div>
        </nav>
    );
};

export default Header;
