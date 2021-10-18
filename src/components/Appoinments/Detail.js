import React from 'react';

const Detail = ({data}) => {
    const {subTotal,tax,total,count} = data
    return (
        <div className="border-2 border-red-500 rounded-md p-2 my-10">
            <h1 className="bg-red-500 text-white text-center py-3 rounded text-2xl">Pay Detail</h1>
        </div>
    );
};

export default Detail;