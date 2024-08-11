import React from 'react';

const PlaceCard = ({ place, onClick }) => {
  return (
    <div 
      className="p-4 border rounded shadow hover:shadow-lg cursor-pointer transition-shadow duration-300" 
      onClick={() => onClick(place)}
    >
      <h2 className="text-lg font-bold">{place.name}</h2>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceCard;