import React, { useState } from 'react';

const ArtCard = ({img2, description, pricing}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card p-8">
      <img src={img2} alt="" className=" w-[300px] h-[300px] " />

      {!showDetails && (
        <button onClick={toggleDetails} className=" mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
          Show Details
        </button>
      )}

      {showDetails && (
        <div>
          <img src="artwork-image-2.jpg" alt="" className=" w-[full] h-[full] " />

          <div className="details">
            <p className=' font-heading1 text-gray-500 py-2 text-lg tracking-widest'>{description}</p>
            <p className=' font-heading2 tracking-widest text-xl text-gray-700'>{pricing}</p>
          </div>

          <button onClick={toggleDetails} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
            Hide Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ArtCard;