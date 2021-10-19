import React from 'react';

//this is a component for feature section
const SingleFeatureCard = ({data}) => {
    const {icon,heading,text} = data
    return (
        <div className="my-10 p-5 border border-red-950 rounded group hover:bg-red-950">
            <div>
               {icon}
            </div>
            <div>
                <h1 className="my-6 text-2xl font-semibold">{heading}</h1>
                <p className="text-md text-gray-400 group-hover:text-gray-200">{text}</p>
            </div>
        </div>
    );
};

export default SingleFeatureCard;