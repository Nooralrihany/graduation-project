// src/pages/PlacesPage.js
import React, { useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import Map from '../components/Map';

const places = [
  { id: 1, name: 'Place 1', description: 'Description for Place 1', lat: 51.505, lng: -0.09 },
  { id: 2, name: 'Place 2', description: 'Description for Place 2', lat: 51.515, lng: -0.1 },
  { id: 3, name: 'Place 3', description: 'Description for Place 3', lat: 51.525, lng: -0.11 },
];

const PlacesPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(places[0]);

  return (
    <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/3 flex flex-col space-y-4">
        {places.map(place => (
          <PlaceCard
            key={place.id}
            place={place}
            onClick={setSelectedPlace}
          />
        ))}
      </div>
      <div className="w-full md:w-2/3">
        <Map position={[selectedPlace.lat, selectedPlace.lng]} />
      </div>
    </div>
  );
};

export default PlacesPage;
