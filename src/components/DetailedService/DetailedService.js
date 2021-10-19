import React from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import BackBtn from '../BackBtn/BackBtn';

//this is detailed service components 
//it use data from services.json by usefetch hook
//dynamic route is used here
const DetailedService = () => {
  //get id from dynamic route
  const { id } = useParams();

  const { data } = useFetch("/services.json");

  //searching and filtering data
  const item = data.find((singleData) => singleData.id === parseInt(id));
  const { service, des, img, rating } = item || {};

  return (
    <div className="w-5/6 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <p>Service Id : {id}</p>
        <h2 className="text-5xl text-red-950 my-5 font-medium">{service}</h2>
        <p className="leading-loose">
          {" "}
          <span className="font-bold text-red-500 ">Description</span> : {des}
        </p>
        <p className="my-5 text-2xl">
          Rating :{" "}
          <Rating
            className="text-yellow-500"
            initialRating={rating}
            readonly
            emptySymbol="fa fa-star-o fa"
            fullSymbol="fa fa-star fa"
          />
        </p>
        <BackBtn/>
      </div>
      <div className="rounded-xl p-2 border-gray-300 border-2">
        <img src={img} alt="" className="w-full rounded-xl" />
      </div>
    </div>
  );
};

export default DetailedService;
