import React from "react";
import { HashLink } from "react-router-hash-link";


//this is the banner of the webapp
//this is a static component and np functionality is added without navlink
const Banner = () => {
  return (
    <div className="my-10 md:w-5/6 md:mx-auto mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <div className="py-10 text-6xl font-medium">
            <h1>Your Health</h1>
            <h1 className="text-8xl text-red-950 py-5">Is Our Priority</h1>
            <h1 className="text-4xl">
              Be Safe With{" "}
              <span className="text-6xl text-red-950"> MEDI CARE</span>
            </h1>
          </div>
          <p>
            Our Hospital is the General Hospital with the services of all your
            needs . We provides the best Quality of Care and madications
          </p>

          <div>
            <HashLink to="/home#services">
              <button className="btn-1 mr-5 my-5">Services</button>
            </HashLink>
            <HashLink to="/home#doctors">
              <button className="btn-2 my-5">Our Doctors</button>
            </HashLink>
          </div>
        </div>

        <div>
          <img
            src="https://i.ibb.co/p3RV0Jx/doctors-concept-illustration-114360-1515.jpg"
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
