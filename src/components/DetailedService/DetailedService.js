import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const DetailedService = () => {
    const history = useHistory()
  const { id } = useParams();
  const { data } = useFetch("/services.json");
  const handleClick = () => {
    history.push('/')
  }

  const item = data.find((singleData) => singleData.id === parseInt(id));
  const { service, des, img, rating } = item || {};

  return (
    <div className="w-5/6 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <p>Service Id : {id}</p>
        <h2 className="text-5xl text-red-600 my-5 font-medium">{service}</h2>
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
        <button className="btn-1 my-5" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
            Go Back 
        
        </button>
      </div>
      <div className="rounded-xl p-2 border-gray-300 border-2">
        <img src={img} alt="" className="w-full rounded-xl" />
      </div>
    </div>
  );
};

export default DetailedService;
