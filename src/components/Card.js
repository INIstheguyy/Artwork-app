import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, title, description, link }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#E7F6F2] my-5  ">
      <img src={imageSrc} alt={title} className="w-[300px] h-[300px]" />
      <div className="px-6 py-4 max-w-[300px] h-fit  ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className={`${showFullText ? 'block' : 'truncate'} text-gray-700 text-base`}>
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        {showFullText ? (
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={toggleFullText}
          >
            Show Less
          </button>
        ) : (
          <Link to={link} className="text-blue-500 hover:underline">
            Learn More
          </Link>
        )}
      </div>
      {showFullText && (
        <div className="px-6 py-4">
          {/* Render your full text component here */}
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

