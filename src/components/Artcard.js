import React, { useState } from 'react';

const ArtCard = ({img2, description, pricing}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <img src={img2} alt="Artwork" className=" w-[300px] h-[300px] " />

      {!showDetails && (
        <button onClick={toggleDetails} className="details-button">
          Show Details
        </button>
      )}

      {showDetails && (
        <div>
          <img src="artwork-image-2.jpg" alt="Artwork" className=" w-[100px] h-[100px] " />

          <div className="details">
            <p>{description}</p>
            <p>{pricing}</p>
          </div>

          <button onClick={toggleDetails} className="details-button">
            Hide Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ArtCard;