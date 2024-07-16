import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
        setCity('');
    };

    return (
        <div className="flex justify-center items-center p-4 w-full max-w-md mx-auto">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
                className="p-3 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
            />
            <button 
                onClick={handleSearch} 
                className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
