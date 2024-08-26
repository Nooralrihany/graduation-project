import React, { useState } from 'react';

// Define the coordinates for Aladhamyia and the Start Point
const Aladhamyia1 = [33.3695687449225, 44.36174133497602];
const StartPoint = [33.30123868162587, 44.4371813193429];

// Extend the placesData to include coordinates
const placesData = [
    { id: 1, name: 'المنصور', description: 'شارع الأميرات', imageUrl: 'src/assets/park1.png' , coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}} ,
    { id: 2, name: 'الأعظمية', description: 'شارع الضباط', imageUrl: 'src/assets/park2.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}} ,
    { id: 3, name: 'الدورة', description: 'ابو طيارة', imageUrl: 'src/assets/park3.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
    { id: 3, name: 'حي العامل', description: 'شارع 30', imageUrl: 'src/assets/park4.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
    { id: 3, name: 'الكرادة', description: 'شارع 62', imageUrl: 'src/assets/park5.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
    { id: 3, name: 'اليرموك', description: 'الأربع شوارع', imageUrl: 'src/assets/park6.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
    { id: 3, name: 'زيونة', description: 'الربيعي', imageUrl: 'src/assets/park7.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
    { id: 3, name: 'الجادرية', description: 'ابو نؤاس', imageUrl: 'src/assets/park8.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
    { id: 3, name: 'المنصور', description: 'سيد الحليب', imageUrl: 'src/assets/park9.png', coordinates: {startPoint:[33.30123868162587, 44.4371813193429],endPoint:[33.3695687449225, 44.36174133497602]}},
];

const Places = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handlePlaceClick = (place) => {
        if (place.coordinates) {
            // Construct a Google Maps URL with both the start point and the place coordinates
            const url = `https://www.google.com/maps/dir/?api=1&origin=${place.coordinates.startPoint[0]},${place.coordinates.startPoint[1]}&destination=${place.coordinates.endPoint[0]},${place.coordinates.endPoint[1]}&travelmode=driving`;
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
