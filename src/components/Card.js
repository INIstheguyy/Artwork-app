import React from 'react';

const Card = ({ image, name, title, description }) => {
  return (
    <div className=" my-5 mx-2 bg-white shadow-lg h-fit  rounded-lg p-10 w-full md:w-1/2 max-w-[400px] font-heading3">
      <img className="w-full h-auto mb-4 rounded-md max-h-[350px]" src={image} alt="Artwork" />
      <h3 className="text-gray-800 font-semibold mb-4">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Details</button>
      </div>
    </div>
  );
};

export default Card;


