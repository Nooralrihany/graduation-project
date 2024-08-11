import React, { useState } from 'react';

const placesData = [
    { id: 1, name: 'Mansour', description: 'Alamyerat', imageUrl: 'https://example.com/paris.jpg' },
    { id: 2, name: 'Aladhamyia', description: 'Althobat', imageUrl: 'https://example.com/newyork.jpg' },
    { id: 3, name: 'Aldorah', description: 'abo tayara', imageUrl: 'https://example.com/tokyo.jpg' },
];

const Places = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
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
                        <div key={place.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
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