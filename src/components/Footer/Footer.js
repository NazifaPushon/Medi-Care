import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// this is footer component
//it impliments navigation by navlink and hasNavLink
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-10 mt-10 text-center">
      <div className=" md:mx-auto md:w-5/6 mx-5 grid grid-cols-1 lg:grid-cols-4 my-10">
        <div>
          <h1 className="text-4xl text-red-950 font-semibold">
            MEDI CARE <FontAwesomeIcon icon={faBriefcaseMedical} />
          </h1>
        </div>
        <div className="col-span-3">
          <div className=" block lg:flex justify-evenly items-center">
            <div className="my-3 lg:my-0">
              <NavLink to="/home">Home</NavLink>
            </div>
            <div className="my-3 lg:my-0 p-3">
                <NavLink to="/care">Primary Care</NavLink>
            </div>
            <div className="my-3 lg:my-0  p-3">
                  <NavLink to="/appoinments">Your Appoinments</NavLink>
            </div>
            <div className="my-3 lg:my-0 p-3">
                  <HashLink to="/home#services">Services</HashLink>
                </div>
                <div className="my-3 lg:my-0 p-3">
                  <HashLink to="/home#doctors">Our Doctors</HashLink>
                </div>
            
          </div>
        </div>
      </div>
      <p >&copy; All rights reserved by MEDI CARE</p>
    </footer>
  );
};

export default Footer;
