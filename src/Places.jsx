import React, { useState } from 'react';

// Define the coordinates for Aladhamyia and the Start Point
const Aladhamyia1 = [33.3695687449225, 44.36174133497602];
const StartPoint = [33.30123868162587, 44.4371813193429];

// Extend the placesData to include coordinates
const placesData = [
    { id: 1, name: 'Mansour', description: 'Alamyerat', imageUrl: 'https://example.com/paris.jpg' },
    { id: 2, name: 'Aladhamyia', description: 'Althobat', imageUrl: 'https://example.com/newyork.jpg', coordinates: Aladhamyia1 },
    { id: 3, name: 'Aldorah', description: 'abo tayara', imageUrl: 'https://example.com/tokyo.jpg' },
];

const Places = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handlePlaceClick = (place) => {
        if (place.coordinates) {
            // Construct a Google Maps URL with both the start point and the place coordinates
            const url = `https://www.google.com/maps/dir/?api=1&origin=${StartPoint[0]},${StartPoint[1]}&destination=${place.coordinates[0]},${place.coordinates[1]}&travelmode=driving`;
            window.open(url, '_blank'); // Open in a new tab
        }
    };

    const filteredPlaces = placesData.filter(place =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 gradient-text gradient-from-blue gradient-to-blue">Places to Visit</h1>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for a place..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.length > 0 ? (
                    filteredPlaces.map(place => (
                        <div
                            key={place.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                            onClick={() => handlePlaceClick(place)}
                        >
                            <img className="w-full h-48 object-cover" src={place.imageUrl} alt={place.name} />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{place.name}</h2>
                                <p className="text-gray-600">{place.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full">No places found</p>
                )}
            </div>
        </div>
    );
};

export default Places;
